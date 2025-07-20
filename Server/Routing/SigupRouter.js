const express = require("express");
const router = express.Router();
const LoginController = require("../Controller/LoginController");
const bcrypt = require("bcrypt")

router.post("/",LoginController.Signup);

module.exports = router;
