import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* Left side component  */}
      <div className="w-screen h-screen flex ">
        <div className="w-[50%] bg-white text-black flex items-center justify-center">
          <div
            className=" h-[55%] bg-gray-100 rounded-2xl text-black px-4 py-4 text-center"
            style={{ boxShadow: "10px 10px 10px 0 #549cff" }}
          >
            <h1 className="text-2xl font-bold mt-3 ">
              Login to Resume Builder
            </h1>
            <form action="get" className="mt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2"
              />
            </form>
            <div className="w-full text-right">
             
              <a
                href=""
                className="text-blue-500 font-bold text-sm text-right mt-2"
              >
                Forget Password?
              </a>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 cursor-pointer mt-4">
                Login
              </button>
              <span className="text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="text-blue-500 font-bold text-sm text-right mt-2"
            >
              Sign Up
            </Link>
              </span>
          </div>
        </div>

        {/* Right side component  */}
        <div className="w-[50%] bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 text-white text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">
            "Your career journey starts here <br /> Build a resume that opens
            doors."
          </h1>
          <p className="text-lg">
            "Your career journey starts here <br /> Build a resume that opens
            doors."
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
