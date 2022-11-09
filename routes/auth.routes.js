const express = require("express");
const { loginFunc, reissue } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", loginFunc);

router.get("/reissue", reissue);

module.exports = router;
