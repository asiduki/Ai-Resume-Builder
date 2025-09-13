import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const userContextdata = createContext();

const UserContext = (props) => {
  const [project, setProject] = useState(() => {
    try {
      const stored = localStorage.getItem("projects");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error parsing projects from localStorage:", error);
      return [];
    }
  });

  const [personalInfo, setPersonalInfo] = useState(() => {
    try {
      const stored = localStorage.getItem("personalInfo");
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Error parsing personalInfo from localStorage:", error);
      return {};
    }
  });

  const [skills, setSkills] = useState(() => {
    try {
      const stored = localStorage.getItem("skills");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error parsing skills from localStorage:", error);
      return [];
    }
  });

  const [Experience , setExperience] = useState(()=>{
    try{
      const stored = localStorage.getItem("Experience") ;
      return stored ? JSON.parse(stored) :[];
    }catch(error){
      console.error("error");
      return[] ;
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(project));
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("Experience", JSON.stringify(Experience));
  }, [project, personalInfo, skills , Experience]);
console.log(Experience);
  return (
    <userContextdata.Provider
      value={{ project, setProject, personalInfo, setPersonalInfo, skills, setSkills , Experience , setExperience}}
    >
      {props.children}
    </userContextdata.Provider>
  );
};

export default UserContext;
