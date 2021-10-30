import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './SolutionandIncubeted.css'

const Solution = () => {
    useEffect(() => {
      
        Aos.init({ duration: 2000  });
      
    }, [])
    return (
        <div className="row3">
        <div className="row3-img" >
            <div data-aos="fade-right" className="our-sol" >
                <h1>Our <br/> Solutions</h1>
                <p>Admere empowers artists, singers, instrumentalists, and musicians</p>
            </div>
            
          

           
            
            <div  className="pink-semiCircle">
            <div   className="medium-circle"></div>
            </div>
            
            <div  className="violet-semiCircle">
            <div  className="small-circle"></div>
            </div>


            
            <div data-aos="fade-up"  className="big-circle"></div>
            <div  className="label community-label">
                <h6 style={{ backgroundColor: "transparent" }}>Community Learning</h6>
            </div>

        
            
            <div  className="label talent-label" style={{backgroundColor:"rgb(238, 54, 238)"}}><h6 style={{ backgroundColor: "transparent" }}>Real Talent</h6></div>
            <div  className="label tech-label" style={{backgroundColor:"rgb(153, 30, 235)"}}><h6 style={{ backgroundColor: "transparent" }}>Tech Support</h6></div>
            
           

        </div>
    </div>
    )
}

export default Solution
