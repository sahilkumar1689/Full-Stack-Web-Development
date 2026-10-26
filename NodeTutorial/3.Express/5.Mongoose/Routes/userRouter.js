const express = require("express");
// Create the router:
const userRouter = express.Router();

// Adding Controller:
const homeController = require("../Controller/homeController");

userRouter.get("/",homeController.defaultController);

module.exports = userRouter;
