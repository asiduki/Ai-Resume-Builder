import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import addIcon from "../assets/add.png";
import professional from "../assets/professionalism.png";
import oneClick from "../assets/tap.png";
const Landing = () => {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState([]);
  const data = [
    {
      name: "AI Suggestions",
      content:
        "Get intelligent content recommendations and phrasing improvements to make your resume stand out.",
      Image: addIcon,
    },
    {
      name: "Professional Templates",
      content:
        "Choose from a variety of professional templates to create your resume.",
      Image: professional,
    },
    {
      name: "One Click Export",
      content: " Your resume to PDF with just one click.",
      Image: oneClick,
    },
  ];

  const datainside = [
    {
      name: "John Doe",
      content:
        "This resume builder is a game-changer! The AI suggestions helped me craft a much stronger resume than I ever could on my own. Highly recommend!",
      Image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740",
        specification: "Software Engineer",   
    },
    {
      name: "Devanshu",
      content:
        '" landed my dream job thanks to the professional resume I built here. The live preview and easy export made the whole process so smooth."',
      Image:
        "https://people.com/thmb/gzHtG_UnZBsUuHVJx9xjB5yAfIQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg",
        specification: "Labour",   
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCart(data);
      setUserData(datainside);
    }, 1000);
  }, []);

  return (
    <>
      {/* header section the top */}
      <header className="w-full h-16 flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-[#25a4ff]">Resume AI</h1>
        <div className="flex gap-4">
          <NavLink
            to="/Login"
            className="text-[#4db5ff] border border-[#4db5ff] px-4 py-2 rounded-md hover:bg-[#4db5ff] hover:text-white cursor-pointer"
          >
            Login
          </NavLink>
          <NavLink
            to="/Signup"
            className="bg-[#0b99ff] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0b99ff] cursor-pointer border border-[#0b99ff]"
          >
            Sign Up
          </NavLink>
        </div>
      </header>

      {/* body section the middle */}
      <div className="w-full flex mt-10">
        {/* Text div */}
        <div className="w-[50%] px-10">
          <h1 className="text-4xl font-bold ">
            Create Stunning <br /> Resumes in AI <br />
            Assistance
          </h1>
          <h3 className="text-gray-400 text-lg tracking-normal">
            Leverage smart resume suggestions, get a live preview of <br /> your
            document, and easily export to PDF with just one click. <br /> Your
            dream job starts here.
          </h3>
          <br />
          <Link
            to="/Login"
            className="bg-[#0b99ff] text-white px-4 py-2 rounded-md hover:bg-white  hover:text-[#0b99ff] cursor-pointer border border-[#0b99ff]"
          >
            Get Started
          </Link>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1693045181676-57199422ee66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDgyMDR8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGxpZmUlMjB0YWJsZXMlMkMlMjBBQ1QlMjA2MTAlMkMlMjBzZWxlY3QlMjBhbmQlMjB1bHRpbWF0ZSUyMHRhYmxlcyUyQyUyMG11bHRpcGxlJTIwZGVjcmVtZW50JTIwdGFibGVzfGVufDB8MHx8fDE3NDk4NTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=500&?utm_source=numberanalytics&utm_medium=referral"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
      {/* middle div */}

      <div className="w-full h-auto bg-[#f1f1f1] text-center  mt-5 py-6">
        <h1 className="text-5xl font-bold ">
          Unlock Your Potential with Powerful Features
        </h1>
        <div className="flex justify-center items-center gap-10 mt-10 px-10">
          {cart.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl items-center justify-center p-10 w-[300px] h-[300px]"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={data.Image}
                    alt=""
                    className="w-20 h-20 text-blue-500"
                  />
                </div>
                <div></div>
                <h1>{data.name}</h1>

                <h2 className="text-gray-400 text-sm mt-2 tracking-tight">
                  {data.content}
                </h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full h-auto mt-5 pt-5 text-center py-10">
        <h1 className="text-5xl font-bold ">What Our Users Say</h1>
        <div className="flex justify-center items-center gap-10 mt-10 px-10">
          {userData.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-[#f1f1f1] rounded-2xl items-center justify-center p-10"
              >
                <h2 className="text-gray-400 text-sm mt-2 tracking-tight">
                  {data.content}
                </h2>
                <div className="flex m-2 gap-6">
                  <img
                    src={data.Image}
                    alt=""
                    className="w-20 h-20 object-cover text-blue-500 rounded-full"
                  />
                        <p>{data.name} <br />
                        <span>{data.specification}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* footer section at the bottom */}
      <footer className="w-full h-auto bg-[#f1f1f1] text-center py-10">
        2025 Resume AI . All rights are reserved
      </footer>
    </>
  );
};

export default Landing;
