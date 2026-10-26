const SignIn = require("../../Models/AuthModel/signIn.schema");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator');

const signInController = [
    check('firstName')
    .notEmpty()
    .withMessage("Please Enter First Name")
    .trim().isLength({min:3})
    .withMessage("First Name atleast contains 3 Character.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("First name should be alphabets."),

    check('lastName')
    .notEmpty()
    .withMessage("Please Enter Last Name")
    .trim().isLength({min:3})
    .withMessage("Last Name atleast contains 3 Character.")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Last name should be alphabets."),

    check('email')
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please Enter Valid Email.")
    .normalizeEmail(),

    check('password')
    .isLength({min:8})
    .withMessage("Password atleast of 8 length.")
    .matches(/[a-z]/)
    .withMessage("Must contain atleast one lowerCase letter.")
    .matches(/[A-Z]/)
    .withMessage("Must contain atleast one upperCase letter.")
    .matches(/[!@#$^%&*()<>?'':;{}|<>]/)
    .withMessage("Must contain atleast one special character."),

    check("confirmPassword")
    .trim()
    .custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error("Confirm password does't matches.");
        }
        return true;
    })
    ,async(req,res,next)=>{

        // Sending request object to the validateResult:
    const error = validationResult(req);

    // console.log(error);

    if(!error.isEmpty()){
        return res.status(400).json({
            status:400,
            message:"Bad Request Credential Not Matched",
            errData:error.errors
        })
    }

    // Simple Checking if user already present or not:
    let resolve = await SignIn.findOne({email:req.body.email});
    // console.log(resolve);
    if(resolve !== null) {
         res.status(400).json({
            status:400,
            message:"User Already Present"
        })
        return;
    }

    // Try to hashed the password:
    const hashedPassword = await bcrypt.hash(req.body.password,12);

    req.body.password = hashedPassword;

    // If you reached here it means user not present so you can store that in the database:
    SignIn.insertOne(req.body).then(resolve=>{
        // console.log("New User Added",resolve);
        
        // Setting simple cookies in the client Browser:
        res.cookie('isLoggedIn', 'true', {
            httpOnly: true, // Ensures the cookie is not accessible via JavaScript (for better security).If its true then client not able to access,read,update the cookie.If you want the cookie must be secure but apprently available to the client then create an endpoint which send the user cookie value.
            secure: true,   // Ensures the cookie is transmitted only over HTTPS
            path: '/',      // Makes the cookie available across the entire site
            maxAge: 3600000, // Optional: Sets the expiration time (1 hour in milliseconds)
           // signed : true  //  used the signed cookie using cookie parser,only used when you try to signed cookie using the cookie parser.
          });
        res.status(200).json({
            status:200,
            message:"New User Added Successfully",
            data:resolve
        });
    }).catch(err=>{
        res.status(500).json({
            status:500,
            message:err,
            description:`Server Error,Try Again Later`
        })
    })
}]

module.exports = {signInController};

