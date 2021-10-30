import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './GetStarted.css'

const GetStarted = () => {
    useEffect(() => {
      
        Aos.init({ duration: 2000  });
      
    }, [])
    return (
        <div className="row1">
                <div data-aos="fade-right" className="row1-col1">
                    <div className="homeHeading">
                        <h1>A platform where<br/>
                        <span style={{color:"rgb(94, 224, 137)"}}>young artists</span> can showcase their talent</h1>
                        <p>Revolution in traditional music industry for <br/>new generation of artists</p>
                        <button type="button" className="btn-success">GET STARTED</button>
                    </div>
                </div>
                <div data-aos="fade" className="row1-col2">
                    <div className="roundimage" >

                        <div className="outer-circle">
                        <div className="inner-circle"></div>
                        <div className="upper-circle"></div>
                        </div>
                       
                        </div>
                </div>

            </div>
    )
}

export default GetStarted
