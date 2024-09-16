const misProductos = [
    { id: "1", nombre: "maceta1", precio: 15000, img: "https://i.pinimg.com/564x/a7/b7/c6/a7b7c61bfe5c91df942f5a7041a54581.jpg", idCat: "macetas" },
    { id: "2", nombre: "maceta2", precio: 20000, img: "https://i.pinimg.com/564x/88/89/68/888968355d4edb57fcd3815e21fb3b5e.jpg", idCat: "macetas" },
    { id: "3", nombre: "lampara1", precio: 25000, img: "https://i.pinimg.com/564x/3d/62/9d/3d629dafa4c379e9e28350925dacc8ce.jpg", idCat: "lamparas" },
    { id: "4", nombre: "lampara2", precio: 30000, img: "https://i.pinimg.com/564x/e2/9e/2f/e29e2fa85b63a052cd12492eb104a762.jpg", idCat: "lamparas" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve =>
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 1000)
    )
}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}