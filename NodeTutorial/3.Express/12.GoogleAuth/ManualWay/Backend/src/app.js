const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./Routers/auth.router");

//  CORS Handling:
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Important MiddleWare Configurations:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Starts creating routes.

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server starts Serving.",
  });
});

app.use("/auth",authRouter);


module.exports = app;
