import React from 'react'
import Ship from '../assets/img/ppn.png'
import { NavLink} from "react-router-dom"


export const Navbar = () => {
  return (
    <div className='content'> 
      <nav className='nav-content'>
        <div className='logo'>
            <img src={Ship} alt="logo" width={100} />
        </div>
        <div className='nav-list'>
          <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/servicios">Nuestros Servicios</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/about">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/Contacto">Contacto</NavLink></li>
            <button className='btn-login'>Acceso</button>
          </ul>
              
        </div>
      </nav>
    </div>
  )
}
