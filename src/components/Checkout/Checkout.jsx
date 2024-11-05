import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [direccion, setDireccion] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [aprovincia, setaProvincia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !direccion || !departamento || !telefono || !ciudad || !aprovincia || !codigoPostal) {
            setError("Por favor, complete todos los campos");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
                color: producto.item.color,
            })),
            atotal: total,
            fecha: new Date(),
            nombre,
            direccion,
            departamento,
            telefono,
            ciudad,
            aprovincia,
            codigoPostal,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito("");
                        setNombre("");
                        setDireccion("");
                        setDepartamento("");
                        setTelefono("");
                        setCiudad("");
                        setaProvincia("");
                        setCodigoPostal("");
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden!");
                    });
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se pudo actualizar el stock");
            });
    };

    return (
        <div className="container mt-4">
            <h5 className="mx-5  mb-4">Por favor, complete los campos</h5>
            <form className="row g-4" onSubmit={manejadorFormulario}>

                {/* Columna de formulario */}
                <div className="col-12 col-lg-6">
                    <div className="card p-4 shadow-sm rounded-4">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre y Apellido</label>
                            <input
                                type="text"
                                className="form-control rounded"
                                id="inputName"
                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre}
                                placeholder="Ingrese su nombre y apellido"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputTel" className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control rounded"
                                id="inputTel"
                                onChange={(e) => setTelefono(e.target.value)}
                                value={telefono}
                                placeholder="Ingrese su teléfono"
                            />
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="inputDirec" className="form-label">Dirección</label>
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    id="inputDirec"
                                    onChange={(e) => setDireccion(e.target.value)}
                                    value={direccion}
                                    placeholder="Calle - N°"
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputDepartamento" className="form-label">Departamento</label>
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    id="inputDepartamento"
                                    onChange={(e) => setDepartamento(e.target.value)}
                                    value={departamento}
                                    placeholder="Ej: 1 - C"
                                />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-4">
                                <label htmlFor="inputCiudad" className="form-label">Ciudad</label>
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    id="inputCiudad"
                                    onChange={(e) => setCiudad(e.target.value)}
                                    value={ciudad}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputProvincia" className="form-label">Provincia</label>
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    id="inputProvincia"
                                    onChange={(e) => setaProvincia(e.target.value)}
                                    value={aprovincia}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="inputCodigoPostal" className="form-label">Código Postal</label>
                                <input
                                    type="text"
                                    className="form-control rounded"
                                    id="inputCodigoPostal"
                                    onChange={(e) => setCodigoPostal(e.target.value)}
                                    value={codigoPostal}
                                />
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-danger mt-2"> {error}</p>}
                </div>

                {/* Columna de resumen del carrito */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm p-4 bg-white rounded-4">
                        {carrito.map((producto) => (
                            <div key={producto.item.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.item.nombre}</h5>
                                    <p className="text-muted">
                                        {producto.item.precio} x {producto.cantidad}
                                    </p>
                                    <p className="fw-bold">Subtotal: ${producto.item.precio * producto.cantidad}</p>
                                </div>
                            </div>
                        ))}
                       
                        
                        <div className="alert alert-success text-center">
                            <h4>Total a pagar: ${total}</h4>
                            <p>(no incluye envíos)</p>
                        </div>

                        <button type="submit" className="btn btn-outline-dark rounded-pill my-3 w-100">
                            Confirmar Compra
                        </button>
                        {ordenId && (
                            <div className="alert alert-success text-center mt-4">
                                <strong>¡Gracias por tu compra!</strong>
                                <p>Tu número de orden es:</p>
                                <p>{ordenId}</p>
                                <p>Por favor, envíanos tu número de pedido por WhatsApp (haz clic en el botón) para coordinar el pago y brindarte nuestro alias de cuenta.</p>

                                {/* Botón de WhatsApp */}
                                <a
                                    href={`https://wa.me/3435024502?text=Hola, mi número de pedido es: ${ordenId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success mt-3"
                                >
                                    Enviar pedido por WhatsApp
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
