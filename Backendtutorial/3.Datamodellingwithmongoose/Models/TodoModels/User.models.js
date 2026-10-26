import mongoose from 'mongoose';
import {isEmail} from 'validator';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"UserName is required."],
        unique:true,
        min:[3,"Atleast required 3 character"],
        max:16
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        validate:[isEmail,"Enter a valid email"],
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        unique:true,
        min:[8,"Password atleast contains 8 characters."],
        max:12
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);