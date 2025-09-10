import React from 'react';
import './App.css';

function RewireIdPrivacy() {
  return (
    <div className="App">
      <section className="hero-section">
        <nav className="navbar">
          <img src={process.env.PUBLIC_URL + '/rewire-logo.png'} alt="Rewire Logo" className="rewire-navbar-logo large-logo" />
        </nav>
        <div className="privacy-container">
          <h1 className="privacy-title">Rewire ID Privacy Policy</h1>
          <div className="privacy-content">
            <div className="privacy-header">
              <h2>Rewire ID Privacy Policy</h2>
              <p className="effective-date"><strong>Effective Date:</strong> Wednesday, September 10, 2025</p>
            </div>
            
            <p className="privacy-intro">
              Rewire ID ("we," "our," or "us") values the privacy of patients and practitioners. This Privacy Policy explains how we collect, use, and protect information when practitioners use Rewire ID to write, store, and share reports with patients.
            </p>

            <div className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>We may collect the following information through the Rewire ID platform:</p>
              
              <h3>From Practitioners</h3>
              <ul>
                <li>Account details (name, email, professional registration number).</li>
                <li>Reports, notes, and assessments created for patients.</li>
              </ul>
              
              <h3>From Patients</h3>
              <ul>
                <li>Account details (name, email, health card or unique identifier, depending on region).</li>
                <li>Reports shared by practitioners, which may include health information, treatment notes, and recommendations.</li>
              </ul>
              
              <h3>Automatically Collected</h3>
              <ul>
                <li>Device and usage information (log data, crash reports, and activity in the app).</li>
                <li>Metadata about reports (e.g., creation date, edits, who shared them).</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Allow practitioners to create, edit, and securely store patient reports.</li>
                <li>Share reports between practitioners and patients as authorized.</li>
                <li>Provide patients with access to their reports and care history.</li>
                <li>Ensure compliance with healthcare privacy regulations.</li>
                <li>Monitor app performance and maintain security.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Share Information</h2>
              <p>We do not sell personal or health information. Reports and patient data are only shared in the following ways:</p>
              <ul>
                <li><strong>With Patients:</strong> Practitioners control when and how reports are shared with patients.</li>
                <li><strong>With Practitioners:</strong> If multiple practitioners are involved in a patient's care, reports may be shared where authorized.</li>
                <li><strong>With Service Providers:</strong> For hosting, secure storage, and technical support (e.g., Supabase/Firebase).</li>
                <li><strong>For Legal Reasons:</strong> If required to comply with applicable laws, regulations, or legal processes.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Data Storage & Security</h2>
              <ul>
                <li>Reports and user data are stored securely using Supabase, with encryption in transit (HTTPS/TLS) and at rest (AES-256).</li>
                <li>Access to patient information is restricted to authenticated practitioners and patients.</li>
                <li>We use role-based access controls to ensure only authorized users can view or edit data.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Your Rights</h2>
              
              <h3>Patients may:</h3>
              <ul>
                <li>Access and download copies of their reports.</li>
                <li>Request corrections to inaccurate personal information.</li>
                <li>Request deletion of their account and associated data (excluding medical/legal retention requirements).</li>
              </ul>
              
              <h3>Practitioners may:</h3>
              <ul>
                <li>Access and manage their own account details.</li>
                <li>Delete or update reports they have authored.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Retention of Data</h2>
              <ul>
                <li>Reports are retained for as long as required by healthcare laws or until deleted by the practitioner in compliance with local regulations.</li>
                <li>If a patient requests deletion, we will anonymize or remove data unless retention is legally required.</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Children's Privacy</h2>
              <p>Rewire ID is intended for use by licensed practitioners and their patients. Patients under 18 may only use the platform with parental or guardian consent, as required by law.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy as our platform evolves. Updates will be posted with a revised "Effective Date."</p>
            </div>

            <div className="privacy-section">
              <h2>9. Contact Us</h2>
              <p>If you have any questions or privacy concerns, please contact us:</p>
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

export default RewireIdPrivacy;
