const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {
  const id = req.body.id;
  const existingUser = await userModel.findOne({ userId: id });
  if (existingUser !== null) {
    res.status(400).json({ message: "이미 존재하는 아이디입니다." });
  } else {
    const pw = req.body.pw;
    const hashedPW = await bcrypt.hash(pw, 10);
    await userModel.create({ userId: id, userPassword: hashedPW });
    res.status(200).json({ id, hashedPW });
  }
};

module.exports = { signUp };
