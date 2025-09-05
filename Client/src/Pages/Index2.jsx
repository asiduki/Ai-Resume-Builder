import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Index = () => {
  const [text, setText] = useState("");
  const [airesult, setairesult] = useState();
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const fetchDetails = async(prompt)=> {
    if(!text){
      setairesult("Enter Some text first");
    }
    else{
       try {
      setairesult(" ");
      const value = await axios.post(
        "http://localhost:5000/api/ai/get-response",{prompt});
      setairesult(value.data);
    } catch (err) {
      console.log(err);
    }
    }
   
  }
  const button = [
    { name: "Improve Grammar", action:()=>
      fetchDetails(
        `You are a grammar correction tool. Your task is to correct the provided text. Your entire response must be ONLY the corrected text. Do not add any explanations, notes, or introductory phrases. \n\nText :"${text}"`
      ),
    },
    { name: "Add Keywords", action:()=>
      fetchDetails
      (`I have my resume text for a role I'm targeting. Analyze  the most important keywords and skills from the job description that are missing from my resume according  to my ditails  Do not add any explanations, notes, or introductory phrases .\n\nText :"${text}"`)},
    { name: "Rewrite Concise", action:()=>
      fetchDetails
      (`Rewrite the following text to be more concise and clear, while retaining the core meaning  Do not add any explanations, notes, or introductory phrases.\n\nText :" ${text}"`)},
  ];
  
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
          <div className="w-full h-[100vh]">
            <p className="p-4">Original Bullet Point:</p>
            <form action="">
              <textarea
                name=""
                id="Personalinfo"
                value={text}
                onChange={handleChange}
                placeholder="Paste your experience bullet point here..."
                className="text-gray-500 p-2 h-40 w-[95%] border rounded-lg outline-none adjustable-none"
              ></textarea>
            </form>
            <div className="flex gap-4 ">
              {button.map((items, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={items.action}
                      className={`px-[2px] cursor-pointer w-37 bg-[#0b99ff] py-3 text-white rounded  hover:bg-[#c0e0ff] hover:text-black `}
                    >
                      {items.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold">Result Preview:</h3>
              Improved, keyword-rich, and concise version of your bullet point
              will appear here after you select an action.
              <div className="mt-10 text-red-500">{airesult}</div>
            </div>
          </div>
        </div>

        {/* right side div */}
        <div className="w-[40%] bg-[#f1f1f1]  rounded-lg py-6 px-4 ">
          <h1 className="text-2xl font-bold">Live Resume Preview</h1>
          <p className="text-sm text-gray-500 flex justify-center items-center h-full">
            Your resume will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
