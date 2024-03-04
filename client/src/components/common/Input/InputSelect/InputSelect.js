import React from "react";
import styles from './InputSelect.module.css';

function InputSelect({options,style,selectName,label}){
    //options [{value:'dog',optionShown:'DOG',id:1}]
    return (
        <div className={styles.inputSelect}  style={style}>
            <label>{label}</label>
            <select name={selectName}>
                {options.map(item=>(<option value={item.value} key={item.id}>{item.optionShown}</option>))}
            </select>
        </div>
    )
}

export default InputSelect;