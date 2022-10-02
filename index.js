var express = require("express");
var cors = require("cors");

var app = express();

// settings
var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || 3000;
var userRouter = require("./routes/user.routes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// router
app.use("/user", userRouter);

// listen
app.listen(port, host, () => {
  console.log(`app listening at http://${host}:${port} ...`);
});

module.exports = app;
