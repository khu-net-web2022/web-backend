const jwt = require("jsonwebtoken");

const authMiddleWare = function (req, res, next) {
  const authorization = req.headers.authorization;

  if (authorization === undefined) {
    res.status(400).json({ success: false, loginFailed: true });
  } else {
    const accessToken = authorization.split("Bearer ")[1];

    try {
      req.verifiedId = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
      next();
    } catch (e) {
      console.log(e);
      res.status(400).json({ success: false, loginFailed: true });
    }
  }
};

module.exports = { authMiddleWare };
