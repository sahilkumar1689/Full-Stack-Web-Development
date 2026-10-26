import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config({path:"./.env"});


const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName :{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,    // Cloudinary Url
        required:true
    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }

},{timestamps:true});



//Used to incrypt the password just before saved it = It is not a custom function it will automatically run when you try to save your schema.
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)
    next();
})

// Custom function to check the password is true or not = It is a custom function it will only run when you want.
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}


// JWT Tokens = Token stored in the database are in encripted format.

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
    {
        _id:this._id,
        email:this.email,
        usename:this.username,
        fullname:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

userSchema.methods.generateRefreshToken = function (){
    return jwt.sign({
        _id:this._id,
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
    
}


export const User = mongoose.model("User",userSchema);