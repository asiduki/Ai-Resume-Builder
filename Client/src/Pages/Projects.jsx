import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { useForm } from "react-hook-form";
import { userContextdata } from "../Context/Usercontext"; // corrected import
const Projects = () => {
  const { project, setProject } = useContext(userContextdata);
  const { register, handleSubmit, reset } = useForm();
  const [showPreview, setShowPreview] = useState(true);

  const onSubmit = (data) => {
    setProject((prevProjects) => [...prevProjects, data]);
    reset();
  };

  const handleDelete = (index) => {
    setShowPreview(false);
    setProject((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  const handleNameChange = (index, value) => {
    setProject((prevProjects) =>
      prevProjects.map((proj, i) =>
        i === index ? { ...proj, name: value } : proj
      )
    );
  };

  const handleDescriptionChange = (index, value) => {
    setProject((prevProjects) =>
      prevProjects.map((proj, i) =>
        i === index ? { ...proj, description: value } : proj
      )
    );
  };

  const handleLinkChange = (index, value) => {
    setProject((prevProjects) =>
      prevProjects.map((proj, i) =>
        i === index ? { ...proj, link: value } : proj
      )
    );
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
        <div className="w-[40%] bg-[#f1f1f1] h-[100vh] overflow-y-auto">
          <h1 className="text-xl font-bold m-2">Projects</h1>
          <div className="grid grid-cols-1">
            <form
              className="grid grid-cols-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="" className="m-2 relative">
                <span className="font-bold">Project Name</span>
                <button
                  type="submit"
                  className="absolute right-1 rounded-sm cursor-pointer px-2 py-1 hover:bg-[#0b99ff] text-[#0b99ff] bg-[#c0e0ff] hover:text-[#c0e0ff]"
                >
                  Submit
                </button>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Project Name"
                className="border border-black rounded-lg h-10 m-2 px-1 py-2"
              />
              <input
                type="url"
                {...register("link")}
                placeholder="Project Link e.g., https://github.com/your-username/your-repo"
                className="border border-black rounded-lg h-10 m-2 px-1 py-2"
              />
              <div className="relative border border-black rounded-lg m-2 ">
                <button className="absolute right-1 top-2 cursor-pointer hover:bg-[#0b99ff] text-[#0b99ff] bg-[#c0e0ff] hover:text-[#c0e0ff] rounded-lg px-2 py-1">Generate</button>
                <textarea
                  {...register("description")}
                  placeholder="About your project..."
                  className="resize-none h-60 w-full outline-none pl-2 py-1 pr-22"
                />
              </div>
            </form>
          </div>

          {/* List of Projects */}
          <div className="grid grid-cols-1 p-2">
            {project.length > 0 ? (
              project.map((data, index) => (
                <div
                  key={index}
                  className="p-4 border rounded mb-4 bg-white relative"
                >
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    ❌
                  </button>
                  <p className="font-bold uppercase text-gray-500 mb-1">
                    Project {index + 1}
                  </p>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    className="font-bold uppercase text-lg mb-2 w-full border-b border-gray-300 focus:outline-none"
                  />
                  <input
                    type="url"
                    value={data.link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    className="text-lg mb-2 w-full border-b border-gray-300 focus:outline-none"
                  />
                  <textarea
                    value={data.description}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className="text-gray-700 w-full resize-none border rounded p-2 focus:outline-none"
                    rows="4"
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 italic mt-4">
                No projects added yet.
              </p>
            )}
          </div>
        </div>
        <div>
          
        </div>
        <div>
          
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

export default Projects;
