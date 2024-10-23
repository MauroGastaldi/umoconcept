import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="row align-items-center my-3 border-bottom pb-3">
      {/* Imagen del producto, más grande en dispositivos móviles */}
      <div className="col-12 col-md-2 mb-2 text-center">
        <img 
          src={item.img} 
          alt={item.nombre} 
          className="img-fluid rounded shadow-sm" 
          style={{ width: '100%', maxHeight: '120px', objectFit: 'cover' }} 
        />
      </div>

      {/* Información del producto (Nombre, Cantidad, Precio) */}
      <div className="col-12 col-md-6 text-center text-md-start">
        <h5 className="mb-2">{item.nombre}</h5>
        <div className="d-flex justify-content-center justify-content-md-between flex-column flex-md-row">
          <p className="mb-1"><strong>Cantidad:</strong> {cantidad}</p>
          <p className="mb-1"><strong>Precio:</strong> ${item.precio}</p>
        </div>
      </div>

      {/* Botón para eliminar */}
      <div className="col-12 col-md-4 text-center text-md-end">
        <button 
          className="btn btn-outline-danger btn-md rounded-pill px-4 py-2 mt-2 mt-md-0"
          onClick={() => eliminarProducto(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
