const express = require('express');
const router = express.Router();
const institutionController = require('../controllers/institutionController');
const upload = require('../middleware/upload'); // Import Multer middleware
const protect = require('../middleware/authProtectMiddleware');

// Create Institution with logo upload
router.post('/insti', upload.single('logo'), protect, institutionController.createinstitution);

// View all Institutions
router.get('/insti/:id', upload.single('logo'), protect, institutionController.viewInstitution);

// Update Institution with a new logo upload
router.put('/insti/:id',protect, upload.single('logo'), institutionController.updateInstitution);

module.exports = router;
