import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import biryani3 from './images/biryani3.jpg'

const Cart = () => {
    const[count,setCount]=useState(10)
    const incre=()=>{
        setCount(count+1)
    }
    const decre=()=>{
        setCount(count-1)
    }

return (

<div className='cart'>

<div className='cart1'>

<h3>Shopping Cart</h3>

<p>you have 10 items in your shopping cart. </p>

</div>

<div className='cart2'>

<div className='cart3'>

<div className='cart20ne'><img height='60px' width='60px' src={biryani3} alt='biryani'/></div>

<div className='cart2Two'>

<h5>veg biryani</h5>


</div>

<div className='cart2Three'>

<FaMinus role='button' onClick={decre}/> {count }<FaPlus role='button' onClick={incre}/>

</div>

<div className='cart2Four'>

249rs

</div>

<div className='cart2Five'><FaTrash role='button'/></div>

<hr/>


</div>

</div>

</div>

)

}




export default Cart
