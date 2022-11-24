import React from 'react';
import tv from '../assets/TvSetup.png';
// import lg from '../assets/LG.svg';
import samsung from '../assets/samsungIcon.svg';
import download from '../assets/download.svg';
import iptv from '../assets/iptv.svg';
import './Tv.css';



const Tv = () => {
    return (
        <>
            <div id="ccc_tv"><div class="ccc_box"><h2 class="ccc_title">Get IPTV on your TV</h2>
             <h2 class="ccc_subtitle">Intall, grap your remote and press play.</h2></div>
                <div class="ccc_box">
                    <p class="ccc_name">LG<img src={samsung} alt="apple" /></p>
                    <div class="ccc_buttons">

                        <button class="ccc_download">
                            <img src={iptv} alt="download" />
                            Smart IPTV
                            <img src={download} alt="download" /></button>



                        <button class="ccc_download">
                            <img src={iptv} alt="download" />
                            DuplexPlay
                            <img src={download} alt="download" /></button>
                    </div></div>



                <div class="ccc_box"><p class="ccc_name">
                    SAMSUNG
                    <img src={samsung} alt="android" /></p>

                    <div class="ccc_buttons"><button class="ccc_download"><img src={iptv} alt="download" />
                        GSE IPTV
                        <img src={download} alt="download" /></button>



                        <button class="ccc_download">
                            <img src={iptv} alt="download" />
                            IPTV Smarters
                            <img src={download} alt="download" /></button>


                        <button class="ccc_download"><img src={iptv} alt="download" />
                            Tivimate
                            <img src={download} alt="download" /></button>

                    </div></div>







                <div class="ccc_box"><div class="ccc_notice"><h1 class="ccc_title">
                    Other TV?
                </h1> <h2 class="ccc_subtitle">
                        If your TV has an android TV on it, you can check the android page otherwise please contact our support to check if there is any compatible app with your TV.
                    </h2></div></div> <div class="ccc_box"><img src={tv} class="ccc_app" lazy="loaded" /></div></div>
        </>
    )
}

export default Tv