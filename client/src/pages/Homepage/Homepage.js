import React from 'react';
// import {Button } from 'antd';
import logo from './logo-carbon.png'
import './Homepage.css'
import Button from '../../components/common/Button/Button';
import {useNavigate} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";


function Homepage(){
    const navigate = useNavigate();
    return (
        <div className='container'>
            <RxHamburgerMenu style={{position:'absolute',top:'1.5em',right:'1.5em',fontSize:'1.5em'}} />
            <h1>Kelestar</h1>
            <img className='logo' src={logo} alt='green carbon label' />
            <p className='intro'>A footprint disclosure platform that aims to raise public awareness of food environmental impacts at Monash University Malaysia</p>
            <Button style={{width:'80%'}} color='green' content='Login/Register' onClick={()=>{
                console.log('working');
                navigate('/login')}} />
        </div>
    )
}

export default Homepage;