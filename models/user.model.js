// for ORM - mongoose

// Example

/*
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type : String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  
    // email pattern
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type : String,
    required: true,
  },
  phone_number: Number,
});

module.exports = mongoose.model("User", userSchema);
*/
