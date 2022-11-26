import { createContext } from "react"



const cartContext = createContext();
//context = Almacenamiento
//Provider (proveedor, componente contenedor de componentes para que accedan al context)
// Los children son todos los componentes que le pasamos por app.js...osea los routes
// estos componentes se interrelacionan con el provider// 
// creamos un value para que los componenetes que usen contect
export function CartContextProvider(props){

const value= {
    itemsInCart: 8, 
};
console.log(value)
    //Le pasamos una value para que los componentes puedan usar el context

    return(
        <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider> 
    )
}

export default cartContext