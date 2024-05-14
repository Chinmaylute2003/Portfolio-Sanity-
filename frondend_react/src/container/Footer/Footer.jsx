import React,{useState} from 'react';
import {images} from "../../constants";
import {AppWrap, MotionWrap} from "../../wrapper";
import {client} from "../../client";

import "./Footer.scss";
import { MotionConfig } from 'framer-motion';
import { BsFileEarmarkImageFill } from 'react-icons/bs';
const Footer = () => {

  const [formData, setFormData] = useState({name : "", email: "", message : ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {username, email, message} = formData;
  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name] : value});
  }
  const handleClick = () => {
    setLoading(true);

    const contact = {
      _type : 'contact',
      name : username,
      email : email,
      message : message
    }

    client.create(contact)
    .then(()=> {
      setLoading(true);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>

        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href = "mailto:chinmaylute2003@gmail.com" className='p-text'>chinmaylute2003@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href = "tel: +919028914170" className='p-text'>+919028914170</a>
        </div>

      </div>

      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name="username" value = {username} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
        <input className='p-text' type='text' placeholder='Your Email' name="email" value = {email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' name="message"  value = {message} onChange={handleChangeInput}/>
        </div>
        <button type='button' className='p-text' onClick = {handleClick}>{loading? 'Sending' : 'Send Message'}</button> 
      </div>
      :
      <div>
        <h3 className='head-text'>Thankyou for getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  'contact',
  'app__whitebg'
);