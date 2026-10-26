const express = require("express");
const hostRouter = express.Router();
const path = require("path");

hostRouter.get("/addHome",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Views","Register.html"));
})

const listedArr = [];

hostRouter.post("/listHome",(req,res,next)=>{
    listedArr.push(req.body.homeName);
    res.sendFile(path.join(__dirname,"../","Views","ListedHome.html"));
});

module.exports = {hostRouter,listedArr};