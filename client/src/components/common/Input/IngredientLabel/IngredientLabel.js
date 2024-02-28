import React from "react";
import styles from './IngredientLabel.module.css';
import { LuDelete } from "react-icons/lu";

function IngredientLabel({ingredientName,weight,unit,onClick}){

    return (
        <>
            <span className={styles.label}>{`${ingredientName} ${weight}${unit}`} <LuDelete className={styles.deleteBtn} onClick={onClick} /></span>
        </>
    )
}

export default IngredientLabel;