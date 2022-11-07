import React, { useState, useEffect } from "react";
import ItemProdList from "./ItemProdList"
import ArrayProd, {
    ArrayProdByCategory,
} from "../../mockService/MockServiceList";
import { useParams } from "react-router-dom";


function ItemListCont() {
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
            });
        }
    }, [categoryid]);

    return <ItemProdList productsList={productsList} />;
}


export default ItemListCont;