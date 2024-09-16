import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContanier = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams()

    useEffect (() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;
        

        funcionProductos(idCategoria)
        .then(res => setProductos(res))

    },[idCategoria])


    return (
        <> 
        <ItemList productos = {productos} />
        </>
    )
}

export default ItemListContanier 