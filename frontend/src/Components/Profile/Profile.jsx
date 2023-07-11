import React from 'react'

import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import {MdDashboard } from "react-icons/md"

const Profile = () => {

 const options = {
initial :{
    y:"-100%",
    opacity:0,
},

animate :{
    y:"0",
    opacity:1,
}

 }
  return (
  <>
    <section className='Profile'>
     <main>
        <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU" alt='user' {...options}   height={200} width={200}/>

        <motion.h5  {...options} transition={{delay:0.3}} >
        M.S Dhoni
        </motion.h5>

        <motion.div  {...options} transition={{delay:0.5}}>

        <Link to="/Dashboard" style={{background:"rgba(40,40,40,40)"}}>
          
        <MdDashboard/>
        Dashboard 
        
        </Link>
        </motion.div>

        <motion.div initial={{x:"-100vw", opacity:0}} animate={{x:0,
        opacity:1}} >

<Link to="/MyOrders">Orders</Link>
</motion.div>


<motion.button   initial={{x:"-100vw", opacity:0}} animate={{x:0,
        opacity:1}} transition={{delay:0.3}}>
    Logout
</motion.button>
     </main>


    </section>
  </>
  )
}

export default Profile
