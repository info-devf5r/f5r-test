import React from 'react'
import "./Discover.css"
import dollar from "../assets/dollar.svg";

import tv from "../assets/Tv.png"
const Discover = () => {
  return (
    <>
    <div id="ccc_discover">
    <h1 className='ccc_title' >DISCOVER THE #1 IPTV PROVIDER</h1>
    <h2 class="ccc_subtitle">
    Today, we are revolutionizing the way you access IPTV. With +8000 channels and thousands of VOD, you'll be watching IPTV in a radically new, intelligent, and intuitive way.
  </h2>
  <div className='ccc_joinus ccc_center'>
    <button onClick={()=>window.location.href='https://maxcotv.com/store/trials'} class="join">
      24 HOURS FREE TRIAL
      <span>Instant Access</span></button>
      <div>
        <img src={dollar} alt="moneyback"/> <p class="">
      7-Days Money-Back Guarantee
    </p>
    </div>
    <div>
        <img src={tv} height="1044px" width="1930px" class="ccc_tv"/>
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Discover