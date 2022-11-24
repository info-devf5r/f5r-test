import React from 'react'

import './BoxStick.css';
import download from '../assets/download.svg';
import iptv from '../assets/iptv.svg';
import android from '../assets/android.svg';
import BoxSetup from '../assets/BoxSetup.png'

import MediaQuery from 'react-responsive'

const BoxStick = () => {
  return (
    <div id="ccc_box"><div class="ccc_box"><h2 class="ccc_title">Get IPTV on your TV box or stick.</h2>
    <h2 class="ccc_subtitle">Plug &amp; Play on your TV</h2></div> 
    <div class="ccc_box"><p class="ccc_name">
    Android TV &amp; FiRE TV


    <img src={android} alt="android"/>

</p> 




    <div class="ccc_buttons">
    <button class="ccc_download"><img src={iptv} alt="download"/>
    Tivimate
    <img src={download} alt="download"/></button>

  
    <button class="ccc_download"><img src={iptv} alt="download"/>
    IPTV Smarters
  <img src={download} alt="download"/></button> 


  <button class="ccc_download"><img src={iptv} alt="download"/>
  Purple IPTV
  <img src={download} alt="download"/></button>
  </div>
  
  
  
  
  
  
  </div> <div class="ccc_box"><div class="ccc_notice"><h2 class="ccc_subtitle">
      Others app in the app store can work too, however, we recommend the ones above as they are the most stable.
    </h2></div></div> <div class="ccc_box"> <MediaQuery minWidth={769}> <img src={BoxSetup}  class="ccc_app" lazy="loaded"/> </MediaQuery></div></div>
  )
}

export default BoxStick