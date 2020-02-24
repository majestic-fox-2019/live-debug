const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    const { name, score } = req.body;
    const submitScore = score;
    const TeacherId = req.teacher.id;
    if (Number.isInteger(submitScore) === false) {
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      Student.create({
        name: name || '',
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          });
        })
        .catch(err => {
          console.log(err);
          next(err)
        });
    }
  }
}

module.exports = StudentController;
