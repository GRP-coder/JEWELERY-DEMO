import React from 'react';
import { FiMail, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import '../styles/InfoPages.css';

const Contact = () => {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="container info-hero-content">
          <p className="info-eyebrow">Contact Us</p>
          <h1>We would love to help you choose well.</h1>
          <p>
            Have a question about an order, a product, sizing, gifting, or returns?
            Reach out and our team will guide you through the next step.
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <div className="contact-item">
              <FiMail size={24} />
              <div>
                <h3>Email</h3>
                <p>info@jewelryshop.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FiPhone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+1-234-567-8900</p>
              </div>
            </div>
            <div className="contact-item">
              <FiMapPin size={24} />
              <div>
                <h3>Visit</h3>
                <p>123 Jewelry Street, City, Country</p>
              </div>
            </div>
            <div className="contact-item">
              <FiClock size={24} />
              <div>
                <h3>Hours</h3>
                <p>Monday to Saturday, 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="How can we help?" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Tell us what you need" />
            </div>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
