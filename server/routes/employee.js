const { Router } = require('express');
const { registerEmployee, loginEmployee } = require('../controllers/employee')
const router = Router();

router.post('/register', registerEmployee)
router.post('/login', loginEmployee)

module.exports = router;
