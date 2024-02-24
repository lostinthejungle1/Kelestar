import React,{useState} from "react";
import styles from './ThumbnailUploader.module.css';
import { GrUpload } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";



function ThumbnailUploader({style,label}){
    const [thumbnail,setThumbnail] = useState(null);
    const [imageFile,setImageFile] = useState(null);

    const handleFileChange = e=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setThumbnail(reader.result);
            }
            reader.readAsDataURL(file);
            setImageFile(file);
            console.log(imageFile);
        }
    }
    
    const triggerFileInputClick = ()=>{
        document.getElementById('file-input').click();
    }

    return (
        <div className={styles.thumbnail_uploader} style={style}  >
            <label>{label}</label>
        
            <div className={styles.preview}>
                {thumbnail?<img src={thumbnail} alt="preview"/>:''}
                {thumbnail?<RiDeleteBin2Line className={styles.remove_preview} onClick={()=>setThumbnail(null)} />:''}
            </div>
            <div className={styles.uploader} onClick={triggerFileInputClick}>
                <input id="file-input" className={styles.file_input} type="file" accept="image/*" onChange={handleFileChange} />
                <GrUpload className={styles.upload_icon} />
                <p>Upload your thumbnail here</p>
            </div>
         
            
        </div>
    )
}

export default ThumbnailUploader;
