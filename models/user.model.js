const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
