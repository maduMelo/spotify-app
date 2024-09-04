import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import Callback from './pages/Callback'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/callback' element={<Callback />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
