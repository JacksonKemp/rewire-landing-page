import React from 'react';
import './App.css';

function EmailVerified() {
  return (
    <div className="App">
      <section className="hero-section">
        <nav className="navbar">
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/rewire-logo.png'} alt="Rewire Logo" className="rewire-navbar-logo large-logo" />
          </a>
        </nav>
        <div className="privacy-container">
          <div className="email-verified-content">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38" stroke="#4ecdc4" strokeWidth="4" fill="#E0F7FA"/>
                <path d="M25 40l10 10 20-20" stroke="#4ecdc4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="privacy-title">Email Verified!</h1>
            <div className="privacy-content">
              <div className="privacy-intro">
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                  Thank you for confirming your email address. Your account is now verified and ready to use.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  You can now close this window and return to the Rewire app to continue your journey.
                </p>
                <div style={{ marginTop: '3rem' }}>
                  <a href="/" className="app-btn primary-btn" style={{ 
                    display: 'inline-block',
                    padding: '12px 32px',
                    textDecoration: 'none'
                  }}>
                    Return to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmailVerified;

