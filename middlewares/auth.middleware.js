const jwt = require("jsonwebtoken");

const authMiddleWare = async function (req, res, next) {
  const authorization = req.headers.authorization;

  if (authorization === undefined) {
    res.status(400).json({ success: false, loginFailed: true });
  } else {
    const accessToken = authorization.split("Bearer ")[1];

    try {
      req.verifiedId = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
      next();
    } catch (e) {
      const errorResponse = {
        success: false,
        authFailed: true,
      };
      if (e.message === "jwt expired") {
        errorResponse.reissue = true;
      }
      res.status(400).json(errorResponse);
    }
  }
};

module.exports = { authMiddleWare };
