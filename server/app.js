const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit"); 
const mongoSanitize = require("express-mongo-sanitize")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const userRouter = require("./routes/userRoutes"); 
// Start express app
const multer = require("multer");
const app = express();
 
app.use(bodyParser.json());
 
app.use(cors());
 
   

if (process.env.NODE_ENV === "development") {


  app.use(morgan("dev"));
}

 
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use(cookieParser());

 
app.use(mongoSanitize());
  
 

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/users", userRouter);  

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
