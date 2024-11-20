import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)

  const { idItem } = useParams()



  useEffect(() => {
    if (id) {
        console.log("Buscando producto por ID:", id);
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef)
            .then(res => {
                if (res.exists()) {
                    console.log("Producto encontrado:", res.data());
                    setProducto({ id: res.id, ...res.data() });
                } else {
                    console.error("Producto no encontrado.");
                }
            })
            .catch(error => console.error("Error al obtener el producto:", error));
    }
}, [id]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer