import {asyncHandler} from "../Utils/asyncHandlers.js";
import { ApiErrors } from "../Utils/Apierrors.js";  
import { User } from "../Models/Users.models.js"; 
import { uploadOnCloudinary,deletefromCloudinary } from "../Utils/Cloudinary.js";
import ApiResponce from "../Utils/Apiresponce.js";
import jwt, { decode } from "jsonwebtoken";

// Globally defined the options used while setting the cookies in the header:
const options = {
    httpOnly:true,
    secure:true
}

// Utility function to generate the jwt tokens:
const generateAccessandRefreshTokens = async (user)=>{
    try {

        // const user = await User.findById(userId);

        // Create the access and refresh token using the custom function of userSchema model:
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // console.log({accessToken,refreshToken});


        // You store the refresh token in the userSchema:
        user.refreshToken = refreshToken;

        // After that you try to save new updated schema in the database:
        await user.save({validateBeforeSave:false});


        return {accessToken,refreshToken};


    } catch (error) {
        throw new ApiErrors(500,"Something went wrong while generating the access and refresh token.");
    }
}

// Utility function to get the extract the name from the link:
const deleteImageFromCloudinary = async (imageLink)=>{
    const splitArr = imageLink.split('/');
    // console.log(splitArr[splitArr.length-1].split('.')[0]);
    const imageName = splitArr[splitArr.length-1].split('.')[0];
    const resDel = await deletefromCloudinary(imageName);
    if(!resDel) throw new ApiErrors(500,"File not deleted from cloudinary.");

    return resDel;
}


// Controllers:

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

        // console.log(avatarLocalPath);


        // 5. Upload on cloudinary:


        const resAvatar = await uploadOnCloudinary(avatarLocalPath);

        const resCoverImage = await uploadOnCloudinary(coverImageLocalPath);

        // console.log(resAvatar);


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

const loginUser = asyncHandler(async (req,res)=>{

    /* Step to create the login controller:
    1. Get the data from the frontend.
    2. Check the Username or email is given or not.
    3. Find the user present in the database or not.
    4. Check Password.
    5. Access and refresh token.
    6. Send the cokkie.
    7. Send the response.
    */ 

    // 1. Get the user login data:
    let {email,username,password} = req.body;

    // 2. Check the username or email is given or not:
    if(!username || !email){
        throw new ApiErrors(400,"Username or password is required.");
    }

    // 3. Check the user is present in the database or not:
    const user = await User.findOne({
        $or: [{username},{email}]
    })

    // console.log("Before: "+user);

    if(!user){
        throw new ApiErrors(404,"User does'nt Exits.");
    }
    
    // 4. Check the password:
    const isPasswordValid = await user.isPasswordCorrect(password);
    
    if(!isPasswordValid){
        throw new ApiErrors(404,"Password is Valid");
    }
    
    // 5. Make Access and Refresh Token:
    
    const {refreshToken,accessToken}= await generateAccessandRefreshTokens(user);
    
    // console.log("After: "+user);

   const logginedUser = await User.findById(user.id).select("-password -refreshToken");


    // 6. Set the assess and refresh token in the cookie and sent the response to the user:
    
    return res.status(201)
    .cookie("AccessToken",accessToken,options)
    .cookie("RefreshToken",refreshToken,options)
    .json(
        new ApiResponce(
            200,
            {
            user:logginedUser,
            refreshToken,accessToken
        },
        "User Logged In Successfully."
    )
    )

})

const logOut = asyncHandler(async (req,res)=>{
    // Step to logout the user:
    /*
        1. Write a middleware which find the user by using their access token and add in the "req" object.

        2. After that using that "req.user._id" fetch the real user from the database and after that reset the refresh token from the database.
        3. After that refresh the cookie from the header. 
    */

//    console.log(req.user,req.user._id);

        // 2. Reset the refresh token from the database:

        const tempUser = await User.findById(req.user._id);
        tempUser.refreshToken=undefined;
        // console.log("Temp: ",tempUser);

        await tempUser.save({validateBeforeSave:false});


        // 3. Reset the cookie:
        return res.status(200)
        .clearCookie("AccessToken",options)
        .clearCookie("RefreshToken",options)
        .json(new ApiResponce(200,{},"UserLogged Out Successfully."));
      
})

const refreshJwtTokens = asyncHandler(async (req,res)=>{
    /*  Steps to follow:
    1. Get the refresh token either from the cookie or either from the body.
    2. After that verify the refresh token and take the decodedToken.
    3. After that find the user by using decodedToken._id.
    4. After find the user compare the incommingRefreshToken and user.refreshToken.
    5. Generate new refresh and access token and store in the database and also store in the cookie and sent the response to the user.
    */ 

    // 1. Get the refresh token either from the cookie or either from the body:
    const incommingRefreshToken = req.cookies?.RefreshToken || req.body.refreshToken;
    // console.log(incommingRefreshToken);

    if(!incommingRefreshToken) throw new ApiErrors(400,"Invalid Refresh Token.");


    // 2. After that verify the refresh token and take the decodedToken:
    const decodedToken = jwt.verify(incommingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
    // console.log("Decoded Token is: ",decodedToken);


    // 3. After that find the user by using decodedToken._id:
    const user = await User.findById(decodedToken?._id);

    // console.log("Before User is: ",user);

    
    // 4. After find the user compare the incommingRefreshToken and user.refreshToken:
    if(incommingRefreshToken !== user.refreshToken) throw new ApiErrors(400,"Invalid Refresh Token.");
    

    
    // 5. Generate new refresh and access token and store in the database and also store in the cookie and sent the response to the user.
    const {accessToken,refreshToken} = await generateAccessandRefreshTokens(user);
    
    console.log("After User is: ",user);

    // Set the cookie and sent the response:

    return res.status(200)
    .cookie("AccessToken",accessToken)
    .cookie("RefreshToken",refreshToken)
    .json(
        new ApiResponce(201,
            {
                accessToken,refreshToken
            },
            "New JWT Token Generated Successfully."
        )
    )

})

const forgetPassword = asyncHandler(async (req,res)=>{
    // Get the user details:
    const {email,newPassword,confirmPassword} = req.body;
    
    // Check the password:
    if(newPassword !== confirmPassword) throw new ApiErrors(400,"NewPassword and Confirm Password new to be same.");


    // Fetch the user from the database:
    const user = await User.findOne({email});
    // console.log("Before User is: ",user);

    // Check if user present:
    if(!user) throw new ApiErrors(400,"Email Address is not valid.");
    
    // Change the user password:
    user.password = newPassword;
    // console.log("After User is: ",user);


    // Save in the database:
    await user.save({validateBeforeSave:false});

    // Give responce to the user:
    return res.status(201)
    .json(
        new ApiResponce(200,
            {},"Password Change successfully."
        )
    )

})

const changeOtherDetails = asyncHandler (async (req,res)=>{

    const {username,email,fullName} = req.body;
    if(!username || !email || !fullName) throw new ApiErrors(400,"Please enter the valid details.");


    const oldUser = await User.findById(req.user._id);
    if(!oldUser) throw new ApiErrors(400,"Unotherized Request.");


    oldUser.username = username;
    oldUser.fullName = fullName;
    oldUser.email = email;

    oldUser.save({validateBeforeSave:false});

    return res.status(201)
    .json(
        new ApiResponce(200,{},"Details Changes Succesfully.")
    );
})

const getUser = asyncHandler(async (req,res)=>{
    // console.log(req.params.id);
    if(!(req.params.id)) throw new ApiErrors(400,"Params Not Find.");

    const user = await User.findById(req.params.id).select("-password -refreshToken");
    if(!user) throw new ApiErrors(400,"Invalid User Id.");
    // console.log(user);

    return res.status(200)
    .json(
        new ApiResponce(200,{
            data:user
        },"Details Sent Succesfully.")
    )
})

const changeAvatar = asyncHandler(async (req,res)=>{
    // console.log(req.file);

    // 1. Get user data:
    const user = await User.findById(req.user?._id)
    if(!user) throw new ApiErrors(400,"Unotherized Request.");

    // 2. Store the old avatar url which helps to delete the image from the cloudinary: 
    const oldAvatarUrl = user.avatar;



    // 3. Get the new Avatar image path:
    const newAvatarPath = req.file?.path;
    if(!newAvatarPath) throw new ApiErrors(400,"Avatar path is Required.");


    // 4. Upload on the cloudinary:
    const newAvatarCloudResponse = await uploadOnCloudinary(newAvatarPath);
    if(!newAvatarCloudResponse) throw new ApiErrors(400,"Problem while uploading on cloudinary.");
    // console.log("New Avatar Response is:",newAvatarCloudResponse);

    // 5. Simply update the user avatar filed:
    const newUser = await User.findByIdAndUpdate(
        user._id,
        {
            "avatar": newAvatarCloudResponse.url,
        },
        {new:true}
    );

    // console.log("NewUser Details are: ",newUser);

    // console.log("Original User is:",await User.findById(user._id));


    // 6. Delete the old avatar image from the cloudinary:
    const avatarNameRes = await deleteImageFromCloudinary(oldAvatarUrl);



    // 7. Send the response to the user:
    return res.status(200)
    .json(
        new ApiResponce(201,
            {
                avatar: newAvatarCloudResponse.url,
            },"Avatar change successfully."
        )
    )
    
})

const changeCoverImage = asyncHandler(async (req,res)=>{
    // console.log(req.file);

    // 1. Get user data:
    const user = await User.findById(req.user?._id)
    if(!user) throw new ApiErrors(400,"Unotherized Request.");


    // 2. Store the old cover url which helps to delete the image from the cloudinary: 
    const oldCoverImageUrl = user.coverImage;


    // 3. Get the new cover image path:
    const newCoverImagePath = req.file?.path;
    if(!newCoverImagePath) throw new ApiErrors(400,"Cover Image path is Required.");


    // 4. Upload on the cloudinary:
    const newCoverCloudResponse = await uploadOnCloudinary(newCoverImagePath);
    if(!newCoverCloudResponse) throw new ApiErrors(400,"Problem while uploading on cloudinary.");
    // console.log("New Avatar Response is:",newCoverCloudResponse);

    // 5. Simply update the user avatar filed:
    const newUser = await User.findByIdAndUpdate(
        user._id,
        {
            "coverImage": newCoverCloudResponse.url,
        },
        {new:true}
    );

    // console.log("NewUser Details are: ",newUser);

    // console.log("Original User is:",await User.findById(user._id));


    // 6. Delete the old avatar image from the cloudinary:
    const coverImageNameRes = await deleteImageFromCloudinary(oldCoverImageUrl);    


    // 7. Send the response to the user:
    return res.status(200)
    .json(
        new ApiResponce(201,
            {
                avatar: newCoverCloudResponse.url,
            },"Avatar change successfully."
        )
    )
    
})

const deleteUser = asyncHandler(async (req,res)=>{
    // console.log(req.user);
    if(!(req.user)) throw new ApiErrors(400,"Unotherized Request.");


    const deleteId = req.user._id;
    const {avatar,coverImage} = req.user;


    const deleteRes = await User.deleteOne({_id:deleteId});
    console.log(deleteRes);

    if(!deleteRes) throw new ApiErrors(500,"Document can't successfully deleted.");


    const avatarNameRes = await deleteImageFromCloudinary(avatar);
    const coverImageNameRes = await deleteImageFromCloudinary(coverImage);

    console.log({avatarNameRes,coverImageNameRes});


    return res.status(200)
    .clearCookie("AccessToken",options)
    .clearCookie("RefreshToken",options)
    .json(
        new ApiResponce(201,
            {},
            "User Delete Successfully."
        )
    )
})



export {registerUser,loginUser,logOut,refreshJwtTokens,forgetPassword,changeOtherDetails,getUser,changeAvatar,changeCoverImage,deleteUser};

