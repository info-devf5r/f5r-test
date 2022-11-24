import React from 'react'

const UptimeRow = (props) => {
    return (
        <>
            <div className='ccc_rows'>
                <p className='ccc_name'>{props.name}</p>
                <p className='ccc_percent'>{props.percentage}</p>
                <div className='ccc_img'>
                    {/* image */}
                    <img src={props.img} alt="" />
                </div>

                <div class="ccc_status">
                    <div id="ccc_badge">
                        <div class="ccc_circle"></div>
                    </div>
                    <p class="ccc_type">Up</p>
                </div>
            </div>
        </>
    )
}

export default UptimeRow