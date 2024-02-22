import React from "react";
import './Button.css'

function Button({color,content,onClick}){
    return (<>
        <button className={color} onClick={onClick}>{content}</button>
    </>)
}

export default Button;