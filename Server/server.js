const express = require("express");
const app = express();
const path = require("path");
const SignupRouter = require("./Routing/SigupRouter");
const db = require("./config/mongoose-connection");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/api/signup",SignupRouter);

app.get("/",(req,res)=>{
    res.send("server is running");
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})
