const express = require("express");
const router = express.Router();
const userSchema = require("../Models/usermodel");

router.get("/" , async(req , res )=>{
    try{
        const {email} = req.body ;
        const userdetails = await userSchema.findone({email:email});
        
    }
    catch(err){
        console.log(err);
    }
})