import './Navbar.css';
import './Responsive.css';


function Navbar() {

    function changeVisibility() {
        var classes = document.getElementById('itemslist').classList;
        if (classes.contains('no-active')) {
            document.getElementById('itemslist').classList.remove('no-active');
            document.getElementById('itemslist').classList.add('active');
        }
        else {
            document.getElementById('itemslist').classList.remove('active');
            document.getElementById('itemslist').classList.add('no-active');
        }
    }

    return (
        <nav className='Navbar'>
            <a href='#test'>4k<sub><small>planete</small></sub></a>
            <div className='itemslist no-active' id='itemslist'>
                <div className='items' id='items'>
                    <a href="#home">Accueil</a>
                    <a href="#plans">Abonnements</a>
                    <a href="#channels">Chaines</a>
                    <a href="#vod">VOD</a>
                    <a href="https://wa.me/+212640207557">Contact &nbsp; <i class="fab fa-whatsapp-square"></i></a>
                </div>
            </div>
            <div className='mobile-menu' onClick={changeVisibility}>
                    <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
}

export default Navbar;