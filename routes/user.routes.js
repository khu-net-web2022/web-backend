const express = require("express");

const userControllers = require("../controllers/user.controller");
const router = express.Router();

// signup
router.post("/", userControllers.signUp);

module.exports = router;
