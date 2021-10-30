import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './NumberCount.css'

const NumberCount = () => {
    return (
        <div className="counter">
        <h1 className="countHead"> Our Growth</h1>
        <div className="row4">
        
        <div className="col-4"> 
            <h1 style={{color:"rgb(185, 133, 233)"}}>
            <CountUp end={50} redraw={true} duration={3}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp> </h1> 
            <p>Artists recorded their first music video</p>
        </div>
        <div className="col-4">
            <h1 style={{color:"rgb(250, 183, 224)"}}><CountUp end={50} redraw={true} duration={3}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>K+</h1>
            <p>Views on the music videos</p>
        </div>
        <div className="col-4">
            <h1 style={{color:"rgb(243 137 0)"}}><CountUp end={50} redraw={true} duration={3}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>+</h1>
            <p> Team members joining every month </p>
        </div>
    </div>
    </div>

    )
}

export default NumberCount
