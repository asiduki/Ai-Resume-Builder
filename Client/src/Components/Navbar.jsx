import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GrTemplate } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full mt-2">
      <div className="ml-4 text-2xl font-bold">Resume Builder</div>
      <div>
        <ul className="flex gap-4 mr-10">
          <button className="bg-[#c0e0ff] px-2 rounded text-[#0b99ff] py-[3px] flex gap-2 cursor-pointer">
            <FaRegStar className="h-5 w-5" />
            AI-Enhance
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
