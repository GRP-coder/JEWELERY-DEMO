import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Premium jewelry collection with authentic designs and excellent craftsmanship.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@jewelryshop.com</p>
            <p>Phone: +1-234-567-8900</p>
            <p>Address: 123 Jewelry Street, City, Country</p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><FiFacebook size={24} /></a>
              <a href="#"><FiTwitter size={24} /></a>
              <a href="#"><FiInstagram size={24} /></a>
              <a href="#"><FiLinkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Jewelry Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
