const { Teacher } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { comparePassword } = require('../helpers/bcrypt');

class TeacherController {
  static register(res, req, next) {
    const { email, password } = res.body;
    // console.log(email, password);
    Teacher.create({
      email,
      password
    })
      .then(response => {
        // console.log(response.id, 'apakah ini?');
        const payload = {
          id: response.id,
          email: response.email
        };
        // console.log(payload, 'payload cuy');
        // generateToken.generateToken(payload)
        const access_token = generateToken(payload);
        req.status(200).json({
          message: 'Successfully Register',
          access_token
        });
        // console.log(access_token, 'ini kebaca ga?'); 
      })
      .catch(err => {
        next(err)
        // console.log(err, 'masuk kah?');
      });
  }
  static login(req, res, next) {
    const { email, password } = req.body;
    Teacher.findOne({
      where: {
        email: email || ''
      }
    })
      .then(response => {
        if (response) {
          if (comparePassword(password || '', response.password)) {
            const payload = {
              id: response.id,
              email: response.email
            };
            const access_token = generateToken(payload);
            res.status(200).json({
              message: 'Successfully Login',
              access_token
            });
          } else {
            next({
              status: 400,
              message: 'Invalid email or password'
            });
          }
        } else {
          next({
            status: 400,
            message: 'Invalid email or password'
          });
        }
      })
      .catch(err => next(err));
  }
}
module.exports = TeacherController;
