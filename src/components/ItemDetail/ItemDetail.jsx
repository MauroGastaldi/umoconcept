import React, { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ItemDetail = ({
  id = "sin-id",
  nombre = "Producto sin nombre",
  precio = 0,
  ancho = 0,
  alto = 0,
  img = "",
  stock = 0,
  imagenesSecundarias = [],
  colores = [],
  foco = false,
  incandescente = false,
  sol = false,
  sustentable = false,
  tamanio = "No especificado"
}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [colorSeleccionado, setColorSeleccionado] = useState(colores[0] || "blanco"); // Color por defecto
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (!id || id === "sin-id") {
    console.error("Error: El ID del producto es inválido o está ausente.");
    return <p>Cargando producto...</p>;
  }

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {
      id,
      nombre,
      precio,
      img,
      ancho,
      alto,
      color: colorSeleccionado,
      foco,
      incandescente,
      sol,
      sustentable,
      tamanio
    };
    agregarAlCarrito(item, cantidad);
    toast.success("Producto agregado al carrito", { autoClose: 2000, theme: "dark", position: "top-right" });
  };

  return (
    <div className="contenedor-item row m-3 justify-content-center">
      {/* Carrusel de imágenes */}
      <div className="col-12 col-lg-6 mb-4">
        <div id={`carousel-${id}`} className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img} className="d-block w-100 rounded-5" alt={nombre} />
            </div>
            {imagenesSecundarias.map((imagen, index) => (
              <div className="carousel-item" key={index}>
                <img src={imagen} className="d-block w-100 rounded-5" alt={`Imagen secundaria ${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* Detalles del producto */}
      <div className="col-12 col-lg-5 text-center">
        <h2 className="fw-bold">{nombre}</h2>
        <h3>Tamaño: {tamanio}</h3>
        <h4 className="text-muted mb-3">Precio: ${precio}</h4>
        <div className="d-flex justify-content-center text-secondary mb-3">
          <p className="mx-3">Ancho: {ancho} cm</p>
          <p className="mx-3">Alto: {alto} cm</p>
        </div>

        {/* Selector de color */}
        {colores.length > 0 && (
          <div className="d-flex mb-4">
            <label htmlFor="colorSelect" className="form-label">Seleccionar color:</label>
            <select
              id="colorSelect"
              className="form-select"
              value={colorSeleccionado}
              onChange={(e) => setColorSeleccionado(e.target.value)}
            >
              {colores.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select>
          </div>
        )}

        {/* Contador y carrito */}
        <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        <Link className="btn btn-outline-dark my-3 rounded-pill" to="/">Volver a la tienda</Link>
        <p><i className="bi bi-recycle"></i> Material 100% sustentable de origen vegetal</p>

        {/* Detalles adicionales */}
        <table className="table table-borderless mt-4">
          <tbody>
            {sol && (
              <tr>
                <td className="text-center"><i className="bi bi-brightness-high"></i> {sol}</td>
              </tr>
            )}
            {foco && (
              <tr>
                <td className="text-center"><i className="bi bi-lightbulb"></i> {foco}</td>
              </tr>
            )}
            {incandescente && (
              <tr>
                <td className="text-center" colSpan="2"><i className="bi bi-plug"></i> {incandescente}</td>
              </tr>
            )}
          </tbody>
        </table>

        <p className="text-muted mt-4">
          Nuestros productos impresos en 3D están fabricados con PLA, un material biodegradable de origen vegetal que combina diseño moderno con un compromiso hacia el medioambiente.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
