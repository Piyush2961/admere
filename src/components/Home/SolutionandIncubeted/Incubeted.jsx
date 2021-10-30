import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './SolutionandIncubeted.css'

const Incubeted = ({style}) => {
    useEffect(() => {
      
        Aos.init({ duration: 2000  });
      
    }, [])
    return (
        <div className="incubation" style={style}>
            <div className="row3">
                <div className="row3-img">
                    <div data-aos="fade-right" className="our-sol">
                        <h1>We are<br/> Incubeted</h1>
                        <p>Admere Selvyn Pvt. Ltd. is now Startup India Certified</p>
                    </div>
                    <div  data-aos="fade-up" className="big-circle"></div>

                    <div className="pink-semiCircle"></div>
                      <div className="pink-semiCircle">
                    <div className="medium-circle"></div>
                    </div>
                    
                    <div className="label community-label" style={{backgroundColor:"rgb(245, 151, 29)", width: "5rem"}}><h6 style={{backgroundColor: "transparent"}}>SMUTBI Office</h6></div>
                    
                    
                </div>
            </div>
            </div>
    )
}

export default Incubeted
