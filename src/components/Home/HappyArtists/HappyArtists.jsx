import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './HappyArtists.css';
import box1_img1 from '../../../images/happyArtist1.png';
import box1_img2 from '../../../images/happyArtist2.png';
import box2_img from '../../../images/happyArtist31.png';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const HappyArtists = () => {
    useEffect(() => {
      
        Aos.init({ duration: 1000  });
      
    }, [])
    return (
        <>
        <div className="happy-artists-row" id="happy-artists">
            <h1 data-aos="fade-out" >Happy Artists</h1>
            <p data-aos="fade-out" >Hear from our artists what they think about Admere Selvyn</p>
            <div className="row">
                <div className="box1">
                    <div data-aos="flip-left" className="sub-box">
                        <img className="s-img1" src={box1_img1}/>
                        <div className="play-icon"><PlayCircleOutlineIcon className="play-icon-button" /></div>
                    </div>
                    <div data-aos="flip-up" className="sub-box">
                        <img className="s-img2" src={box1_img2}/>
                        <div className="play-icon"><PlayCircleOutlineIcon className="play-icon-button"/></div>
                    </div>
                </div>
                <div data-aos="flip-right" className="box2" >
                    <div className="sub-box" style={{backgroundColor: "transparent"}}>
                        <img className="bigimage" src={box2_img}/>
                        <div className="play-icon"><PlayCircleOutlineIcon className="play-icon-button"/></div>
                    </div>
                </div>
                {/* <div className="box3">
                    <p>Check out more happy artists at our youtube channel</p>
                    <h5 style={{color:"rgb(45, 206, 45)", cursor:"pointer"}}
                        onClick={() => window.open("https://youtube.com/channel/UCWZCZLBdHWO46jjrfq-Uj6w", "_blank")}
                    >Admere Records<span>&#10230;</span>
                    </h5>
                </div> */}
            </div>
        </div>
    
        </>
    )
}

export default HappyArtists
