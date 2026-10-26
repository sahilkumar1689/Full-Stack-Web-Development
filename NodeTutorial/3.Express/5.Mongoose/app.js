const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 3000;
const path = require("path");
// const {mongoConnect} = require("./Config/database");
const mongoose  = require("mongoose")

// Include Ejs:
app.set('view engine','ejs');
app.set('views','Views');


// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, "Public"))); 

// Body Parser:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Cookie Parser = Used to effectivelly parse the cookies from the client request.
app.use(cookieParser());
// you can get the cookie data using the req.cookie.

// You can also set the signed string as a parameter,it's just signed the cookie at the client side.And you can access it using the req.signedCookie.
// app.use(cookieParser("customString"));



// Creating Routers:
const userRouter = require("./Routes/userRouter");
const { hostRouter } = require("./Routes/hostRouter");
const { authRouter } = require("./Routes/AuthRouter/signInRouter");


app.use(userRouter);
app.use("/host", hostRouter);
app.use("/auth",authRouter);



// To handle page not found pages:
app.get("/*",(req,res)=>{
    // res.status(404).sendFile(path.join(__dirname,"Views","404.html"));
    res.status(404).render('404');
});



// Connect mongodb using the mongosse
const url ="mongodb+srv://sahilUser:sahilUser@cluster0.w269o3l.mongodb.net/airbnb?retryWrites=true&w=majority";


mongoose.connect(url).then(res=>{
    console.log("Database connect successfully.");
    app.listen(PORT,()=>{
        console.log(`Server Running at http://localhost:${PORT}`);
    })
}).catch(err=>{
    console.log("Error while connecting database",err.message);
});

