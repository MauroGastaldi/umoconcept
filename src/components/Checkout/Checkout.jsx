import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [direccion, setDireccion] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion || !direccion) {
            setError("Por favor, complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
            direccion,
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
                        vaciarCarrito();
                        setNombre("");
                        setApellido("");
                        setTelefono("");
                        setEmail("");
                        setEmailConfirmacion("");
                        setDireccion("");
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
        <div>
            <form className="w-100 mx-auto my-5 d-flex flex-wrap" onSubmit={manejadorFormulario}>
                <div className="col-12 col-lg-6 px-3">
                    <h4 className="text-center my-4">Por favor, complete los campos</h4>
                    <div className="card p-4 shadow-sm rounded-4">

                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control rounded"
                                id="inputName"
                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre}
                                placeholder="Ingrese su nombre"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputLastname" className="form-label">Apellido</label>
                            <input
                                type="text"
                                className="form-control rounded"
                                id="inputLastname"
                                onChange={(e) => setApellido(e.target.value)}
                                value={apellido}
                                placeholder="Ingrese su apellido"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control rounded"
                                id="inputEmail4"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Ingrese su email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputEmailConf" className="form-label">Confirmar email</label>
                            <input
                                type="email"
                                className="form-control rounded"
                                id="inputEmailConf"
                                onChange={(e) => setEmailConfirmacion(e.target.value)}
                                value={emailConfirmacion}
                                placeholder="Confirme su email"
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

                        <div className="mb-3">
                            <label htmlFor="inputDirec" className="form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control rounded"
                                id="inputDirec"
                                onChange={(e) => setDireccion(e.target.value)}
                                value={direccion}
                                placeholder="Ingrese su dirección"
                            />
                        </div>

                    </div>
                    {error && <p style={{ color: "red" }}> {error}</p>}
                </div>

                <div className="col-12 col-lg-6 px-3">
                    <div className="card shadow-sm p-4 bg-white rounded-4">
                        {carrito.map((producto) => (
                            <div key={producto.item.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.item.nombre}</h5>
                                    <p className="text-muted">{producto.item.precio} x {producto.cantidad}</p>
                                    <p className="fw-bold">Subtotal: ${producto.item.precio * producto.cantidad}</p>
                                </div>
                            </div>
                        ))}
                        <div className="alert alert-success text-center">
                            <h4>Total a pagar: ${total}</h4>
                        </div>
                        <button type="submit" className="btn btn-outline-success rounded-pill my-3 w-100">Confirmar Compra</button>
                        {ordenId && (
                            <div className="alert alert-success text-center mt-4">
                                <strong>¡Gracias por tu compra!</strong>
                                <p>Tu número de orden es: </p>
                                <p>{ordenId}</p>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
