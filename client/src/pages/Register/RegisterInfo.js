import React from "react";
import Button from "../../components/common/Button/Button";
import InputEmail from "../../components/common/Input/InputEmail/InputEmail";
import InputPassword from "../../components/common/Input/InputPassword/InputPassword";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import styles from './RegisterInfo.module.css';
import InputText from "../../components/common/Input/InputText/InputText";

function RegisterInfo(){
    //TODO: state would be all the info used to register
    const navigate = useNavigate();
    const handleSubmit = e=>{
        e.preventDefault();
        navigate('/register-role')
    }
    //TODO: Validate form 
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            navigate('/login');
        }} />
        {/* update classname */}
        <form className={styles.login_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>Fill in your register details to join the green community</h2>
            <InputText placeholder='Enter your username' label='Username' /> 
            <InputEmail placeholder='Enter your email'  label='Email' /> 
            <InputPassword placeholder='Enter your password'  label='Password' />
            <InputPassword placeholder='Repeat your password' style={{marginBottom:'1em'}} label='Repeat your password' />
            <Button style={{width:'100%'}} onClick={handleSubmit} color='green' content='Next step' type='submit'  />
            <p className={styles.no_account}>Already have an account? <a href="/" onClick={(e)=>{
                e.preventDefault();
                navigate('/login')
            }}>Log in</a></p>
        </form>
    </div>)
}

export default RegisterInfo;