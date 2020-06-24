import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'


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
            <a href='https://drive.google.com/file/d/1RyWIXZR3DP3fmMaX_VmCQzq91VYZ-cmL/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume</a>{" "}
            </div>
        </nav>

        </div>
)
}

export default Nav;