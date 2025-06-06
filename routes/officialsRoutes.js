const express = require('express');
const router = express.Router();
const officialsController = require('../controllers/officialsController');

router.get('/getOfficials', officialsController.getAllOfficials);
router.post('/registerOfficial', officialsController.registerOfficial);
router.put('/updateOfficial', officialsController.updateOfficial);

module.exports = router;