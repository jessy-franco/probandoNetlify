import React  from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import cartContext from '../../store/CartContext';
//para consumir el context importamos y el hook useContext 

function CartWidget() {
    const context = useContext(cartContext);
    const itemsToCart= (context.itemsInCart);
    console.log("--------->", context);
    return(
        <IconButton aria-label="cart">
        <Badge badgeContent={itemsToCart} color="success">
            <ShoppingCartIcon/>
        </Badge>
        </IconButton>
    );
}

export default CartWidget;