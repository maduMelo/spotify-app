import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Callback from './pages/Callback'
import Profile from './pages/Profile'
import CreatePlaylist from './pages/CreatePlaylist';
import MyPlaylists from './pages/MyPlaylists';
import Navbar from './components/Navbar';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/callback' element={<Callback />}></Route>

          <Route element={<Navbar />}>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='create-playlist' element={<CreatePlaylist />}></Route>
            <Route path='my-playlists' element={<MyPlaylists />}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
