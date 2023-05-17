import React from 'react'
import Login from './componets/Login'
import Signup from './componets/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
    
    </BrowserRouter>
 
    
    </>
  )
}
