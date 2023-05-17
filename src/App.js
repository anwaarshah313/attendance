import React from 'react'
import Login from './componente/Login'
import Signup from './componente/Signup'
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
