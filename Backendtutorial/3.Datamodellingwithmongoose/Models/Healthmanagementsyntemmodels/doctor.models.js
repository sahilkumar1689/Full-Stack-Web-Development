import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    doctorName:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true,
        default:0
    },
    workInHospital:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospitals"
        }]
    }
},{timestamps:true});

export const Doctors= mongoose.model("Doctors",doctorSchema);