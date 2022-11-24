import React from 'react'
import dollar from "../assets/dollar.svg";
import mainImg2 from "../assets/infoCard2.png"
import "./InfoCard2.css"
const InfoCard2 = () => {
    return (
        <section id='info2_Section'>
            <div className="ccc_container"><div className="ccc_column"><p className="ccc_title">
                EPG<span>in Most Channels</span></p> <h2 className="ccc_info">EPG is one of our most requested features and providing a full and updated EPG has been our priority since day one. We can proudly say that we have been able to cover the majority of our IPTV channels.</h2> <div className="ccc_joinus ccc_info2"><button onClick={()=>window.location.href='https://maxcotv.com/store/subscriptions'} className="join">
                    JOIN US NOW
                    <span>Instant Access</span></button> <div>
                        <img className='dolimg' src={dollar} alt="moneyback" /> <p className="black">
                            7-Days Money-Back Guarantee
                        </p></div></div></div> <div className="ccc_column"><div><img  src={mainImg2} className="ccc_app" lazy="loaded" /></div></div></div>
        </section>
    )
}

export default InfoCard2