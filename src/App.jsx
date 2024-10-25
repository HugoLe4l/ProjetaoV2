import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/home.jsx"
import Anuncio from './pages/anuncio.jsx'
import FinalizarReserva from './pages/finalizarReserva.jsx'
import NotFoundPage from "./pages/not_found.jsx"

import "./pages/css/global.css"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/anuncio' element={<Anuncio/>}/>
        <Route path='/finalizaReserva' element={<FinalizarReserva/>}/>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
