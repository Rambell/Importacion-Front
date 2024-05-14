import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from '../components/Home'
import { About } from '../components/About'
import { NotFoundPage } from '../components/NotFoundPage'
import { Navbar } from '../components/Navbar'
import { Servicios } from '../components/Servicios'
import { Productos } from '../components/Productos'
import { Contacto } from '../components/Contacto'
import {PresentacionProductos} from '../components/PresentacionProductos'
import { ContenidoFotoer } from '../components/ContenidoFotoer'





export const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <header className='content-header ' >
          <Navbar />
        </header>
      
        <PresentacionProductos/>
        <div className='imgBarco'>
          <div className='overlay'></div> 
        </div>
     

          <section style={{marginTop:'30px'}}>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/About" element= {<About/>}/>
                <Route path='/Servicios' element= {<Servicios/>}/>
                <Route path='/Productos' element= {<Productos/>}/>
                <Route path='/Contacto' element= {<Contacto/>}/>
                <Route path="*" element= {<NotFoundPage/>}/>
            </Routes>
          </section>
      
        <footer style={{ background:'black'}}>
          <ContenidoFotoer></ContenidoFotoer>
        </footer>
      </BrowserRouter>
          

    </div>
  )
}
