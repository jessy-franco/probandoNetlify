import React, { useState, useEffect } from "react";
import { arrayProdSeleccion } from "../../mockService/MockServiceList";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let params = useParams();
    let id = params.id;

    useEffect(() => {
        arrayProdSeleccion(id)
            .then((arrayItems) => {
                setProduct(arrayItems);
            })
            .catch((error) => alert(error));
    }, [id]);

    return (
        <div className="newCard">
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="cardDetail">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                {/* <p>{product.info}</p> */}
                <h4 className="priceTag">$ {product.price}</h4>

            </div>
        </div>
    );
}

export default ItemDetailContainer;