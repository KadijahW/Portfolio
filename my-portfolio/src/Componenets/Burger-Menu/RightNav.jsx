import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)
    `
.links{
    display: flex;
    flex-flow: row nowrap; 
    padding 18px 10px; 
 }

 .links a {
    margin-right: 1%;
    color: white;
    text-decoration: none;
}

@media (max-width: 760px){
    .links{
        display: none;
        flex-flow: column nowrap;
        background-color: #A288A6;
        position: fixed;
        top: 0;
        right: 0;
        min-height: 95vh;
        width: 150px;
        padding-top: 3.5rem;
    }
}
`

const RightNav = () => {
    return (
        <StyledLink>
        <div className='links'>
                <Link to='/'>Home</Link>
                <Link to="/About">About</Link>{" "}
                <Link to="/Projects">Projects</Link>{" "}
                <a href='https://drive.google.com/file/d/1RyWIXZR3DP3fmMaX_VmCQzq91VYZ-cmL/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume</a>{" "}
        </div>
        </StyledLink>

    )
}

export default RightNav;