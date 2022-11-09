import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/my-work">MyWork</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default NavBar