import React from 'react'
import "./History.css"
import HistoryColumn from './HistoryColumn'

const HistoryData=[

    {rectText:"200k+",titleText:"Active users"},
    {rectText:"16k+",titleText:"Total Streams"},
    {rectText:"11 Years",titleText:"Active users"},
    {rectText:"94",titleText:"Streaming Servers"},
    {rectText:"9",titleText:"Server Locations"},
    {rectText:"99.98%",titleText:"Uptime"},
    {rectText:"4.7",titleText:"Truspilot Score"},
    {rectText:"2 Hours",titleText:"Average Support Answer"},

]

const History = () => {
  return (
    <>
    <div id="history_Section">
        <div className='ccc_container '>
            {HistoryData.map((data,index)=>{
                return(<>
                <HistoryColumn rectText={data.rectText} titleText={data.titleText} key={index}></HistoryColumn>
                </>)
            })}
        </div>
    </div>
    </>
  )
}

export  {History}