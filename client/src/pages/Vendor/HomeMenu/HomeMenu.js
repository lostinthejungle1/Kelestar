import React from "react";
import VendorTab from "../../../components/VendorTab/VendorTab";
import styles from './HomeMenu.module.css';

function HomeMenu(){

    return (
        <div>
            <h1>Home menu</h1>
            <VendorTab page='menu' />
        </div>
    )
}

export default HomeMenu;