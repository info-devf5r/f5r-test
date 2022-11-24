import chromecast from '../assets/chromecast.svg'
import airplay from '../assets/airplay.svg'
import miracast from '../assets/miracast.png'

import './Casting.css'
const Casting = () => {
    return (
        <>
           <div id="ccc_cast"><div class="ccc_box"><h2 class="ccc_title">Cast our IPTV with any TV screen.</h2> <h2 class="ccc_subtitle">Casting work on most apps and allows you to stream content from your smart device.</h2></div> <div class="ccc_box"><p class="ccc_name">Google Chromecast.</p> <img src={chromecast} alt="chromecast" class="ccc_img"/></div> <div class="ccc_box"><p class="ccc_name">APPLE airplay</p> <img src={airplay} alt="airplay" class="ccc_img"/></div> <div class="ccc_box"><p class="ccc_name">MIRACAST</p> <img src={miracast} alt="miracast" class="ccc_img"/></div> <div class="ccc_box"><div class="ccc_notice"><h2 class="ccc_subtitle">
        *Casting only works if devices are connected to the same local network.
      </h2></div></div></div>


        </>
    )
}

export default Casting;