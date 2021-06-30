import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navBar'>
            <NavLink exact activeClassName='active' to='/' className='width'>Home</NavLink>
            <NavLink exact activeClassName='active' to='/about' className='width'>About</NavLink>
            <NavLink exact activeClassName='active' to='/users' className='width'>Users</NavLink>
        </div>
    )
}

export default Navbar
