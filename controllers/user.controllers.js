// const User = require("../Models/User");

const returnQueryMessage = (req, res, next) => {
  //   console.log(req.query);

  const inputName = req.query.name;
  res.status(200).send({
    message: `[${inputName || "Default"}]님 안녕하세요!`,
  });
};

module.exports = { returnQueryMessage };
