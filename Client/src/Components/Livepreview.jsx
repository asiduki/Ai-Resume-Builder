import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument.jsx";

const Livepreview = () => {
  const resumeData = {
  name: "Shivam Kumar",
  title: "Full Stack Developer",
  address: "Ghaziabad, Uttar Pradesh",
  email: "shivam@example.com",
  website: "www.shivamportfolio.com",

  summary:
    "Full Stack Developer with a focus on delivering scalable and efficient applications. Skilled in React, Node.js, and database design. Passionate about problem-solving and building user-centric solutions.",

  skills: [
    "React.js", "Node.js", "MongoDB", "SQL", 
    "Tailwind CSS", "Express.js", "Git/GitHub"
  ],

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
    {
      role: "Frontend Developer Intern",
      company: "Indilearn",
      duration: "Jan 2024 – Mar 2024",
      details: [
        "Converted Figma designs into functional React components.",
        "Enhanced application performance by 20% with code optimizations.",
      ],
    },
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

  languages: ["English", "Hindi"],
  certifications: [
    "Java Certificate - Softpro",
    "Web Development - Indilearn",
    "Figma - Indilearn"
  ],
  awards: [
    "Hack2Skill Participation Certificate",
    "Overall Best Employee Award - Codesoft (2024)"
  ],
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
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
