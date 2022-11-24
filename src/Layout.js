import React from 'react'

import Channels from './Pages/Channels' 
import Home from './Pages/Home';
import {  Routes, Route } from "react-router-dom";
import Resellers from './Pages/Resellers';
import Main from './Pages/Main'
import Setup from './Pages/Setup';
const Layout = () => {
  return (
    <React.Fragment>
      
    
    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Channel" element={<Channels></Channels>}/>
    <Route path="/Resellers" element={<Resellers></Resellers>}/>
    <Route path="/Setup" element={<Setup></Setup>}/>
    <Route path="/Main" element={<Main></Main>}/>
    
    </Routes>
        
   
    
      
       
    
    
  </React.Fragment>

  )
}

export default Layout