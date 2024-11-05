import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//initializeApp es para iniciar la conexion con firebase
//getFirestore se usa para obtener una instanacia de firebase

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJEC_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

/////////////////////////////

//AGREGAR EL TEMA DEL FOCO INCANDESCENTE EN LAMPARAS

const misProductos = [
  {
    stock: 10, nombre: "Volta - ", precio: 21500, alto: "17cm", ancho: "12cm", idCat: "lamparas", img: "/img/MyPeque3.jpg",
    imagenesSecundarias: ["/img/MyPeque33.jpg", "/img/MyPeque333.jpg", "/img/MyPeque3333.jpg"], foco: "No incluye foco."
  },

  {
    stock: 10, nombre: "Volta", precio: 25500, alto: "18cm", ancho: "13.5cm", idCat: "lamparas", img: "/img/myLamp3.jpg",
    imagenesSecundarias: ["/img/MyLamp1.jpg","/img/mylampB.jpg"], foco: "No incluye foco."
  },
  {
    stock: 10, nombre: "Umbra - negra", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/lamparaA.jpg",
    imagenesSecundarias: ["/img/lamparaAA1.jpg","/img/lamparaAA.jpg","/img/lamparaAAA.jpg","/img/,imglamparaAAA.jpg"], foco: "No incluye foco."
  },
  {
    stock: 10, nombre: "Umbra - blanca", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/Lampara3.jpg",
    imagenesSecundarias: ["/img/Lampara2.jpg", "/img/lamparaAAA.jpg", "/img/Lampara333.jpg"], foco: "No incluye foco."
  },
  {
    stock: 10, nombre: "Umbra - mixta", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/lamparaB.jpg",
    imagenesSecundarias: [ ], foco: "No incluye foco."
  },




  {
    stock: 10, nombre: "Halo negra- tamaño M", precio: 15000, alto: "13cm", ancho: "11.5cm", idCat: "macetas", img: "/img/MacetaVertical4.jpg",
    imagenesSecundarias: [" /img/MacetaVertical2.jpg", "/img/MacetaVertical5.jpg"],
    // colores: ["Blanco", "Negro"] 
  },
  {
    stock: 10, nombre: "Halo blanca- tamaño M", precio: 15000, alto: "13cm", ancho: "15cm", idCat: "macetas", img: "/img/MacetaVertical.jpg",
    imagenesSecundarias: ["/img/MacetaVertical3.jpg", "/img/MacetaVertical7.jpg" ]
  },
  {
    stock: 10, nombre: "Halo negra- Tamaño L", precio: 15000, alto: "13cm", ancho: "15cm", idCat: "macetas", img: "/img/MacetaVertical6.jpg",
    imagenesSecundarias: ["/img/MacetaVertical1.jpg", "/img/H.jpg" ]
  },
  {
    stock: 10, nombre: "Halo blanca- Tamaño L", precio: 15000, alto: "19", ancho: "17cm", idCat: "macetas", img: "/img/MacetaVertical13.jpg",
    imagenesSecundarias: ["/img/MacetaVertical113.jpg", "/img/MacetaVertical3.jpg" ]
  },
  {
    stock: 10, nombre: "Halo negra- Tamaño XL", precio: 15000, alto: "19", ancho: "17cm", idCat: "macetas", img: "/img/MacetaVertical6.jpg",
    imagenesSecundarias: ["/img/MacetaVertical1.jpg", "/img/H.jpg" ]
  },
  {
    stock: 10, nombre: "Halo blanca- Tamaño XL", precio: 18000, alto: "19", ancho: "17cm", idCat: "macetas", img: "/img/MacetaVertical13.jpg",
    imagenesSecundarias: ["/img/MacetaVertical113.jpg", "/img/MacetaVertical3.jpg" ]
  },
  {
    stock: 10, nombre: "Ébano - Tamaño M", precio: 15000, alto: "12cm", ancho: "13cm", idCat: "macetas", img: "/img/MacetaCruzada.jpg",
    imagenesSecundarias: ["/img/MacetaCruzada1.jpg","/img/MacetaCruzada2.jpg","/img/MacetaCruzada3.jpg"]
  },
  {
    stock: 10, nombre: "Ondina blanca - Tamaño M", precio: 9000, alto: "13cm", ancho: "12.5cm", idCat: "macetas", img: "/img/Maceta2partes.jpg",
    imagenesSecundarias: ["/img/Maceta2partes2.jpg","/img/Maceta2partes1.jpg","/img/Maceta2partes3.jpg" ]
  },
  {
    stock: 10, nombre: "Ondina blanca - Tamalo L", precio: 15000, alto: "17cm", ancho: "14cm", idCat: "macetas", img: "/img/Maceta111aplanta.jpg",
    imagenesSecundarias: ["/img/Maceta11aplanta.jpg" ]
  },

  {
    stock: 10, nombre: "Obsidia", precio: 15000, alto: "15cm", ancho: "14.5cm", idCat: "macetas", img: "/img/MacetaLinda.jpg",
    imagenesSecundarias: ["/img/MacetaLinda1.jpg","/img/MacetaLinda2.jpg" ]
  },

  {
    stock: 10, nombre: "Geo - Tamaño M", precio: 15000, alto: "13cm", ancho: "12.5cm", idCat: "macetas", img: "/img/MacetaRombo.jpg",
    imagenesSecundarias: ["/img/MacetaRombo1.jpg","/img/MacetaRombo3.jpg" ]
  },
  {
    stock: 10, nombre: "Geo - Tamaño L", precio: 15000, alto: "14cm", ancho: "16cm", idCat: "macetas", img: "/img/MacetaRombo2.jpg",
    imagenesSecundarias: ["/img/MacetaRombo3.jpg"  ]
  },
  {
    stock: 10, nombre: "Zenith", precio: 15000, alto: "23cm", ancho: "13.5cm", idCat: "macetas", img: "/img/MacetaMadera.jpg",
    imagenesSecundarias: ["/img/MacetaMadera3.jpg","/img/MacetaMadera1.jpg", "/img/MacetaMadera2.jpg" ]
  },


   
]


import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db)
  const productosRef = collection(db, "productos")

  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef) //crea nuevo documento con ID automatico
    batch.set(nuevoDoc, producto) //agrega la operacion de escritura al batch
  })
  try {
    await batch.commit();
    console.log("producto subido correctamente");
  } catch (error) {
    console.log("error al subir el producto", error);

  }
}

//una vez que subo los productos, comento la funcion para que no vuelvan a subirse

   //subirProductos()