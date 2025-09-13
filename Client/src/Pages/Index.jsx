import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "motion/react";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContextdata } from "../Context/Usercontext";

const Index = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full ">
        <Sidebar />
        <div className="w-[40%] bg-[#f1f1f1]  px-4 py-6 rounded-lg">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <div className="w-full h-[80vh] grid grid-cols-1 justify-center items-center px-4">
            <form
              action=""
              className="grid grid-cols-1 justify-center"
              
            >
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 "
              >
                Full Name
              </label>
              <motion.input
                whileTap={{ scale: 1.2 }}
                {...register("name")}
                type="text"
                className="w-100 border rounded-xl px-2 py-1 "
                placeholder="Enter your full name, e.g., Shivam Kumar"
              />
              <label
                htmlFor=""
                className=" block text-sm font-medium text-gray-700 mt-2 mb-1"
              >
                What’s your role
              </label>
              <motion.input
                whileTap={{ scale: 1.2 }}
                {...register("role")}
                type="text"
                className="w-100 border rounded-xl px-2 py-1"
                placeholder="Enter your role, e.g., Full Stack Developer"
              />
              <label
                htmlFor=""
                className=" block text-sm font-medium text-gray-700 mt-2 mb-1"
              >
                Address
              </label>
              <motion.input
                whileTap={{ scale: 1.2 }}
                {...register("address")}
                type="text"
                className="w-100 border rounded-xl px-2 py-1"
                placeholder="Enter your address , e.g., Ghaziabad , Uttar Pradesh"
              />
              <label
                htmlFor=""
                className=" block text-sm font-medium text-gray-700 mt-2 mb-1"
              >
                Email
              </label>
              <motion.input
                whileTap={{ scale: 1.2 }}
                {...register("email")}
                type="email"
                className="w-100 border rounded-xl px-2 py-1"
                placeholder="Enter your email , e.g., email.example.com"
              />
              <label
                htmlFor=""
                className=" block text-sm font-medium text-gray-700 mt-2 mb-1"
              >
                Portfolio Link
              </label>
              <motion.input
                type="text"
                {...register("Portfolio")}
                whileTap={{ scale: 1.2 }}
                className="w-100 border rounded-xl px-2 py-1"
                placeholder="Enter your Portfolio Link"
              />
              <label
                htmlFor=""
                className=" block text-sm font-medium text-gray-700 mt-2 mb-1"
              >
                Summary
              </label>
              <motion.textarea
                whileTap={{ scale: 1.2 }}
                {...register("summary")}
                type="text"
                className="w-100 border rounded-xl px-2 py-1 resize-none h-45"
                placeholder="Enter your Summary , e.g.,Full Stack Developer with a focus on delivering scalable and efficient applications. Skilled in React, Node.js, and 
database design. Passionate about problem-solving and building user-centric solutions. "
              ></motion.textarea>
            </form>
          </div>
        </div>
        <Livepreview />
      </div>
    </div>
  );
};

export default Index;
