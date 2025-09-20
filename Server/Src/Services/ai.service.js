require("dotenv/config");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const systemInstruction = `
  You are an expert AI resume strategist. Your task is to receive a JSON object containing a user's resume data and a target job description. You must rewrite and optimize the content of the JSON object to achieve a 90+ ATS score.

  CRITICAL RULES:
  1.  **Output MUST be a single, valid JSON object.** Do not include any text, explanations, or markdown formatting like \`\`\`json before or after the object.
  2.  The returned JSON object **must** have the exact same structure and keys as the user's input data.

  OPTIMIZATION TASKS:
  - Analyze the job description for essential keywords and skills.
  - Rewrite the 'summary' to be a concise, 3-4 sentence professional pitch highlighting qualifications that match the job.
  - Rewrite the 'details' arrays in the 'experience' and 'projects' sections into 3-5 strong, quantifiable bullet points. Each bullet point must start with an action verb and include metrics where possible (e.g., "Optimized...", "Engineered...", "Managed...").
  - Organize the user's list of 'skills' into the correct categories within the skills object.
`;

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" , systemInstruction });

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports =  generateContent;
