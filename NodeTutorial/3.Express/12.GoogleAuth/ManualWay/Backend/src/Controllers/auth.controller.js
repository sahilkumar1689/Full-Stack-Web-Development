const axios = require("axios");
const user = require("../Models/user.model");
const { oauth2client } = require("../Utils/googleConfig");

const googleAuth = async (req,res)=>{
    try {
        const {code} = req.query;
        if(!code) return res.status(400).json({
            success:false,
            message:"Auth Code is Not Found."
        })
        // console.log(code);
        // console.log("GoogleAuth");

        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);

        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);

        // console.log(userRes);

        const {email,name,picture} = userRes.data;

        let existingUser = await user.findOne({ email});
        if (!existingUser) {
            existingUser = await user.create({
                userName: name,
                email: email,
                profile: picture,
                authProvide: "google"
            });
        }

        return res.status(200).json({
            success:true,
            user:existingUser,
            message:"Code Received Successfully."
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server Error,Try Again!"
        })
    }
}

module.exports = googleAuth;