var express = require("express");
var cors = require("cors");
require("dotenv").config();

const { default: mongoose } = require("mongoose");

var app = express();

// settings
var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || 3000;

var userRouter = require("./routes/user.routes");
var authRouter = require("./routes/auth.routes");
var postRouter = require("./routes/posts.routes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

// router
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/post", postRouter);

// listen
app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port} ...`);
});

module.exports = app;
