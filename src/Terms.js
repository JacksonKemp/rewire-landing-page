import React from 'react';
import './App.css';

function Terms() {
  return (
    <div className="App">
      <section className="hero-section">
        <nav className="navbar">
          <img src={process.env.PUBLIC_URL + '/rewire-logo.png'} alt="Rewire Logo" className="rewire-navbar-logo large-logo" />
        </nav>
        <div className="privacy-container">
          <h1 className="privacy-title">Terms of Use</h1>
          <div className="privacy-content">
            <div className="privacy-header">
              <h2>Terms of Use (EULA) — Rewire Rehab</h2>
              <p className="effective-date"><strong>Effective Date:</strong> September 25, 2025</p>
            </div>
            
            <div className="privacy-intro">
              <p><strong>App:</strong> Rewire Rehab (the "App")</p>
              <p><strong>Company:</strong> EXSTNTL Inc., 475 George Street N, Peterborough, Ontario, Canada, K9H 3R6 ("we," "us," or "our")</p>
              <p><strong>Contact:</strong> sav.wilds@gmail.com</p>
              <p>By downloading, accessing, or using the App, you agree to these Terms of Use ("Terms"). If you do not agree, do not use the App.</p>
            </div>

            <div className="privacy-section">
              <h2>1) License & Ownership</h2>
              <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes on Apple-branded devices you own or control, as permitted by the App Store Terms. All content and software are owned by us or our licensors and protected by law. All rights not expressly granted are reserved.</p>
            </div>

            <div className="privacy-section">
              <h2>2) Eligibility & Account</h2>
              <p>You must be at least 13 (or the age of digital consent in your region). You are responsible for your account credentials and for all activity under your account.</p>
            </div>

            <div className="privacy-section">
              <h2>3) Health & Safety Notice</h2>
              <p>The App provides tools such as cognitive exercises, symptom tracking, analytics, and related content. The App is not medical or mental-health advice, diagnosis, or treatment, and does not replace professional care. Always seek the advice of a qualified health professional with questions regarding a condition. Use the App at your own risk.</p>
            </div>

            <div className="privacy-section">
              <h2>4) Subscriptions & In-App Purchases</h2>
              <p>The App offers auto-renewable subscriptions through Apple's in-app purchase system.</p>
              
              <h3>Titles:</h3>
              <p>Rewire Rehab Monthly and Rewire Rehab Yearly (may appear as "Monthly" and "Yearly" on the paywall).</p>
              
              <h3>Length & Access:</h3>
              <ul>
                <li><strong>Monthly:</strong> 1 month of access to premium features listed on the paywall.</li>
                <li><strong>Yearly:</strong> 12 months of access to the same premium features.</li>
              </ul>
              
              <h3>Price:</h3>
              <p>Pricing is displayed in-app and varies by region and local currency. Where applicable, we may display per-unit pricing (e.g., monthly equivalent for annual subscriptions).</p>
              
              <h3>Billing & Renewal:</h3>
              <p>Your Apple ID is charged at purchase confirmation. Subscriptions renew automatically unless canceled at least 24 hours before the current period ends. Your account is charged for renewal within 24 hours before the end of the period. Manage or cancel in Settings → Apple ID → Subscriptions after purchase. Deleting the App does not cancel your subscription.</p>
              
              <h3>Trials/Promotions:</h3>
              <p>If offered, free trials convert to paid subscriptions at the current pricing unless canceled at least 24 hours before the trial ends.</p>
              
              <h3>Price Changes:</h3>
              <p>If prices change, Apple may notify you. Continuing the subscription or renewing after notice constitutes acceptance; otherwise cancel before renewal.</p>
              
              <h3>Refunds:</h3>
              <p>Billing is processed by Apple. Refund requests are handled by Apple under their policies (see reportaproblem.apple.com).</p>
              
              <h3>Entitlements:</h3>
              <p>Premium features are available only with an active, paid subscription. If billing fails or a subscription lapses, premium access may be disabled.</p>
              
              <h3>Subscriptions & Billing:</h3>
              <p>Subscriptions are billed through the Apple App Store. You can manage, upgrade, or cancel your subscription in your Apple account settings. Deleting your Rewire account or uninstalling the app does not cancel your Apple subscription. To stop future charges, cancel the subscription in Settings → Apple ID → Subscriptions (or via the in-app "Manage Subscription" link). Refunds, proration, and billing disputes are handled by Apple under its policies.</p>
            </div>

            <div className="privacy-section">
              <h2>5) Acceptable Use</h2>
              <p>You agree not to: copy, modify, reverse engineer, or create derivative works; use the App to violate laws or rights; upload harmful code; circumvent security; or use the App to provide competing services.</p>
            </div>

            <div className="privacy-section">
              <h2>6) Privacy</h2>
              <p>Your use is subject to our Privacy Policy (link below). By using the App, you consent to our data practices as described there.</p>
            </div>

            <div className="privacy-section">
              <h2>7) Third-Party Services</h2>
              <p>The App may integrate third-party services (e.g., Apple, analytics, authentication, purchases). We are not responsible for third-party content or practices. Your use of third-party services is subject to their terms and policies.</p>
            </div>

            <div className="privacy-section">
              <h2>8) Disclaimers</h2>
              <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.</p>
            </div>

            <div className="privacy-section">
              <h2>9) Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE SUBSCRIPTION PERIOD IN WHICH THE CLAIM AROSE (OR, IF NONE, $50 USD EQUIVALENT IN YOUR LOCAL CURRENCY).</p>
            </div>

            <div className="privacy-section">
              <h2>10) Termination</h2>
              <p>We may suspend or terminate your access for violation of these Terms or for other lawful reasons. Sections that by nature should survive (e.g., ownership, disclaimers, liability limits) will survive termination.</p>
              
              <h3>Termination / Account Deletion:</h3>
              <p>You may delete your Rewire account at any time from within the app. Account deletion is permanent and removes your personal data from our systems in accordance with our Privacy Policy. Account deletion does not affect any active App Store subscription; you must cancel it separately with Apple.</p>
            </div>

            <div className="privacy-section">
              <h2>11) Changes</h2>
              <p>We may update these Terms. We'll post the updated version and revise the effective date. Material changes may be communicated in-app. Continued use after changes means you accept the updated Terms.</p>
            </div>

            <div className="privacy-section">
              <h2>12) Export & Sanctions</h2>
              <p>You agree to comply with applicable export control and sanctions laws and not use the App in prohibited jurisdictions.</p>
            </div>

            <div className="privacy-section">
              <h2>13) Governing Law & Venue</h2>
              <p>These Terms are governed by the laws of Ontario, Canada, excluding conflict-of-law rules. Courts located in Toronto, Ontario will have exclusive jurisdiction (unless local consumer law provides otherwise).</p>
            </div>

            <div className="privacy-section">
              <h2>14) Contact</h2>
              <p>Questions? sav.wilds@gmail.com — EXSTNTL Inc., 475 George Street N, Peterborough, Ontario, Canada, K9H 3R6.</p>
              
              <h3>Links</h3>
              <div className="contact-details">
                <p><strong>• Privacy Policy:</strong> https://rewirerehab.com/privacy</p>
                <p><strong>• Terms of Use:</strong> https://rewirerehab.com/terms</p>
                <p><strong>• (Alternative) Apple Standard EULA:</strong> https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
