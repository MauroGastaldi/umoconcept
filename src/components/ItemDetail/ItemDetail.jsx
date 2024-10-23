import React, { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, precio, ancho, alto, img, stock, imagenesSecundarias = [] }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img, ancho, alto };
    agregarAlCarrito(item, cantidad);
    toast.success("Producto agregado al carrito", { autoClose: 2000, theme: "dark", position: "top-right" });
  };

  return (
    <div className='contenedorItem row m-5 justify-content-center'>

      {/* Carrusel de imágenes */}
      <div className="col-12 col-lg-6 px-3">
        <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="false"> {/* Quitar deslizamiento automático */}
          <div className="carousel-inner">
            {/* Imagen principal */}
            <div className="carousel-item active">
              <img src={img} className="d-block w-100 rounded-5" alt={nombre} />
            </div>
            {/* Imágenes secundarias */}
            {imagenesSecundarias.map((imagen, index) => (
              <div className="carousel-item" key={index}>
                <img src={imagen} className="d-block w-100 rounded-5" alt={`Imagen secundaria ${index}`} />
              </div>
            ))}
          </div>
          {/* Controles de navegación del carrusel */}
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span> {/* Ícono con fondo oscuro */}
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span> {/* Ícono con fondo oscuro */}
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* Detalles del producto */}
      <div className="col-12 col-lg-4 px-3 d-flex flex-column align-items-center my-3">
        <h2 className="mb-3" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>Nombre: {nombre} </h2>
        <h4 className="text-muted">Precio: ${precio} </h4>
        <h6>Stock: {stock}</h6>
        <p className="text-center" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Nuestros productos impresos en 3D están fabricados con PLA, un material biodegradable de origen vegetal que combina diseño moderno con un compromiso hacia el medioambiente. Creados para aportar estilo y calidez a tus espacios, cada pieza es única y pensada para integrarse de manera sostenible en tu hogar u oficina.</p>
        <div className='row'>
          <p className="text-center col-6" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Ancho de boca: {ancho} </p>
          <p className="text-center col-6" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Alto: {alto} </p>
        </div>
        {
          agregarCantidad > 0 ? (
            <Link className="btn btn-dark rounded-pill" to="/cart">Ir al carrito</Link>
          ) : (
            <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }

        <Link className="d-flex justify-content-center my-3 btn btn-outline-dark rounded-pill" to="/">Volver a la tienda</Link>
      </div>

    </div>
  );
};

export default ItemDetail;
