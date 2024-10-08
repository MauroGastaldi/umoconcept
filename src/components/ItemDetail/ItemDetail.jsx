import React from 'react'
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarAlCarrito } = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img }
    agregarAlCarrito(item, cantidad)
    toast.success("Producto agregado al carrito", { autoClose: 2000, theme: "dark", position: "top-right" })

  }
  return (
    <div className='contenedorItem row m-5 justify-content-center'>
      <div className="col-6">
        <img className="rounded-5" src={img} alt={nombre} />
      </div>
      <div className="col-4 d-flex flex-column align-items-center">
        <h2>Nombre: {nombre} </h2>
        <h4>Precio: ${precio} </h4>
        <h6>Stock:{stock}</h6>
        <p>Nuestros productos impresos en 3D están fabricados con PLA, un material biodegradable de origen vegetal que combina diseño moderno con un compromiso hacia el medioambiente. Creados para aportar estilo y calidez a tus espacios, cada pieza es única y pensada para integrarse de manera sostenible en tu hogar u oficina.</p>
        {
          agregarCantidad > 0 ? (<Link className="btn btn-dark rounded-pill" to="/cart"> Ir al carrito</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
        <Link className="d-flex justify-content-center  my-3 btn btn-outline-dark rounded-pill" to="/" >Volver a la tienda</Link>
      </div>
   
    </div>
  )
}




export default ItemDetail