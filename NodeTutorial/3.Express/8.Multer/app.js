const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const multer = require("multer");
const ImagePath = require("./Model/setImage.schema");
const fs = require("fs");
const URL = "mongodb://localhost:27017/learningMulter";


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res,next)=>{
    res.status(200).json({
        status:200,
        message:"Server Starts Serving."
    })
});

// Custom Function For Multer:

const randomStr = (length)=>{
    let str = "aabcddeffghijkllmnopqrsstuvwxyz";
    let randStr = "";

    for(let i=0;i<length;i++){
        randStr += str[(Math.floor(Math.random()*str.length))];
    }
    return randStr;
}

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload/");
    },
    filename:(req,file,cb)=>{
        cb(null,randomStr(5)+"-"+file.originalname);
    }
})

const fileFilter = (req,file,cb)=>{
    if(['image/jpeg','image/png','image/jpg'].includes(file.mimetype)){
        cb(null,true);
    }
    else cb(null,false);
}

const multerOptions = {
    storage,fileFilter
}

app.use(multer(multerOptions).single("photo"));

app.post("/setImage",async(req,res,next)=>{
    const {imageDesc} = req.body;
    const photoPath = req.file?.path;

    if(!photoPath || !imageDesc){
        return res.status(400).json({
            status:400,
            message:"Image and Description is compulsary to send."
        });
    }

    try {
        const resolve = await ImagePath.insertOne({imageDesc,photo:photoPath});
        return res.status(200).json({
            data:resolve
        })
    } catch (err) {
       return res.status(500).json({
            errorMessage:err
        })
    }
});

app.post("/updateImage", async (req, res) => {
    const { updateId, imageDesc } = req.body;

    if (!updateId || !imageDesc) return res.status(400).json({
        message: "Send the Id or Description"
    });

    try {
        // Find the existing image first
        const existingImage = await ImagePath.findOne({ _id: updateId });
        
        if (!existingImage) {
            return res.status(404).json({
                message: "Image not found"
            });
        }

        // If new file is uploaded
        if (req.file) {
            try {
                // Delete old file
                if (existingImage.photo) {
                    fs.unlinkSync(existingImage.photo);
                }
                // Update with new file path
                existingImage.photo = req.file.path;
            } catch (unlinkError) {
                console.error("Error deleting old file:", unlinkError);
                return res.status(500).json({
                    message: "Error while deleting old file"
                });
            }
        }

        // Update the description
        existingImage.imageDesc = imageDesc;

        // Save the updated document
        const updatedImage = await existingImage.save();

        return res.status(200).json({
            status: 200,
            message: "File Updated Successfully",
            data: updatedImage
        });

    } catch (err) {
        console.error("Update error:", err);
        return res.status(500).json({
            status: 500,
            message: "Server Error",
            error: err.message
        });
    }
});


mongoose.connect(URL).then((res) => {
    app.listen(PORT,()=>{
        console.log(`Server Starts Running on http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(`Failed to connect with database.`);
});


