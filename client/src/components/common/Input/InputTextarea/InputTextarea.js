import React from "react";
import styles from './InputTextarea.module.css'

function InputTextarea({placeholder,label,style,cols,rows}){

    return (
        <div className={styles.inputTextarea} style={style}  >
            <label>{label}</label>
            <textarea cols={cols} rows={rows} placeholder={placeholder}></textarea>
        </div>
    )
}

export default InputTextarea;
