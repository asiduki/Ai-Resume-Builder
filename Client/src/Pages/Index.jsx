import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBagSimpleLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";

const Index = () => {
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <div className="flex flex-col gap-5">
          <NavLink
          to="/index"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <MdPerson className="h-7 w-7" /> Personal Info
          </NavLink>
          <NavLink
          to="#"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <RiGraduationCapLine className="h-7 w-7" />
            Education
          </NavLink>
          <NavLink
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <PiBagSimpleLight className="h-7 w-7" />
            Experience
          </NavLink>
          <NavLink
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <BsFillLightningChargeFill className="h-7 w-7" />
            Skills
          </NavLink>
          <NavLink
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <VscFileSubmodule className="h-7 w-7" />
            Projects
          </NavLink>
        </div>
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh]"></div>
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh]">adad</div>
      </div>
    </div>
  );
};

export default Index;
