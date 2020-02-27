const { Student } = require('../models');
class StudentController {
  static submit(req, res, next) {
    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    if (!Number.isInteger(submitScore)) {
      console.log('masuk if')
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
      console.log('masuk else', {name, score, submitScore})
      Student.create({
        name: name || '',
        score: submitScore,
        TeacherId: TeacherId
      })
        .then(response => {
          console.log('masuk then')
          res.status(201).json({
            message: 'Successfully submit score',
            student: response
          });
        })
        .catch(err => {
          console.log('masuk', err.response)
          next(err)
        });
    }
  }
}

module.exports = StudentController;
