import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/productos">Inicio</NavLink>
      <NavLink to="/">Registro</NavLink>
      <NavLink to="/login">Login</NavLink>      
    </div>
  )
}
export default Navbar
