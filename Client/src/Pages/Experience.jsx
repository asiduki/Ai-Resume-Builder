import React from 'react'
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from '../Components/Livepreview';
const Experience = () => {
  return (
    
      <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar/>
        
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh]">
          <h1 className='text-xl font-bold mt-3 mb-2 ml-3'>
          Manage Your Experience 💼
          </h1>
        </div>
        <Livepreview/>
      </div>
    
    </div>
  )
}

export default Experience
