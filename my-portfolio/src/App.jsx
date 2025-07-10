import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { Toaster } from '@/Components/UI/toaster';


function App() {
  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>

      <Route path='/'element={<Home/>}/>
      <Route path='*'element={<NotFound/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App
