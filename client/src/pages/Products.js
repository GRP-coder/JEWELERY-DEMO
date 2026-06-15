import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [material, setMaterial] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (material !== 'all') {
      filtered = filtered.filter(p => p.material === material);
    }

    setFilteredProducts(filtered);
  }, [category, material, products]);

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Collection</h1>

        <div className="products-container">
          {/* Filters */}
          <aside className="filters">
            <div className="filter-group">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="rings">Rings</option>
                <option value="necklaces">Necklaces</option>
                <option value="bracelets">Bracelets</option>
                <option value="earrings">Earrings</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Material</label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                <option value="all">All</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>

            <button className="reset-btn" onClick={() => { setCategory('all'); setMaterial('all'); }}>
              Reset Filters
            </button>
          </aside>

          {/* Products Grid */}
          <div className="products-main">
            {loading ? (
              <p className="loading">Loading products...</p>
            ) : filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <p className="no-products">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
