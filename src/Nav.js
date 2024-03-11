import React, { useState } from 'react'
import {  FaPizzaSlice ,FaBars,FaCartArrowDown} from "react-icons/fa";
import {Link} from 'react-router-dom'





const Nav=()=>{
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  } 
   
 
  
  return (
    
    <div className='nav'>
<div className='navh2'>
 <h2><FaPizzaSlice /> pizzas</h2>
</div>

<div>
    <ul className={`navlinks  ${showNavbar && 'active'}`}> 
        <li className='nli1 nli'><Link to='/'>Home</Link></li>
        
        <li className='nli3 nli'><Link to='/about'>About</Link></li>
        <li className='nli4 nli'><Link to='/menu'>Menu</Link></li>
        <li className='nli5 nli'><Link to='/contact'>Contact</Link></li>
        <li className='nli6 nli'><Link to='/cart'><FaCartArrowDown/></Link>
        <span>2</span></li>
         
    </ul>
</div>
<div>
  
  < FaBars  className='bar' onClick={handleShowNavbar} role="button" id='btn'/>
</div>

    </div>
  )}


export default Nav