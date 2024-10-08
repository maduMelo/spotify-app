import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext';

import Homepage from './pages/Homepage'
import Callback from './pages/Callback'
import Navbar from './components/Navbar';
import Profile from './pages/Profile'
import CreatePlaylist from './pages/CreatePlaylist';
import FinishedPlaylist from './pages/FinishedPlaylist';

import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/callback' element={<Callback />}></Route>
        <Route element={<UserProvider><Navbar /></UserProvider>}>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='create-playlist' element={<CreatePlaylist />}></Route>
          <Route path='finished-playlist' element={<FinishedPlaylist />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
