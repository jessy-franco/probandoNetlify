import { useState } from "react";
import "./Button.css";

function Button(props) {

    const [colorState] = useState({
        backgroundColor: props.color,
        borderColor: "red",
    });

    return (
        <button onClick={props.onClick} style={colorState} className="newBtn">
            {props.children}
        </button>
    );
}



export default Button