import React from 'react'
import './index.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { About } from './components/About'
import { NotFoundPage } from './components/NotFoundPage'


export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      
    </div>
  )
}
