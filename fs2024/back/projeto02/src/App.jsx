import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contato from './pages/Contato'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/contato"><h1>Contato</h1></Link>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
