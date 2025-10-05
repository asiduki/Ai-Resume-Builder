const mongoose = require("mongoose");

const ResumeSchema = mongoose.Schema(
  {
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    email: { type: String, required: true },
  
    Personalinfo: [
     { 
      name: String,
      role:String,
      address: String,
      number: String,
      email: String,
      portfolio: String,
      summary: String,
    }
    ],

    experience: [
      {
        role: { type: String, require: true },
        company: String,
        duration: String,
        details: [String], 
      },
    ],


    skills: [String],

    education: [
      {
        schoolName: String,
        degree: String,
        fieldOfStudy: String,
        startDate: Date,
        endDate: Date,
        gpa: Number,
        highlights: [String],
      },
    ],

    certifications: [
      {
        name: String,
        issuer: String, 
        date: String,  
      },
    ],

    projects: [
      {
        name: String,
        description: String,
        link: String,
        deploymentLink: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("resumedata", ResumeSchema, "resumedata");