const { Router } = require('express');
const { registerEmployee, loginEmployee } = require('../controllers/employee')
const router = Router();

router.post('/', registerEmployee)
router.post('/', loginEmployee)

module.exports = router;
