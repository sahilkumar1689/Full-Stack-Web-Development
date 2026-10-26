import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({
    path:"./.env"
})

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null;

        // upload the file on cloudinary:
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        // File upload successfull:
        console.log("File is uploaded on cloudinary",response.url);
        return response;

    }
    catch(error){
        fs.unlinkSync(localFilePath)  // remove the loacal saved temporary file as the upload operation got failed.
        return null;
    }
}

export {uploadOnCloudinary};