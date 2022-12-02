import React, { useContext } from "react";
import cartContext from "../../store/CartContext";
import Button from "../Button/Buttons";
import dinoError from "../ImgHeader/dinoError.png"
import { Link } from "react-router-dom";
import { createBuyOrderFirestoreWithStock } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "../CartView/cartView.css"
import BuyForm from "../Forms/BuyForms";

/* 1-conectarlo al context---importando el context y el useContext */
/* 2-mostrar el listado de items del array guardado en el context */

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigation = useNavigate();

    if (cart.length === 0) {
        return <section className="carritoVacio">
            <h1>Su carrito esta vacio</h1>
            <img src={dinoError} alt="dinoError" />
            <Link to="/">
                <Button>Volver a productos</Button>
            </Link>
        </section>

    }



    function createBuyOrder(userData) {
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        }
        createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
            clear();
            navigation(`/checkout/`);
            swal({
                title: `GRACIAS POR SU COMPRA :)`,
                text: `Su orden de compra es ${orderId}`,
                icon: "success",
                button: "Ok"
            });


        })

    }

    return (
        <section >
            <h1>Tu carrito:</h1>
            {/* siempre q hacemos un map pasamos una key */}
            <section className="vistaCart">
                {cart.map((cartItem) => (
                    <div key={cartItem.id} >
                        <img src={cartItem.img} alt="Imagenes ilustrativas de los productos del carrito" width={"30%"} height={"auto"} />
                        <h3>{cartItem.name}</h3>
                        <h4>${cartItem.price}</h4>
                        <h4>Cantidad: {cartItem.count}</h4>
                        <h4>Precio total del producto: ${cartItem.count * cartItem.price}</h4>
                        <Button onClick={() => removeItem(cartItem.id)} color="whiteSmoke" bGColor="#ff0101c2">X</Button>
                    </div>
                ))
                }
                <Button onClick={clear}>Vaciar Carrito</Button>
                <div><h5>El total de su compra es: ${totalPriceInCart()}</h5></div>
                <Link to ="/" >
                <Button>Volver a productos...</Button>
                </Link>
                <BuyForm onSubmit={createBuyOrder} />
                
            </section>
        </section>
    )
};


export default CartView