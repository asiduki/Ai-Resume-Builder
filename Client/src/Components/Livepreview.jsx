import React, { useContext, useEffect, useMemo } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument.jsx";
import { userContextdata } from "../Context/Usercontext.jsx";
import { degrees } from "framer-motion";
import axios from "axios";

const Livepreview = () => {
  const {
    project,
    skills,
    personalInfo,
    Experience,
    education,
    userdetails
  } = useContext(userContextdata);

  const apiUrl = import.meta.env.VITE_API_URL;
  // useEffect(() => {
  //   setTimeout(async () => {
  //     try {
  //       const res = await axios.post(
  //         `${apiUrl}/api/resume`,
  //         {
  //           email: userdetails.email,
  //           Personalinfo: personalInfo,
  //           experience: Experience,
  //           education,
  //           projects: project,
  //           skills,
  //         },
  //         { withCredentials: true }
  //       );
  //       console.log("Resume uploaded:", res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, 4000);
  // }, []);

  const resumeData = useMemo(
    () => ({
      name: personalInfo.name || "My Name",
      title: personalInfo.role || "Full Stack Developer",
      address: personalInfo.address || "Ghaziabad, Uttar Pradesh",
      number: personalInfo.number || "1234567***",
      email: personalInfo.email || "shivam@example.com",
      website: personalInfo.portfolio || "www.shivamportfolio.com",
      summary:
        personalInfo.summary ||
        "Full Stack Developer with a focus on delivering scalable and efficient applications. Skilled in React, Node.js, and database design. Passionate about problem-solving and building user-centric solutions.",

      experience: Array.isArray(Experience)
        ? Experience.map((data) => ({
            role: data.role,
            company: data.name,
            duration: data.duration,
            details: [data.about],
          }))
        : [],
      skills: Array.isArray(skills) ? skills : [],
      education: Array.isArray(education)
        ? education.map((data) => ({
            schoolName: data.schoolName || "",
            degree: data.degree || "",
            fieldOfStudy: data.fieldOfStudy || "",
            startDate: data.startDate || "",
            endDate: data.endDate || "",
            gpa: data.gpa || "",
            highlights: data.highlights || "",
          }))
        : [],
      certifications: [
        { name: "React Development", issuer: "Coursera", date: "March 2023" },
        { name: "Node.js Masterclass", issuer: "Udemy", date: "June 2022" },
      ],
      projects:
        Array.isArray(project) && project.length > 0
          ? project.map((p) => ({
              name: p?.name || "Project name",
              description: p?.description || "No description available",
              link: p?.link || "dasdasd", //repo link,
              deploymentLink: p?.deploymentLink || "link",
            }))
          : [],
      awards: [
        "Hack2Skill Participation Certificate",
        "Overall Best Employee Award - Codesoft (2024)",
      ],
      languages: [
        "English (Professional Working Proficiency)",
        "Hindi (Native)",
      ],
    }),
    [project, skills, personalInfo, Experience, education]
  );

  // Memoize the document so it doesn't re-render unnecessarily
  const resumeDocument = useMemo(() => {
    return <ResumeDocument resumeData={resumeData} />;
  }, [resumeData]);

  return (
    <div className="w-[50%] h-full">
      <div className="w-full h-screen bg-[#f1f1f1] rounded-lg py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">Live Resume Preview</h1>

        {/* PDF Preview Area */}
        <div className="h-[80%] border rounded-lg overflow-hidden">
          <PDFViewer width="100%" height="100%">
            {resumeDocument}
          </PDFViewer>
        </div>

        {/* Download PDF Button */}
        <div className="mt-4">
          <PDFDownloadLink document={resumeDocument} fileName="resume.pdf">
            {({ loading }) =>
              loading ? (
                <button className="bg-gray-400 text-white px-4 py-2 rounded">
                  Preparing...
                </button>
              ) : (
                <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Livepreview;
