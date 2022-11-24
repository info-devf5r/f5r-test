import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';
import './Responsive.css';

function Carousel() {
    const options = {
        loop: true,
        responsive:{
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
      };
    return (
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-1.jpeg'} alt='IPTV'/>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-2.jpeg'} alt="IPTV" width={448}/>
            </div>
            <div className='item'>
                <img src={process.env.PUBLIC_URL + '/assets/img/carousel-3.jpeg'} alt="IPTV"/>
            </div>
        </OwlCarousel>
    );
}


export default Carousel;