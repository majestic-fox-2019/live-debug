const router = require('express').Router();
const StudentController = require('../controllers/student');

router.post('/', StudentController.submit);
router.get('/', (req, res) => res.send("masuk"))

module.exports = router;
