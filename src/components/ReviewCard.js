import React from 'react'
import trustStar from "../assets/trustStars.svg"
import "./ReviewCard.css"

const ReviewCard = (props) => {
  return (
    <div class="ccc_review">
      <div class="ccc_head">
        <div class="trustStars">
          <img src={trustStar} alt="trust star"/>
          <img src={trustStar} alt="trust star"/>
          <img src={trustStar} alt="trust star"/>
          <img src={trustStar} alt="trust star"/>
          <img src={trustStar} alt="trust star"/> 
          </div> 
          <p class="ccc_date">{props.days} days ago</p></div> 
          <div class="ccc_body"><h1  class="ccc_title ">{props.title}</h1> 
          <h2 class="ccc_subtitle ">{props.subtitle}</h2></div> 
          <div class="ccc_footer"><p class="ccc_author">{props.author}</p>
          </div></div>
  )
}

export default ReviewCard