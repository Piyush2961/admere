import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import award1 from '../../../images/artist1.svg';
import award2 from '../../../images/artist2.svg';
import award3 from '../../../images/artist3.svg';
import './FeaturedArtists.css';

const FeaturedArtists = () => {
    useEffect(() => {
      
        Aos.init({ duration: 1000  });
      
    }, [])
    return (
        <div className="featuredArtists-row">
            <h1 data-aos="fade-out">Featured Artists</h1>
            <section id="f-slider">
                <input type="radio" name="f-slider" id="f-s1"/>
                <input type="radio" name="f-slider" id="f-s2" checked/>
                <input type="radio" name="f-slider" id="f-s3"/>

                <label for="f-s1" id="f-slide1" >
                    <div className="f-card1" data-aos="flip-up">
                        <img src={award1} style={{backgroundColor: "transparent"}} />
                    </div>
                    <h6 style={{fontWeight:"100"}}>Faded-Alen Walker (Cover)</h6>
                    <p>Preethika Singh</p>
                </label>
                <label for="f-s2" id="f-slide2" >
                    <div className="f-card2" data-aos="flip-right">
                        <img src={award2} style={{backgroundColor: "transparent"}}/>
                    </div>
                    <h6 style={{fontWeight:"100"}}>90's Romantic Songs Remix</h6>
                    <p>Pranav Vaibhav</p>
                </label>
                <label for="f-s3" id="f-slide3">
                    <div className="f-card3" data-aos="flip-down">
                        <img src={award3} style={{backgroundColor: "transparent"}}/>
                    </div>
                    <h6 style={{fontWeight:"100"}}>No tears left to cry (cover)</h6>
                    <p>Keerthana Lakshman</p>
                </label>

            </section>
        </div>
    )
}

export default FeaturedArtists
