import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Button/Buttons";
import "./itemDetail.css"



function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false);

    const navigate = useNavigate();

    function onAddToCart(count) {
        swal({
            title: `Agregaste ${count} unidad/es  de ${product.name} al carrito`,
            text: "Siga viendo nuestros productos!!!",
            icon: "success",
            button: "Ir al carrito",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/cart")
            }
        });

        setIsInCart(true);
    } 
    return (
        
        <div className="newCard">
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="detailProducts">
                <h2>{product.name} </h2>
                <p className="subTitle">{product.descripcion}</p>
                <p style={{textAlign: "center", fontSize: "1.1rem"}}>{product.info}</p>
                <h4 className="priceTag" style={{textAlign: "center", fontSize: "2.5rem"}}>$ {product.price}</h4>

            </div>
            {!isInCart ? (
                <ItemCount
                    text="Agregar al carrito :D"
                    onAddToCart={onAddToCart}
                    stock={product.stock}
                />
            ) : (
                <div>
                    <Link to="/cart">
                    <Button  bGColor= "#dce9d8">Ir al Carrito</Button>
                    </Link>
                    <Link to="/">
                    <Button  bGColor= "#dce9d8">Volver a productos</Button>
                    </Link>
                    <Button  bGColor= "#dce9d8">Quitar del carrito</Button>
                </div>
            )} 
        </div>
    );
}

export default ItemDetail; 