import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import '../CSS/Nav.css'

const Nav = () => {
    return (
        <div className='container'>
        <nav>
             <div className='profile'>
             <img className='profile-logo' src={require('../Profile-Logo.png')} alt='profile-logo'/>
             </div>
         <div className='links'>
            <Link to="/about">About</Link>{" "}
            <Link to="/projects">Projects</Link>{" "}
            <Link to="/">Resume</Link>{" "}
            </div>
        </nav>
        </div>
)
}

export default Nav;