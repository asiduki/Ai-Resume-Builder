import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${apiUrl}/api/signup`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      setMessage(res.data.message);
      setTimeout(() => {
        setuserdetails(res.data.user);
        navigate("/Index");
      }, 1000);
    } catch (error) {
      setMessage("Error: " + error.response?.data?.error || error.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex">
        {/* Left side component */}
        <div className="w-[50%] bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 text-white text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">
            Your career journey starts here
          </h1>
          <h2 className="text-2xl font-semibold mt-2">
            Build a resume that opens doors.
          </h2>
          <p className="text-lg mt-4">
            Let AI help you craft a professional resume effortlessly.
          </p>
        </div>

        {/* Right side component */}
        <div className="w-[50%] bg-white text-black flex items-center justify-center">
          <div
            className="w-[65%] bg-gray-100 rounded-2xl text-black px-6 py-6 text-center"
            style={{ boxShadow: "10px 10px 10px 0 #549cff" }}
          >
            <h1 className="text-2xl font-bold mt-3">
              Signup to Resume Builder
            </h1>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="Enter your Email"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2  placeholder:text-black"
              />
              <input
                type="text"
                {...register("name")}
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2 placeholder:text-black"
              />
              <input
                type="password"
                {...register("password")}
                name="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2  placeholder:text-black"
              />
              <input
                type="password"
                {...register("confirmpassword")}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                className="w-full mt-4 h-10 border-b outline-[#5ba1ff] border-[#5ba1ff] p-2  placeholder:text-black"
              />
              <input
                type="submit"
                value={"Signup"}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 cursor-pointer mt-4"
              />
            </form>

            <span className="text-sm text-center block mt-4">
              Already have an account?{" "}
              <Link to="/Login" className="text-blue-500 font-bold">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
