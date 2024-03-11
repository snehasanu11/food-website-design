import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer1'>
        
        <h4>NEWSLETTER</h4>
        <h3>SIGN UP FOR LATEST UPDATES </h3>
        <form className='form'>
          <input className='input' type='email' placeholder='email here'/>
          <button className='einput'>Subscribe</button>
        </form>
        <p>Will be used in accordance with our Privacy Policy</p>
       
        <div className='icons'>
       <div className='i'> <FaTwitter  role="button" tabIndex="0"/></div>
       <div className='i'><FaFacebook role="button" tabIndex="0"/></div>
       <div className='i'><FaLinkedin role="button" tabIndex="0"/> </div>
       <div className='i'><FaInstagramSquare role="button" tabIndex="0"/></div>
       
        </div>
      </div>
     
         
      
      </div>

  )
}

export default Footer