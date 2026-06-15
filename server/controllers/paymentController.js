const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');

const createPaymentIntent = async (req, res) => {
  try {
    const { orderId, amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      metadata: { orderId }
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment intent', error: error.message });
  }
};

const confirmPayment = async (req, res) => {
  try {
    const { orderId, paymentIntentId } = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      await Order.findByIdAndUpdate(orderId, {
        paymentStatus: 'completed',
        stripePaymentId: paymentIntentId
      });

      return res.status(200).json({ message: 'Payment successful' });
    }

    res.status(400).json({ message: 'Payment not completed' });
  } catch (error) {
    res.status(500).json({ message: 'Error confirming payment', error: error.message });
  }
};

module.exports = {
  createPaymentIntent,
  confirmPayment
};
