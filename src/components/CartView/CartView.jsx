import React, { useContext } from "react";
import cartContext from "../../store/CartContext";
import Button from "../Button/Buttons";
import dinoError from "../ImgHeader/dinoError.png"
import { Link } from "react-router-dom";
import { createBuyOrderFirestoreWithStock } from "../../firebase/firebase";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

/* 1-conectarlo al context---importando el context y el useContext */
/* 2-mostrar el listado de items del array guardado en el context */

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigation = useNavigate(); 

    if (cart.length === 0) {
        return <section>
            <h1>Su carrito esta vacio</h1>
            <img src={dinoError} alt="dinoError" />
            <Link to = "/">
            <Button>Volver a productos</Button>
            </Link>
        </section>
        
    }

    

    function createBuyOrder(){
        const buyData = {
            buyer: {
                name: "comision Coder",
                phone: "12345",
                email: "sucuRex@gmail.com"

            },
            items: cart,
            total: totalPriceInCart,
            date: new Date(),
        }
        createBuyOrderFirestoreWithStock(buyData).then(orderId =>{
            console.log(orderId);
                clear();
                navigation(`/checkout/${orderId}`);
                swal({
                    title: `GRACIAS POR SU COMPRA :)`,
                    text: `Su orden de compra es ${orderId}`,
                    icon: "success",
                    button: "Ok"
                });
        })
        
    }

    return (
        <section>
            <h1>Tu carrito:</h1>
            {/* siempre q hacemos un map pasamos una key */}
            {cart.map(cartItem => (
                <div key={cartItem}>
                    <img src={cartItem.img} alt="Imagenes ilustrativas de los productos del carrito" />
                    <h3>{cartItem.name}</h3>
                    <h4>${cartItem.price}</h4>
                    <h4>Cantidad: {cartItem.count}</h4>
                    <h4>Precio total del producto: ${cartItem.count * cartItem.price}</h4>
                    <Button onClick={() => removeItem(cartItem.id)} color="whiteSmoke" bGColor="#ff0101c2">X</Button>
                </div>
            ))
            }
            <Button onClick={() => clear()}>Vaciar Carrito</Button>
            <div><h5>El total de su compra es: ${totalPriceInCart()}</h5></div>
            <Button onClick={createBuyOrder}>Finalizar compra!</Button>
        </section>
    )
};


export default CartView