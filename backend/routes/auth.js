const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 1. Traditional Sign Up
router.post('/signup', authController.signup);

// 2. Traditional Login
router.post('/login', authController.login);

// 3. Google OAuth Login/Registration
router.post('/google', authController.googleLogin);

module.exports = router;