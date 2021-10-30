import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import award1 from '../../../images/award1.svg';
import award2 from '../../../images/award2.png';
import award3 from '../../../images/award3.svg';
import './Awards.css'

const Awards = () => {
    useEffect(() => {
      
        Aos.init({ duration: 1000  });
      
    }, [])
    return (
        <div className="awards-row">
            <h1 data-aos="fade-out">Awards and Recognitions</h1>
            <section id="slider">
                <input type="radio" name="slider" id="s1"/>
                <input type="radio" name="slider" id="s2" checked/>
                <input type="radio" name="slider" id="s3"/>

                <label for="s1" id="slide1">
                    <div className="card1">
                        <img data-aos="flip-up" src={award1} style={{backgroundColor: "transparent"}} />
                    </div>
                    <p>MSME Certified</p>
                </label>
                <label for="s2" id="slide2">
                    <div className="card2">
                        <img data-aos="flip-left" src={award2} style={{backgroundColor: "transparent"}}/>
                    </div>
                    <p>Top 10 startups in Jharkhand</p>
                </label>
                <label for="s3" id="slide3">
                    <div className="card3">
                        <img data-aos="flip-down" src={award3} style={{backgroundColor: "transparent"}}/>
                    </div>
                    <p>Startup India Certified</p>
                </label>

            </section>
        </div>
    )
}

export default Awards
