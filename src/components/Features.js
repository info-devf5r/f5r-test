import React from 'react'
import  './Features.css'

import antiBuffer from "../assets/antibuffer.svg";
import hd from "../assets//hd.svg";
import multiAccess from "../assets/access.svg";
import play from "../assets/play.svg";
import FeatureColumn from './FeatureColumn';

// Add the feature here if u want to edit or add extra
const featureDetails=[
   {img:`${play}` , desc:"8000+ TV Channels"},
   {img:`${multiAccess}` , desc:"Multi Users Access"},
   {img:`${hd}` , desc:"FHD & HD Quality"},
   {img:`${antiBuffer}` , desc:"Anti-Buffer™ 3.0"}
]

const Features = () => {
  return (
   <>
   <div id='features_Section'>
    <div className='ccc_container'>
        {featureDetails.map((data,index)=>{
            return(<>
        <FeatureColumn img={data.img} desc={data.desc} key={index} ></FeatureColumn>     
            </>)
        })}
    
    </div>
   </div>
   </>
  )
}

export default Features