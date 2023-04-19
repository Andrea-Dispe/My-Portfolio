const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/save-password', authController.savePassword);

module.exports = router;
