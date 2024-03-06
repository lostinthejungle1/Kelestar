import React,{useState} from "react";
import Button from "../../../../components/common/Button/Button";
import InputText from "../../../../components/common/Input/InputText/InputText";
import ThumbnailUploader from "../../../../components/common/Input/ThumbnailUploader/ThumbnailUploader";
import IngredientLabel from "../../../../components/common/Input/IngredientLabel/IngredientLabel";
import Modal from "../../../../components/common/Modal/Modal";
import InputNumber from "../../../../components/common/Input/InputNumber/InputNumber";
import InputSelect from "../../../../components/common/Input/InputSelect/InputSelect";

import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate,useParams} from 'react-router-dom';
import styles from './CreateDish.module.css';


function CreateDish(){
    const {status} = useParams();
    // delete later
    const options= [{value:'Beef',optionShown:'BEEF',id:1},
    {value:'Poultry',optionShown:'POULTRY',id:2}]
    const [isOpen,setIsOpen] = useState(false);
    const [ingredientsList,setIngredientsList] = useState([
        {ingredientName:'Potato',weight:'100',unit:'g'},
        {ingredientName:'Rice',weight:'150',unit:'g'},
        {ingredientName:'Chocolate',weight:'150',unit:'g'},
    ]);
    const navigate = useNavigate();
    const handleSubmit = e=>{
        e.preventDefault();
        navigate('/')
    }

    const handleAddIngredient = ()=>{
        setIsOpen(true);
    }
    //TODO: Validate form 
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            if(status==='register'){
                navigate('/vendor/register-menu');    
            }else if(status==='edit'){
                navigate('/vendor/homemenu');
            }
           
        }} />
        <form className={styles.create_dish_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>{status==='register'?"Create new dish":'Edit dish detail'}</h2>
            <InputText placeholder='Enter dish name' label='Dish name:' /> 
            <InputText placeholder='Enter dish price' label='Dish price:' /> 
            <ThumbnailUploader label="Dish thumbnail image:" />
            <div>
                <label style={{fontSize:'1.1em',display:'block',marginBottom:'.4em'}}>Ingredients</label>
                <Button style={{width:'50%',fontSize:'1.1em'}} onClick={handleAddIngredient} color='green' content='+ Add ingredient' />
                <div className={styles.ingredientsList}>
                    {ingredientsList.map(ingredient=><IngredientLabel ingredientName={ingredient.ingredientName} weight={ingredient.weight} unit={ingredient.unit} />)}
                </div>
            </div>

            <Button style={{width:'100%'}} onClick={handleSubmit} color='green' content='Create new dish' type='submit'   />
            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} >
                <h3>Add Ingredient</h3>
                <form className={styles.modalForm}>
                    <InputSelect  style={{width:'100%',fontSize:'.8em'}} options={options} selectName='ingredient' label='Select ingredient' />
                    <InputNumber style={{width:'100%',fontSize:'.8em'}} label='Weight (gram)' />
                    <Button style={{width:'50%',fontSize:'1.1em',marginTop:'1em'}}  color='green' content='Save ingredient' />    
                </form>
            </Modal>
        
        </form>
    </div>)
}

export default CreateDish;