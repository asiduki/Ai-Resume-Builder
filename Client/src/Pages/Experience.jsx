import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { useForm } from "react-hook-form";
import { userContextdata } from "../Context/userContext";
const Experience = () => {
  const { register, handleSubmit, reset } = useForm();
  const {Experience, setExperience} = useContext(userContextdata);
  const onsubmit = (data)=>{
    setExperience((prvdata) => [...prvdata,data]);
    reset();
  }
  const handleDelete = (index) => {
    setExperience((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        <div className="w-[40%] bg-[#f1f1f1] h-[100vh]">
          <h1 className="text-xl font-bold mt-3 mb-2 ml-3">
            Manage Your Experience 💼
          </h1>
          <div className="grid grid-cols-1 p-4">
            <form action="" onSubmit={handleSubmit(onsubmit)}>
              <input
              {...register("role", { required: true })}
                type="text"
                placeholder="Enter Your Role"
                className="border rounded-sm py-1 px-2 w-full mb-3 outline-0"
              />
              <input
                type="text"
              {...register("name", { required: true })}
                placeholder="Enter Company Name"
                className="border rounded-sm py-1 px-2 w-full mb-3 outline-0"
              />
              <input
                type="text"
              {...register("duration", { required: true })}
                placeholder="Duration"
                className="border rounded-sm py-1 px-2 w-full mb-3 outline-0"
              />
              <textarea
                type="text"
              {...register("about", { required: true })}
                placeholder="About your role"
                className="border rounded-sm py-1 px-2 w-full mb-3 outline-0 resize-none h-40"
              ></textarea>
              <button type="submit" className="w-full rounded-sm cursor-pointer px-2 py-1 hover:bg-[#0b99ff] text-[#0b99ff] bg-[#c0e0ff] hover:text-[#c0e0ff]">
                Save
              </button>
            </form>
          </div>
          <div className="font-bold ml-4 ">Professional Experience</div>
          {Experience.map((data,index)=>{
            return (
              <div key={index}> 
                <div className="border rounded-xl p-3 mt-1 m-5 relative">
                  <h1 className="font-semibold ">
                    {data.role},{data.name}({data.duration})
                    </h1>
                    <p>{data.about}</p>
                    <br />
                    <button
                    onClick={() => handleDelete(index)}
                    className="text-red-400 hover:text-red-600 cursor-pointer absolute right-2 bottom-0 m-2"
                  >
                    Clear
                  </button>
                </div>
                  </div>
            )
          })}
        </div>
        <Livepreview />
      </div>
    </div>
  );
};

export default Experience;
