import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        '/api/orders',
        { shippingAddress: formData },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate(`/payment/${response.data.order._id}`);
      toast.success('Order created! Proceed to payment.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>

        <div className="checkout-container">
          <div className="checkout-form">
            <h2>Shipping Information</h2>
            <form onSubmit={handleCheckout}>
              <div className="form-row">
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cart.map(item => (
                <div key={item._id} className="summary-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Subtotal:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="summary-total">
              <span>Shipping:</span>
              <span>$10.00</span>
            </div>
            <div className="summary-total">
              <span>Tax:</span>
              <span>${(parseFloat(getTotalPrice()) * 0.1).toFixed(2)}</span>
            </div>
            <div className="summary-total grand-total">
              <span>Total:</span>
              <span>${(parseFloat(getTotalPrice()) + 10 + (parseFloat(getTotalPrice()) * 0.1)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
