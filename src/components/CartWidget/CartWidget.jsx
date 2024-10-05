import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <>
      <Link to="/cart">
        <i className='bi bi-cart3 h3 mx-4'></i>
      </Link>
      {
        cantidadTotal > 0 && <span className='me-5'>{cantidadTotal}</span>
      }
    </>
  )
}

export default CartWidget