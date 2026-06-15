const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login, googleAuth } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), googleAuth);

module.exports = router;
