const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { getCart, addToCart, removeFromCart, updateCartItem, clearCart } = require('../controllers/cartController');

router.get('/', verifyToken, getCart);
router.post('/add', verifyToken, addToCart);
router.post('/remove', verifyToken, removeFromCart);
router.post('/update', verifyToken, updateCartItem);
router.post('/clear', verifyToken, clearCart);

module.exports = router;
