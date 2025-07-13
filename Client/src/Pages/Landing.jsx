import React, { useEffect }  from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import addIcon from "../assets/add.png";

const Landing = () => {
  const [cart, setCart] = useState([]);
  const data = [{
    name: "AI Suggestions",
    content:
      "Get intelligent content recommendations and phrasing improvements to make your resume stand out.",
    Image: addIcon,
  },
  {
    name: "AI Suggestions",
    content:
      "Get intelligent content recommendations and phrasing improvements to make your resume stand out.",
    Image: "",
  },
  {
    name: "AI Suggestions",
    content:
      "Get intelligent content recommendations and phrasing improvements to make your resume stand out.",
    Image: "",
  }];
  useEffect(()=>{
    setTimeout(()=>{
      setCart(data);
    },1000)
  },[])

  return (
    <>
      {/* header section the top */}
      <header className="w-screen h-16 flex justify-between items-center px-4">
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

      <div className="w-full h-auto bg-[#f1f1f1] text-center  mt-5 ">
        <h1 className="text-5xl font-bold ">
          Unlock Your Potential with Powerful Features
        </h1>
        <div className="flex justify-center items-center gap-20 mt-10">
            {cart.map((data , index)=>{
                return(
                    <div key={index} className="bg-white rounded-2xl items-center justify-center w-[300px] ">
                        <img src={data.Image} alt="" className="w-20 h-20 text-blue-500" />
                        <h1>{data.name}</h1>
                        <h2>{data.content}</h2>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Landing;
