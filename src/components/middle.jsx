import React from 'react'
import tv from '../pictures/iptv.png';
import tv2 from '../pictures/iptvmb2.png';
import arrowhead from "../pictures/arrowhead.png"
import logo2 from '../pictures/TFAREJ-IPTV.png';
import checkmark from '../pictures/check-mark.png';
import { useNavigate } from "react-router-dom";
import Plans from './plans';


const Main = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className='page1 mainContainer'>
        <div className='mid middleLeft'>
          <div>
            <div className="midh1">
              <h1>Beneficier du meilleur</h1>
              <h1><span>IPTV</span> au Maroc</h1>
            </div>
            <p>
              Achetez un abonnement IPTV avec jusqu'à 20000 chaînes TV et plus de 50000 VOD avec toutes les qualités FHD et 4K, de toutes les chaînes de télévision et services de streaming célèbres comme Netflix, HBO Max, Bein sports etc...
            </p>
            <div className="leftBottom">
              <a className='plansB' onClick={() => { 
                const anchor = document.querySelector('#plans')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' }) }} tabIndex="0">Nos plans</a> &nbsp; &nbsp;
              <a className='essaieB' onClick={() => { navigate("/iptv/essaie") }} tabIndex="0">Essaie 24h</a>
            </div>
          </div>

        </div>
        <div className='mid middleRight pc'>
          <img src={tv} className='tv' alt='IPTV TV'/>
        </div>
        <div className='mid middleRight mobile'>
          <img src={tv2} className='tv' alt='IPTV TV'/>
        </div>
      </div>
      <div className='page2 maincontainer'>
        <div className='arrowdiv'>
          <h1>Nos plans <span>IPTV</span></h1>
          <p><img src={arrowhead} className="arrow" alt='arrow'/></p>
        </div>
        <Plans />
      </div>
    </div>

  )
}

export default Main