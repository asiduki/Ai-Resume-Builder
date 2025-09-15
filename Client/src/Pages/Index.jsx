import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "motion/react";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { userContextdata } from "../Context/Usercontext";

const Index = () => {
  const { personalInfo, setPersonalInfo } = useContext(userContextdata);
  const [ error , seterror] = useState(false) ;

  // Local state to manage form inputs temporarily before updating context
  const [formData, setFormData] = useState({
    name: personalInfo.name || "",
    role: personalInfo.role || "",
    address: personalInfo.address || "",
    email: personalInfo.email || "",
    portfolio: personalInfo.portfolio || "",
    summary: personalInfo.summary || "",
  });

  const handleChange = (field, value) => {
    
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo(formData);
  };

  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        <div className="w-[40%] bg-[#f1f1f1] px-4 py-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Personal Information</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border rounded-xl px-2 py-2"
                placeholder="Enter your full name, e.g., Shivam Kumar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">What’s your role</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="text"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full border rounded-xl px-2 py-2"
                placeholder="Enter your role, e.g., Full Stack Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="text"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full border rounded-xl px-2 py-2"
                placeholder="Enter your address, e.g., Ghaziabad, Uttar Pradesh"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="tel"
                maxLength="10"
                minLength={`10`}
                value={formData.number}
                onChange={(e) => handleChange("number", e.target.value)}
                className={`w-full border rounded-xl px-2 py-2`}
                placeholder="Enter your Phone Number, e.g., *******965"
              />
              <h1 className={`text-red-500 ${error ? "" : "hidden"}`}>Please Input 10 digits</h1>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border rounded-xl px-2 py-2"
                placeholder="Enter your email, e.g., email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio Link</label>
              <motion.input
                whileTap={{ scale: 1.05 }}
                type="text"
                value={formData.portfolio}
                onChange={(e) => handleChange("portfolio", e.target.value)}
                className="w-full border rounded-xl px-2 py-2"
                placeholder="Enter your Portfolio Link"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Summary</label>
              <motion.textarea
                whileTap={{ scale: 1.05 }}
                value={formData.summary}
                onChange={(e) => handleChange("summary", e.target.value)}
                className="w-full border rounded-xl px-2 py-2 resize-none h-40"
                placeholder="Enter your summary, e.g., Full Stack Developer with a focus on..."
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Save
            </button>
          </form>
        </div>

        <Livepreview />
      </div>
    </div>
  );
};

export default Index;
