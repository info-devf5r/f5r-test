import React from 'react'
import CostingColumn from './CostingColumn'
import PriceColumn from './PriceColumn'
import './Pricing.css'
// import downIcon from '../assets/chevronDown.svg'
// 100 300 500 1000
const PricingData=[
  {price:'₤100',credit:'100',info:'₤1 per credit'},
  {price:'₤300',credit:'300',info:'₤1 per credit'},
  {price:'₤500',credit:'500',info:'₤1 per credit'},
  {price:'₤1000',credit:'1000',info:'₤1 per credit'}

]
const CostingData=[
  {month:`1 ${" "+'Month'}`,credit:'5'},
  {month:`3 ${" "+'Months'}`,credit:'10'},
  {month:`6 ${" "+'Months'}`,credit:'15'},
  {month:`12 ${" "+'Months'}`,credit:'20'}
]
const Pricing = () => {
  return (
    <>
    <section id='ccc_pricing'>
<div className='ccc_container'>
  <div className='ccc_notice'> MOST POPULAR</div>
  <div className='ccc_head'>
    <p className='ccc_title'>Pay-As-You-Go Pricing</p>
    <h2 className="ccc_subtitle">Our Pay-as-you-go pricing structure is very simple and the discount is based on the top-up amount, the more you buy, the more the price will be lowered.<br/><br/>We use this system to encourage our resellers to increase their sales without the fear to have a big amount of expenses.<br/><br/>The credits never expire and this plan is not subjected to any commitment.</h2>
    <div className='ccc_pricing'>

{PricingData.map((data,index)=>{
return(<>

<PriceColumn price={data.price} credit={data.credit}info={data.info} key={index}></PriceColumn>

</>)
     
})}


     </div>

  </div>
  {/* costing */}

  <div className='ccc_cost'>
    <h1 className='ccc_title'>Packages Cost for Resellers</h1>
    <div className='ccc_costs'>
   {CostingData.map((data,index)=>{
    return(<>
    <CostingColumn month={data.month} credit={data.credit} key={index} ></CostingColumn>
    </>)
   })}
    </div>
  </div>
  <button id='ccc_btn' className="ccc_btn" onClick={()=>window.location.href='https://maxcotv.com/store/resellers'}>
          SUBSCRIBE TO PAY-AS-YOU-GO
          <span>Instant Access</span></button>
</div>
    </section>
    </>
  )
}

export default Pricing