import React from 'react'
import { NavLink} from "react-router-dom"

export const PresentacionProductos = () => {

    const verProductos= () => {
        return (
            <li><NavLink to="/productos">Productos</NavLink></li>
        )
    }

  return (
    <div className='content-presentacion'>
        <h1>Acercamos los sabores del mundo a tu mesa</h1>
        {/* <button className='btn-presentacion'><NavLink to="/productos" className='btn-pre' style={{textDecoration:'none'}}>Ver Productos</NavLink></button> */}
        <NavLink to="/productos" className='btn-pre' style={{textDecoration:'none'}}><button className='btn-presentacion'>Ver Productos</button></NavLink>
        
        
    </div>
  )
}
