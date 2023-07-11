import React from 'react'
import  { AiFillInstagram,AiFillYoutube,AiFillGithub,} from "react-icons/ai";
const Footer = () => {
  return (
    <>
        <footer>
            <div>
            <h2>Foodie Wala</h2>
            <p> We  are trying to give best taste possible</p>
            <br/>

            <em> Something hot. Something tasty. we give  attention to genuine feedback.</em>

            <strong>all right recieved @foodiewala</strong>
            </div>
            <aside>
                <h4>Foloow Us</h4>

                <a href='#'><AiFillYoutube/></a>
                <a href='#'><AiFillInstagram/></a>
                <a href='#'><AiFillGithub/></a>
            </aside>
        </footer>
    </>
  )
}

export default Footer
