import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../utils/Logo';
import UserInfo from '../../utils/UserInfo';

const Navbar = () => {

  return (
    <header className='navbar'>
      <Logo />
      <nav className='nav-links'>
        <NavLink
          to='/'
          activeclassname='active'
        >
          Home
        </NavLink>
        <NavLink
          to='/clientes'
          activeclassname='active'
        >
          Clientes
        </NavLink>
      </nav>
      <UserInfo />
    </header>
  )
}

export default Navbar