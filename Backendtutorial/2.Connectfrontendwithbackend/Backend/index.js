import express from 'express';

import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3000;


app.get('/api/jokes',(req,res)=>{
    const jokesArr = [
        {
            id:1,
            title:"First Joke",
            Jokes:"This is a first joke."
        },
        {
            id:2,
            title:"Second Joke",
            Jokes:"This is a second joke."
        },
        {
            id:3,
            title:"Third Joke",
            Jokes:"This is a third joke."
        },
        {
            id:4,
            title:"Fourth Joke",
            Jokes:"This is a fourth joke."
        },
        {
            id:5,
            title:"Fifth Joke",
            Jokes:"This is a fifth joke."
        },
    ]
    res.json(jokesArr);
})

app.listen(port,()=>{
    console.log(`App starting listen at port ${port}`);
})