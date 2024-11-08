import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import "../Item/Item.css"

const Item = ({ id, nombre, precio, img, stock, colores = [] }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [showModal, setShowModal] = useState(false);
    const [colorSeleccionado, setColorSeleccionado] = useState('');

    const handleAgregarClick = () => {
        if (colores.length > 0) {
            setShowModal(true);
        } else {
            agregarAlCarrito({ id, nombre, precio, img, color: null }, 1);
        }
    };

    const confirmarColorYAgregarAlCarrito = () => {
        if (colorSeleccionado) {
            const item = { id, nombre, precio, img, color: colorSeleccionado };
            agregarAlCarrito(item, 1);
            setShowModal(false);
            setColorSeleccionado('');
        } else {
            alert('Por favor, selecciona un color antes de agregar al carrito.');
        }
    };

    return (
        <div className="cardProducto my-4 d-flex justify-content-center position-relative">
            <div 
                className="card container-fluid text-center col-12 col-md-4 rounded-4 shadow-sm position-relative" 
                style={{ width: '18rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <img 
                    src={img} 
                    alt={nombre} 
                    className="card-img-top rounded-4 mt-3" 
                    style={{ height: '200px', objectFit: 'cover', transition: 'filter 0.3s ease' }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold" style={{ fontSize: '1.25rem' }}>{nombre}</h5>
                    <p className="text-muted">Precio: ${precio}</p>
                    {stock > 0 ? (
                        <button 
                            className="btn btn-outline-dark rounded-pill m-2 px-4"
                            onClick={handleAgregarClick}
                            style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                            onMouseEnter={e => {
                                e.target.style.backgroundColor = 'black';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={e => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'black';
                            }}
                        >
                            Agregar al carrito
                        </button>
                    ) : (
                        <p className="text-danger fw-bold">¡Sin stock disponible!</p>
                    )}
                    <Link 
                        className="btn btn-dark rounded-pill px-4" 
                        to={`/item/${id}`}
                        style={{ transition: 'background-color 0.3s ease' }}
                        onMouseEnter={e => e.target.style.backgroundColor = '#333'}
                        onMouseLeave={e => e.target.style.backgroundColor = 'black'}
                    >
                        Ver Detalles
                    </Link>
                </div>

                {showModal && (
                    <div className="modal-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <div className="modal-content-translucent">
                            <h5>Selecciona el color</h5>
                            <select
                                value={colorSeleccionado}
                                onChange={(e) => setColorSeleccionado(e.target.value)}
                                className="form-select"
                            >
                                <option value="">Elige un color</option>
                                {colores.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={confirmarColorYAgregarAlCarrito}
                            >
                                Confirmar y agregar al carrito
                            </button>
                            <button
                                className="btn btn-secondary mt-3"
                                onClick={() => setShowModal(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Item;
