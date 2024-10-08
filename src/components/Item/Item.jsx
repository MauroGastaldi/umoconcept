
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Item = ({ id, nombre, precio, img, stock }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const sumarAlCarrito = () => {
    if (stock > 0) { 
      const item = { id, nombre, precio, img };
      agregarAlCarrito(item, 1);
    } 
  };

  return (
    <div className='cardProducto'>
      <div className="card container-fluid text-center col-4 rounded-4 my-2" style={{ width: '18rem' }}>
        <img src={img} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p>Precio: ${precio} </p>
          {stock > 0 ? (<button  className="btn btn-outline-dark rounded-pill m-2" onClick={sumarAlCarrito}> Agregar al carrito</button>) : (<p className="text-danger">¡Sin stock disponible!</p>)}
          <Link className='btn btn-dark rounded-pill' to={`/item/${id}`}>Ver Detalles</Link>
         </div>
      </div>
    </div >
  )
}

export default Item