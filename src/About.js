import React from 'react'
import about from './images/about.jpg'
import KnowMore from './KnowMore'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='about'>
      <div className='about1'>
        <h1>About Us</h1>
      </div>
      <div className='about2'>
      <div> < img src={about} alt='img' title='sandwitch' /></div> 
        <div >
          <h1>OUR VISION</h1>
         <p>At Pizzas, we don’t just make pizza. We make people happy.<br/> Pizzas was built on the belief that pizza night should be special,<br/> and we carry that belief into everything we do.<br/> With more than 15 years of experience under our belts,<br/> we understand how to best serve our customers<br/> through tried and true service principles:<br/> We create food we’re proud to serve and deliver it fast, with a smile.</p>
         <button className='btn' onClick={() => navigate("/knowMore")}>know more</button>
      </div>
      </div>
    </div>
  )
}

export default About