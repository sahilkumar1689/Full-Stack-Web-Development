const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    imageDesc:{type:String,required:true},
    photo:{type:String,require:true},
    photoId:{type:String,require:true},
});

module.exports = mongoose.model("ImagePath",imageSchema);



