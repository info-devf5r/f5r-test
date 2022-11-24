import React from 'react'
import api from '../assets/api.svg';
import dns from '../assets/customdns.svg';
import privacy from '../assets/privacy.svg';
import dashboard from '../assets/rdashboard.svg';
import trial from '../assets/trialacc.svg';
import vip from '../assets/vip.svg';
import ReasonColumn from './ReasonColumn';
import './ResellersReason.css';

const ReasonData=[
  {img: dashboard ,title:'Resellers Dashboard',subtitle:"An easy and simple interface designed to offer the best experiences for our resellers"},
  {img: api ,title:'API Access',subtitle:"Automate accounts creation and management by using our API and connect it to your website"},
  {img: dns ,title:'Custom DNS',subtitle:"Customize your DNS URL to match your brand name to have full control over your accounts"},
  {img: vip ,title:'24/7 VIP Support',subtitle:"Word class 24/7 VIP support available by emails & WhatsApp"},
  {img: trial ,title:'Free Trials Accounts',subtitle:"Unlimited Free IPTV trials generation for your potential customers"},
  {img: privacy ,title:'DATA Privacy',subtitle:"We take our customer's privacy very seriously, we do not store any of your personal information including connections log and IP."}
]

const ResellersReason = () => {
  return (
    <>
      <section id="ccc_reason"><div className="ccc_container"><div className="ccc_header">
        <p className="ccc_title">Why Should You Choose Our IPTV Reseller Program?</p>
         <h2 className="ccc_subtitle">Cccambox is a well-known brand in the IPTV industry. We have been delivering super-fast, highly secure, and the most reliable IPTV service with extraordinary features since 2010 to more than 200 000 users. Here’s what makes the Cccambox TV reseller program an ideal choice.</h2>
         </div>
          <div className="ccc_reasons">
            {ReasonData.map((data, index)=>{
              return(<>
              
              <ReasonColumn img={data.img} title={data.title} subtitle={data.subtitle} key={index} ></ReasonColumn>
              </>)
            })}
                     </div>
                     </div>
                     </section>

    </>
  )
}

export default ResellersReason