import React, { useState, useEffect } from "react";
import ItemsProd from "./ItemProdList"
import ArrayProd, {
    ArrayProdByCategory
} from "../../mockService/mockServiceList";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const [productsList, setProductsList] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
        if (categoryid) {
            ArrayProdByCategory(categoryid).then((arrayItems) => {
                setProductsList(arrayItems);
            });
        } else {
            ArrayProd().then((arrayItems) => {
                setProductsList(arrayItems);
                console.log("no filtraste")
            });
        }
    }, [categoryid] );
    return <ItemsProd productsList={productsList}  /> ;
    
}



export default ItemListContainer;