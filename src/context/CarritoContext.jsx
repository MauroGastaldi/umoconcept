import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        // Buscar si el producto ya existe en el carrito considerando tanto el ID como el color
        const productoExistente = carrito.find(
            (prod) => prod.item.id === item.id && prod.item.color === item.color
        );

        if (!productoExistente) {
            // Si el producto no existe, lo agregamos como uno nuevo en el carrito
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            // Si ya existe, solo incrementamos la cantidad
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id && prod.item.color === item.color) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    };

    const eliminarProducto = (id, color) => {
        // Buscar el producto considerando tanto el ID como el color
        const productoEliminado = carrito.find(
            prod => prod.item.id === id && prod.item.color === color
        );
        const carritoActualizado = carrito.filter(
            prod => !(prod.item.id === id && prod.item.color === color)
        );

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    };

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
