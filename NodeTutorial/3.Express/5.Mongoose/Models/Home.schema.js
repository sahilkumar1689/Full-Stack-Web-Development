const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    homeName:{
        type:String,
        required:true
    },
    homeId:{
        type:Number,
        required:true
    }
});

// Now this "Homesnm" treated as the collection.It is exported and treated as a class and need to create object in order to add new object in the database.
module.exports = mongoose.model("Homesnm",homeSchema);