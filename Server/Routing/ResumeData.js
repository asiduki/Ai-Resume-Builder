const express = require("express");
const {resumedataouput , ResumeData} = require("../Controller/Datacontroller");
const router = express.Router();

router.post("/resume" , resumedataouput );
router.get("ResumeData" , ResumeData);
module.exports = router ;