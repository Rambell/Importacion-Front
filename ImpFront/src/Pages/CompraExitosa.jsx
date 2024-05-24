import React from 'react'
import { NavProduct } from '../components/NavProduct'
import { NavLink } from "react-router-dom"

export const CompraExitosa = () => {
  return (
    <div>
        <NavProduct ></NavProduct>
        <div className='content-Producto'>
            <NavLink to="/productos" ><button className='btn-regresarProduct'><i className="bi bi-caret-left-fill"></i></button></NavLink>
      </div>
      <div className='content-compraExitosa'>
        <div className='content-mensaje'>
            <h2>Se ha realizado la compra exitosa</h2>
            <p>Muchas gracias por comprar con nosotros</p>
            <p>Siga viendo nustra selección de productos del mundo para usted</p>
        </div>
      </div>
    </div>
  )
}
