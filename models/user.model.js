const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    min: 5,
    max: 20,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userNickname: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
