const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:[true,"Please Enter Username."]
    },
    email:{
        type:String,
        require:[true,"Please Enter email."],
        unique:true
    },
    password:{
        type:String,
        default:""
    },
    profile:{
        type:String,
        default:""
    },
    authProvide: {
        type: String,
        enum: ["manual", "google"],
        default: ""
    }
})

module.exports = mongoose.model("user",userSchema);