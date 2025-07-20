import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: data.email,
        password: data.password,
      });

      if (res.status === 200) {
          setLoading(true);
        setTimeout(() => {
          navigate("/Index");
        }, 2000);
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Left side */}

      {loading ? (
        <motion.div
          className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full mx-auto mt-12"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        />
      ) : (
        <div className="w-[50%] bg-white text-black flex items-center justify-center">
          <div
            className="h-[55%] bg-gray-100 rounded-2xl text-black px-4 py-4 text-center"
            style={{ boxShadow: "-10px 10px 10px 0 #549cff" }}
          >
            <h1 className="text-2xl font-bold mt-3">Login to Resume Builder</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your Email"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2"
              />
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your Password"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2"
              />
              <div className="w-full text-right mt-2">
                <a href="#" className="text-blue-500 font-bold text-sm">
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 cursor-pointer mt-4"
              >
                Login
              </button>
            </form>
            <span className="text-sm text-center block mt-4">
              Don't have an account?{" "}
              <Link to="/Signup" className="text-blue-500 font-bold text-sm">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      )}

      {/* Right side */}
      <div className="w-[50%] bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 text-white text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          "Your career journey starts here <br /> Build a resume that opens
          doors."
        </h1>
        <p className="text-lg mt-4">Build a resume that gets you noticed!</p>
      </div>
    </div>
  );
};

export default Login;
