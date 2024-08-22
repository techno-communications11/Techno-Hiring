// routes/applicantRoutes.js
const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

// Route to handle form submission
router.post('/submit', applicantController.createApplicantReferral);
router.get('/test', (req, res) => {
    res.send('Test route is working!');
});

module.exports = router;
