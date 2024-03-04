import React from "react";
import Button from "../../components/common/Button/Button";
import InputEmail from "../../components/common/Input/InputEmail/InputEmail";
import InputPassword from "../../components/common/Input/InputPassword/InputPassword";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import styles from './Login.module.css'

function Login(){
    const navigate = useNavigate();
    const handleSubmit = e=>{
        e.preventDefault();
        console.log('test')
        console.log(e)
    }
    // const validateForm = ()=>{
    //     //validate email
    //     //validate password
    //     //give instrcutions when validation fails
    // }
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            navigate('/');
        }} />
        <form className={styles.login_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>Start tracking your meal footprint today</h2>
            <InputEmail placeholder='Enter your email' style={{marginBottom:'1em'}} label='Email' /> 
            <InputPassword placeholder='Enter your password' label='Password' />
            <a className={styles.forget_pass} href="/" onClick={(e)=>{
                e.preventDefault()
                navigate('/forget-pw')}}>Forgot password?</a>
            <Button style={{width:'100%'}} onClick={handleSubmit} color='green' content='Log in' type='submit' />
            <p className={styles.no_account}>Don’t have an account? <a href="/" onClick={(e)=>{
                e.preventDefault();
                navigate('/register-info')
            }}>Register Now</a></p>
        </form>
    </div>)
}

export default Login;