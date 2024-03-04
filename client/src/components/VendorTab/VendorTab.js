import React from "react";
import styles from "./VendorTab.module.css";
import {useNavigate} from 'react-router-dom';

import { IoIosHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

// on which page? dashboard,menu,me
function VendorTab({page}){
    const navigate = useNavigate();
    return (
        <div className={styles.tab}>
            <IoIosHome className={page==='dashboard'?styles.active:''} onClick={()=>navigate('/vendor/dashboard')}/>
            <MdOutlineRestaurantMenu className={page==='menu'?styles.active:''} onClick={()=>navigate('/vendor/homemenu')}/>
            <IoPersonCircleOutline className={page==='me'?styles.active:''} onClick={()=>navigate('/vendor/me')}/>
        </div>
    )
}

export default VendorTab;