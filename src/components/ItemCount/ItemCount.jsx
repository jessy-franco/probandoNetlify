import React, { useState } from "react";
import Button from "../Button/Buttons";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
    const [count, setCount] = useState(1);

    function handleAdd(evt) {
        evt.preventDefault();
        console.log(evt);
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract(evt) {
        evt.preventDefault();
        console.log(evt);
        if (count > 1) setCount(count - 1);
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button onClick={handleSubstract}>
                    -
                </Button>
                <span>{count}</span>
                <Button onClick={handleAdd}>
                    +
                </Button>
            </div>
            <div className="itemcount_btns">
                <Button onClick={() => onAddToCart(count)}>{text}</Button>
            </div>
        </div>
    );
}

export default ItemCount;