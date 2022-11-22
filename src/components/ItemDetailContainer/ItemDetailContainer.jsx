import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../mockService/mockServiceList";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    const {idProducto} = useParams();

    useEffect(() => {
        getSingleItem(idProducto)
            .then((arrayItems) => {
                setProduct(arrayItems);
            })
            .catch((error) => alert(error));
    }, [idProducto]);

    return (
        <div className="Card">
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="card-detail">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                <p>{product.info}</p>
                <h4 className="priceTag">$ {product.price}</h4>

            </div>
        </div>


    );

}


export default ItemDetailContainer1;