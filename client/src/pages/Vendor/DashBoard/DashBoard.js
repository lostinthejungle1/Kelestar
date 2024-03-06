import React,{useState} from "react";
import styles from './DashBoard.module.css';
import VendorTab from "../../../components/VendorTab/VendorTab";
import DashboardTile from "../../../components/DashboardTile/DashboardTile";


import { Pie,Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { IoIosNotifications } from "react-icons/io";
import { MdCo2 } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";

// tile icons
import { AiOutlineMoneyCollect } from "react-icons/ai";


function DashBoard(){
   
    const data =  {
        labels: ['Beef', 'Mutton', 'Poultry', 'Rice', 'Potato', 'Others'],
        datasets: [{
          label: 'percentage%',
          data: [50, 20, 10, 5, 15, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };

      const options = {
        plugins: {
            title:{
                display:true,
                text:'Carbon footprint by ingreident',
            },
            legend:{
                display:false
            }
            
        },
      };

    return (
        <div>
            <div className={styles.main_content}>
              <header>
                <h1 className={styles.title} >Vendor Dashboard</h1>
                <IoIosNotifications className={styles.notify} />  
              </header>
              
              
              <div className={styles.tiles}>
                  <DashboardTile className={styles.income_tile} Icon={AiOutlineMoneyCollect} iconStyle={{color:'#FFBB38',backgroundColor:'#FFF5D9'}} title='My income' value='RM 18888' />
                  <DashboardTile className={styles.footprint_tile} Icon={MdCo2} iconStyle={{color:'#74B318',backgroundColor:'#E6FFDF'}} title='Footprint' value='1673 Kg' />
                  <DashboardTile className={styles.ranking_tile} Icon={FaRankingStar} iconStyle={{color:'#FFBB38',backgroundColor:'#FFF5D9'}} title='Ranking' value='#1' />
                  <DashboardTile className={styles.green_meals_tile} Icon={AiOutlineMoneyCollect} iconStyle={{color:'#74B318',backgroundColor:'#E6FFDF'}} title='Green meals' value='10' />
              </div>
              {/* some visualization diagrams */}
              <div style={{width:'60%'}}>
                  <Pie data={data} options={options} />    
              </div>
              <Bar data={data} options={options} />
            </div>
            <VendorTab page='dashboard' />
        </div>
    )
}

export default DashBoard;
