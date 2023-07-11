import React from 'react'
import {motion} from "framer-motion"

const Founder = () => {

    const Options = {
        initial:{
          x:-"-100%",
          opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        },
    };
  return (
    <>
        <section className='founder'>
   <motion.div {...Options}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU' alt=''  height={200} width={200}/>
    <h1>M.S Dhoni</h1>
     <p>hey , i am M.S Dhoni founder of foodie wala .{""}</p>

     <br/>
     our aim is to create th most tasty burger on planet
   </motion.div>

        </section>
    </>
  )
}

export default Founder
