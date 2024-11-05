import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="d-flex flex-column align-items-center text-center my-5">
                <div className="w-75 alert alert-secondary border border-2 p-4">
                    <img 
                        src="https://img.freepik.com/vector-premium/2-bolsa-compras-vectorial-ilustracion-vectorial_921039-1623.jpg" 
                        alt="Carrito vacío" 
                        className="img-fluid w-50 mb-3" 
                    />
                    <h3>¡Tu carrito está vacío!</h3>
                </div>
                <Link className="btn btn-outline-dark rounded-pill px-5 py-2" to="/">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-4">
           
                <table className="table mx-auto">
                    <tbody>
                        <tr>
                            <td className="text-end" colSpan="4">
                                <button 
                                    className="btn btn-outline-danger btn-md rounded-pill px-4 py-2 mb-4"
                                    onClick={vaciarCarrito}
                                >
                                    Vaciar Carrito <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>

                        {/* Renderizado de items del carrito */}
                        {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}

                        <tr>
                            <td className="text-end" colSpan="6">
                                <h6><strong>Cantidad Total:</strong> {cantidadTotal}</h6>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end" colSpan="6">
                                <h6><strong>Total:</strong> ${total}</h6>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end">
                                <Link className="btn btn-outline-dark btn-md rounded-pill px-5 py-2" to="/checkout">
                                    Finalizar Compra
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
             
        </div>
    );
};

export default Cart;
