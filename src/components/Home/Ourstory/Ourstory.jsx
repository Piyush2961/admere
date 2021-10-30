import React from 'react';
import './Ourstory.css';
import ourStory_img from '../../../images/ourStory.svg';

const Ourstory = () => {
    return (
        <div className="ourStory-row">
            <h1>Our Story</h1>
            <p className="storyheadline">Let's take a deep dive into our journey</p>
            <div className="ourStory-img">
                <img src={ourStory_img} />
            </div>
            <div className="ourStory-para">
                <p>Admere Records work towards supporting and uplifting the young talents that don't get an 
                    opportunity to showcase their best version of their art in the music industry. It was started
                    way back .......<span style={{color:"rgb(45, 206, 45)", cursor:"pointer"}}>Read More</span>
                </p>
            </div>

        </div>
    )
}

export default Ourstory
