import React from 'react'
import Layout from './Layout'
import "./App.css"
import "./components/lightMode.css"
import "./components/Navbar.css"
import DesktopNavbar from './components/DesktopNavbar'
import DivScroll from './components/DivScroll'
// import MobileNavbar from './components/MobileNavbar'
// import { useMediaQuery } from 'react-responsive'
// import { Button } from '@mui/material'
// import zIndex from '@mui/material/styles/zIndex'
import Footer from './components/Footer'

const App = () => {
 

  

  return (
    <>
      {/* navbar */}
      <DivScroll></DivScroll>
      <DesktopNavbar></DesktopNavbar>
      <Layout>
      </Layout>
      <Footer></Footer>
      
    </>
  )
}

export default App