import React from 'react'
import { NavLink} from "react-router-dom"
import Ship from '../assets/img/ppn.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const NavProduct = () => {
  return (
    <div className='content-navproduct'>
        <div className='content-navegacionprodu'>
            <img className='img-produc' src={Ship} alt="logo" width={100}/>
            <NavLink to="/" ><button className='btn-regresarProduct'>Regresar</button></NavLink>
            <input type="search" className='input-searc'/>
            <span className="icon-search"><i className="bi bi-search" style={{ color: 'white' }}></i></span>
        </div>
    </div>
  )
}
