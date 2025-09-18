import React from "react";
import Navbar from "../Components/Navbar";
import Livepreview from "../Components/Livepreview";
import Sidebar from "../Components/Sidebar";
import { useForm } from "react-hook-form";

const Certification = () => {
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh]">
          <div className="flex relative">
            <h1 className="font-semibold m-2 text-xl">Certification</h1>
            <button className="absolute right-2 top-1 cursor-pointer hover:bg-[#0b99ff] text-[#0b99ff] bg-[#c0e0ff] hover:text-[#c0e0ff] rounded-lg px-5 py-1">
              Save
            </button>
          </div>
          <div className="p-4">
            <form action="" className="flex wrap gap-2 flex-col">
              <div>
                <label htmlFor="">Name of the Certification</label>
                <input
                  type="text"
                  placeholder="Name of the Certification"
                  className="border outline-none rounded-sm px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Issuing Organization</label>
                <input
                  type="text"
                  placeholder="Issuing Organization"
                  className="border outline-none rounded-sm px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Date of Completion</label>
                <input
                  type="date"
                  className="uppercase border outline-none rounded-sm px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Credential ID</label>
                <input
                  type="text"
                  placeholder="Credential ID"
                  className="border outline-none rounded-sm px-2 py-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Relevant Skills</label>
                <input
                  type="text"
                  placeholder="Relevant Skills"
                  className="border outline-none rounded-sm px-2 py-1 w-full"
                />
              </div>
            </form>
          </div>
          <div></div>
        </div>
        <Livepreview />
      </div>
    </div>
  );
};

export default Certification;
