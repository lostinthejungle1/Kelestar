import React from "react";
import styles from './DishCard.module.css'
import CarbonLabel from "../common/CarbonLabel/CarbonLabel";

function DishCard({thumbnailURL,dishName,providingVendor,dishPrice,priceUnit,carbonLevel,footprintNumber}){
    return (<div className={styles.card}>
        <img className={styles.thubnail} src={thumbnailURL} alt={dishName} />
        <span className={styles.dishName}>{dishName}</span>
        <span className={styles.providingVendor}>{`From ${providingVendor}`}</span>
        <span className={styles.dishPrice}>{`${priceUnit} ${dishPrice}`}</span>
        <CarbonLabel className={styles.label} carbonLevel={carbonLevel} footprintNumber={footprintNumber} withNumber={true} />

    </div>)
}

export default DishCard;