import React from "react";
import styles from './CarbonLabel.module.css';
import levelA from './assets/levelA.png'
import levelB from './assets/levelB.png'
import levelC from './assets/levelC.png'
import cateA from './assets/cateA.png'
import cateB from './assets/cateB.png'
import cateC from './assets/cateC.png'

function CarbonLabel({carbonLevel,footprintNumber,withNumber}){
    //it would be better if this could be drawn using svg, try this later
    const getLevelSrc = (level)=>{
        switch(level){
            case 'A':
                return levelA;
            case 'B':
                return levelB;
            case 'C':
                return levelC;
            default:
                return levelA;
        }
    }
    const getCateSrc = (level)=>{
        switch(level){
            case 'A':
                return cateA;
            case 'B':
                return cateB;
            case 'C':
                return cateC;
            default:
                return cateA;
        }
    }
    return (<div className={styles.label}>
        <img className={styles.level} src={getLevelSrc(carbonLevel)} alt={carbonLevel} />
        {withNumber&&<img className={styles.categorization} src={getCateSrc(carbonLevel)} alt={carbonLevel} />}
        {withNumber&&<span className={styles.number}>{footprintNumber+'Kg CO2e '}</span>}
    </div>)
}

export default CarbonLabel;