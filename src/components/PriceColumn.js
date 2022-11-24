import React from 'react'
import downIcon from '../assets/chevronDown.svg';
const PriceColumn = (props) => {
  return (
   <>
   <div className='ccc_price'>
        <div className='ccc_contain'>
        <div className='ccc_box'>
        {props.price}
        </div>
        <p className='ccc_info'>
        Top-up amount
        </p>
        </div>
        {/* down icon  */}
        <img src={downIcon} alt=""/>
        <div  className="ccc_contain"><div style={{background:"#6EC5B8"}} className="ccc_box">{props.credit}</div> <p className="ccc_info">Credits <span>( {props.info})</span></p></div>
      </div>
   </>
  )
}

export default PriceColumn