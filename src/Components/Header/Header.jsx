import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='header'>
      {/* TOP BAR */}
      <div className='top-bar'>
        {/* LOGO */}
        <div className='header-left'>
          <img src='/assets/logo.png' alt='logo' className='rick-morty-logo' />
        </div>

        {/* TITLE */}
        <div className='Title'>
          <h1 className='mobile-title'>Rick and Morty</h1>
        </div>

        {/* MENU */}
        <div className='header-right'>
          <img
            src='/assets/menu.png'
            alt='menu'
            className='menu-icon'
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* NAV */}
      <div className={`nav-links ${open ? 'show' : ''}`}>
        {/* STATUS */}
        <div className='nav-group'>
          <div className='group-links'>
            <h4 className='nav-title'>Status</h4>
            <NavLink
              to='/status/Alive'
              className='link'
              onClick={() => setOpen(false)}
            >
              Alive
            </NavLink>

            <NavLink
              to='/status/Dead'
              className='link'
              onClick={() => setOpen(false)}
            >
              Dead
            </NavLink>

            <NavLink
              to='/status/unknown'
              className='link'
              onClick={() => setOpen(false)}
            >
              Unknown
            </NavLink>
          </div>
        </div>

        {/* SPECIES */}
        <div className='nav-group'>
          <div className='group-links'>
            <h4 className='nav-title'>Species</h4>
            <NavLink
              to='/species/Human'
              className='link'
              onClick={() => setOpen(false)}
            >
              Human
            </NavLink>

            <NavLink
              to='/species/Alien'
              className='link'
              onClick={() => setOpen(false)}
            >
              Alien
            </NavLink>

            <NavLink
              to='/species/Robot'
              className='link'
              onClick={() => setOpen(false)}
            >
              Robot
            </NavLink>

            <NavLink
              to='/species/Humanoid'
              className='link'
              onClick={() => setOpen(false)}
            >
              Humanoid
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
