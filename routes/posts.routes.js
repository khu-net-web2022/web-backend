const express = require("express");
const postModel = require("../models/post.model");

const router = express.Router();

router.get("/", async (req, res) => {
  posts = await postModel.find();
  res.json({
    posts: posts,
  });
});

module.exports = router;
