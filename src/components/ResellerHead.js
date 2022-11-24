import React from 'react'
import darkHeaderImg from "../assets/ResellerHeadDark.svg"
import lightHeaderImg from "../assets/ResellerHeadLight.svg"
import "./ResellerHead.css";
const ResellerHead = () => {
    return (
        <>
        
            <section id="ccc_head"><div className="ccc_container"><div className="ccc_column"><div className="ccc_row"><h1 className="ccc_title">the World’s <span>Best</span> IPTV Reseller Program</h1> <h2 className="ccc_subtitle">Earn Easy Money by Selling A Super-Fast, Super-Secure, And The Most Reliable IPTV Service.</h2></div> <div className="ccc_row"><button className="ccc_btn" onClick={()=>window.location.href='https://maxcotv.com/store/resellers'}>
                BECOME A RESELLER
                <span>Instant Access</span></button></div></div> <div className="ccc_column">
                    <img id='reseller_dark_head' src={darkHeaderImg} alt="benef" rel="preload" />
                    <img id='reseller_light_head' src={lightHeaderImg} alt="benef" rel="preload" />
                    </div></div></section>
        </>
    )
}

export default ResellerHead