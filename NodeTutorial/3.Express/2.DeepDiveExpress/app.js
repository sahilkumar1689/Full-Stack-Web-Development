const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, "Public"))); 

// Body Parser:
app.use(express.urlencoded({extended:true}));

// Creating Routers:
const userRouter = require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");

app.use(userRouter);
app.use("/host",hostRouter);

// To handle page not found pages:
app.get("/*",(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"Views","404.html"));
});

app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})
