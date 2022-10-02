const express = require("express");
const userControllers = require("../controllers/user.controllers");
const router = express.Router();

router.get("/hello-world", userControllers.returnQueryMessage);

module.exports = router;
