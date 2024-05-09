import React from 'react'
import Ship from '../assets/img/ppn.png'


export const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={Ship} alt="logo" width={500} />
        </div>
        <ul className='nav-list'>
            <li><a href="./">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
  )
}
