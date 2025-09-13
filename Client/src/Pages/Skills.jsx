import React, { useContext, useState } from 'react';
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from '../Components/Livepreview';
import { userContextdata } from '../Context/userContext';
const Skills = () => {
  const {skills , setSkills} = useContext(userContextdata);
  const [newSkill, setNewSkill] = useState("");


  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill(""); 
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        <div className="w-[40%] bg-white p-8 rounded-lg shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Manage Your Skills 🧑‍💻
          </h2>

          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={newSkill}
              onChange={handleInputChange}
              placeholder="e.g., Docker"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              onClick={handleAddSkill}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Add
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
              Your Skills
            </h3>
            {Array.isArray(skills) && skills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
              >
                <span className="text-gray-800">{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 hover:text-red-700 font-bold text-lg"
                  title="Remove skill"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <Livepreview />
      </div>
    </div>
  );
};

export default Skills;