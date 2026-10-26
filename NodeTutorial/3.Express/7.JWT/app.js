const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/learningJWT";
const SignUp = require("./Model/signup.model");
const {jwtAuthMiddleware,createJwtToken} = require("./Middleware/jwt.middleware");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res,next)=>{
    res.status(200).json({
        status:200,
        message:"Server Starts Serving."
    })
});

app.post("/signUp",async(req,res,next)=>{
    const {firstName,lastName,email,password} = req.body;

    if(!firstName || !lastName || !email || !password) return res.status(400).json({
        status:400,
        message:"Please Add All Credentials",
    });

    try {
        const newUser = await SignUp.insertOne({firstName,lastName,email,password});

        // Generating the token:
        const payload = {
            userId:newUser._id
        }

        const newToken= createJwtToken(payload);

        return res.status(200).json({
            data:newUser,
            token:newToken
        });
        
    } catch (err) {
        return res.status(500).json({
            message:"Server Error Try Again Later."
        });
    }   
});

app.post("/logIn",async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email || !password) return res.status(400).json({
        status:400,
        message:"Please Add All Credentials",
    });

    try {
        const originalUser = await SignUp.findOne({email,password});

        if(!originalUser) return res.status(400).json({
            message:"Incorrect Email or Password",
        });


        // Generating the token:
        const payload = {
            userId:originalUser._id
        }

        const newToken= createJwtToken(payload);

        return res.status(200).json({
            data:originalUser,
            token:newToken
        });
        
    } catch (err) {
        return res.status(500).json({
            message:"Server Error Try Again Later."
        });
    }   
});


// We create the jwt authentication middleware for the purpose of secure routing:

app.use(jwtAuthMiddleware);

app.get("/getProfile",async(req,res,next)=>{
    console.log(req.useData);
    console.log(req.useData.userId);

    const ogUser = await SignUp.findOne({_id:req.useData.userId});

    res.status(200).json({
        status:200,
        data:ogUser
    })
});

mongoose.connect(URL).then((res) => {
    app.listen(PORT,()=>{
        console.log(`Server Starts Running on http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(`Failed to connect with database.`);
});



