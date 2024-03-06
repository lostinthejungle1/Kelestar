import React from "react";
import Button from "../../../../components/common/Button/Button";
import InputText from "../../../../components/common/Input/InputText/InputText";
import InputTextarea from "../../../../components/common/Input/InputTextarea/InputTextarea";
import ThumbnailUploader from "../../../../components/common/Input/ThumbnailUploader/ThumbnailUploader";
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate,useParams} from 'react-router-dom';
import styles from './RegisterVendor.module.css';

function RegisterVendor(){
    //TODO: state would be all the info used to register
    const navigate = useNavigate();
    const handleSubmit = e=>{
        e.preventDefault();
        navigate('/register-role')
    }
    const {status} = useParams();
    console.log(status)
    //TODO: Validate form 
    return (<div >
        <IoIosArrowBack className={styles.return_btn} onClick={()=>{
            if(status==='register'){
                navigate('/register-role');
            }else if(status==='edit'){
                navigate('/vendor/homemenu');
            }
        }} />
        {/* update classname */}
        <form className={styles.register_vendor_form} onSubmit={handleSubmit} novalidate>
            <h2 className={styles.instruction}>{status==='register'?"Let’s create your vendor detail page":'Edit vendor detail page'}</h2>
            {/* TODO: more logics here, loading vendor uploded info if its editing the page*/}
            <InputText placeholder='Enter your vendor name' label='Vendor name:' /> 
            <ThumbnailUploader label="Thumbnail image:" />
            <InputTextarea placeholder='Enter your vendor description' label='Vendor description:' cols='10' />

            <Button style={{width:'100%'}} onClick={handleSubmit} color='green' content='Next step' type='submit'  />
            <p className={styles.preview}>
                <a href="/" onClick={(e)=>{
                e.preventDefault();
                navigate('/vendor/register-menu')
            }}>Preview:See how it looks like?</a></p>
        </form>
    </div>)
}

export default RegisterVendor;