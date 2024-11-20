import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//initializeApp es para iniciar la conexion con firebase
//getFirestore se usa para obtener una instanacia de firebase

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  //Agregué la t en project
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
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
    stock: 10, nombre: "Tao " , tamanio: "M", precio: 21500, alto: "17cm", ancho: "12cm", idCat: "lamparas", img: "/img/mypequee.jpg",
    imagenesSecundarias: ["/img/mypequeeFoco.jpg", "/img/MyPeque333.jpg", "/img/MyPeque3333.jpg"], foco: "Incluye foco 4w luz cálida", incandescente: "No utilizar focos incandescentes",
    sustentable: "Material 100% sustentable de origen vegetal"
  },

  {
    stock: 10, nombre: "Tao ", tamanio: "L",precio: 25500, alto: "18cm", ancho: "13.5cm", idCat: "lamparas", img: "/img/Mylampp.jpg",
    imagenesSecundarias: ["/img/MyLamp1.jpg","/img/MyLampFocooo.jpg","/img/MyLampFocoAmarilla.jpg"], foco: "Incluye foco 4w luz cálida", incandescente: "No utilizar focos incandescentes",
    sustentable: "Material 100% sustentable de origen vegetal"
  },
  {
    stock: 10, nombre: "Umbra - negra", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/lamparaA.jpg",
    imagenesSecundarias: ["/img/lamparaAA1.jpg","/img/lamparaAA.jpg","/img/lamparaAAA.jpg","/img/,imglamparaAAA.jpg"], foco: "Incluye foco 4w luz cálida", incandescente: "No utilizar focos incandescentes", sustentable: "Material 100% sustentable de origen vegetal"
  },
  {
    stock: 10, nombre: "Umbra - blanca", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/Lampara3.jpg",
    imagenesSecundarias: ["/img/Lampara2.jpg", "/img/lamparaAAA.jpg", "/img/Lampara333.jpg"], foco: "Incluye foco 4w luz cálida", incandescente: "No utilizar focos incandescentes", sustentable: "Material 100% sustentable de origen vegetal"
  },
  {
    stock: 10, nombre: "Umbra - mixta", precio: 34500, alto: "26cm", ancho: "16.5cm", idCat: "lamparas", img: "/img/lamparaB.jpg",
    imagenesSecundarias: [ ], foco: "Incluye foco 4w luz cálida", incandescente: "No utilizar focos incandescentes", sustentable: "Material 100% sustentable de origen vegetal"
  },



//-----------------HALO
  {
    stock: 10, nombre: "Halo ", tamanio: "M",precio: 15000, alto: "13cm", ancho: "11.5cm", idCat: "macetas", img: "/img/MacetaVertical4.jpg",
    imagenesSecundarias: [" /img/MacetaVertical2.jpg", "/img/MacetaVertical5.jpg", "/img/Haloblanca.jpg", "/img/HaloblancaPlanta.jpg", "/img/MacetaVertical5.jpg"],
     colores: ["Blanco", "Negro"], sol: "No exponer al sol directo"
  },
  {
    stock: 10, nombre: "Halo ", tamanio: "L",precio: 15000, alto: "13cm", ancho: "15cm", idCat: "macetas", img: "/img/MacetaVertical6.jpg",
    imagenesSecundarias: ["/img/MacetaVertical1.jpg", "/img/H.jpg","/img/MacetaVertical13.jpg", "/img/HaloConjunto.jpg", "/img/HaloLPlanta.jpg"  ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },
  {
    stock: 10, nombre: "Halo ", tamanio: "XL",precio: 18000, alto: "19", ancho: "17cm", idCat: "macetas", img: "/img/Haloblanca.jpg",
    imagenesSecundarias: ["/img/HaloXLPlanta.jpg", "/img/HaloConjunto.jpg" ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },

//-----------------Nao
  {
    stock: 10, nombre: "Nao ", tamanio: "M",precio: 15000, alto: "12cm", ancho: "13cm", idCat: "macetas", img: "/img/MacetaCruzada.jpg",
    imagenesSecundarias: ["/img/MacetaCruzada1.jpg","/img/MacetaCruzada2.jpg","/img/MacetaCruzada3.jpg"],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },

  //-----------------Ena
  {
    stock: 10, nombre: "Ena ", tamanio: "M",precio: 9000, alto: "13cm", ancho: "12.5cm", idCat: "macetas", img: "/img/OndinaBlanca.jpg",
    imagenesSecundarias: ["/img/Maceta2partes1.jpg","/img/Maceta2partes3.jpg"  ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },
  {
    stock: 10, nombre: "Ena ", tamanio: "L",precio: 15000, alto: "17cm", ancho: "14cm", idCat: "macetas", img: "/img/OndinaBlanca.jpg",
    imagenesSecundarias: [ "/img/ondinaLPlanta.jpg" ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },


 //-----------------Ébano 
  {
    stock: 10, nombre: "Ébano", precio: 15000, alto: "15cm", ancho: "14.5cm", idCat: "macetas", img: "/img/MacetaLinda.jpg",
    imagenesSecundarias: ["/img/MacetaLinda1.jpg","/img/MacetaLinda2.jpg" ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },


   //-----------------GEO
  {
    stock: 10, nombre: "Geo ", tamanio: "M",precio: 15000, alto: "13cm", ancho: "12.5cm", idCat: "macetas", img: "/img/MacetaRombo.jpg",
    imagenesSecundarias: ["/img/MacetaRombo1.jpg","/img/GeoLPlanta.jpg" ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },
  {
    stock: 10, nombre: "Geo ", tamanio: "L",precio: 15000, alto: "14cm", ancho: "16cm", idCat: "macetas", img: "/img/GeoMaceta.jpg",
    imagenesSecundarias: ["/img/GeoLPlantaa.jpg"  ],
    colores: ["Blanco", "Negro"] , sol: "No exponer al sol directo"
  },


  //-----------------Zenith
  {
    stock:  0, nombre: "Zenith", precio: 15000, alto: "23cm", ancho: "13.5cm", idCat: "macetas", img: "/img/MacetaMadera.jpg",
    imagenesSecundarias: ["/img/MacetaMadera3.jpg","/img/MacetaMadera1.jpg", "/img/MacetaMadera2.jpg" ], sol: "No exponer al sol directo"
  },


   
]


import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
  const batch = writeBatch(db);
  const productosRef = collection(db, "productos");

  misProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef); // Crea un documento con ID automático
    const idGenerado = nuevoDoc.id; // Obtén el ID generado
    batch.set(nuevoDoc, { ...producto, id: idGenerado }); // Guarda el ID dentro del documento
  });

  try {
    await batch.commit();
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.log("Error al subir los productos", error);
  }
};

//una vez que subo los productos, comento la funcion para que no vuelvan a subirse

      //subirProductos()