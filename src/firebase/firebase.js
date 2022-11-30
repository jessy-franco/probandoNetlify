
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3MSbhrQxGbh5ZHfQXmI-48uJoUf4DD9Y",
    authDomain: "sucurexreact.firebaseapp.com",
    projectId: "sucurexreact",
    storageBucket: "sucurexreact.appspot.com",
    messagingSenderId: "195160818232",
    appId: "1:195160818232:web:3ed0be42acd7e514b95ccd"
};


const firebaseApp = initializeApp(firebaseConfig);

/* export function textDataBase(){
    console.log(firebaseApp)
} */

const dataBase = getFirestore(firebaseApp);

//para margen de error en async await usamos try/ xatch

export async function getSingleItem(id) {

    const docRef = doc(dataBase, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data(),
        }
    } else {
        // doc.data() will be undefined in this case
        console.error("el producto no existe!")
    }
}




export async function ArrayProd() {
    try {
        // 1) conectar a la coleccion de prod de firebase con collection

        const collectionProducts = collection(dataBase, "products")
        //2) traer los doc existentes con getDocs (respuesta = snapshot en firebase)
        let respuesta = await getDocs(collectionProducts);
        //3) extraemos la data  de nuestros productos y lo mapeamos "map"

        const products = respuesta.docs.map(docu => {
            return {
                id: docu.id,
                ...docu.data()
            }
        })
        //Retornamos el listado mapeado

        return (products);
    }
    catch (error) {
        console.error(error);
    }
}

export async function ArrayProdByCategory(categoryid) {
    const ProductsRef = collection(dataBase, "products")
    const myQuery  = query(ProductsRef, where("category", "==", categoryid));

    const querySnapshot = await getDocs(myQuery);
    const products = querySnapshot.forEach((docu) => {
        return {
            id: docu.id,
            ...docu.data(),
        }
    });
    return products;
}