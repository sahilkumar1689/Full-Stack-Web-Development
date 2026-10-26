const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    firstName:{type:String,unique:true,required:true},
    lastName:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true},
});

module.exports = mongoose.model("SignUp",signUpSchema);

