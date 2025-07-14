const express = require("express");
const router = express.Router();
const userSchema = require("../Models/usermodel");

router.post("/",async(req,res)=>{
    try{
         const { name, email, password } = req.body;
        if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const createuser = await userSchema.create({
      name,
      email,
      password,
      
    });
    res.status(201).json({ message: "User created successfully", user: createuser });
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports = router;
