import mongoose from 'mongoose';

const medicalSchema = new mongoose.Schema({
    patientName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patients"
    },
},{timestamps:true});

export const Medical= mongoose.model("Medical",medicalSchema);