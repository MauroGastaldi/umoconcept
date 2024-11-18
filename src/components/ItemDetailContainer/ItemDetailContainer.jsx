import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)

  const { idItem } = useParams()

  useEffect(() => {
    console.log("idItem recibido:", idItem);
    const nuevoDoc = doc(db, "productos", idItem);

  getDoc(nuevoDoc)
    .then((res) => {
      if (res.exists()) {
        const data = res.data();
        const nuevosProducto = { id: res.id, ...data };
        setProducto(nuevosProducto);
      } else {
        console.error(`El producto con ID ${idItem} no existe en la base de datos.`);
      }
    })
    .catch((error) => {
      console.error("Error al obtener el documento:", error);
    });
}, [idItem]);
  return (
    <div>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando detalles del producto...</p>}
    </div>
  );
}

export default ItemDetailContainer