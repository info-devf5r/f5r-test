import React from 'react'
import logo from '../assets/logoNav.png'
import Button from '@mui/material/Button';
import {  Link } from "react-router-dom";
import ThemeSwitcher, { MobThemeSwitcher } from './ThemeSwitcher';
const MobileNavbar = (props) => {
  return (
    <>
      <div onClick={props.clickhandler} id="mob-navbar"  className={ (props.active==="true")? `slide-open`:`slide-close`}>
        <div className='upper-Container' >
          <ul className=' nav-links mob-nav-links'>
            {/* LOGO */}
           <Link to = '/'><img className='mob-logo' src={logo} alt="logo" /></Link> 
            {/* NAV LINKS */}
            <li> <Link style={{textDecoration:'none'}} className='nav-link mob-nav-link' to='/'> HOME </Link> </li>
            <li><Link style={{textDecoration:'none'}} className='nav-link mob-nav-link' to='/Channel'> CHANNEL </Link></li>
            <li><Link style={{textDecoration:'none'}} className='nav-link mob-nav-link' to='/setup'> SETUP </Link></li>
            <li><Link style={{textDecoration:'none'}} className='nav-link mob-nav-link' to='/resellers'> RESELLERS </Link></li>
         
            <Button className=' login-btn btn-mob' variant="contained" onClick={()=>window.location.href='https://maxcotv.com/login.php'}>Log in</Button>
              <Button className='order-btn  btn-mob' variant="contained" onClick={()=>window.location.href='https://maxcotv.com/store/subscriptions'}>Order Now</Button>
              <hr className='mob-hr'></hr>

              {/* <div className="switchMode">
            <i className="fa-solid fa-sun switch-icon "></i> <p className='mode-text'>Dark Mode</p>
          
            </div> */}
            <MobThemeSwitcher></MobThemeSwitcher>
           
            

              
          </ul>
          {/* <hr className='mob-hr'></hr> */}
          {/* <div className='lower-container buttons'>
            <div className='end-nav btn-grp-mob'>
              <Button className=' login-btn btn-mob' variant="contained">Log in</Button>
              <Button className='order-btn  btn-mob' variant="contained">Order Now</Button>
              <div className="switchMode">

<i className="fa-solid fa-sun switch-icon "></i> <p className='mode-text'>Dark Mode</p>
</div>
            </div>
            <div className='tool-nav mob-icon'>
              <div className="switchMode">

                <i className="fa-solid fa-sun switch-icon "></i> <p className='mode-text'>Dark Mode</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MobileNavbar