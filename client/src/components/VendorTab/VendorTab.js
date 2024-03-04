import React from "react";
import styles from "./VendorTab.module.css";

import { IoIosHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

// on which page? dashboard,menu,me
function VendorTab({page}){

    return (
        <div className={styles.tab}>
            <IoIosHome className={page==='dashboard'?styles.active:''}/>
            <MdOutlineRestaurantMenu className={page==='menu'?styles.active:''} />
            <IoPersonCircleOutline className={page==='me'?styles.active:''} />
        </div>
    )
}

export default VendorTab;