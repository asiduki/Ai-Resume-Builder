import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { NavLink } from "react-router-dom";

const Index = () => {
  const [button, setbutton] = useState([
    { name: "Improve Grammar", action: "Improve Grammer" },
    { name: "Add Keywords", action: "" },
    { name: "Rewrite Concise", action: "" },
  ]);
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
            <textarea
              name=""
              id="Personalinfo"
              placeholder="Paste your experience bullet point here..."
              className="text-gray-500 p-2 h-40 w-[95%] border rounded-lg outline-none adjustable-none"
            ></textarea>
            <div className="flex gap-4 ">
              {button.map((items, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={()=>handleClick(items.action)}
                      className={
                        `px-[2px] cursor-pointer w-37 bg-[#0b99ff] py-3 text-white rounded  hover:bg-[#c0e0ff] hover:text-black `
                      }
                    >
                      {items.name}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold">
              Result Preview:
              </h3>
               Improved, keyword-rich, and concise version of
              your bullet point will appear here after you select an action.
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
