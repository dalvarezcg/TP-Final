import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarRegistroSesion = () => {
  return (
    <div className='navbar-registro-sesion'>
      <button><Link to='/'>Registrarse</Link></button>
      <button><Link to='/registro'>Iniciar Sesión</Link></button>
    </div>
  )
}

export default NavbarRegistroSesion
