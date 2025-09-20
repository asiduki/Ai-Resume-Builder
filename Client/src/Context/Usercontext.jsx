import { createContext, useEffect, useState, useMemo } from "react"; 

export const userContextdata = createContext();

const UserContext = (props) => {
  // const apiUrl = import.meta.env.VITE_API_URL;
  const [userdetails , setuserdetails] = useState({});
  
console.log(userdetails?.email);
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

  const [Experience, setExperience] = useState(() => {
    try {
      const stored = localStorage.getItem("Experience");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("error");
      return [];
    }
  });

  const [education, setEducation] = useState(() => {
    try {
      const stored = localStorage.getItem("education");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("error");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(project));
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("Experience", JSON.stringify(Experience));
    localStorage.setItem("education", JSON.stringify(education));
  }, [project, personalInfo, skills, Experience , education]);

  

  const contextValue = useMemo(() => ({
    project,
    setProject,
    personalInfo,
    setPersonalInfo,
    skills,
    setSkills,
    Experience,
    setExperience,
    education,
     setEducation ,
     userdetails , 
     setuserdetails
  }), [project, personalInfo, skills, Experience , education , userdetails]);

  return (
    // Pass the memoized value
    <userContextdata.Provider value={contextValue}>
      {props.children}
    </userContextdata.Provider>
  );
};

export default UserContext;