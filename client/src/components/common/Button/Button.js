import React from "react";
import './Button.css'

function Button({color,content}){
    return (<>
        <button className={color}>{content}</button>
    </>)
}

export default Button;