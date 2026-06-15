const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require('../controllers/orderController');

router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id', verifyToken, updateOrderStatus);

module.exports = router;
