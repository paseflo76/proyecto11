import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='header'>
      <div className='header-title'>
        <img
          src='/assets/star-wars.png'
          alt='logo'
          className='star-wars-logo'
        />

        <img
          src='/assets/menu.png'
          alt='menu'
          className='menu-icon'
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className={`nav-links ${open ? 'show' : ''}`}>
        {/* STATUS */}
        <h4>Status</h4>

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

        {/* SPECIES */}
        <h4>Species</h4>

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
    </nav>
  )
}

export default Header
