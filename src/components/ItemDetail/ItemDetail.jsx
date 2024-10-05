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
    toast.success("Producto agregado al carrito",{autoClose:2000, theme: "dark", position: "top-right"})
  
  }
  return (
    <div className='contenedorItem row m-5 justify-content-center'>
      <div className="col-6">
        <img className="rounded-5" src={img} alt={nombre} />
      </div>
      <div className="col-4 d-flex flex-column align-items-center">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
        { 
          agregarCantidad > 0 ? (<Link className="btn btn-dark rounded-pill" to="/cart"> ir al carrito</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>
    </div>
  )
}




export default ItemDetail