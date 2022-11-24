import React from 'react'
import Accordion from './Accordian';
import './Faq.css';
import './ResellerFAQ.css'
const FAQ = [
    {
        FaqId: "1",
        question: "Why Should You Choose Our IPTV Reseller Program?",
        answer: "Yes, we provide you access to a reseller dashboard where you can create and manage all your iptv access"
    },
    {
        FaqId: "2",
        question: "Do you provide API access?",
        answer: "Yes, you can connect your CMS to our reseller API so you can automate everything"
    },
    {
        FaqId: "3",
        question: "What are the steps to become a reseller?",
        answer: "Just choose the plan you want, proceed with payment and after that, you will receive your IPTV RESELLERS instantly."
    },

    {
        FaqId: "4",
        question: "Do I receive my access instantly?",
        answer: "Yes, we use an automated system, so after your payment, our system will enable access for you, you can also find it in your member's area"
    },

    {
        FaqId: "5",
        question: "I have customers with another reseller panel, can I move them to CCCAMBOX TV?",
        answer: "Yes, no problem, just open a support ticket and we will assist you with that"
    },
    {
        FaqId: "6",
        question: "Can I get trials for my potential customers?",
        answer: "Yes, our resellers can generate as much trial as they need"
    },
    {
        FaqId: "7",
        question: "Do you offer technical support?",
        answer: "Yes, we provide email/ticket support and we will also send you our private WhatsApp number for emergency"
    },

]

const ResellerFAQ = () => {

    const [expanded, setExpanded] = React.useState(-1);

    const handleChange = (index) => {
        if (expanded === index){
            setExpanded(-1)
        }
        else
            setExpanded(index);
    };
  return (
   <>
   
   <section id='ccc_FAQ'>
    <p className='ccc_title'>FAQ</p>
    {/* Accordian */}

    <div style={{padding:'20px 0px'}} className="v-item-group theme--light v-expansion-panels v-expansion-panels--accordion" >
                {FAQ.map((data, index) => {
                    return (<div onClick={()=>{handleChange(index)}}>
                        <Accordion id={index} activated={index===expanded} question={data.question} answer={data.answer} key={index} ></Accordion>

                    </div>)
                })}

            </div>

    <div className='ccc_row'>
    <button class="ccc_btn" onClick={()=>window.location.href='https://maxcotv.com/store/resellers'}>
        BECOME A RESELLER
        <span>Instant Access</span></button>
    </div>
   </section>
   </>
  )
}

export default ResellerFAQ