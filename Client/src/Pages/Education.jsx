import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { useForm } from "react-hook-form";
import { userContextdata } from "../Context/Usercontext";

const Education = () => {
  const { education, setEducation } = useContext(userContextdata);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [editIndex, setEditIndex] = useState(null);
  const [showPreview, setShowPreview] = useState(true);

  const defaultFormValues = {
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    gpa: "",
  };

  const onSubmit = (data) => {
    if (editIndex !== null) {
      setEducation((prev) =>
        prev.map((item, index) => (index === editIndex ? data : item))
      );
      setEditIndex(null);
    } else {
      setEducation((prev) => [...prev, data]);
      reset(defaultFormValues);
    }
  };

  useEffect(() => {
    if (editIndex === null) {
      reset(defaultFormValues);
    }
  }, [editIndex, reset]);

  const handleEdit = (index) => {
    const eduToEdit = education[index];
    setEditIndex(index);
    reset(eduToEdit);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleDelete = (indexToRemove) => {
    setEducation((prev) => prev.filter((_, index) => index !== indexToRemove));
    setShowPreview(false);
    if (editIndex === indexToRemove) {
      setEditIndex(null);
    }
  };
  useEffect(() => {
    if (!showPreview) {
      setTimeout(() => {
        setShowPreview(true);
      }, 0);
    }
  }, [showPreview]);
  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        <div className="w-[40%] bg-[#f1f1f1] h-[100vh] overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Education</h1>
            <div className="flex items-center gap-4">
              {editIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                form="education-form"
                className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {editIndex !== null ? "Update Education" : "Add Education"}
              </button>
            </div>
          </div>

          <form
            id="education-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                School Name
              </label>
              <input
                {...register("schoolName", {
                  required: "School name is required",
                })}
                type="text"
                placeholder="e.g., MIT"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.schoolName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.schoolName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Degree
                </label>
                <input
                  {...register("degree")}
                  type="text"
                  placeholder="e.g., B.Sc."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Field of Study
                </label>
                <input
                  {...register("fieldOfStudy")}
                  type="text"
                  placeholder="e.g., Computer Science"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  {...register("startDate")}
                  type="number"
                  placeholder="YYYY"
                  min="1980"
                  max="2099"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  {...register("endDate")}
                  type="number"
                  placeholder="YYYY"
                  min="1980"
                  max="2099"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                GPA (optional)
              </label>
              <input
                {...register("gpa")}
                type="text"
                placeholder="e.g., 3.9 / 4.0"
                className="w-1/2 mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </form>

          <div className="mt-10">
            {Array.isArray(education) &&
              education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-blue-100 p-4 rounded-lg mb-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {edu.schoolName} — {edu.degree}
                    </p>
                    <p className="text-sm text-gray-600">
                      {edu.startDate} – {edu.endDate}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
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
        {showPreview ? (
          <Livepreview />
        ) : (
          <div>
            <p>Updating preview</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
