import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { NotFoundPage } from '../Pages/NotFoundPage'
import { Servicios } from '../Pages/Servicios'
import { Productos } from '../Pages/Productos/Productos'
import { Producto } from '../Pages/Producto'
import { Contacto } from '../Pages/Contacto'
import { CompraExitosa } from '../Pages/CompraExitosa'
import { Layout } from '../Layout'


export const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <section>
            <Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/About" element= {<About/>}/>
                <Route path='/Servicios' element= {<Servicios/>}/>
                <Route path='/Productos' element= {<Productos/>}/>
                <Route path='/Producto' element= {<Producto/>}/>
                <Route path='/Contacto' element= {<Contacto/>}/>
                <Route path='/CompraExitosa' element= {<CompraExitosa/>}/>
                <Route path="*" element= {<NotFoundPage/>}/>
            </Routes>
          </section>
        </Layout>
      </BrowserRouter>
    </div>
  )
}
