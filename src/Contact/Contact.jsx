import React from 'react';
import "./Contact.css";
import Phn from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";
import Address from "../assets/location-icon.png";
const Contact = () => {

    // contact functionality
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "307c7c76-809a-4df4-8502-e1dc49f2a01c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Email send Successfully")
        }
      };


    return (
        <div className='contain contact' id='contact' data-aos="zoom-out-right"> 
            <div className="contact_title">
                <h1>Contact</h1><hr />
            </div>
            <div className="contact_section d-lg-flex justify-content-around" >
                <div className="contact_left">
                    <h3 ><span>Let's Talk</span></h3>
                    <div className="contact_details ">
                        <div className="contact_detail d-flex">
                            <img src={Phn} alt="" className='me-2' style={{width:"23px",height:"23px"}}/> <p>abdulhannan2143@gmail.com</p>
                        </div>
                        <div className="contact_detail d-flex">
                            <img src={mail} alt="" className='me-2' style={{width:"23px",height:"23px"}} /> <p>+91 6398344672</p>
                        </div>
                        <div className="contact_detail d-flex">
                            <img src={Address} alt="" className='me-2' style={{width:"23px",height:"23px"}}/> <p> Meerut </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact_right d-flex flex-column align-items-start" data-aos="zoom-out-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder="John Doe" name='name' required/>
                    <label htmlFor="" className='mt-3'>Your Email</label>
                    <input type="email" placeholder='example@mail.com' name='email' required/>
                    <label htmlFor="" className='mt-3'>Message</label>
                    <textarea name="message"  rows="8" placeholder='Enter Your message'></textarea>
                    <button type='submit'  className='btn btn-sm btn-outline-warning mt-3' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact