const cloudinary = require("cloudinary").v2;
const fs = require('fs');

const CLOUDINARY_NAME = "drvoljz3a";

const CLOUDINARY_API_KEY = "363142586582276";

const CLOUDINARY_API_SECRET= "wVHXu4BIpJQPsrJ6jdSAYaC1Aac";

cloudinary.config({
    cloud_name:CLOUDINARY_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) {
            // console.log(localFilePath);
            return null;
        }

        // upload the file on cloudinary:
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
            folder: "project1/images"
        });

        // File upload successfull:
        // console.log("File is uploaded on cloudinary :",response.url);
        fs.unlinkSync(localFilePath);
        return response;

    }
    catch(error){

        console.log("Error in cloudinary catch",error,localFilePath);
        fs.unlinkSync(localFilePath)  // remove the local saved temporary file as the upload operation got failed.
        return null;
    }
}


const deleteFromCloudinary = async (public_id)=>{
    try {
        const response = await cloudinary.uploader.destroy(public_id);
        return response;
    } catch (err) {
        console.log("Error in While Deleting:",err);
        return null;
    }
}


module.exports = {uploadOnCloudinary,deleteFromCloudinary};


