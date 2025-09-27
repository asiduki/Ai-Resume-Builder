import express from 'express'; 
import userSchema from "../Models/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
export const Signup =async(req,res)=>{
    try{
         const { name, email, password } = req.body;
        if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const finduser = await userSchema.findOne({email});
    if(!finduser){
      bcrypt.genSalt(10 , (err , Salt)=>{
        bcrypt.hash(password,Salt , async(err,hash)=>{
           const createuser = await userSchema.create({
      name,
      email,
      password:hash,
      
    });
    let token  = jwt.sign({userId:createuser._id} , process.env.JWT_SECRET)
    res.cookie("token" ,token );
    res.status(201).json({ message: "User created successfully", user:  {
          _id: createuser._id,
          name: createuser.name,
          email: createuser.email,
          resumedata: createuser.resumedata || [],
        } });
        })
      })
    }
    else{

      res.status(401).json({message:"user is already exist"})
    }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}
 export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetails = await userSchema.findOne({email});
    if(!userDetails)
      return res.status(404).json({ error: "Wrong Username or Password" });

   bcrypt.compare(password,userDetails.password,(err,result)=>{
    if(!result){
      return res.status(401).json({ error: "Invalid password" });
    }
    let token  = jwt.sign({userId:userDetails._id} , process.env.JWT_SECRET)
    res.cookie("token" ,token,{ httpOnly: true, secure: true, sameSite: "strict" });
    return res.status(200).json({ message: "Login successful", user:{_id:userDetails._id,name:userDetails.name,email:userDetails.email} });
   })

  } catch (err) {
    console.log("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

export const logout = async(req , res)=>{
  try{
    res.cookie("token" , "" ,{expires: new Date(0)});
    res.status(200).json({message:"Logout"});
  }
  catch(err){
    res.status(500).json({message:"saver have an error"});
  }
}