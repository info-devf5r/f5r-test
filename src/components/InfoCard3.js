import React from 'react'
import "./InfoCard3.css";
import mainImg3 from '../assets/infoCard3.png'
import dollar from "../assets/dollar.svg";
const InfoCard3 = () => {
    return (
        <section id="info3_Section"><div className="ccc_container"><div className="ccc_column"><p className="ccc_title">
            Thousands<span>of Movies &amp; Series</span></p> <h2 className="ccc_info">We’ve made the impossible possible, with a full library of thousands of Movies &amp; Series (tv shows) you will be able to watch trailers, read reviews and get shows' seasons details, get the latest information on upcoming movies releases. Choosing the right movie has never been so easy.</h2> <div className="ccc_joinus ccc_info3"><button onClick={()=>window.location.href='https://maxcotv.com/store/subscriptions'} className="join">
                JOIN US NOW
                <span>Instant Access</span></button> <div><img src={dollar} className='dolimg' alt="moneyback" /> <p className="black">
                    7-Days Money-Back Guarantee
                </p></div></div></div> <div className="ccc_column"><div><img  src={mainImg3} className="ccc_app" lazy="loaded" /></div></div></div></section>
    )
}

export default InfoCard3