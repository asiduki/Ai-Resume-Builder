import React from 'react'
import Navbar from "../Components/Navbar";
import { motion } from "motion/react"
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Index = () => {
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full ">
        <Sidebar />
        <div className="w-[40%] bg-[#f1f1f1]  px-4 py-6 rounded-lg">
          <h1 className="text-2xl font-bold">
            Enhance Experience Bullet Point
          </h1>
          <div className="w-full h-[80vh]">
            <form action="" className='grid grid-cols-1 justify-center'>
                <label htmlFor="">Summary</label>
                <input type="text" className='w-60 border rounded-xl px-2 py-1' />
            </form>
          </div>
        </div>
        <Livepreview/>
      </div>
    </div>
  )
}

export default Index
