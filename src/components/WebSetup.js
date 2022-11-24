import React from 'react'
import './WebSetup.css';
import monitor from '../assets/webSetupMain.png';
import browser from '../assets/browserWeb.png'
const WebSetup = () => {
  return (
    <div id="ccc_web"><div class="ccc_box"><h1 class="ccc_title">Get IPTV on your browser</h1> <h2 class="ccc_subtitle">Indulge in great TV on all your devices.</h2> <button class="ccc_btn_open" onClick={()=>window.location.href='https://maxcotv.com/webplayer'}>
        OPEN IN BROWSER
        <span>REQUIRE ACTIVE SUBSCRIPTION</span></button></div> <div class="ccc_box"><p class="ccc_info">Our web app works great on these browsers:</p> <img src={browser} alt="browsers" height="86px" width="308px" class="ccc_img"/> <p class="ccc_notice">* Minimum 8Mbit/s internet connection.</p></div> <div class="ccc_box"><img   src={monitor}  class="ccc_app" lazy="loaded"/></div></div>
  )
}

export default WebSetup