import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../styles/Payment.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const PaymentForm = ({ orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { token } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        '/api/payment/create-intent',
        { orderId, amount: 1000 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {}
        }
      });

      if (result.paymentIntent.status === 'succeeded') {
        await axios.post(
          '/api/payment/confirm',
          { orderId, paymentIntentId: result.paymentIntent.id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        clearCart();
        toast.success('Payment successful!');
        navigate('/orders');
      }
    } catch (error) {
      toast.error('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment} className="payment-form">
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" disabled={!stripe || loading} className="btn btn-primary">
        {loading ? 'Processing Payment...' : 'Complete Payment'}
      </button>
    </form>
  );
};

const Payment = () => {
  const { orderId } = useParams();

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>Complete Your Payment</h1>
        <Elements stripe={stripePromise}>
          <PaymentForm orderId={orderId} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
