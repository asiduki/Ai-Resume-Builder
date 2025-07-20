import express from 'express'; 
import userSchema from "../Models/usermodel.js";
import bcrypt from 'bcrypt'
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
    res.status(201).json({ message: "User created successfully", user: createuser });
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
    return res.status(200).json({ message: "Login successful", user: userDetails });
   })

  } catch (err) {
    console.log("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}