import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    productName :{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export const Products = mongoose.model("Products",productSchema);