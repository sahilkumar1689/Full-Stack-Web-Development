import mongoose, { Mongoose, mongo, trusted } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
    quantity:{
        type:Number,
        required:true
    }
})


const orderSchema = new mongoose.Schema({
    total:{
        type:Number,
        required:true,
    },
    customerOwn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema],
    },
    address:{type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Delivered","Cancelled"],
        default:"Pending"
    }

},{timestamps:true});

export const Order = mongoose.model("Order",orderSchema);