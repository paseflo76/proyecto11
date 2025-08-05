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
          alt='Menú'
          className='menu-icon'
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className={`nav-links ${open ? 'show' : ''}`}>
        <NavLink
          to='/characters'
          className='link'
          onClick={() => setOpen(false)}
        >
          Personajes
        </NavLink>
        <NavLink
          to='/creatures'
          className='link'
          onClick={() => setOpen(false)}
        >
          Criaturas
        </NavLink>
        <NavLink to='/droids' className='link' onClick={() => setOpen(false)}>
          Droides
        </NavLink>
        <NavLink
          to='/locations'
          className='link'
          onClick={() => setOpen(false)}
        >
          Ubicaciones
        </NavLink>
        <NavLink
          to='/organizations'
          className='link'
          onClick={() => setOpen(false)}
        >
          Organizaciones
        </NavLink>
        <NavLink to='/species' className='link' onClick={() => setOpen(false)}>
          Especies
        </NavLink>
        <NavLink to='/vehicles' className='link' onClick={() => setOpen(false)}>
          Vehículos
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
