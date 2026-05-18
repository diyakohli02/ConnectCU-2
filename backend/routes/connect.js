const express = require('express');
const router = express.Router();
const connectController = require('../controllers/connectController');

// POST /api/connect
router.post('/', connectController.submitConnectionRequest);

module.exports = router;
