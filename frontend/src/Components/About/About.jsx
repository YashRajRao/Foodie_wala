import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri"

const About = () => {
  return (
    <>
        <section className='about'>
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Foodie Wala</h4>
                    <p> we are foodie wala.the place for most tasty burgers on the entire earth.</p>

                    <p>explore the various type of food and burgers. click below to see the menu</p>
                    <Link to="/">
                        <RiFindReplaceLine/>
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU' alt='' className='img1'/>
                        <h3 className='heading'>M.S Dhoni</h3>
                    </div>
                
                </div>
            </main>
        </section>
    </>
  )
}

export default About
