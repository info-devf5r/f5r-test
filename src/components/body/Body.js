import './Body.css';
import './Responsive.css';
import Channels from './channels/Channels';
import Features from './features/Features';
import Plans from './plans/Plans';
import WhatsappBtn from './whatsappbtn/WhatsappBtn';


function Body() {
    return (
        <div className='Body'>
            <Features />
            <div className='watchtvtwo'>
                <img src={process.env.PUBLIC_URL + '/assets/img/watchTV2.jpeg'} alt="WatchTwo"/>
            </div>
            <Plans />
            <Channels />
            <div className='paiement'>
                <center><h1>Il existe de nombreux moyens de paiement</h1></center>
                <br />
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/cih.jpg'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/paypal.jpg'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/moneygram.png'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/ria.png'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/western.webp'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/Wafacash.jpg'} alt='CIH'/></div>
                <div><img src={process.env.PUBLIC_URL + '/assets/img/paie/Cashplus.jpg'} alt='CIH'/></div>
            </div>
            <WhatsappBtn />
        </div>
    );
}


export default Body;