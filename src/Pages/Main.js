import React from 'react'
import './Main.css';
import logo from "../assets/maxco.png"
import website from '../assets/websiteIcon.svg';
import userIcon from '../assets/userIcon.svg';
import checkout from '../assets/checkout-icon.svg';


import websiteLight from '../assets/websiteIconLight.svg';
import userIconLight from '../assets/userIcon-Light.svg';
import checkoutLight from '../assets/checkout-icon-Light.svg';

//import { BiWorld } from 'react-icons/bi';

const Main = () => {
  return (
    <div id="ccc_home"><div className="ccc_container"><img src={logo} alt="logo" className="ccc_logo" /> <h1 className="ccc_title">
      Welcome to the official cccambox proxy, if our website main url is not
      available in google you can then use one of the links below to access
      our services. Enjoy 🎉
    </h1> <div className="ccc_choices"><a href="#" ><button className="ccc_choice"><div className="ccc_container">

      <img src={website} id='webDark'  alt="choice" className="ccc_img"  />
      <img src={websiteLight} id='webLight' alt="choice" className="ccc_img" />


      <p className="ccc_title">Website</p></div></button></a

    ><a href="#" ><button className="ccc_choice"><div className="ccc_container">

      <img src={userIcon} id='userIconDark' alt="choice" className="ccc_img" />
      <img src={userIconLight} id='userIconLight' alt="choice" className="ccc_img" />

      <p className="ccc_title">Members Area</p></div>

    </button></a><a href="#" ><button className="ccc_choice"><div className="ccc_container">

      <img src={checkout} id='checkoutDark' alt="choice" className="ccc_img" />
      <img src={checkoutLight} id='checkoutLight' alt="choice" className="ccc_img" />

      <p className="ccc_title">Checkout</p></div></button></a></div></div></div>
  )
}

export default Main