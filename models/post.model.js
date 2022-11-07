const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      unique: true,
      required: true,
    },
    imageURL: {
      type: String,
    },
    contentTextURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

module.exports = mongoose.model("Post", postSchema);
