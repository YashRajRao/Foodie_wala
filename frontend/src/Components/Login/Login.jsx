import React from 'react'
import { motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
 const Login = () => {
  return (
   <>
    <section className='Login'>
  <motion.button   initial ={{y:-"100vh"}}
   animatec ={{y:0}}
  >
    Login with Google
    <FcGoogle/>
  </motion.button>
    </section>
   </>
  )
}

export default Login
