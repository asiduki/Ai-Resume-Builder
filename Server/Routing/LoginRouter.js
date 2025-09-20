const express = require("express");
const router = express.Router();
const LoginController = require("../Controller/LoginController");
const bcrypt = require("bcrypt")

router.post("/", LoginController.Login);
router.post("/logout" , LoginController.logout);

module.exports = router;
