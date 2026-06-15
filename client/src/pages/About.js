import React from 'react';
import { Link } from 'react-router-dom';
import { FiAward, FiHeart, FiShield, FiTruck } from 'react-icons/fi';
import '../styles/InfoPages.css';

const About = () => {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="container info-hero-content">
          <p className="info-eyebrow">About Jewelry Shop</p>
          <h1>Crafted for the moments you keep close.</h1>
          <p>
            We curate elegant rings, necklaces, bracelets, and earrings with a focus on
            lasting materials, careful finishing, and designs that feel personal from the
            first wear.
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="container info-split">
          <div>
            <p className="info-eyebrow">Our Story</p>
            <h2>Jewelry with care behind every detail</h2>
          </div>
          <div className="info-copy">
            <p>
              Jewelry Shop began with a simple idea: make beautiful, dependable jewelry
              easier to discover online. Every piece in our collection is chosen for its
              balance of style, comfort, and everyday durability.
            </p>
            <p>
              Whether you are celebrating a milestone, choosing a thoughtful gift, or
              adding a signature piece to your own collection, our team is here to make
              the experience feel clear, secure, and memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="info-section info-muted">
        <div className="container">
          <div className="info-card-grid">
            <div className="info-card">
              <FiAward size={28} />
              <h3>Quality Materials</h3>
              <p>Pieces are selected for genuine materials, refined finishes, and long-term wear.</p>
            </div>
            <div className="info-card">
              <FiHeart size={28} />
              <h3>Meaningful Design</h3>
              <p>Our collections are built around timeless silhouettes and thoughtful details.</p>
            </div>
            <div className="info-card">
              <FiShield size={28} />
              <h3>Secure Shopping</h3>
              <p>Your checkout experience is protected with encrypted payment processing.</p>
            </div>
            <div className="info-card">
              <FiTruck size={28} />
              <h3>Reliable Delivery</h3>
              <p>Orders are packed with care and shipped quickly, with easy returns available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container info-cta">
          <h2>Find a piece that feels like yours.</h2>
          <p>Explore our latest collection and choose jewelry made for everyday elegance.</p>
          <Link to="/products" className="btn btn-primary">Shop Collection</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
