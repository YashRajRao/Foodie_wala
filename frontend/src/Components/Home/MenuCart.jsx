import React from 'react'

import {motion} from "framer-motion"
const MenuCart = ({itemNUM, burgerpic,price,tittle,handler}) => {
  return (
   
    <>

<motion.div className='menuCard'>
    <div>Iteam{itemNUM}</div>
    <main>
        <img src={burgerpic} alt={itemNUM} />
        <h5>₹{price}</h5>
        <p>{tittle}</p>
        <button onClick={()=>handler(itemNUM)}>Buy Now</button>
    </main>
</motion.div>
    </>
  )
}

export default MenuCart
