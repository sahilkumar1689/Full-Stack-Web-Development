import mongoose from 'mongoose';
import {isEmail} from 'validator';

const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        validate:[isEmail,"Please enter the valid email."]
    },
    subject:{
        type:String,
        required:[true,"Subject is required."]
    },
    message:{
        type:String,
        required:[true,"Message is required."]
    }
},{timestamps:true});

export const ContactDetails = mongoose.model("ContactDetails",contactSchema);