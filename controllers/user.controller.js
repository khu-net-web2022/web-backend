const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const id = req.body.id;
  const nickname = req.body.nickname;
  const existingUser = await userModel.findOne({ userId: id });
  const existingNickname = await userModel.findOne({ userNickname: nickname });
  if (existingUser !== null) {
    res.status(400).json({ message: "이미 존재하는 아이디입니다." });
  } else if (existingNickname !== null) {
    res.status(400).json({ message: "이미 존재하는 닉네임입니다." });
  } else {
    const pw = req.body.pw;
    const hashedPW = await bcrypt.hash(pw, 10);
    await userModel.create({ userId: id, userPassword: hashedPW, userNickname: nickname });
    res.status(200).json({ success: true });
  }
};

module.exports = { signUp };
