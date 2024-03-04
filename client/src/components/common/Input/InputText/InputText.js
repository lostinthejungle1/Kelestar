import React from "react";
import styles from './InputText.module.css'

function InputText({placeholder,label,style,className}){

    return (
        <div className={styles.inputText} style={style}  >
            <label>{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputText;