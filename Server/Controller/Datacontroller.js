import express from "express";
import ResumeSchema from "../Models/ResumeData.js";
// import token from "../Middleware/token.js"
import UserSchema from "../Models/usermodel.js";
import jwt from "jsonwebtoken";

export const resumedataouput = async (req, res) => {
  try {
    const {
      projects,
      skills,
      Personalinfo,
      experience,
      education,
      email,
      certifications,
    } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const CreateData = await ResumeSchema.create({
      users: user._id,
      email,
      Personalinfo: [Personalinfo],
      experience,
      projects: projects,
      education,
      skills,
      certifications: certifications || [],
    });
    
    res.status(201).json({
      success: true,
      message: "Resume data saved successfully",
      data: CreateData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ResumeData = async (req, res) => {
  try {
    const { username } = req.body;
    const resume = await ResumeSchema.findOne({ username });
  } catch (err) {
    console.log(err);
  }
};
