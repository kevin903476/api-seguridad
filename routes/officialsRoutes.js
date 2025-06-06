const express = require('express');
const router = express.Router();
const officialsController = require('../controllers/officialsController');

router.get('/getOfficials', officialsController.getAllOfficials);
router.post('/register', officialsController.registerOfficial);
router.put('/update', officialsController.updateOfficial);

module.exports = router;