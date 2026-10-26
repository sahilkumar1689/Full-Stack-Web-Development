const SignIn = require("../../Models/AuthModel/signIn.schema");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator');

const loginController = [
    check('email')
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please Enter Valid Email.")
        .normalizeEmail(),

    check('password')
        .notEmpty()
        .withMessage("Password is required")
        .isLength({min:8})
        .withMessage("Password must contain alteast 8 character."),
    
    async(req,res,next)=>{
    // console.log(req.body);

    const error = validationResult(req);

    // console.log(error);

    if(!error.isEmpty()){
        return res.status(400).json({
            message:"Bad Request",
            err:error.errors
        });
    }

    // Check if user Present:
    const originalUser = await SignIn.findOne({email:req.body.email});

    if(!originalUser){
        return res.status(400).json({
            status:400,
            message:"Invalid Email and Password",
        })
    }

    // Check if the password is valid:
    const isValidPassword = await bcrypt.compare(req.body.password,originalUser.password);

    if(!isValidPassword){
        return res.status(400).json({
            status:400,
            message:"Invalid Email and Password",
        })
    }
    
    // Setting the simple cookies on the client browser = It is not recommended try to use session or jwt tokens:

    res.cookie('isLoggedIn', 'true', {
        httpOnly: true, // Ensures the cookie is not accessible via JavaScript (for better security)
        secure: true,   // Ensures the cookie is transmitted only over HTTPS
        path: '/',      // Makes the cookie available across the entire site
        maxAge: 3600000 // Optional: Sets the expiration time (1 hour in milliseconds)
      });
    res.status(200).json({
        status:200,
        message:"User LoggedIn Successfully",
        data:req.body
    });

}]

module.exports = {loginController};