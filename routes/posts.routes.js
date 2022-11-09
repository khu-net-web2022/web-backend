const express = require("express");
const { getAllPosts, getPostById } = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", async (req, res) => {}); // 게시글 업로드 구현 예정

module.exports = router;
