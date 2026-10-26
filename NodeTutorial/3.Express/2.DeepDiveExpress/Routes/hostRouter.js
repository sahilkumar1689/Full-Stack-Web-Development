const express = require("express");
const hostRouter = express.Router();
const path = require("path");

hostRouter.get("/addHome",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Views","Register.html"));
})
hostRouter.post("/listHome",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,"../","Views","ListedHome.html"));
    res.send(`
        <ul>
        <li>${req.body.homeName}</li>
        </ul>    
        <a href="/">Back To Home</a>
    `);
});

module.exports = hostRouter;