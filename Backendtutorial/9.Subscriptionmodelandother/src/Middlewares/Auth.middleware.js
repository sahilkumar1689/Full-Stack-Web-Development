import { User } from "../Models/Users.models.js";
import { ApiErrors } from "../Utils/Apierrors.js";
import { asyncHandler } from "../Utils/asyncHandlers.js";
import jwt from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async (req,res,next)=>{

    try {
        // 1. Collect accesss token from the cookies or from "Authorization" header:
    
        const Token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if(!Token){
            throw new ApiErrors(400,"Unothorized Request");
        }
    
        // 2. Verify the user aaccess token and the jwt accesss token:
        const decodedToken = jwt.verify(Token,process.env.ACCESS_TOKEN_SECRET);
    
        // console.log("Decoded Token is: ",decodedToken);
    
    
        // 3. Select the user from the database:
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        // console.log("User is: ",user);
    
        if(!user) throw new ApiErrors(401,"Invalid Access Token.");
    
        // 4. Add new object in the "req":
        req.user=user;
    
        next(); 
    } catch (error) {
        throw new ApiErrors(401,"Invalid Access Token in catch.");
    }

})