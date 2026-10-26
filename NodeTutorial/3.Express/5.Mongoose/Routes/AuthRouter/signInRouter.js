const express = require("express");

const authRouter = express.Router();

const {signInController} = require("../../Controller/AuthController/signInController");
const {loginController} = require("../../Controller/AuthController/LoginController");

authRouter.post("/signUp",signInController);
authRouter.post("/logIn",loginController);


module.exports  = {authRouter};