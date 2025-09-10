import React, { useState, useEffect } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Debug log on component mount
  useEffect(() => {
    console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL ? '✓ Found' : '✗ Missing');
    console.log('Supabase Key:', process.env.REACT_APP_SUPABASE_ANON_KEY ? '✓ Found' : '✗ Missing');
    
    // Test Supabase connection
    const testConnection = async () => {
      try {
        const { error } = await supabase.from('waitlist_emails').select('count').limit(0);
        if (error) {
          console.error('Supabase connection test error:', error);
        } else {
          console.log('Supabase connection test: ✓ Success');
        }
      } catch (err) {
        console.error('Supabase connection test failed:', err);
      }
    };
    
    testConnection();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Attempting to insert email:', email);
      const { error } = await supabase
        .from('waitlist_emails')
        .insert([{ email: email }]);
      
      if (error) {
        console.error('Supabase error details:', error);
        setError(`Error: ${error.message}`);
      } else {
        setSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Network error details:', err);
      setError(`Network error: ${err.message}`);
    }
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
              Reclaim your brain.<br />
              Reclaim <span className="teal-accent">your</span> life.
            </h1>
            <p className="tagline">Recovery meets routine.</p>
            <div className="hero-buttons">
              <button className="app-btn secondary-btn" onClick={() => {
                const el = document.getElementById('waitlist');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>Learn More</button>
            </div>
          </div>
          <div className="hero-mockup inspiration-hero-mockup">
            {/* Abstract SVG art behind phone mockup */}
            <div className="abstract-circles-bg">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160" cy="160" r="120" stroke="#4ecdc4" strokeWidth="24" fill="none"/>
                <circle cx="260" cy="60" r="28" fill="#d6eaff"/>
                <circle cx="280" cy="220" r="12" fill="#b2e0f7"/>
                <circle cx="60" cy="260" r="18" fill="#d6eaff"/>
              </svg>
            </div>
            {/* Standalone phone2.png as the app screenshot */}
            <img src={process.env.PUBLIC_URL + '/phone2.png'} alt="App screenshot" className="standalone-phone-img" />
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="stats-section">
        <div className="stat-card"><span className="stat-value">Simple</span></div>
        <div className="stat-card"><span className="stat-value">Smart</span></div>
        <div className="stat-card"><span className="stat-value">All-In-One</span></div>
      </section>

      {/* Features Grid */}
      <section className="features-section" id="features">
        <h2>How Rewire Helps</h2>
        <p className="features-subtitle">Our comprehensive tools are designed to support your cognitive rehabilitation journey.</p>
        <div className="features-grid redesigned">
          <div className="feature-card">
            <div className="feature-icon-bg">
              {/* Brain SVG */}
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E0F7FA"/><path d="M13.5 18c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5Z" stroke="#4ecdc4" strokeWidth="2"/><path d="M18 13.5V10m0 16v-3.5m4.5-4.5H26m-16 0h3.5" stroke="#4ecdc4" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="feature-content">
              <div className="feature-title">Cognitive Exercises</div>
              <div className="feature-desc">Fun, interactive exercises designed to improve memory, attention, and processing speed.</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-bg">
              {/* Check SVG */}
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E0F7FA"/><circle cx="18" cy="18" r="7" stroke="#4ecdc4" strokeWidth="2"/><path d="M12 18l4 4 8-8" stroke="#4ecdc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="feature-content">
              <div className="feature-title">Task Manager</div>
              <div className="feature-desc">Simple tools to organize your daily activities and maintain independence.</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-bg">
              {/* Heartbeat SVG */}
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E0F7FA"/><path d="M10 19h4l2-4 4 8 2-4h4" stroke="#4ecdc4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="feature-content">
              <div className="feature-title">Symptom Tracker</div>
              <div className="feature-desc">Monitor your symptoms over time and identify patterns to share with healthcare providers.</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon-bg">
              {/* Clock SVG */}
              <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#E0F7FA"/><circle cx="18" cy="18" r="7" stroke="#4ecdc4" strokeWidth="2"/><path d="M18 15v3l2 2" stroke="#4ecdc4" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="feature-content">
              <div className="feature-title">Progress Insights</div>
              <div className="feature-desc">Track your rehabilitation journey with clear, visual representations of your progress.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="waitlist-section" id="waitlist">
        <div className="waitlist-card">
          <h2>Join the Waitlist</h2>
          <p>Be the first to know when Rewire launches.</p>
          {submitted ? (
            <div className="success-message">Thank you for joining the waitlist!</div>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="email-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={submitted}
              />
              <button type="submit" className="submit-btn" disabled={submitted}>Notify Me</button>
            </form>
          )}
          {error && <div className="error-message">{error}</div>}
        </div>
      </section>
    </div>
  );
}

export default Home;
