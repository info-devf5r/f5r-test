import React from 'react'
import "./Uptime.css"
import progress from "../assets/progress.svg"
import dimProgress from "../assets/dimProgress.svg"
import UptimeRow from './UptimeRow'
const Uptime = () => {
    return (
        <>
            <div id='uptime_Section'>
                <p className='ccc_title'>
                    Uptime
                    <span> Last 90 days</span>
                </p>

                <div className='ccc_container'>
                   <UptimeRow name="IPTV Panel" percentage="100.00%" img={progress}></UptimeRow>
                    <hr className='ccc_divider' />
                    <UptimeRow name="Load Balancers" percentage="99.99%" img={progress}></UptimeRow>
                    <hr className='ccc_divider' />
                    <UptimeRow name="Members Area" percentage="99.95%" img={dimProgress}></UptimeRow>
                </div>
            </div>
        </>
    )
}

export default Uptime