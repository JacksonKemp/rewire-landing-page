import React, { useState } from 'react';
import './App.css';

function Support() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent('Rewire Support Request');
    const body = encodeURIComponent(`Email: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:sav.wilds@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <nav className="navbar">
          <img src={process.env.PUBLIC_URL + '/rewire-logo.png'} alt="Rewire Logo" className="rewire-navbar-logo large-logo" />
        </nav>
        <div className="hero-content inspiration-hero">
          <div className="hero-text inspiration-hero-text">
            <h1>
              Get <span className="teal-accent">Support</span>
            </h1>
            <p className="tagline">We're here to help with your questions and concerns.</p>
          </div>
          <div className="hero-mockup inspiration-hero-mockup">
            {/* Abstract SVG art */}
            <div className="abstract-circles-bg">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160" cy="160" r="120" stroke="#4ecdc4" strokeWidth="24" fill="none"/>
                <circle cx="260" cy="60" r="28" fill="#d6eaff"/>
                <circle cx="280" cy="220" r="12" fill="#b2e0f7"/>
                <circle cx="60" cy="260" r="18" fill="#d6eaff"/>
              </svg>
            </div>
            {/* Support icon */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <svg width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#e0f7fa"/>
                <path d="M60 25c-19.33 0-35 15.67-35 35 0 12.18 6.24 22.93 15.73 29.24L35 105l16.76-8.38C55.09 97.54 59.45 98 60 98c19.33 0 35-15.67 35-35S79.33 25 60 25z" fill="#4ecdc4"/>
                <path d="M50 50h20M50 65h15" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section className="waitlist-section" id="support-form">
        <div className="waitlist-card">
          <h2>Contact Support</h2>
          <p>Send us a message and we'll get back to you as soon as possible.</p>
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for reaching out!</h3>
              <p>Your email client should have opened with a pre-filled message. If it didn't, please send your message directly to <strong>sav.wilds@gmail.com</strong>.</p>
            </div>
          ) : (
            <form className="support-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="email-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="How can we help you?"
                  required
                  className="message-input"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows="6"
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
          
          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <p>You can also email us directly at <strong>sav.wilds@gmail.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
