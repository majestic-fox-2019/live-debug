const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
function generateToken(payload) {
  return jwt.sign({ id: payload.id }, SECRET);
};

function verifyToken(payload) {
  return jwt.verify(payload, SECRET);
};

module.exports = {
  generateToken,
  verifyToken
}