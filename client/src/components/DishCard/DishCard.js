import React,{useState} from "react";
import styles from './DishCard.module.css'
import CarbonLabel from "../common/CarbonLabel/CarbonLabel";
import { FiDelete } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
//TODO: the swipe annimation needs to be optimized, currently its just usable but looks bad
function DishCard({thumbnailURL,dishName,providingVendor,dishPrice,priceUnit,carbonLevel,footprintNumber,style}){
    const [startX, setStartX] = useState(0);
    const [moveX, setMoveX] = useState(0);
    const [isSwiped, setIsSwiped] = useState(false);
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
      };
    
      const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        const difference = startX - currentX;
        if (difference > 0) { // Only swipe left
          setMoveX(difference);
        }
      };
    
      const handleTouchEnd = () => {
        const swipeThreshold = 50; // Minimum distance to consider it a swipe
        if (moveX > swipeThreshold) {
          setIsSwiped(true);
        } else {
          setIsSwiped(false);
        }
        setMoveX(0); // Reset moveX after swipe action is determined
      };
    
      const resetSwipe = () => {
        setIsSwiped(false);
      };
    return (
    <div style={style} className={styles.container} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className={styles.card} style={{
        transform: `translateX(${isSwiped ? '-130px' : '0px'})`,
        transition: 'transform 0.3s ease-out',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
            <div className={styles.thubnail_container}>
              <img className={styles.thubnail} src={thumbnailURL} alt={dishName} />
            </div>
            
            <span className={styles.dishName}>{dishName}</span>
            <span className={styles.providingVendor}>{`From ${providingVendor}`}</span>
            <span className={styles.dishPrice}>{`${priceUnit} ${dishPrice}`}</span>
            <CarbonLabel className={styles.label} carbonLevel={carbonLevel} footprintNumber={footprintNumber} withNumber={true} />
        </div>
        {isSwiped && (
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          display: 'flex',
          height: '100%'
        }}>
          <button  onClick={resetSwipe} style={{ marginRight: '5px',fontSize:'1.5em',backgroundColor:'#FF5060',color:'white',padding:'.8em',border:'none' }}><CiEdit /></button>
          <button style={{fontSize:'1.5em',backgroundColor:'#3D8BFD',color:'white',padding:'.8em',border:'none'  }}><FiDelete/></button>
        </div>
      )}
    </div>
    )
}

export default DishCard;