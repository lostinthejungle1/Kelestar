import React from "react";
import styles from './Modal.module.css';
import { IoClose } from "react-icons/io5";

function Modal({isOpen,children,onClose}){
    if (!isOpen) return null;
    return(
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                {children}
                <span className={styles.close_btn} onClick={onClose}><IoClose /></span>
            </div>
        </div>
    )
}

export default Modal;