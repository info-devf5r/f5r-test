import React from 'react'
import Pricing from '../components/Pricing';
import ResellerHead from '../components/ResellerHead';
import ResellersReason from '../components/ResellersReason';
//import FAQ  from '../components/Faq'
import ResellerFAQ from '../components/ResellerFAQ';
const Resellers = () => {
  return (
  <>
  <div className='ccc_resellers' style={{padding:"165px 0px 0px"}}>
  <ResellerHead></ResellerHead>
  <ResellersReason></ResellersReason>
  <Pricing></Pricing>
  <ResellerFAQ></ResellerFAQ>
  
  </div>

  </>
  )
}

export default Resellers