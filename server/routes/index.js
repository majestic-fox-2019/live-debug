const router = require('express').Router;
const studentRoutes = require('./student');
const teacherRoutes = require('./teacher')

const authentication = require('../middlewares/authentication');



router.use('/teachers', teacherRoutes);
router.use(authentication);
router.use('/students', studentRoutes);

module.exports = router;
