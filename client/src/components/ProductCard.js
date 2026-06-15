import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import '../styles/ProductCard.css';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FiHeart size={20} />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-material">{product.material}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
