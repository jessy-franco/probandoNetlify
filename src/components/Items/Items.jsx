
import React, { useState} from "react";
import {Link} from "react-router-dom"
import Button from "../Button/Buttons"
import "./itemStyle.css"

function ItemsCard(product) {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
    }

    let classButtonFavorite =
        isFavorite === true ? "card-favicon favorite" : "card-favicon";

    let urlDetail = `/detalle/${product.id}`;

    return (
        <div className="Card">
            <button onClick={handleFavorite} className={classButtonFavorite}>
                ♥
            </button>
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="cardDetail">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                <h4 className="priceTag">$ {product.price}</h4>
                <Link to= {urlDetail} >
                    <Button bGColor= "#dce9d8">Ver más!</Button>
                </Link>
            </div>

        </div>
    );
}

export default ItemsCard;

