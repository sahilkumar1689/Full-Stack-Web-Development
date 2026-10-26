const express = require("express");
const hostRouter = express.Router();
const homeController = require("../Controller/homeController");

hostRouter.get("/addHome",homeController.addHomeController);

hostRouter.post("/listHome",homeController.listHomeController);

module.exports = {hostRouter};