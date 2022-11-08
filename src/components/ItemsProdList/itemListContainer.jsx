import React, { useState, useEffect } from "react";
import ItemsProd from "./ItemProdList"
import ArrayProd, {
    ArrayProdByCategory, ArrayProdBySubCategory,
} from "../../mockService/MockServiceList";

import { useParams } from "react-router-dom";


function ItemListContainer() {
    const [productsList, setProductsList] = useState([]);
    const { categoryid } = useParams();
    const { subcategoryid } = useParams();

    useEffect(() => {
        if (categoryid) {
            ArrayProdByCategory(categoryid).then((arrayItems) => {
                setProductsList(arrayItems);
            });
        } else {
            ArrayProd(ArrayProdBySubCategory(subcategoryid)).then((arrayItems) => {
                setProductsList(arrayItems);
                console.log("no filtraste")
            });
        }
    }, [categoryid, subcategoryid] );
    return <ItemsProd productsList={productsList} />;

}


export default ItemListContainer;