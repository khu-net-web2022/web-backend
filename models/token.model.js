const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
