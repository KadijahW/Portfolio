import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
return (
    <nav>
        <span className="logo">KW</span>{" "}
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/about">Projects</Link>{" "}
        <Link to="/about">Resume</Link>{" "}



    </nav>
)
}

export default Nav;