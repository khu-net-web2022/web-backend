const express = require("express");
const { loginFunc } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", loginFunc);

module.exports = router;
