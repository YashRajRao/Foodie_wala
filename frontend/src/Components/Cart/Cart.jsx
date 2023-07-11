import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from "./images/burger.png"
import logo2 from "./images/pizza.png"
import logo3 from "./images/pasta.png"



const CartItem = ({value,title,img,increment,decrement})=>(

    <div className='cartItem'>
    <div>
        <h4>{title}</h4>
        <img src={img} alt='' className='img'/>
    </div>

    <div>
        <button onClick={decrement}>-</button>
        <input type='number' readOnly value={value}/>
        <button onClick={increment}>+</button>
    </div>

    </div>
)
const Cart = () => {

    const increment = (item) => {};
    const decrement =(item)=>{}
  return (
   <>
<section className='cart'>
<main>

<CartItem title={" Cheese Burger"} img={logo1} value={0} increment={()=>increment(1)}
     decrement={()=>decrement(1)}
/>

<CartItem title={"Pizza"} img={logo2} value={0} increment={()=>increment(1)}
     decrement={()=>decrement(1)}
/>

<CartItem title={"Pasta"} img={logo3} value={0} increment={()=>increment(1)}
     decrement={()=>decrement(1)}
/>

<article>
    <div>
        <h4>Sub Total</h4>
        <p>₹{2000}</p>
    </div>

    <div>
        <h4>Tax</h4>
        <p>₹{2000* 0.18}</p>
    </div>

    
    <div>
        <h4>Shiping Charges</h4>
        <p>₹{200}</p>
    </div>

    
    <div>
        <h4>Total</h4>
        <p>₹{2000 + 2000*0.18 + 200}</p>
    </div>

    <Link to="/Shiping">Checkout</Link>
</article>
</main>

</section>

   </>
  )
}

export default Cart
