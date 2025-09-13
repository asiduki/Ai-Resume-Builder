import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBagSimpleLight } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";

const Sidebar = () => {
  const [Navbar, setNavbar] = useState([
    {
      name: "Personal Info",
      to: "/index",
      image: <MdPerson className="h-7 w-7" />,
    },
    {
      name: "Skills",
      to: "/Skills",
      image: <BsFillLightningChargeFill className="h-7 w-7" />,
    },
    {
      name: "Experience",
      to: "/Experience",
      image: <PiBagSimpleLight className="h-7 w-7" />,
    },
    {
      name: "Education",
      to: "/Education",
      image: <RiGraduationCapLine className="h-7 w-7" />,
    },
  
    {
      name: "Projects",
      to: "/Projects",
      image: <VscFileSubmodule className="h-7 w-7" />,
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-5">
        {Navbar.map((items, index) => {
          return (
            <div key={index}>
              <NavLink
                to={items.to}
                className={({
                  isActive,
                }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
              >
                {items.image}
                {items.name}
              </NavLink>
            </div>
          );
        })}
      </div>

      
      {/* 
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
          to="/Education"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <RiGraduationCapLine className="h-7 w-7" />
            Education
          </NavLink>
          <NavLink
          to="/Experience"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <PiBagSimpleLight className="h-7 w-7" />
            Experience
          </NavLink>
          <NavLink
          to="/Skills"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <BsFillLightningChargeFill className="h-7 w-7" />
            Skills
          </NavLink>
          <NavLink
          to="/Projects"
            className={({
              isActive,
            }) => `pl-4 rounded w-50 py-2 pr-10 hover:bg-[#e8e8e8] cursor-pointer flex gap-3
          ${isActive ? "bg-[#e8e8e8]" : "bg-white"}`}
          >
            <VscFileSubmodule className="h-7 w-7" />
            Projects
          </NavLink>
        </div> */}
    </>
  );
};

export default Sidebar;
