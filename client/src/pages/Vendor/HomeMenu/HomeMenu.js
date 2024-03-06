import React from "react";
import VendorTab from "../../../components/VendorTab/VendorTab";
import styles from './HomeMenu.module.css';
import Button from "../../../components/common/Button/Button";
import DishCard from "../../../components/DishCard/DishCard";
import {useNavigate} from 'react-router-dom';

import { CiEdit } from "react-icons/ci";

const dishList = [
    {thumbnailURL:'https://sudachirecipes.com/wp-content/uploads/2022/08/teriyaki-chicken-pizza-thumbnail.jpg',
    dishName:'Pizza',
    providingVendor:'Betagga',
    dishPrice:'15',
    priceUnit:'RM',
    carbonLevel:'A',
    footprintNumber:'1.5'},
    {thumbnailURL:'https://images.immediate.co.uk/production/volatile/sites/2/2023/06/Courgette-and-chimichurri-salad-b77053f.jpg?quality=90&webp=true&resize=600,545',
    dishName:'Pizza',
    providingVendor:'Betagga',
    dishPrice:'15',
    priceUnit:'RM',
    carbonLevel:'A',
    footprintNumber:'1.5'},
];

function HomeMenu(){
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.main_content}>
                <h1 className={styles.title}>Hello Poke2U</h1>
                <CiEdit onClick={()=>navigate('/vendor/register-vendor/edit')} className={styles.edit_info_btn} />
                <div className={styles.vendor_info}>
                    <div className={styles.thumbnail_container}>
                        <img  alt='vendor thumbnail' src='https://www.indystar.com/gcdn/presto/2021/08/31/NPPP/e046fbb9-e459-4973-ae5c-e412a38b80bd-Sweetgreen_1.jpg?width=660&height=660&fit=crop&format=pjpg&auto=webp' />
                    </div>
                    <p className={styles.vendor_desc}>We’ve got the poke bowl you’re looking for. Full of freshness, deliciousness and a whole lot more.</p>
                </div>
                <div className={styles.menu_container}>
                    <Button style={{width:'50%',fontSize:'1em',marginBottom:'1em'}} onClick={()=>navigate('/vendor/create-dish')} color='green' content='+ Create new dish' />
                    <div className={styles.dishList}>
                        {dishList.map(dish=><DishCard style={{marginBottom:'.8em'}} thumbnailURL={dish.thumbnailURL} dishName={dish.dishName} providingVendor={dish.providingVendor} dishPrice={dish.dishPrice} priceUnit={dish.priceUnit} carbonLevel={dish.carbonLevel} footprintNumber={dish.footprintNumber} />)}
                    </div>
                </div>

                
            </div>
            <VendorTab page='menu' />
        </div>
    )
}

export default HomeMenu;