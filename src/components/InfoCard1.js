import React from 'react'
import "./InfoCard1.css";
import  mainImg from "../assets/infoCard1.png";
import listIcon from "../assets/listImage.svg";
import arrow from "../assets/rightArrowImage.svg";
import {Routes, Route, useNavigate} from 'react-router-dom';

const InfoCard1 = () => {
  
  return (
   <>
   <section id='info1_Section'>
    <div className='ccc_container'>
        <div className='ccc_column'>
        <p class="ccc_title">
        8000+<span>Live TV Channels</span></p>
        <h2 class="ccc_info">With MaxCo TV we can offer you access to more than 8000 IPTV channels of all countries around the world, we want to make sure that you won't be disappointed</h2>

        
            <button onClick={()=>window.location.href='/#/Channel'} class="ccc_discover"><img src={listIcon}  alt="list" />
          Discover the channels list
          <img src={arrow} alt="arrow"/>
          <a></a>
          </button>
        </div>

        <div class="ccc_column">
            <div>
            <img src={mainImg}  class="ccc_app" />
        </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default InfoCard1