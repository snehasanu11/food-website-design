import React from 'react'
import { useNavigate } from 'react-router-dom';
import Action from './Action';


const Contact = () => {
  
  const navigate = useNavigate(); 
   
    
  var username=document.getElementById('username');
  var email=document.getElementById('email');
  function validate(){
    
      if(username.value.length===0){
      alert("please enter name");
      return false;
    }
    if(email.value.length===0){
      alert("please enter email");
      return false;
    }
  }
  return (
    <div className='contact'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30634475504!2d77.63299766499131!3d12.83800042876982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709796504922!5m2!1sen!2sin" width="100%" height="350px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div classname='cform'>
    <fieldset>
    <legend>Contact</legend>
        <form >
        <input type='text' placeholder='name' className="name con" id="username"/>
        <br/>
        <br/>
        <input type='email' placeholder='Email' className='Email con' id="email"/>
        <br/>
        <br/>
        <input type='number' placeholder=' Mobile Number' min='0' max='9' className='number con' id="mobile no"/>
        <br/>
        <br/>
        <div className='texta' >
          <label htmlFor='msg'className='label'></label>
        <textarea rows='5' column='7' name='Message'id='msg' className='message' placeholder='enter your message here...' /></div>
        <br/>
        <input type='submit' className='submit' name='submit' onClick={() => navigate("/Action.js")}/>

      </form>
    </fieldset>
      </div>
      
      
       
  



      
    </div> 
  )
}


export default Contact