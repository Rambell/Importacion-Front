import React from 'react'
import { NavProduct } from '../components/NavProduct'
import { NavLink } from "react-router-dom"

export const Producto = () => {
  return (
    <div>
        <NavProduct ></NavProduct>
      <div className='content-Producto'>
        <NavLink to="/productos" ><button className='btn-regresarProduct'><i className="bi bi-caret-left-fill"></i>Regresar</button></NavLink>
      </div>
    </div>
  )
}
