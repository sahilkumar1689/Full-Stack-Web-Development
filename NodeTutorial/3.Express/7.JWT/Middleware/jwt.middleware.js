const jwt = require("jsonwebtoken");


const JWT_SECRET = "here you can add random string.";

// 1. Middleware in order to authenticate the every request:
const jwtAuthMiddleware = (req,res,next)=>{
    // Firstly Extract the token from the request headers:
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(200).json({
        errorMessage:"Unauthorized"
    });

    // If token present then verify the token and send resonse accordingly:
    try {
        const payload = jwt.verify(token,JWT_SECRET);

        req.useData = payload;
        next();
    } catch (err) {
        return res.status(401).json({
            errorMessage:"Invalid Token or Expire Token"
        })
    }
}


// 2. Function to generate the jwt token:
const createJwtToken = (userData)=>{
    return jwt.sign(userData,JWT_SECRET,{expiresIn:3000});
}


module.exports = {jwtAuthMiddleware,createJwtToken};

