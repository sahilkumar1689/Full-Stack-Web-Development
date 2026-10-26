import {Router} from 'express';
import {registerUser,loginUser,logOut,refreshJwtTokens,forgetPassword,changeOtherDetails,getUser,changeAvatar,changeCoverImage,deleteUser} from '../Controllers/Users.controller.js';
import { upload } from '../Middlewares/multer.middleware.js';
import { verifyJWT } from '../Middlewares/Auth.middleware.js';


const router = Router();

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    },
    {
        name:"coverImage",
        maxCount:1
    }
]),registerUser);


router.route("/changeAvatar").post(verifyJWT,upload.single("newAvatar"),changeAvatar);
router.route("/changeCoverImage").post(verifyJWT,upload.single("newCoverImage"),changeCoverImage);


router.route("/loginUser").post(loginUser);

router.route("/logOut").post(verifyJWT,logOut);

router.route("/refreshJwt").post(refreshJwtTokens);

router.route("/forgetPassword").post(forgetPassword);

router.route("/changeOtherDetails").post(verifyJWT,changeOtherDetails);

router.route("/getUser/:id").get(verifyJWT,getUser);

router.route("/deleteUser").delete(verifyJWT,deleteUser);


export default router;