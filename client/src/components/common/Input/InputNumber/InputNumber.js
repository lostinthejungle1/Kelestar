import React from "react";
import styles from './InputNumber.module.css'

function InputNumber({placeholder,label,style}){

    return (
        <div className={styles.inputNumber} style={style}  >
            <label>{label}</label>
            <input type="number" placeholder={placeholder} />
        </div>
    )
}

export default InputNumber;