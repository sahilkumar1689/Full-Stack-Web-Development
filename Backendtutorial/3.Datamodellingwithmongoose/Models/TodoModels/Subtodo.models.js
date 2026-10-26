import mongoose from "mongoose";

const subToDoSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export const Subtodo = mongoose.model("Subtodo",subToDoSchema);