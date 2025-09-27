import React, { useContext } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
// import { GrTemplate } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContextdata } from "../Context/Usercontext";
const Navbar = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { userdetails, setuserdetails } = useContext(userContextdata);
  const handleclick = async () => {
    try {
      const res = await axios.post(
        `${apiUrl}/api/login/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        // logout();
        localStorage.removeItem('chat-user');
        navigate("/Login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-between w-full mt-2">
      <div className="ml-4 text-2xl font-bold">Resume Builder</div>

      <div>
        <ul className="flex gap-4 mr-10">
          <button className="bg-[#c0e0ff] px-2 rounded text-[#0b99ff] py-[3px] flex gap-2 cursor-pointer">
            <FaRegStar className="h-5 w-5" />
            AI-Enhance
          </button>
          <button
            onClick={handleclick}
            className="border-[#c0e0ff] border px-2 rounded  text-[#0b99ff] py-[3px] flex gap-2 cursor-pointer"
          >
            <CiLogout className="h-5 w-5" />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
