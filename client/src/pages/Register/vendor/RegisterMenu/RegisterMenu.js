import React from "react";
import Button from "../../../../components/common/Button/Button";
import DishCard from "../../../../components/DishCard/DishCard";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import styles from './RegisterMenu.module.css';
import { RiFontSize } from "react-icons/ri";
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

function RegisterMenu(){
    //TODO: state would be all the info used to register
    const navigate = useNavigate();
    const handleSubmit = e=>{
        e.preventDefault();
        navigate('/vendor/dashboard')
    }
    //TODO: Validate form 
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            navigate('/register-vendor');
        }} />
        {/* update classname */}
        <form className={styles.register_menu_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>Let’s populate your menu</h2>
            <Button style={{width:'50%',fontSize:'1em',marginBottom:'1em'}} onClick={()=>navigate('/vendor/create-dish/register')} color='green' content='+ Create new dish' />
            <div className={styles.dishList}>
                <label>Dish List</label>
                {dishList.map(dish=><DishCard style={{marginBottom:'.8em'}} thumbnailURL={dish.thumbnailURL} dishName={dish.dishName} providingVendor={dish.providingVendor} dishPrice={dish.dishPrice} priceUnit={dish.priceUnit} carbonLevel={dish.carbonLevel} footprintNumber={dish.footprintNumber} />)}
            </div>
            <Button style={{width:'100%'}} onClick={handleSubmit} color='green' content='Next step' type='submit'  />
            <p className={styles.later}>
                <a href="/" onClick={(e)=>{
                e.preventDefault();
                navigate('/')
            }}>Create later?</a></p>
        </form>
    </div>)
}

export default RegisterMenu;