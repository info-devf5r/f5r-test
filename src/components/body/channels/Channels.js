import './Channels.css';
import './Responsive.css';


function Channels() {
    return (
        <div>
        <section className='Channels' id="channels">
            <h1>
                IPTV est doté de plus de 138 bouquets <br />
                (CanalSat France, beIN Sports, SKY UK-IT-DE ,Movistar .etc..)
            </h1>
        </section>
        <div className='channelsList'>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/beinsport.png'} alt='beinsport'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/sky.png'} alt='sky'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/nos.png'} alt='nos'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/polsat.png'} alt='polsat'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/fransat.png'} alt='fransat'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/digiturk.png'} alt='digiturk'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/canalsat.png'} alt='canalsat'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/canaldigital.png'} alt='canaldigital'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/canalafrique.png'} alt='canalafrique'/></div>
        </div>
        <br />
        <div className="vod" id="vod">
                <div className='vodCard'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/netflix.jpeg'} alt='Netflix'/>
                </div>
                <div className='vodCard'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/prime.jpeg'} alt='Prime'/>
                </div>
                <div className='vodCard'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/shahid.jpeg'} alt='Shahid'/>
                </div>
        </div>
        <div className='watchingTV'>
                <img src={process.env.PUBLIC_URL + '/assets/img/watchTV.jpg'} alt='Watch TV'/>
        </div>
        </div>
    );
}


export default Channels;