import {Router} from 'express';
import {registerUser,loginUser,logOut,refreshJwtTokens} from '../Controllers/Users.controller.js';
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


router.route("/loginUser").post(loginUser);

router.route("/logOut").post(verifyJWT,logOut);

router.route("/refreshJwt").post(refreshJwtTokens);


export default router;