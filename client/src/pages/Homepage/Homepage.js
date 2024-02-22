import React from 'react';
// import {Button } from 'antd';
import logo from './logo-carbon.png'
import './Homepage.css'
import Button from '../../components/common/Button/Button';


function Homepage(){
    return (
        <div className='container'>
            <h1>Kelestar</h1>
            <img className='logo' src={logo} alt='green carbon label' />
            <p className='intro'>A footprint disclosure platform that aims to raise public awareness of food environmental impacts in Monash University Malaysia</p>
            <Button color='green' content='Login/Register' />
        </div>
    )
}

export default Homepage;