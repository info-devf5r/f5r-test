import React from 'react';
import mobile from '../assets/mobileSetup.png';
import iptv from '../assets/iptv.svg';
import download from '../assets/download.svg';
import android from '../assets/android.svg';
import apple from '../assets/apple.svg';
import './MobSetup.css';
const MobSetup = () => {
    return (
        <div id="ccc_mobile">
            <div class="ccc_box"><h2 class="ccc_title">Get IPTV on your Mobile or Tablet</h2> <h2 class="ccc_subtitle">A collection of the best iptv apps you can use</h2></div>

            <div class="ccc_box"><p class="ccc_name">
                IOS
                <img src={apple} alt="apple" /></p> <div class="ccc_buttons">

                    <button class="ccc_download">
                        <img src={iptv} alt="download" />
                        GSE IPTV
                        <img src={download} alt="download" />
                    </button>


                    <button class="ccc_download">
                        <img src={iptv} alt="download" />
                        IPTV Smarters
                        <img src={download} alt="download" />
                    </button></div></div>

            <div class="ccc_box"><p class="ccc_name">
                ANDROID
                <img src={android} alt="android" /></p>

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


                    <button class="ccc_download"><img src={iptv} alt="download" />
                        Purple IPTV
                        <img src={download} alt="download" /></button>

                </div></div>

            <div class="ccc_box">
                <img src={mobile} class="ccc_app" lazy="loaded" />
            </div></div>

    )
}

export default MobSetup