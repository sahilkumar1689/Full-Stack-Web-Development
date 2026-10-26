const express = require("express");

// path core module to server the files:
const path = require("path");

// Create the router:
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Views","welcome.html"));
});

module.exports = userRouter;
