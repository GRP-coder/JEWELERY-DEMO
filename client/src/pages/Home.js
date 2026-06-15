import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.slice(0, 8));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Timeless Elegance</h1>
          <p>Handcrafted jewelry for every occasion</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Collection</h2>
          {loading ? (
            <p className="loading">Loading products...</p>
          ) : (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            <Link to="/products?category=rings" className="category-card">
              <span>Rings</span>
            </Link>
            <Link to="/products?category=necklaces" className="category-card">
              <span>Necklaces</span>
            </Link>
            <Link to="/products?category=bracelets" className="category-card">
              <span>Bracelets</span>
            </Link>
            <Link to="/products?category=earrings" className="category-card">
              <span>Earrings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature">
              <h3>✓ Authentic</h3>
              <p>100% genuine jewelry with certification</p>
            </div>
            <div className="feature">
              <h3>✓ Fast Shipping</h3>
              <p>Free delivery on orders over $100</p>
            </div>
            <div className="feature">
              <h3>✓ Secure Payment</h3>
              <p>Encrypted payment processing</p>
            </div>
            <div className="feature">
              <h3>✓ Easy Returns</h3>
              <p>30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
