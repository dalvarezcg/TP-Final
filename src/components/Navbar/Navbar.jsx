import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/productos">Home</NavLink>
      <NavLink to="/producto-detalle">Detalle de Productos</NavLink>
    </div>
  )
}

export default Navbar
