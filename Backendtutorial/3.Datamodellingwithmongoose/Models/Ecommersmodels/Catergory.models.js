import mongoose from "mongoose";

const categorySchma = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Category = mongoose.model("Category",categorySchma);