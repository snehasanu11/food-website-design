import React from 'react'
import hero from './images/hero.png'
import { FaRupeeSign } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import biryani1 from './images/biryani1.jpg'
import biryani2 from './images/biryani2.jpg'
import biryani3 from './images/biryani3.jpg'
import burger2 from './images/burger2.jpg'

import  pizza1 from './images/pizza1.jpg'
import pizza2 from './images/pizza2.jpg'
import  pizza3 from './images/pizza3.jpg'
import noodles1 from './images/noodles1.jpg'
import noodles2 from './images/noodles2.jpg'
import noodles3 from './images/noodles3.jpg'
import burger1 from './images/burger1.jpg'
import KnowMore from './KnowMore';
import { useNavigate } from 'react-router-dom';



const Home = () => {
 const navigate=useNavigate()
  

  
  return (
    <div>
      
    <div className='home page'>
      
       <div className='home1 homes'>
      <h2>BREAKFAST SPECIAL MEAL</h2>
        <p id="main">
          Real Delicious Food Straight To Your Door. Enjoy this delicious meal with our<br/> 1 plus 1 offer & get 2 personal pizzas starting @₹279. Order Pizzas <br/>1 plus 1 San Francisco Style Pizza & get 2 Personal pizza starting @ ₹279.
        a flat, open-faced baked pie of Italian origin,<br/> consisting of a thin layer of bread dough topped with spiced tomato sauce and cheese,<br/> often garnished with anchovies, sausage slices, mushrooms, etc.</p>
        <button className='btn btn1' id='btn1' onClick={()=>navigate("/knowMore")}>Read More</button>
        
        
        </div>
        <div className='home2 homes'><img src={hero} alt='pizza' title='pizza'/></div>
        </div>
         
        <div className='homeA home'>

       <div className='one main'><div className='box box1'>
        <img className='imgs' src={biryani1} alt='biryani'/>
       </div >
       <p>Chicken Biryani</p>
       <p><FaRupeeSign />369</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>

      <div className='two main'> <div className='box box2'>
      <img className='imgs' src={biryani2} alt='biryani'/>
      </div>
       <p>Margeritha Pizza</p>
       <p><FaRupeeSign />238</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       <div className='three main'><div className='box box3'>
       <img className='imgs' src={biryani3} alt='biryani'/>
       </div>
       <p>Bun tikki burger</p>
       <p><FaRupeeSign />98</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
      <div className='four main'> <div className='box box4'>
      <img className='imgs' src={burger1} alt='biryani'/>
      </div>
       <p>veg Biryani</p>
       <p><FaRupeeSign />249</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       
        </div>
        <div className='homeA home'>
          
       <div className='one main'><div className='box box1'>
        <img className='imgs' src={noodles3} alt='noodles'/>
       </div>
       <p>Chicken Biryani</p>
       <p><FaRupeeSign />369</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>

      <div className='two main'> <div className='box box2'>
      <img className='imgs' src={noodles2} alt='noodles2'/>
      </div>
       <p>Margeritha Pizza</p>
       <p><FaRupeeSign />238</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       <div className='three main'><div className='box box3'>
       <img className='imgs' src={pizza3} alt='noodles3'/>
       </div>
       <p>Bun tikki burger</p>
       <p><FaRupeeSign />98</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
      <div className='four main'> <div className='box box4'>
      <img className='imgs' src={pizza1} alt='pizza'/>
      </div>
       <p>veg Biryani</p>
       <p><FaRupeeSign />249</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       
        </div>
        <div className='homeA home'>
          
       <div className='one main'><div className='box box1'>
        <img className='imgs' src={pizza2} alt='pizza'/>
       </div>
       <p>Chicken Biryani</p>
       <p><FaRupeeSign />369</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>

      <div className='two main'> <div className='box box2'>
      <img className='imgs' src={burger2} alt='burger'/>
      </div>
       <p>Margeritha Pizza</p>
       <p><FaRupeeSign />238</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       <div className='three main'><div className='box box3'>
       <img className='imgs' src={burger1} alt='burger'/>
       </div>
       <p>Bun tikki burger</p>
       <p><FaRupeeSign />98</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
      <div className='four main'> <div className='box box4'>
      <img className='imgs' src={noodles1} alt='biryani'/>
      </div>
       <p>veg Biryani</p>
       <p><FaRupeeSign />249</p>
       <button onClick={()=>navigate("/Cart")}><FaPlus /> Add to Cart</button>
       </div>
       
        </div>
        </div>
  )

}

export default Home