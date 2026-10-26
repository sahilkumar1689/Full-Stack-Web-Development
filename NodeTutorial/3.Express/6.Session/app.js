const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
const PORT = 8080;
const URL = "mongodb://localhost:27017/learnSession";



app.use(express.json());
app.use(express.urlencoded({extended:true}));

// We basically store the session in the mongodb also called session storage:
const sessionStore = new MongoDBStore({
    uri:URL,
    collection:'learnSession'
});


// Here you create the session:
app.use(session({
    secret:"Any Random String",  // Any random string
    saveUninitialized:false, 
    resave:false,
    cookie:{
        maxAge:60000*60  // Used to set the cookie expire time.
    },
    store:sessionStore
}))


app.get("/",(req,res,next)=>{

    // Here in the request session you can access the session and the sessionId:
    console.log(req.session);
    console.log(req.session.id);

    // You can also set the values in the session object:
    req.session.islogin = true;
    req.session.isSignup = true;

    // Note = 1. It is very important to add data in the session object in order to save that session in the cookie.
    // 2. Because currently we are not using any session store so the id can't restore,so whenever you try to hit a url a new session id is generated.

    res.status(200).json({
        status:200,
        message:"Server Starts Serving.",
    })
});

app.get("/getSession",(req,res,next)=>{
    console.log(req.session.id);
    // You can also get the session object using this method it is usefull when we have a session store and need to handle the multiple requests.
    req.sessionStore.get(req.session.id,(err,session)=>{
        if(err) throw err;
        console.log(session);
    })

    res.status(200).json({
        status:200,
        message:"Session Get successfully",
    })

});





mongoose.connect(URL).then((res) => {
    app.listen(PORT,()=>{
        console.log(`Server Running at http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log("Failed to connect with the database.");
});
