const bcrypt = require('bcryptjs');
// var module = new Module(...);
// var exports = module.exports;
module.exports = function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

// exports.comparePassword = function (password, dbPassword) {
//   return bcrypt.compareSync(password, dbPassword);
// };
