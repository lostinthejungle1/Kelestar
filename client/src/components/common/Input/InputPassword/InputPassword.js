import React,{useState} from "react";
import './InputPassword.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 


function InputPassword({placeholder,label,style}){
    const [passwordShown,setPasswordShown] = useState(false);
    const tooglePasswordShown = ()=>{
        setPasswordShown(!passwordShown);
    }
    return (
        <div className="inputPassword" style={style}>
            <label className="">{label}</label>
            <div className="password_container">
                <input type={passwordShown?'text':'password'} placeholder={placeholder} />
                <button onClick={tooglePasswordShown} className='toggle_password_visibility'>
                    {passwordShown?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </button>    
            </div>
            
        </div>
    )
}

export default InputPassword;