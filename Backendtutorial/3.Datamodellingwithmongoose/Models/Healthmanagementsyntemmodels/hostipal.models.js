import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requried:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specialization:{
        type:[
            {
                type:String
            }
        ],
        required:true
    },
},{timestamps:true});

export const Hospitals= mongoose.model("Hospitals",hospitalSchema);