import './Header.css';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';



function Header() {
    return (
        <header className='Header'>
            <Navbar/>
            <Hero />
        </header>       
    );
}


export default Header;