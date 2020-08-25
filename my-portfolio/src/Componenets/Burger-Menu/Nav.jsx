import React from 'react'
// import '../../CSS/Nav.css'
import styled from 'styled-components'
import Burger from './Burger'

const NavBar = styled.nav`
border-bottom: 2px solid white;
padding: 0 18px;
display: flex;
justify-content: space-between;
background-color: #A288A6;

.container {
    padding: 10px 0;
}

.profile-logo {
    width: 8vh;
    float: left;
}

`;

const Nav = () => {
    return (
        <div className='container'>
            <NavBar>
                <div className='profile'>
                    <img className='profile-logo' src={require('../../Profile-Logo.png')} alt='profile-logo' />
                </div>
                <Burger />
            </NavBar>

        </div>
    )
}

export default Nav;