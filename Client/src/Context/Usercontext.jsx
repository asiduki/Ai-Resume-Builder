import { createContext, useState } from "react";

export const userContextdata = createContext();

const UserContext = (props) => {
  const [project, setProject] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([]);

  return (
    <userContextdata.Provider value={{ project, setProject, personalInfo, setPersonalInfo }}>
      {props.children}
    </userContextdata.Provider>
  );
};

export default UserContext;
