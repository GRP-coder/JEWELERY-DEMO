const Order = require('../models/Order');
const Cart = require('../models/Cart');

const createOrder = async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    const cart = await Cart.findOne({ userId: req.userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = new Order({
      userId: req.userId,
      items: cart.items,
      totalAmount: cart.totalPrice,
      shippingAddress,
      paymentStatus: 'pending'
    });

    await order.save();

    // Clear cart after order
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json({ message: 'Order created', order });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).populate('items.productId').sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus, updatedAt: Date.now() },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus
};
