import mongoose from 'mongoose';
import validator, {isEmail} from 'validator';

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[isEmail,"Please enter the valid email."]
    },
    password:{
        type:String,
        required:true,
        unique:true,
        min:[8,"Password atleast contain 8 digit in length."],
        max:12
    }

},{timestamps:true});

export const User = mongoose.model("User",userSchema);

