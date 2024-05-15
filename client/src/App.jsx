import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Default from './Default'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
