import React from 'react'

const ItemDetail = ({ id, nombre, precio, img }) => {

  return (
    <div className='contenedorItem row m-5 justify-content-center'>
      <div className="col-6">
        <img className="rounded-5" src={img} alt={nombre} />

      </div>
      <div className="col-4">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>

      </div>

    </div>








  )
}

export default ItemDetail