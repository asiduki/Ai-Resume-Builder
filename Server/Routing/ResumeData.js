const express = require("express");
const { resumedatainput, ResumeData } = require("../Controller/Datacontroller");
const protectRoute = require("../Middleware/protectRoute"); 
const router = express.Router();

router.post("/resume", protectRoute,resumedatainput);
router.get("/resume", protectRoute, ResumeData); 

module.exports = router;