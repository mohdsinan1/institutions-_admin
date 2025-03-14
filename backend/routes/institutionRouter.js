const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institutionController');
const upload = require('../middleware/upload'); // Import Multer middleware

// Create Institution with logo upload
router.post('/', upload.single('logo'), institutionController.createinstitution);

// View all Institutions
router.get('/', institutionController.viewInstitution);

// Update Institution with a new logo upload
router.put('/:id', upload.single('logo'), institutionController.updateInstitution);

module.exports = router;
