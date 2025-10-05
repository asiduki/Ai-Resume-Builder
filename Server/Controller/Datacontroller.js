import express from "express";
import ResumeSchema from "../Models/ResumeData.js";
import UserSchema from "../Models/usermodel.js";
import jwt from "jsonwebtoken";

export const resumedatainput = async (req, res) => {
  try {
    const {
      projects,
      skills,
      Personalinfo,
      experience,
      education,
      email,
      name,
      certifications,
    } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    // await ResumeSchema.deleteMany({ users: user._id });
    const CreateData = await ResumeSchema.create({
      users: user._id,
      name,
      email,
      Personalinfo: [Personalinfo],
      experience,
      projects: projects,
      education,
      skills:skills,
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
    const userId = req.user._id;
    const resumeinfo = await ResumeSchema.findOne({ users: userId });

    if (resumeinfo) {
      return res.status(200).json({
        success: true,
        data: resumeinfo,
      });
    } else {
      console.log("No resume found for user ID:", userId);
      return res.status(404).json({
        success: false,
        message: "Resume not found for this user.",
      });
    }
  } catch (err) {
    console.log("Error in ResumeData controller:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
