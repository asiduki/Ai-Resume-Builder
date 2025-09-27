import axios from "axios";
import { createContext, useEffect, useState, useMemo } from "react";
// import ResumeData from "../../../Server/Models/ResumeData";

export const userContextdata = createContext();

const UserContext = (props) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [userdetails, setuserdetails] = useState(() => {
    const storedUser = localStorage.getItem("chat-user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [project, setProject] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [Experience, setExperience] = useState({});
  const [education, setEducation] = useState({});
  const [resumeData, setResumeData] = useState({});
   
  useEffect(() => {
    setTimeout(() => {
      const fetchInitialData = async () => {
        try {
          const response = await axios.get(`${apiUrl}/api/resume`, {
            withCredentials: true,
          });
          const data = response.data.data;
          console.log(data);
          setResumeData(data);
          setuserdetails({ name: data.name });
          setPersonalInfo(data.Personalinfo[0] || {});
          setExperience(data.experience || []);
          setEducation(data.education || []);
          setProject(data.projects || []);
          setSkills(data.skills || []);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log(
              "No resume found for this user. Starting with a blank slate."
            );
          } else {
            console.error("Failed to fetch initial resume data:", error);
          }
        }
      };
      fetchInitialData();
    }, 2000);
  }, [apiUrl]);

  const contextValue = useMemo(
    () => ({
      project,
      setProject,
      personalInfo,
      setPersonalInfo,
      skills,
      setSkills,
      Experience,
      setExperience,
      education,
      setEducation,
      userdetails,
      setuserdetails,
      resumeData,
    }),
    [project, personalInfo, skills, Experience, education, userdetails]
  );

  return (
    <userContextdata.Provider value={contextValue}>
      {props.children}
    </userContextdata.Provider>
  );
};

export default UserContext;
