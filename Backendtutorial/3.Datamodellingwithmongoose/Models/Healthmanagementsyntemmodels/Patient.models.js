import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloogGropu:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospitals"
    }

},{timestamps:true});

export const Patients= mongoose.model("Patients",patientSchema);