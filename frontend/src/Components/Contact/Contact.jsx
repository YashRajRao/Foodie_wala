import React from 'react'
import {motion} from "framer-motion"
const Contact = () => {
  return (
   <>
    <section className='contact'>
<motion.form>

<h2>Contact Us</h2>
<input type='text' placeholder='Name'/>
<input type='email' placeholder='Email'/>


<textarea placeholder='Mesaage' cols='30' rows='10'></textarea>

<button type='Submit'>Send</button>
</motion.form>

<motion.div className='contact_form_border'>

<motion.div>
    <img src='' alt=''/>
</motion.div>
</motion.div>

    </section>
   </>
  )
}

export default Contact
