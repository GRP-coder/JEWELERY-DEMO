import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/products')} className="btn btn-primary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-material">{item.material}</p>
                    <p className="item-price">${item.price}</p>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                      <FiPlus />
                    </button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="summary-row">
                <span>Tax:</span>
                <span>${(parseFloat(getTotalPrice()) * 0.1).toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(parseFloat(getTotalPrice()) + 10 + (parseFloat(getTotalPrice()) * 0.1)).toFixed(2)}</span>
              </div>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
