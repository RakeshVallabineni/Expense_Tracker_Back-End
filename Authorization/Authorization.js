const jwt = require("jsonwebtoken");
const Token_Secret = process.env.TOKEN_SECRET;
const User = require("../models/userAccess/user.js");

const Authorization = async (req, res, next) => {
  const Headers = req.header("Authorization");

  if (Headers) {
    const IdVerification = jwt.verify(Headers, Token_Secret);
    const findUser = await User.findOne({ _id: IdVerification });
    if (findUser) {
      req.UserID = IdVerification;
      next();
    } else {
      res.status(401).json({ message: "user not found!" });
    }
  } else {
    res.status(404).json({ message: "Please Pass headers!" });
  }
};

module.exports = Authorization;
