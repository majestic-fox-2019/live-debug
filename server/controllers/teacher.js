const { Teacher } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { comparePassword } = require('../helpers/bcrypt');
class TeacherController {
  static register(res, req, next) {
    Teacher.create({
      email: res.body.email,
      password: res.body.password
    })
      .then(response => {
        const payload = {
          id: response.id,
          email: response.dataValues.email
        };
        const token = generateToken(payload);
        req.status(201).json({
          message: 'Successfully Register',
          access_token: token,
          email: payload.email,
          id: payload.id
        });
      })
      .catch(next);
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
            const token = generateToken(payload);
            res.status(200).json({
              message: 'Successfully Login',
              access_token: token,
              email: payload.email,
              id: payload.id
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
