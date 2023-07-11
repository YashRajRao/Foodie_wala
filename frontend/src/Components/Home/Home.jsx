import React from 'react'
import { motion} from "framer-motion"
import Menu from './Menu'
import Founder from './Founder'


const Home = () => {   
  return (
   <>
    <section className='home'>
    <div>

      <motion.h1> Foodie Wala</motion.h1>
      <motion.p>Give YourSelf a tasty food</motion.p>
    </div>
    <a href='#menu'>
      Explore Menu
    </a>

    </section>

    <Founder/>

    <Menu/>

    
   </>
  )
}

export default Home
