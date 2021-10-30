import React, {useState, useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

import CloseIcon from '@mui/icons-material/Close';
import './Platform.css';
import gaanaContest from '../../../images/gaanaContest.svg';
import admereRecords from '../../../images/admereRecords.svg';

const Platform = () => {
    useEffect(() => {
      
        Aos.init({ duration: 1000  });
      
    }, [])

    const closeStyletrue = {
       float: "right",
      background: "transparent",
      display: "block",
      color: "white",
      cursor: "pointer",
      fontSize: "2rem"
    }
    const closeStylefalse = {
        display: "none",
    }

    const [expandGaana, setExpandGaana] = useState(false);
    const [expandAdmere, setExpandAdmere] = useState(false);

    const [applyBackDropGaana, SetApplyBackDropGaana] = useState(false);
    const [applyBackDropAdmere, SetApplyBackDropAdmere] = useState(false);

    const handleGaanaClick = () =>{
       if(!applyBackDropGaana){
        document.getElementById('gaana-div-over-img').style = 'backdrop-filter: blur(3px)';
        document.getElementById('gaana-div-over-img').style.border = "1px solid white";  
        document.getElementById('expand-gaana').style.display = "none";
       }
       else{
        document.getElementById('gaana-div-over-img').style = 'backdrop-filter: blur(0px)';
        document.getElementById('gaana-div-over-img').style.border = "none";  
        document.getElementById('expand-gaana').style.display = "flex";
       }
       SetApplyBackDropGaana(!applyBackDropGaana);
        setExpandGaana(!expandGaana); 
    }

    const handleAdmereClick = () =>{
        if(!applyBackDropAdmere)
        {
            document.getElementById('admere-div-over-img').style = 'backdrop-filter: blur(3px)';
            document.getElementById('admere-div-over-img').style.border = "1px solid grey";
            document.getElementById('expand-admere').style.display = "none";
        }
        else
        {
            document.getElementById('admere-div-over-img').style = 'backdrop-filter: blur(0px)';
            document.getElementById('admere-div-over-img').style.border = "none";
            document.getElementById('expand-admere').style.display = "flex";   
        }
        SetApplyBackDropAdmere(!applyBackDropAdmere);
        setExpandAdmere(!expandAdmere);
    }

    return (
        <div className="platform-row" id="platform">
            <h1 data-aos="fade-out">Our Platforms</h1>
            <p data-aos="fade-out">Admere organizes weekly and monthly contests encircling the field of music</p>
            <div className="cards">

                <div data-aos="fade-right" className="card">
                    <div className="gaana-contest-card">
                        <img src={gaanaContest} />
                        <div className="div-over-img" id="gaana-div-over-img" >
                        <CloseIcon style={applyBackDropGaana ? closeStyletrue:closeStylefalse} onClick={handleGaanaClick}/>
                            <h1>Online <br/> Mic</h1>
                            <div className="expand-more" id="expand-gaana" onClick={handleGaanaClick} style={{backgroundColor: "transparent"}}>
                                <i className="arrow1 down"></i>
                                <i className="arrow2 down"></i>
                                <i className="arrow3 down"></i>
                            </div>
                            {
                                (expandGaana) ? 
                                <div className="expanded-div">
                                   
                                    <p style={{backgroundColor: "transparent"}}>
                                        Artificial Intelligence backed Singing
                                        Contest Platform for aspiring singers.
                                    </p>
                                    <button type="button" className="btn btn-success">KNOW MORE</button>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="card">
                    <div className="admere-record-card">
                            <img src={admereRecords} />
                            <div className="div-over-img" id="admere-div-over-img">

                            <CloseIcon style={applyBackDropAdmere ? closeStyletrue:closeStylefalse} onClick={handleAdmereClick}/>
                                <h1>Admere <br/> Records</h1>
                                <div className="expand-more" id="expand-admere" onClick={handleAdmereClick}>
                                    <i className="arrow1 down"></i>
                                    <i className="arrow2 down"></i>
                                    <i className="arrow3 down"></i>
                                </div>
                                {
                                    (expandAdmere) ? 
                                    <div className="expanded-div">
                                        
                                        <p>
                                            Artificial Intelligence backed Singing
                                            Contest Platform for aspiring singers.
                                        </p>
                                        <button type="button" className="btn btn-success">KNOW MORE</button>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                </div>


            </div>
        </div>
    )
}

export default Platform
