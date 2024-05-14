import React from 'react'
import { NavLink} from "react-router-dom"
import Ship from '../assets/img/ppn.png'

export const ContenidoFotoer = () => {


  /* Codigo para subir hacia arriba */
  const scrollToTop = () => {
    const duration = 1000; // Duración del desplazamiento en milisegundos
    const start = window.pageYOffset;
    const distance = -start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  
  
  return (
    <div className='content-foot'>
      <div className='footer-list'>
      <img className='logo-footer' src={Ship} alt="logo" width={100}  onClick={scrollToTop}/>
        <div classname='none-list'>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/servicios">Nuestros Servicios</NavLink></li>
              <li><NavLink to="/productos">Productos</NavLink></li>
            </ul>
        </div>
          <ul >
            <li><NavLink to="/about">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/Contacto">Contacto</NavLink></li>
          </ul>
      </div>
      <p className='footer-final'>© Importaciones ilimitada 2024 - Todos los derechos reservados Rambell</p>
    </div>
  )
}
