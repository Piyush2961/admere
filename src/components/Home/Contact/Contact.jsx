import React, {useState, useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './Contact.css'
import myimg from '../../../images/contactImg.jpeg';

const Contact = () => {
    useEffect(() => {
      
        Aos.init({ duration: 1000  });
      
    }, [])

    const [data, setData] = useState({
        username:"", ph_number:"", email:"", message:""
    });

    const onChangeFunc = (event) =>{
        const {name, value} = event.target;
        setData({...data, [name]:value});
    }

    const handleOnClick = () =>{
        setData({username:"", ph_number:"", email:"", message:""})
    }

    console.log(data);
    
    return (
        <div className="contact-maindiv" id="contact">
            <h1 data-aos="fade-out">Contact Us</h1>
            <p data-aos="fade-out">We would love to hear from you</p>

            <div className="form-div">
                <div data-aos="fade-right" className="form">
                    <input 
                        type="text"
                        className="form-control"
                        name="username" 
                        value={data.username} 
                        onChange={onChangeFunc} 
                        placeholder="Name" 
                        autoComplete="off" />

                    <input 
                        type="text" 
                        className="form-control" 
                        name="ph_number" 
                        value={data.ph_number} 
                        onChange={onChangeFunc} 
                        placeholder="Contact number" 
                        autoComplete="off" />

                    <input 
                        type="text" 
                        className="form-control" 
                        name="email" 
                        value={data.email} 
                        onChange={onChangeFunc} 
                        placeholder="Email" 
                        autoComplete="off" />

                    <textarea 
                        rows="4" 
                        type="text" 
                        className="form-control" 
                        name="message" 
                        value={data.message} 
                        onChange={onChangeFunc} 
                        placeholder="Message (optional)" 
                        autoComplete="off" />

                    <div className="form-btn">
                        <button type="button" className="btn btn-success" onClick={handleOnClick}>SEND</button>
                    </div>
                </div>
                <div data-aos="flip-left" className="form-img">
                </div>
            </div>
        </div>
    )
}

export default Contact
