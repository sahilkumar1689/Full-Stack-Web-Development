const express = require("express");
const app = express();
const Mail= require("./nodeMailer");

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

require("dotenv").config({
    path:"./.env"
})
const PORT = process.env.PORT || 3030;


app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Server Start Serving."
    })
})

app.post("/auth",async (req,res)=>{
    try {
       
      
        const {email} = req.body;
        

        if(!email) return res.status(400).json({
            message:"Email Not found."
        });
       

        const mailObj = {
            from: '"Temp Mail From Node Mailer 👻" <sahilKumar32755@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          }
     
        const response = await Mail(mailObj);

     
        if(response) return res.status(200).json({
            message:"OTP Sended Successfully To Your Registered Email.",
            data:response
        })
        else return res.status(400).json({
            message:"OTP Not Sended Successfully, Try Again Later."
        })

    } catch (err) {
        return res.status(500).json({
            message:"Server Error , Try Again Later"
        });
    }
})


app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
})