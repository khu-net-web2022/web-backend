const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const tokenModel = require("../models/token.model");

const loginFunc = async (req, res) => {
  const userId = req.body.id;
  const userPassword = req.body.pw;
  const dbUser = await userModel.findOne({ userId });
  if (dbUser !== null && (await bcrypt.compare(userPassword, dbUser.userPassword))) {
    const payload = { id: userId };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { algorithm: "HS256", expiresIn: "30m" });
    const refreshToken = jwt.sign({}, process.env.JWT_SECRET_KEY, { algorithm: "HS256", expiresIn: "1d" });
    const result = {
      success: true,
      accessToken,
      refreshToken,
    };
    await tokenModel.updateOne(
      {
        userId,
      },
      {
        userId,
        refreshToken,
      },
      { upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json(result);
  } else res.status(400).json({ success: false });
};

module.exports = { loginFunc };
