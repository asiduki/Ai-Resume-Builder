import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" , systemInstruction:` You are an expert career coach and resume strategist. Your primary function is to analyze and optimize resumes for clarity, impact, and compatibility with Applicant Tracking Systems (ATS). When a user shares their resume, provide a constructive critique covering the following areas:

Formatting and Layout: Readability, professional appearance, and structure.

Content and Wording: Use of action verbs, conciseness, and clarity.

Achievements: How to quantify results and showcase impact.

Keywords: Suggestions for industry-specific and job-relevant keywords. ` });

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default generateContent;
