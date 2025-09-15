import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Livepreview from "../Components/Livepreview";
import { userContextdata } from "../Context/userContext";



const Skills = () => {
  const { skills, setSkills } = useContext(userContextdata);
  const [newSkill, setNewSkill] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewSkill(value);
    const commonSkills = [
  'Angular',
  'CSS',
  'HTML',
  'JavaScript',
  'Next.js',
  'React',
  'Redux',
  'Sass/SCSS',
  'Styled-Components',
  'Svelte',
  'Tailwind CSS',
  'TypeScript',
  'Vue.js',
  'Webpack',
  'Vite',

  'C',
  'C++',
  'Django',
  'Express.js',
  'Flask',
  'Go',
  'Java',
  'Laravel',
  'Node.js',
  '.NET',
  'PHP',
  'Python',
  'Ruby on Rails',
  'Rust',
  'Spring Boot',

  'Firebase',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Prisma',
  'Redis',
  'SQL',
  'SQLite',

  'Ansible',
  'AWS (Amazon Web Services)',
  'CI/CD',
  'Docker',
  'GCP (Google Cloud Platform)',
  'GitHub Actions',
  'Jenkins',
  'Kubernetes',
  'Microsoft Azure',
  'Terraform',

  'Flutter',
  'Kotlin',
  'React Native',
  'Swift',

  'Cypress',
  'Jest',
  'Mocha',
  'Puppeteer',
  'Selenium',
  'Unit Testing',
  'Integration Testing',

  'Shopify',
  'Squarespace',
  'Wix',
  'WordPress',

  'Blockchain',
  'Ethereum',
  'Smart Contracts',
  'Solidity',
  'Web3.js',

  'GraphQL',
  'JSON',
  'REST API',
  'XML',
  
  'Data Analysis',
  'Machine Learning',
  'NumPy',
  'Pandas',
  'PyTorch',
  'Scikit-learn',
  'TensorFlow',

  'Adobe XD',
  'Figma',
  'Git',
  'GitHub',
  'Jira',
  'Postman',
  'Sketch',
  'VS Code',

  'Agile',
  'Kanban',
  'Scrum',

  'Adaptability',
  'Collaboration',
  'Communication',
  'Creative Thinking',
  'Critical Thinking',
  'Leadership',
  'Problem-Solving',
  'Teamwork',
  'Time Management',
  'Work Ethic',
];

    if (value.trim() !== "") {
      const filteredSuggestions = commonSkills.filter(skill =>
        skill.toLowerCase().startsWith(value.toLowerCase()) && !skills.includes(skill)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); 
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setSuggestions([]); 
    }
  };

  const handleSuggestionClick = (skill) => {
    setSkills([...skills, skill]);
    setNewSkill(""); 
    setSuggestions([]); 
  };

  const handleRemoveSkill = (indexToRemove) => {
    setShowPreview(false);
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };
  
  useEffect(() => {
    if (!showPreview) {
      const timer = setTimeout(() => setShowPreview(true), 0);
      return () => clearTimeout(timer);
    }
  }, [showPreview]);

  return (
    <div>
      <Navbar />
      <hr className="mt-2 text-[#f6f6f6]" />
      <div className="flex gap-5 w-full mt-9 justify-between h-full">
        <Sidebar />

        <div className="w-[40%] bg-white p-8 rounded-lg shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Manage Your Skills 🧑‍💻
          </h2>

       
          <div className="relative">
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                value={newSkill}
                onChange={handleInputChange}
                placeholder="e.g., React"
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                onClick={handleAddSkill}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Add
              </button>
            </div>
            
            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-[-1.5rem] shadow-lg">
                {suggestions.map((skill, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(skill)}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
              Your Skills
            </h3>
            {Array.isArray(skills) &&
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <span className="text-gray-800">{skill}</span>
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-500 hover:text-red-700 font-bold text-lg"
                    title="Remove skill"
                  >
                    &times;
                  </button>
                </div>
              ))}
          </div>
        </div>
        
        {showPreview ? (
          <Livepreview />
        ) : (
          <div className="w-[50%] flex items-center justify-center">
             <p className="text-gray-500">Updating preview...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;