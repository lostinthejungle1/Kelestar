import React,{useState} from "react";
import Button from "../../components/common/Button/Button";
import RoleRadio from "../../components/common/Input/RoleRadio/RoleRadio";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import styles from './RegisterRole.module.css';

function RegisterRole(){
    const navigate = useNavigate();
    const [selectedRole,setSelectedRole]=useState('customer');

    const handleSubmit = e=>{
        e.preventDefault();
    }
    // Validate form 
    const validateForm = e=>{
        
    }
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            navigate('/register-info');
        }} />
        {/* update classname */}
        <form className={styles.select_role_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>Select your role</h2>
            <p className={styles.text}>Are you</p>
            <RoleRadio type="customer" selected={selectedRole==='customer'} onClick={()=>{setSelectedRole('customer')}} />
            <p className={styles.text}>Or</p>
            <RoleRadio type="vendor" selected={selectedRole==='vendor'} onClick={()=>{setSelectedRole('vendor')}} />
            <Button style={{width:'100%',marginTop:'2em'}} onClick={handleSubmit} color='green' content='Next step' type='submit' />
        </form>
    </div>)
}

export default RegisterRole;