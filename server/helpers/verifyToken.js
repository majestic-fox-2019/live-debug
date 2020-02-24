const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = function verifyToken(payload) {
  return jwt.verify(payload, SECRET);
};
