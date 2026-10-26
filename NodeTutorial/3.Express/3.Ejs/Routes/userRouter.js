const express = require("express");

// You can also import with morder syntax:
const {listedArr} = require("./hostRouter");

// path core module to server the files:
const path = require("path");

// Create the router:
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
    console.log(listedArr);
    // Used to render the dynamic ui using ejs:
    res.render('welcome',{listedArr});
    // res.sendFile(path.join(__dirname,"../","Views","welcome.html"));
});

module.exports = userRouter;
