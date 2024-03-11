import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import pizza2 from './images/pizza2.jpg'
import biryani1 from './images/biryani1.jpg'
import biryani2 from './images/biryani2.jpg'
import biryani3 from './images/biryani3.jpg'
import burger2 from './images/burger2.jpg'
import  pizza1 from './images/pizza1.jpg'
import noodles1 from './images/noodles1.jpg'
import noodles2 from './images/noodles2.jpg'
import noodles3 from './images/noodles3.jpg'
import burger1 from './images/burger1.jpg'
import  pizza3 from './images/pizza3.jpg'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className='menu'><h1>Food<span>Menu</span> </h1></div>

      <div className='homeA home'>

<div className='one main'><div className='box box1'>
 <img className='imgs' src={biryani1} alt='biryani'/>
</div>
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
<button onClick={()=>navigate("/Cart")} ><FaPlus /> Add to Cart</button>
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
<button onClick={()=>navigate("/Cart")} ><FaPlus /> Add to Cart</button>
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

export default Menu