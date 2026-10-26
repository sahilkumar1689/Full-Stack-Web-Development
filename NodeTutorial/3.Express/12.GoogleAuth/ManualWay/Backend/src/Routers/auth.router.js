const express = require("express");
const googleAuth = require("../Controllers/auth.controller");
const authRouter = express.Router();

authRouter.get("/google",googleAuth);

module.exports = authRouter;