import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../mockService/mockServiceList";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let {idProducto} = useParams();

    useEffect(() => {
        if(idProducto){
            getSingleItem(idProducto)
            .then((arrayItems) => {
                setProduct(arrayItems);
            })
            .catch((error) => alert(error));
        }
        else{
            
            console.log("sigue sin funcionar")
        }
    }, [idProducto]);

    return <ItemDetail product={product} />;

}


export default ItemDetailContainer;