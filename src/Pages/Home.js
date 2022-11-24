import React from 'react'
import Discover from '../components/Discover'
import Faq from '../components/Faq'
import Features from '../components/Features'
//import Footer from '../components/Footer'
//import Footer from '../components/Footer'
import GuranteeCard from '../components/GuranteeCard'
import {History} from '../components/History'
import InfoCard1 from '../components/InfoCard1'
import InfoCard2 from '../components/InfoCard2'
import InfoCard3 from '../components/InfoCard3'
import Reviews from '../components/Reviews'
import Uptime from '../components/Uptime'
import  './Home.css'

const Home = () => {

  return (
   <>
   <div className='Home_Section'>  
  <Discover ></Discover>
  <Features></Features>
  <History></History>
  <Uptime></Uptime>
  <InfoCard1></InfoCard1>
  <InfoCard2></InfoCard2>
  <InfoCard3></InfoCard3>
  <Reviews></Reviews>
  <GuranteeCard></GuranteeCard>
  <Faq></Faq>


 
  
  
   </div>
   {/* <Footer></Footer> */}
   </>
  )
}

export default Home