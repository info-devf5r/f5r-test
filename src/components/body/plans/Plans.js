import './Plans.css';
import './Responsive.css';


function Plans() {
    return(
        <section className='Plans' id='plans'>
            <div className='planstitle'>
                <h1>MEILLEUR ABONNEMENT IPTV &nbsp; <ion-icon name="tv-outline"></ion-icon></h1>
                <h3>Choisissez votre forfait avec Plans de tarification flexibles</h3>
            </div>
            <div className="priceCards">
                <div className='card'>
                    <div className='head'>
                        <h4>ABONNEMENT</h4>
                        <h2>IPTV SILVER</h2>
                        <div className='quality'>
                            <img src={process.env.PUBLIC_URL + 'assets/img/4k.png'} alt="4K TV"/>
                            <img src={process.env.PUBLIC_URL + 'assets/img/full-hd.png'} alt="FULL HD"/>
                        </div>
                    </div>
                    <div className='body'>
                        <span>10 000 Chaînes IPTV</span>
                        <span>512 Catch-Up TV -15 Jours</span>
                        <span>Multi-Qualité FULL HD UHD 4K-HDR</span>
                        <span>41 000 VOD & SERIES NETFLIX PRIME</span>
                        <span>Multi-Qualité HD 4K-HDR BLURAY 3D</span>
                        <span>Multi-Subtitle + Multi-Language</span>
                        <span>Activation instantanée !</span>
                        <span>Mise à jour gratuite (TV et VOD)</span>
                        <span>EPG des chaînes à jour</span>
                        <span>SMART TV- Enigma2 -MAG</span>
                        <span>Android Tv Box- Apple TV</span>
                        <span>Amazon Fire Stick - Kodi - Ruku</span>
                        <span>VLC- M3U-Tablettes- Smartphones.</span>
                        <span>Serveur stable toujours disponible</span>
                        <span>Compte d'essai 24H</span>
                    </div>
                    <div className='foot'>
                        <div className='price'>
                            <h3>25.00 € | 6 Mois</h3>
                        </div>
                        <div className='contact'>
                            <a href='#test'>Contactez nous</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='head'>
                        <h4>ABONNEMENT</h4>
                        <h2>IPTV GOLD</h2>
                        <div className='quality'>
                            <img src={process.env.PUBLIC_URL + 'assets/img/4k.png'} alt="4K TV"/>
                            <img src={process.env.PUBLIC_URL + 'assets/img/full-hd.png'} alt="FULL HD"/>
                        </div>
                    </div>
                    <div className='body'>
                        <span>10 000 Chaînes IPTV</span>
                        <span>512 Catch-Up TV -15 Jours</span>
                        <span>Multi-Qualité FULL HD UHD 4K-HDR</span>
                        <span>41 000 VOD & SERIES NETFLIX PRIME</span>
                        <span>Multi-Qualité HD 4K-HDR BLURAY 3D</span>
                        <span>Multi-Subtitle + Multi-Language</span>
                        <span>Activation instantanée !</span>
                        <span>Mise à jour gratuite (TV et VOD)</span>
                        <span>EPG des chaînes à jour</span>
                        <span>SMART TV- Enigma2 -MAG</span>
                        <span>Android Tv Box- Apple TV</span>
                        <span>Amazon Fire Stick - Kodi - Ruku</span>
                        <span>VLC- M3U-Tablettes- Smartphones.</span>
                        <span>Serveur stable toujours disponible</span>
                        <span>Compte d'essai 24H</span>
                    </div>
                    <div className='foot'>
                        <div className='price'>
                            <h3>40.00 € | 12 Mois</h3>
                        </div>
                        <div className='contact'>
                            <a href='#test'>Contactez nous</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Plans;