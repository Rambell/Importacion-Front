import React from 'react'
import { Navbar } from './components/Navbar'
import { ContenidoFotoer } from './components/ContenidoFotoer'
import {PresentacionProductos} from './components/PresentacionProductos'

export const Layout = ( { children } ) => {
  return (
    <div>
      <header className='content-header'>
        <Navbar />
      </header>
      <PresentacionProductos/>
        <div className='imgBarco'>
          <div className='overlay'></div> 
        </div>
      {children}
      <footer>
        <ContenidoFotoer />
      </footer>
    </div>
  )
}
