import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodolist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
    }
    ]
},{timestamps:true});

export const Todo = mongoose.model("Todo",todoSchema);