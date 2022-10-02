// authentication, logging,  ...

// Example
// module.exports = function (req, res, next) {
//   const token = req.header("auth-token");
//   try {
//     const verified = jwt.verify(token, process.env.secret);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send({ error: "auth failed..." });
//   }
// };
