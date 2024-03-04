import React,{useState} from "react";
import styles from './DashBoard.module.css';
import VendorTab from "../../../components/VendorTab/VendorTab";

function DashBoard(){

    return (
        <div>
            <h1>Vendor Dashboard</h1>
            {/* some visualization diagrams */}
            <VendorTab page='dashboard' />
        </div>
    )
}

export default DashBoard;
