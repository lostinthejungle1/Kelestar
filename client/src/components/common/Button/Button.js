import React from "react";
import styles from './Button.module.css'

function Button({color,content,onClick,type,style}){
    return (<>
        <button style={style} className={styles[color]} onClick={onClick} type={type?type:'button'}>{content}</button>
    </>)
}

export default Button;