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
  // {
  //   stock: 10, nombre: "Volta - ", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "lamparas", img: "/public/img/MyPeque3.jpg",
  //   imagenesSecundarias: ["/public/img/MyPeque33.jpg", "/public/img/MyPeque333.jpg"]
  // },

  // {
  //   stock: 10, nombre: "Volta", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "lamparas", img: "/public/img/myLamp3.jpg",
  //   imagenesSecundarias: ["/public/img/MyLamp1.jpg",]
  // },
  // {
  //   stock: 10, nombre: "Umbra - negra", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "lamparas", img: "/public/img/lamparaA.jpg",
  //   imagenesSecundarias: ["/public/img/lamparaAA1.jpg","/public/img/lamparaAA.jpg","/public/img/lamparaAAA.jpg"]
  // },
  // {
  //   stock: 10, nombre: "Umbra - blanca", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "lamparas", img: "/public/img/Lampara3.jpg",
  //   imagenesSecundarias: ["/public/img/Lampara2.jpg", "/public/img/lamparaAAA.jpg"]
  // },
  // {
  //   stock: 10, nombre: "Umbra - mixta", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "lamparas", img: "/public/img/lamparaB.jpg",
  //   imagenesSecundarias: [ ]
  // },
  // {
  //   stock: 10, nombre: "Halo - tamaño m", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaVertical.jpg",
  //   imagenesSecundarias: ["/public/img/MacetaVertical4.jpg", "/public/img/MacetaVertical5.jpg", "/public/img/MacetaVertical3.jpg"]
  // },
  // {
  //   stock: 10, nombre: "Halo - Tamaño l", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaVertical6.jpg",
  //   imagenesSecundarias: ["/public/img/MacetaVertical1.jpg", "/public/img/MacetaVertical2.jpg", "/public/img/MacetaVertical7.jpg"]
  // },
  // {
  //   stock: 10, nombre: "Ébano - Tamaño m", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaCruzada.jpg",
  //   imagenesSecundarias: ["/public/img/MacetaCruzada1.jpg","/public/img/MacetaCruzada2.jpg","/public/img/MacetaCruzada3.jpg"]
  // },
  // {
  //   stock: 10, nombre: "Ondina", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/Maceta2partes.jpg",
  //   imagenesSecundarias: ["/public/img/Maceta2partes2.jpg","/public/img/Maceta2partes1.jpg","/public/img/Maceta2partes3.jpg" ]
  // },
  // {
  //   stock: 10, nombre: "Obsidiana", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaLinda.jpg",
  //   imagenesSecundarias: ["/public/img/MacetaLinda1.jpg","/public/img/MacetaLinda2.jpg" ]
  // },

  // {
  //   stock: 10, nombre: "Geo - Tamaño m", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaRombo.jpg",
  //   imagenesSecundarias: ["/public/img/MacetaRombo1.jpg","/public/img/MacetaRombo3.jpg" ]
  // },
  {
    stock: 10, nombre: "Geo - Tamaño l", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaRombo2.jpg",
    imagenesSecundarias: ["/public/img/MacetaRombo3.jpg"  ]
  },
  {
    stock: 10, nombre: "Zenith", precio: 15000, alto: "12cm", ancho: "8cm", idCat: "macetas", img: "/public/img/MacetaMadera.jpg",
    imagenesSecundarias: ["/public/img/MacetaMadera3.jpg","/public/img/MacetaMadera1.jpg", "/public/img/MacetaMadera2.jpg" ]
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