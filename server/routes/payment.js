const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { createPaymentIntent, confirmPayment } = require('../controllers/paymentController');

router.post('/create-intent', verifyToken, createPaymentIntent);
router.post('/confirm', verifyToken, confirmPayment);

module.exports = router;
