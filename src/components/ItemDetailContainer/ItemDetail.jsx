import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import "./itemDetail.css"



function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false);

    const navigate = useNavigate();

    function onAddToCart(count) {
        swal({
            title: `Agregaste ${count} unidades al carrito`,
            text: "Desea terminar su compra?",
            icon: "success",
            confirmButtonText: "Ir al carrito",
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
                    text="Agregar al carritoP"
                    onAddToCart={onAddToCart}
                    stock={product.stock}
                />
            ) : (
                <div>
                    <button>Ir al Carrito</button>
                    <button>Volver al catálogo</button>
                    <button>Quitar del carrito</button>
                </div>
            )} 
        </div>
    );
}

export default ItemDetail; 