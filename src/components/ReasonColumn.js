import React from 'react'



const ReasonColumn = (props) => {
  return (
   <>
    <div className="ccc_reason">
              <img src={props.img} alt="reason" /> 
              <div className="ccc_info">
              <h1 className="ccc_title">{props.title}</h1> 
              <h2 className="ccc_subtitle">{props.subtitle}</h2>
              </div>
              </div>
   </>
  )
}

export default ReasonColumn