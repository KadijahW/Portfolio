import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../CSS/Footer.css';




const Footer = () => {
    return (
        <div className='fab'>
            <a href='https://github.com/KadijahW' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={['fab', 'github']} /></a>
            <a href='https://www.linkedin.com/in/kadijah-wilson/' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} /> </a>
            <a href="mailto:kadijahwilson@pursuit.org"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>

{/* <>   
<form action="https://formspree.io/xyyndpjk" method="POST">
    <input type="text" placeholder="Name:" name="name"></input>
    <input type="text" placeholder="Email:" name="_replyto"></input>
    <input type="text" placeholder="Message" name="message"></input>
    <input type="Submit" value="Send" ></input>
</form>

</> */}
        </div>
        
    )
}


export default Footer;