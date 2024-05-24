import React from 'react'

import Ship from '../assets/img/ppn.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const NavProduct = () => {
  return (
    <div className='content-navproduct'>
        <div className='content-navegacionprodu'>
            <img className='img-produc' src={Ship} alt="logo" width={100}/>
            <input type="search" className='input-searc' placeholder='Buscar producto'/>
            <span className="icon-search"><i className="bi bi-search" style={{ color: '#C6D9EC' }}></i></span>
            <div className='content-person'>
              <span className="icon-search"><i className="bi bi-heart-fill" style={{ color: '#C6D9EC' }}></i></span>
              <span className="icon-search"><i className="bi bi-person-circle" style={{ color: '#C6D9EC' }}></i></span>
            </div>
        </div>
    </div>
  )
}
