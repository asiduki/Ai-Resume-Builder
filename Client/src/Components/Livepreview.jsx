import React, { useContext } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument.jsx";
import { userContextdata } from "../Context/Usercontext.jsx";

const Livepreview = () => {
  const { project } = useContext(userContextdata); 

  const resumeData = {
    name: "Shivam Kumar",
    title: "Full Stack Developer",
    address: "Ghaziabad, Uttar Pradesh",
    email: "shivam@example.com",
    website: "www.shivamportfolio.com",
    summary:
      "Full Stack Developer with a focus on delivering scalable and efficient applications. Skilled in React, Node.js, and database design. Passionate about problem-solving and building user-centric solutions.",
    experience: [
      {
        role: "Web Development Intern",
        company: "Codesoft",
        duration: "Jun 2024 – Aug 2024",
        details: [
          "Built responsive web applications using React and Node.js.",
          "Implemented REST APIs and optimized database queries.",
          "Collaborated with designers to improve UI/UX experience."
        ],
      },
    ],
    skills: [
      "React.js", "Node.js", "MongoDB", "SQL", 
      "Tailwind CSS", "Express.js", "Git/GitHub"
    ],
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "ABES Institute of Technology",
        duration: "2022 – 2026",
        details: "Relevant coursework in Data Structures, Algorithms, and Web Development.",
      },
      {
        degree: "Senior Secondary (12th)",
        institution: "CBSE Board",
        duration: "2021",
        details: "PCM with Computer Science specialization.",
      },
    ],
    certifications: [
      { name: "React Development", issuer: "Coursera", date: "March 2023" },
      { name: "Node.js Masterclass", issuer: "Udemy", date: "June 2022" },
    ],
    projects: project.map((p) => ({
      name: p.name || "Untitled Project",
      description: p.description || "No description.",
    })),
    awards: [
      "Hack2Skill Participation Certificate",
      "Overall Best Employee Award - Codesoft (2024)"
    ],
    languages: ["English (Professional Working Proficiency)", "Hindi (Native)"],
  };

  return (
    <div className="w-[50%] h-full">
      <div className="w-full h-screen bg-[#f1f1f1] rounded-lg py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">Live Resume Preview</h1>

        {/* PDF Preview Area */}
        <div className="h-[80%] border rounded-lg overflow-hidden">
          <PDFViewer width="100%" height="100%">
            <ResumeDocument resumeData={resumeData} />
          </PDFViewer>
        </div>

        {/* Download PDF Button */}
        <div className="mt-4">
          <PDFDownloadLink
            document={<ResumeDocument resumeData={resumeData} />}
            fileName="resume.pdf"
          >
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
