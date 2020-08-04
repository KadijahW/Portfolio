import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled.div
    `
.links{
    display: flex;
    flex-flow: row nowrap; 
    padding 18px 10px; 
 }

 .links a {
    margin-right: 3%;
    color: white;
    text-decoration: none;
}

@media (max-width: 768px){
    .links{
        flex-flow: column nowrap;
        background-color: #A288A6;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        min-height: 95vh;
        width: 150px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 50;

    }
}
`

const RightNav = ({open}) => {
    return (
        <StyledLink open={open}>
        <div className='links'>
                <Link to='/'>Home</Link>
                <Link to="/About">About</Link>{" "}
                <Link to="/Projects">Projects</Link>{" "}
                <a href="https://docs.google.com/document/d/1IqHxy45VdkyR_Sy9Y2yto3e21fSM5XAU6Z6rJEaui6Q/edit?usp=sharing"  rel="noopener noreferrer" target='_blank'>Resume</a>{" "}
        </div>
        </StyledLink>

    )
}

export default RightNav;