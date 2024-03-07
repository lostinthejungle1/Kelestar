import React from "react";
import VendorTab from "../../../components/VendorTab/VendorTab";
import styles from './Me.module.css';

import ModuleTile from "../../../components/ModuleTile/ModuleTile";
import { LiaAwardSolid } from "react-icons/lia";
import { IoCalculatorOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function Me(){

    return (
        <div className={styles.main_content}>
            <div className={styles.account_info}>
                <div className={styles.thumbnail_container}>
                    {/* <img  alt='vendor thumbnail' src='https://img-corp.com/images/logo@2x.png' /> */}
                </div>
                <p>@Username</p>
            </div>
            
            <div className={styles.modules}>
                <ModuleTile Icon={LiaAwardSolid} title='Leader Board' />
                <ModuleTile Icon={IoCalculatorOutline} title='Footprint Calculator' />
                <ModuleTile Icon={FaRegCircleQuestion} title='FAQs' />
                <ModuleTile Icon={CiSettings} title='Setting' />
                <ModuleTile Icon={IoIosLogOut} title='Log out' />
            </div>
            <VendorTab page='me' />
        </div>
    )
}

export default Me;