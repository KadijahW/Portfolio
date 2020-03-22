import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'
import Pdf from '../Resume.pdf'


const Nav = () => {
    return (
        <div className='container'>
        <nav>
             <div className='profile'>
             <img className='profile-logo' src={require('../Profile-Logo.png')} alt='profile-logo'/>
             </div>
         <div className='links'>
             <Link to='/'>Home</Link>
            <Link to="/About">About</Link>{" "}
            <Link to="/Projects">Projects</Link>{" "}
            <a href={Pdf} target='_blank' rel="noopener noreferrer">Resume</a>{" "}
            </div>
        </nav>

        </div>
)
}

export default Nav;