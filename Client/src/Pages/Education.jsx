import React, { useContext } from 'react';
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from '../Components/Livepreview';
import { useForm } from 'react-hook-form';
import { userContextdata } from '../Context/Usercontext';

const Education = () => {
  const { education, setEducation } = useContext(userContextdata);
  const { register, handleSubmit, reset } = useForm();

  // Function to handle adding a new education entry
  const onSubmit = (data) => {
    setEducation(prev => [...prev, data]);
    reset(); // Clear the form fields after submission
  };

  // Function to handle deleting an entry
  const handleDelete = (indexToRemove) => {
    setEducation(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        {/* --- Form Section --- */}
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh] overflow-y-auto p-8">
          <div className='flex justify-between items-center mb-6'>
            <h1 className="text-2xl font-bold text-gray-800">Education</h1>
            <button
              type="submit"
              form="education-form" // Link button to the form
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Education
            </button>
          </div>
          
          <form id="education-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* School Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">School Name</label>
              <input
                {...register("schoolName", { required: true })}
                type="text"
                placeholder="e.g., Massachusetts Institute of Technology"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            {/* Degree & Field of Study */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  {...register("degree")}
                  type="text"
                  placeholder="e.g., B.Sc."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                <input
                  {...register("fieldOfStudy")}
                  type="text"
                  placeholder="e.g., Computer Science"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Start & End Date */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  {...register("startDate")}
                  type="text"
                  placeholder="e.g., Sep 2016"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  {...register("endDate")}
                  type="text"
                  placeholder="e.g., Jun 2020"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* GPA */}
             <div>
              <label className="block text-sm font-medium text-gray-700">GPA (optional)</label>
              <input
                {...register("gpa")}
                type="text"
                placeholder="e.g., 3.9 / 4.0"
                className="w-1/2 mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

        
          </form>

          <div className="mt-10">
            {Array.isArray(education) && education.map((edu, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-lg mb-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{edu.schoolName} — {edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.startDate} – {edu.endDate}</p>
                </div>
                <div className="flex gap-4">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Edit</button>
                  <button 
                    onClick={() => handleDelete(index)} 
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Livepreview />
      </div>
    </div>
  )
}

export default Education;