import {asyncHandler} from "../Utils/asyncHandlers.js";
import { ApiErrors } from "../Utils/Apierrors.js";  
import { User } from "../Models/Users.models.js"; 
import { uploadOnCloudinary } from "../Utils/Cloudinary.js";
import ApiResponce from "../Utils/Apiresponce.js";


const registerUser = asyncHandler(async (req,res)=>{
    // return await res.status(200).json({
    //     message:"OK"
    // })

    // Steps to register a users:
    /*
        1. Get users details from frontend.
        2. Validate the users details need to be not empty.
        3. Check if user already exists by using their username and email.
        4. Check the image, check the avatar.
        5. Upload them to cloudinary.
        6. Create user object and after that create entry in the database.
        7. Remove password and the refresh token field form the response.
        8. Check user created successfully or not.
        7. Return the response.
    */ 

    

        // 1. Get user details from the frontend:
        const {fullName,email,username,password} = req.body;

        // console.log("email",email);

        
        // 2. Validate field not empty:
        // First method to check:
        if(!fullName || !email || !username || !password){
            throw new ApiErrors(400,"All fields are required");
            
        }
            
        // Second advanced method to check:
        // if([fullName,email,username,password].some((field)=> field?.trim() === "")){
        //     throw new ApiErrors(400,"All fields are required");
        // }



        // 3. Check User already exists or not:

        const existedUser =await User.findOne({
            $or : [{username},{email}]
        })

        if(existedUser){
            throw new ApiErrors(409,"User Already exist.");
        }


        // 4. Check the image and avatar:
        const avatarLocalPath = req.files?.avatar[0]?.path;   // try console.log(req.files)

        const coverImageLocalPath = req.files?.coverImage[0]?.path;

        // Check the avatar file is required:
        if(!avatarLocalPath) throw new ApiErrors(400,"Avatar Required.");

        console.log(avatarLocalPath);

        // 5. Upload on cloudinary:


        const resAvatar = await uploadOnCloudinary(avatarLocalPath);

        const resCoverImage = await uploadOnCloudinary(coverImageLocalPath);

        console.log(resAvatar);

        // Check avatar:
        if(!resAvatar) throw new ApiErrors(400,"Avatar file Required.");



        // 6. Create user object and after that create entry in the database.

       const user = await User.create({
            username: username.toLowerCase(),
            email,
            fullName,
            avatar: resAvatar.url,
            coverImage:resCoverImage?.url || "",
            password
        })
        

        // 7,8. Check user creation and remove the password and refrence token:
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        );

        if(!createdUser) throw new ApiErrors(500,"Something went wrong while registering the user.")


        // 8. Send Responce to the user:
        let apiresponce = new ApiResponce(200,createdUser,"User Registered Successfully");
        console.log(apiresponce);
        // return res.status(201).json({message:"OK"});
        return res.status(201).json(new ApiResponce(200,createdUser,"User Registered Successfully"));

})

export {registerUser};