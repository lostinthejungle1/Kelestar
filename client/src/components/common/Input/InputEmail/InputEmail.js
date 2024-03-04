import React from "react";
import './InputEmail.css'

function InputEmail({placeholder,label,style,className}){

    return (
        <div className={`input-email`} style={style}  >
            <label>{label}</label>
            <input type="email" placeholder={placeholder} />
        </div>
    )
}

export default InputEmail;