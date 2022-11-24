import React from 'react'

const CostingColumn = (props) => {
  return (
   <>
    <div className='ccc_duration'>
        {props.month+" "}   
        <span>{props.credit+" "}Credits</span>
      </div>
   </>
  )
}

export default CostingColumn