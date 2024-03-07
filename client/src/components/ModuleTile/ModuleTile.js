import React from "react";
import styles from './ModuleTile.module.css';

function ModuleTile({Icon,title,onClick}){

    return (
        <div className={styles.tile} onClick={onClick}>
            <Icon className={styles.icon} />
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default ModuleTile;
