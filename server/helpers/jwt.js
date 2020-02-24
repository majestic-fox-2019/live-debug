const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
generateToken = function (payload) {
  console.log(payload);
  return jwt.sign(payload, SECRET);
};

verifyToken = function (payload) {
  return jwt.verify(payload, SECRET);
};

module.exports = {
  generateToken,
  verifyToken
}