import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Item = ({ id, nombre, precio, img, stock, ancho, alto }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);

    const sumarAlCarrito = () => {
        if (stock > 0) {
            const item = { id, nombre, precio, img };
            agregarAlCarrito(item, 1);
        }
    };

    return (
        <div className="cardProducto my-4 d-flex justify-content-center">
            <div 
                className="card container-fluid text-center col-12 col-md-4 rounded-4 shadow-sm" 
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
                    {stock > 0 ? 
                    (
                        <button 
                            className="btn btn-outline-dark rounded-pill m-2 px-4"
                            onClick={sumarAlCarrito}
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
                    ) : 
                    (
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
            </div>
        </div>
    );
};

export default Item;
