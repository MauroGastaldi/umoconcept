import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    console.log("ID recibido:", id); // Verifica que el ID se recibe correctamente

    const fetchProducto = async () => {
      try {
        const productoDoc = await getDoc(doc(db, "productos", id));
        if (productoDoc.exists()) {
          setProducto({ id: productoDoc.id, ...productoDoc.data() });
        } else {
          console.error("No se encontró el producto con el ID:", id);
        }
      } catch (error) {
        console.error("Error obteniendo el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <Loader />;

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div>
        {/* <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p> */}
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer