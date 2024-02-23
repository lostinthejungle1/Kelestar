import React from "react";
import styles from './RoleRadio.module.css'
import { FaRegUser } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";

function RoleRadio({type,style,selected,onClick}){
    // type: customer or vendor
    //selected : true or false
    return (
        <div style={style} className={`${styles.box} ${selected?styles.selected:''}`} onClick={onClick}>
            <span className={styles.icon}>{type==='customer'?<FaRegUser />:<MdRestaurant />}</span>
            <span className={styles.title}>{type}</span>
            <span className={styles.desc}>
                {type==='customer'?'Check digital menu and track your food carbon footprint':
                'Manage your menu and get personalized recommendations'
                }
            </span>
            <label className={styles.customized_radio}>
                <input className={styles.radio} type="radio" checked={selected} />
                <span className={styles.checkmark}></span>
            </label>
            
        </div>
    )
}

export default RoleRadio;