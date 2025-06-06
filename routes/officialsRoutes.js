const express = require('express');
const router = express.Router();
const officialsController = require('../controllers/officialsController');
const upload = require("../middleware/fileValidator");

router.get('/getOfficials', officialsController.getAllOfficials);
router.post("/register", upload.single("foto"), officialsController.registerOfficial);
router.put('/update', officialsController.updateOfficial);

module.exports = router;