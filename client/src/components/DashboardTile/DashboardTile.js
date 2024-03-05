import React from "react";
import styles from './DashboardTile.module.css';

function DashboardTile({Icon,title,value,iconStyle}){

    return (
        <div className={styles.tile}>
            <Icon style={iconStyle} className={styles.icon} />
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}

export default DashboardTile;