
import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

    const manejadorFormulario = (e) => {
        e.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, complete todos los campos")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };
       
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stoc
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id)
                        vaciarCarrito();
                        setNombre("")
                        setApellido("")
                        setTelefono("")
                        setEmail("")
                        setEmailConfirmacion("")
                    })
                    .catch(error => {
                        setError("Se producjo un error al crear la orden!")
                    })
            })
            .catch((error) => {
                setError("No se puede actualziar el stock")
            })
    }

    return (
        <div>


            <form className="w-50 mx-auto my-5" onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre}</p>
                            <p>{producto.item.precio} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <h4 className="rounded-pill my-3">Por favor, complete los campos</h4>
                <div>

                    <input className="rounded-pill my-1" type="text" placeholder="  Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div>

                    <input className="rounded-pill my-1" type="text" placeholder="  Apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div>

                    <input className="rounded-pill my-1" type="text" placeholder="  Teléfono" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div>

                    <input className="rounded-pill my-1" type="email" placeholder="  Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>

                    <input className="rounded-pill my-1" type="email" placeholder="  Confirmar Email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                </div>
                {
                    error && <p style={{ color: "red" }}> {error}</p>
                }

                <button type="submit" className="btn btn-outline-primary btn-md rounded-pill my-3"> Confirmar Compra </button>
                <div>
                    {
                        ordenId && (
                            <strong>¡Gracias por tu compra! Tu numero de orden es: {ordenId}</strong>
                        )
                    }
                </div>
            </form>
        </div>

    )
}

export default Checkout

