import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Landing from '../Pages/Landing'
import Signup from '../Pages/Signup'
import Index from '../Pages/Index'
    
const Routing = () => { 
  return (      
    <>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />           
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Index" element={<Index/>}/>
     </Routes>
    </>
  )
}

export default Routing
