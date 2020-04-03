import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/Footer.css';


const Footer = () => {
    return(
        <div className='fab'>
        <a href='https://github.com/KadijahW' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={['fab', 'github']} /></a>
        <a href='https://www.linkedin.com/in/kadijah-wilson-b33696191/' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} /> </a>

    </div>
    )
}


export default Footer;