const express = require('express');
const router = express.Router();
const { getApplicantsForScreening } = require('../controllers/screening');

// Define the route
router.get('/users/:userId/applicants', getApplicantsForScreening);

module.exports = router;
