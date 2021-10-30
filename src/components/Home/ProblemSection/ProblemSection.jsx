import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './ProblemSection.css'

const ProblemSection = () => {
    useEffect(() => {
      
        Aos.init({ duration: 2000  });
      
    }, [])
    return (
        <div className="row2">
        <h1>We understand your problem</h1>
        <p>Problems with current music industry</p>

        <div className="row2-img">
             
           <div className="img1">

                <div className="nepodescription">
                    <p className="nepo-p">NEPOTISM</p>
                    <div className="nepo-stroke"></div>
                </div>
                <div data-aos="flip-right" className="nepoimg"></div>

            
            </div>


            
            <div className="img2">

                <div className="stressdescriptiion">
                    <p className="stress-p">STRESS</p>
                    <div className="stress-stroke"></div>
                </div>

                <div data-aos="flip-left" className="stressimg"></div>
                
            </div>


            <div  className="img3">

                <div className="discdescriptiion">
                    <p className="disc-p">DISCRIMINATION</p>
                    <div className="disc-stroke"></div>
                </div>
                <div  data-aos="fade-up" className="discrimg"></div>


            </div>
            
        </div>
    </div>
    )
}

export default ProblemSection
