import React from 'react'
import  {Link} from "react-router-dom"
import {MdError} from "react-icons/md"

const NotFound = () => {
  return (
   <>
    <section className='notfound'>
     <main>
        <div>
        <MdError/>
        <h1>404</h1>
        </div>

        <p>Page not found, click below to go to home</p>
        <Link to = "/"> Go To Home</Link>
     </main>
    </section>
   </>
  )
}

export default NotFound
