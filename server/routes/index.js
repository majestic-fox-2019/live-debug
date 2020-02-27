const express = require('express')
const router = express.Router()
const studentRoutes = require('./student');
const TeacherController = require('../controllers/teacher');
const authentication = require('../middlewares/authentication');

router.post('/login', TeacherController.login);
router.post('/register', TeacherController.register);

router.use('/students', authentication);
router.use('/students', studentRoutes);

module.exports = router;
