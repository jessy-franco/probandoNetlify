import { useState } from "react"; 
import "./Button.css";

function Button(props) {

    const [colorState] = useState({
        backgroundColor: props.bGColor,
        color: props.color,
        border: props.borderColor,
    });

    return (
        <button onClick={props.onClick} style={colorState} className="newBtn">
            {props.children}
        </button>
    );
}



export default Button