import React from 'react'
import { Navbar } from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { About } from './components/About'
import { NotFoundPage } from './components/NotFoundPage'


export const Rutas = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element= {<Home></Home>}/>
          <Route path="/About" element= {<About></About>}/>
          <Route path="/*" element= {<NotFoundPage/>}/>

        </Routes>
    </div>
  )
}
