import React from 'react';
import './App.css';

function Privacy() {
  return (
    <div className="App">
      <section className="hero-section">
        <nav className="navbar">
          <img src={process.env.PUBLIC_URL + '/rewire-logo.png'} alt="Rewire Logo" className="rewire-navbar-logo large-logo" />
        </nav>
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <div className="privacy-content">
            <div className="privacy-header">
              <h2>Privacy Policy – Rewire Rehab</h2>
              <p className="effective-date"><strong>Effective Date:</strong> Wednesday, September 10, 2025</p>
            </div>
            
            <p className="privacy-intro">
              Rewire Rehab ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Rewire Rehab mobile app and related services.
            </p>

            <div className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information when you use the app:</p>
              
              <h3>Account Information (optional):</h3>
              <p>Name, email address, and basic signup details.</p>
              
              <h3>Health & Rehab Data:</h3>
              <ul>
                <li>Symptom tracking logs (self-reported inputs).</li>
                <li>Scores and progress from cognitive exercises (e.g., memory game, colour game, focus timer, Red/Green/Blue).</li>
                <li>Streaks, charts, and history of exercise performance.</li>
              </ul>
              
              <h3>Task & Focus Data:</h3>
              <ul>
                <li>Tasks entered into your schedule or time-blocking planner.</li>
                <li>Focus timer logs (activities tracked, session durations).</li>
              </ul>
              
              <h3>Device & Usage Data:</h3>
              <p>App activity logs, crash reports, and anonymized analytics to help us improve performance.</p>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and personalize your Rewire Rehab experience.</li>
                <li>Track your symptoms, exercises, and progress over time.</li>
                <li>Display insights through charts, streak trackers, and dashboards.</li>
                <li>Help you plan and manage tasks, schedules, and focus sessions.</li>
                <li>Monitor app performance and ensure functionality.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Share Information</h2>
              <p>We do not sell or share your personal information. Your data is only used internally to power the features of the app.</p>
              <p>We may share aggregated or anonymized data (that does not identify you) for research or product improvement.</p>
            </div>

            <div className="privacy-section">
              <h2>4. Data Storage & Security</h2>
              <ul>
                <li>Your information is securely stored using Supabase.</li>
                <li>All communication between the app and Supabase servers is encrypted (HTTPS).</li>
                <li>Access to your data is limited to authorized systems only.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Your Rights</h2>
              <p>You may:</p>
              <ul>
                <li>Access and request a copy of your data.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Request deletion of your account and associated data.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Children's Privacy</h2>
              <p>Rewire Rehab is not intended for children under 13. If we discover that we have collected personal information from a child, we will delete it immediately.</p>
            </div>

            <div className="privacy-section">
              <h2>7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Updates will be posted in the app and on our website with a revised "Effective Date."</p>
            </div>

            <div className="privacy-section">
              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="contact-details">
                <p><strong>📧 sav.wilds@gmail.com</strong></p>
                <p><strong>🌐 www.rewireapp.ca</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
