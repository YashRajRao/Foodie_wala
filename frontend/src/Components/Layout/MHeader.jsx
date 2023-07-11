import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart,FiLogIn} from "react-icons/fi"
import { FaUser} from "react-icons/fa"
import { motion} from "framer-motion"
import logo from "./images/logo.png"

const MHeader = ({isauthenticated = false}) => {
  return (
  <>
    <nav>
        <motion.div  initial={{x:"-100%"}} whileInView={{x:0}}>
<img  style ={{ height :"6vh"}} src={logo} alt=''/> 
        </motion.div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Cart"><FiShoppingCart/></Link>

            <Link to={isauthenticated ? "/Profile" : "/login"}>

            {isauthenticated ? <FaUser/> : <FiLogIn/>}
             </Link>


        </div>
    </nav>
  </>
  )
}

export default MHeader
