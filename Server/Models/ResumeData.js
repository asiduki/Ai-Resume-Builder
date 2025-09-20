const mongoose = require("mongoose");

const ResumeSchema = mongoose.Schema({
    username: { type: String, required: true },
    Personalinfo:[{
        name:String ,
        title:String ,
        address:String , 
        number:String , 
        email:String , 
        website:String , 
        summary:String ,
    }],
    experience:[{
        role:{type:String, require:true},
        company:String,
        duration:String , 
        details:[String] ,
    }],
    skills:{
        skills:String,
    },
    education: [{
        schoolName: String , 
        degree:String ,
        fieldOfStudy:String ,
        startDate:Date,
        endDate:Date,
        gpa:Number,
        Highlight:[String],
    }],
    certifications:[{

    }],
    projects:[{
        name:String ,
        description:[String] ,
        link:String,
        deploymentLink:String,
    }],
    

},{timestamps: true,}) ;

module.exports = mongoose.model("ResumeData" , ResumeSchema);
