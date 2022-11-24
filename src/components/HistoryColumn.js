import React from 'react'

const HistoryColumn = (props) => {
  return (
    <>
     <div className='ccc_elem'>
                <div className='ccc_rectangle'>{props.rectText}</div>
                <p className='ccc_title'>{props.titleText}</p>
            </div>
    </>
  )
}

export default HistoryColumn