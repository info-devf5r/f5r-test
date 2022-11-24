import React from 'react'

const FeatureColumn = (props) => {
  return (
   <>
   <div class="ccc_column">
        <img src={props.img} alt="Play Channels"/>
        <p class="ccc_title">{props.desc}</p>
     </div>
   </>
  )
}

export default FeatureColumn