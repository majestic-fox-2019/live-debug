const { Student } = require('../models');

class StudentController {

  static submit(req, res, next) {
    const { name, score } = req.body;
    const submitScore = Number(score);
    const TeacherId = req.teacher.id;
    // res.status(200).json(TeacherId)
    // console.log(submitScore, 'Submit Score oiii');
    // console.log(Number.isInteger(submitScore));
    // console.log(name, score, TeacherId);
    if (!Number.isInteger(submitScore)) {
        console.log('apa sini?');
      next({
        status: 400,
        message: 'Score only accept number'
      });
    } else {
        // console.log(name, submitScore, TeacherId, 'masuk else kah?');
      Student
        .create({
          name,
          score: submitScore,
          TeacherId: TeacherId
        })
        .then(response => {
          // console.log(response, 'masuk??');
          res.status(201).json(`{
            message: 'Successfully submit score',
            student: ${response}
          }`);
          // res.status(200).json(response)
        })
        .catch(err => {
          next(err)
          // console.log(err, 'apa ini?');
          // next({
          //   status: 400,
          //   message: 'Score only accept number'
          // });
        });
    }
  }
}

module.exports = StudentController;
