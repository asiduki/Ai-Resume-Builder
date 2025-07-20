import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Landing from '../Pages/Landing'
import Signup from '../Pages/Signup'
import Index from '../Pages/Index'
import Education from '../Pages/Education'
import Experience from '../Pages/Experience'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
    
const Routing = () => { 
  return (      
    <>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />           
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Index" element={<Index/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
     </Routes>
    </>
  )
}

export default Routing
