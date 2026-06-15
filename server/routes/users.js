const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');

router.get('/profile', verifyToken, getUserProfile);
router.put('/profile', verifyToken, updateUserProfile);

module.exports = router;
