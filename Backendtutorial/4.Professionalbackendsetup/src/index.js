import express from 'express';
import dotenv from 'dotenv';
const port = process.env.PORT || 3000;

const app = express();

dotenv.config({path:".env"})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`App starting listen at port ${port}`);
})