const express = require("express");
const sdk = require("node-appwrite");
const path = require("path");
const {InputFile} = require("node-appwrite/file");
const app = express();
const PORT = 8080;

app.get("/",(req,res,next)=>{
    res.status(200).json({
        status:200,
        message:"Server Starts Serving."
    })
});

// Basic Setup:

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67e14140001984664565')
    .setKey('standard_ebb6c7b5e2a31124499af8e38817555aab66e062c5cdb68af6b1cfa3060bd5d5c55b6f29cb556b49c9155b364078ff85af58ea7a9ff8c7d3bb4cdfadfe56005a81cd23c591129d1807b36704606ba91137fe272c7acc5098cab2417c88545000358ab61f4193738f4a144c288dc77cf0b60bd48eb2c33779a802c7f21ac30db3'); // Add your API key here

const storage = new sdk.Storage(client);


// 1. Add image in the appwrite:

const addImage = async () => {
    try {
        const filePath = path.join(__dirname, 'upload', 'Photo.jpg');
        console.log("Attempting to read file from:", filePath);
        
        const file = InputFile.fromPath(filePath, 'Photo.jpg');
        
        const result = await storage.createFile(
            '67e1452c0034968cbe18', // bucketId
            sdk.ID.unique(), // fileId
            file
        );

        return result;
    } catch (err) {
        console.log("Error While Storing:", err);
        return null;
    }
}

// addImage()
//     .then(res => console.log("Response is:", res))
//     .catch(err => console.log("Error is:", err));

// Note = This url is used in order to store the image in the database:
// https://cloud.appwrite.io/v1/storage/buckets/<bucketId>/files/<ImageObjId>/viewproject=<ProjectId>&mode=admin


// 2. Delete the Image from the Appwrite:
const deleteImage = async ()=>{
    try {
        const result = await storage.deleteFile(
            '67e1452c0034968cbe18', // bucketId
            '67e5c01e0034d669803a' // fileId
        );
        return result;
    } catch (err) {
        console.log("Error While Deleting:",err);
        return null;
    }
}

// deleteImage()
// .then(res=>console.log("Resposne:",res))
// .catch(err=>console.log("Error is:",err));



app.listen(PORT,()=>{
    console.log(`Server Starts Running on http://localhost:${PORT}`);
})