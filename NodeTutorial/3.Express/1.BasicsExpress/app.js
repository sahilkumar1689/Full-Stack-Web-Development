// Express.js = Express.js is a flexible and minimal Node.js web application framework that offers a robust set of features for web and mobile applications. It simplifies the development of single-page, multi-page, and hybrid web applications and provides a thin layer of fundamental web application features without obscuring Node.js features.

// Requires the Express;

const express = require("express");

// Create the app from the express
const app = express();

const PORT = 8080;

// Middleware =In Express middleware are nothing but refers to a functions that processes requests before reaching the route handlers.In Express.js, middleware functions are executed sequentially it means in the order they are added to the application. When a request is received, it is passed through the middleware functions in the order they were defined.These middleware functions have full authority to access and  modify request and response objects, end the request-response cycle, or call the next middleware function next() method.In order to execute a middleware we have "use()" method which generally takes a callback function called middleware.In middleware we have four parameter (err,req,res,next) = err object for handling the error , req and res object for accessing and modifying the response , next() method to pass control to the next middleware.
/*
Types = Application level,Rotuer Level,Error handling,Built in middleware,Third Party middleware.
*/ 


// Default MiddleWare:
app.use("/",(req,res,next)=>{
    console.log("First Dummy MiddleWare.",req.url,req.method);
    next(); // It is used to call the next middleware in the queue.
});
app.use("/",(req,res,next)=>{
    console.log("Second Dummy MiddleWare.");
    // res.send("End Second Middleware.");
    next();
});

app.use("/temp",(req,res,next)=>{
    console.log("Before Temp Middleware.");
    next();
})

// 1. App directly set the end points
app.get("/",(req,res,next)=>{
    // res.set("Content-Type","text/html"); // set method is used to handle the headers.
    // res.json(); // Used to set the json data.
    // res.status(201); // Used to set the status code.
    res.send("<a href='#'>Click</a>"); // send method used to pass the text or html data and also end the resposne automatically.
})

app.get("/temp",(req,res,next)=>{
    res.send("Hello Temp");
    next(); // If you use that then the next middleware with the /temp is executed else not.
})


app.use("/temp",(req,res,next)=>{
    console.log("After Temp Dummy MiddleWare.");
})

app.use("/",(req,res,next)=>{
    console.log("After Universal Path middleware.");
    next();
})


// 1. practice set endPoint:

// Add body-parser middleware = Use to add body object in the response object:
app.use(express.urlencoded({ extended: true }));

app.get("/practiceSet",(req,res)=>{
    res.send(`
        <h1>Form:</h1>
        <form action="/practiceSet" method="post">
            <label for="name">
                Enter Name:
                <input type="text" id="name" name="userName" placeholder="UserName" />
            </label>
            <label for="email">
                Enter Email:
                <input type="email" id="email" name="email" placeholder="Enter Email" />
            </label>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/practiceSet",(req,res)=>{
    console.log("Form Data:", req.data);
    res.send(`Data Received! Name: ${req.body.userName}, Email: ${req.body.email}`);
});

// Try to listen using app method:
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})

// Note = 1. If you start hitting the "/" home url then any middleware with the "/" url is executed no matter what,Whether you send the responce or not they executed.
// 2. But if you try to hit any specific url "/somthingSomething" then:
// 1. All the global middleware "/" that are placed before that specific endpoint are run.
// 2. All the middleware that are specificly created for that specific url executed.
// 3. If the endpoint hit and response send then no any other middleware executed,but there is a exception if you use the next() method after sending the response then only those middleware executed which specifically created for that particular url. 
// 3. If any middleware in between try to send the response then flow never goes further , it means nothing will execute if you try to send the response from the middleware.
