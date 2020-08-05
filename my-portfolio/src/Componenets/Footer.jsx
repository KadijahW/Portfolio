import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../CSS/Footer.css';

const Footer = () => {
    return (
        <div className='fab'>
            <a href='https://github.com/KadijahW' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={['fab', 'github']} /></a>
            <a href='https://www.linkedin.com/in/kadijah-wilson/' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} /> </a>
            <a href="mailto:kadijahwilson@pursuit.org" target="__blank"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>

        </div>
        
    )
}

export default Footer;