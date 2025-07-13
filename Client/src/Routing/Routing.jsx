import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Landing from '../Pages/Landing'
import Signup from '../Pages/Signup'
    
const Routing = () => { 
  return (      
    <>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />           
        <Route path="/Signup" element={<Signup />} />
     </Routes>
    </>
  )
}

export default Routing
