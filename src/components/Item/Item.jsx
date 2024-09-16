
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      
      <div className="card container-fluid text-center col-4 rounded-4" style={{ width: '18rem' }}>
        <img src={img} alt={nombre} />

        
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p>Precio: ${precio} </p>
          <Link className='btn btn-dark rounded-pill' to={`/item/${id}`}>Ver Detalles</Link>
        </div>
      </div>
    </div >
      )
}

export default Item