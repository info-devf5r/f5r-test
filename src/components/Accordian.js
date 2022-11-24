import React, {useState, useEffect, useRef} from 'react'
import "./Accordian.css"
import Chevron from '../assets/accArrow.svg'

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    
    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }
    

    console.log(toggle);
    return (
        <div  className="accordion" >

            <button style={{outline:'none', cursor:'auto'}}
            onClick={toggleState}
            className="accordion-visible">
                <span>{props.question}</span>
                <img 
                className={props.activated && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={(props.activated)   ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height:props.activated   ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p  aria-hidden={props.activated ? "true" : "false"}>
                   {props.answer}
                </p>
            </div>
            
        </div>
    )
}