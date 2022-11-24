// import React from 'react'
//import arrow from "../assets/arrowAccordian.svg"
import React, { useRef, useState } from "react";
import arrow from "../assets/rightArrowImage.svg";
import Accordion from "./Accordian";
import "./Faq.css"

const FAQ = [
    {
        FaqId: "1",
        question: "Can I stream on multiple devices?",
        answer: "MAXCO TV can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it."
    },
    {
        FaqId: "2",
        question: "How many channels & VOD do you provide?",
        answer: "MAXCO TV offers you a wide variety of channels and VOD, as for today you will get access to more than 8000 TV Channels and thousands of VOD"
    },
    {
        FaqId: "3",
        question: "Do I receive my access instantly?",
        answer: "Yes, your IPTV access will be available almost instantly after your payment, on our thank you page and they will also be emailed to you. You can also find them in your member's area."
    },
    {
        FaqId: "4",
        question: " Can I share this IPTV access with my friend?",
        answer: "Yes, you can share it with your friends, however, if you want to watch it you and your friend at the same time you gonna need to order the extra connection option"
    },
    {
        FaqId: "5",
        question: "How can I trust your website?",
        answer: "MAXCO is one of the oldest TV service providers. We have been selling IPTV since 2010. You can check this by checking our whois domain. From the beginning, our main goal has been to build a good relationship with our customers so that they can trust us and subscribe to our services and then renew for the next years. Of course, we would never have made it if we were not serious"
    },
    {
        FaqId: "6",
        question: " Do you offer any guarantee?",
        answer: "Before buying a product, everyone wants to be sure that there is some way to change their mind. This is another thing that traditional TV providers don't offer. If you sign the contract there is no going back, you're stuck with them. With MAXCOTV, we don't want this to happen to our customers. That's why we offer you up to 30 days to test our IPTV and ensure that it meets your requirements. Otherwise, we will refund the full payment to your bank."
    }

]




const Faq = () => {

    const [expanded, setExpanded] = React.useState(-1);

    const handleChange = (index) => {
        if (expanded === index){
            setExpanded(-1)
        }
        else
            setExpanded(index);
    };

    return (
        <div id="ccc_FAQ"><p class="ccc_title">FAQ</p>
            {/* div of the accordian */}
            <div style={{padding:'20px 0px'}} className="v-item-group theme--light v-expansion-panels v-expansion-panels--accordion" >
                {FAQ.map((data, index) => {
                    return (<div onClick={()=>{handleChange(index)}}>
                        <Accordion id={index} activated={index===expanded} question={data.question} answer={data.answer} key={index} ></Accordion>

                    </div>)
                })}

            </div>
            {/* <Accordion></Accordion> */}
            <div class="ccc_getAccess">

            <button onClick={()=>window.location.href='https://maxcotv.com/store/subscriptions'} class="ccc_btn">  Get My Instant Access Now<img src={arrow} alt="arrow" /></button> <p class="ccc_notice">7-Days Money-Back Guarantee</p></div>



        </div>
    )
}

export default Faq