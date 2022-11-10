const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

const getAllPosts = async (req, res) => {
  const posts = await postModel.find();
  const responsePost = await Promise.all(
    posts.map(async (p) => {
      const authorInfo = await userModel.findOne({
        _id: p.authorId,
      });
      const { postId, imageURL, contentTextURL, title, price, createdAt, updatedAt } = p;
      return { postId, imageURL, contentTextURL, title, price, author: authorInfo.userNickname, createdAt, updatedAt };
    })
  );
  res.json(responsePost);
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  const post = await postModel.findOne({
    postId,
  });
  if (post === null) {
    res.status(400).json({ success: false, message: `post(${postId}) not found` });
  } else {
    const authorInfo = await userModel.findOne({
      _id: post.authorId,
    });
    const { postId, imageURL, contentTextURL, title, price, createdAt, updatedAt } = post;

    res.json({
      postId,
      imageURL,
      contentTextURL,
      title,
      price,
      author: authorInfo.userNickname,
      createdAt,
      updatedAt,
    });
  }
};

module.exports = { getAllPosts, getPostById };
