import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext)

  return (
    <tr className='d-flex d-flex justify-content-between'>
      <td> <img src={item.img} alt={item.nombre} style={{ width: 'autp', height: '100px' }} /> </td>
      <td> <h5>{item.nombre}</h5>  </td>
      <td> <p>Cantidad: {cantidad}</p></td>
      <td> <p>Precio:{item.precio}</p> </td>
      <td> <button className='btn btn-outline-danger btn-md rounded-pill' onClick={() => eliminarProducto(item.id)}>Eliminar</button> </td>
    </tr>

  )
}

export default CartItem