"use client";
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Contact({ formData, setFormData }) {
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message details are required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'web',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="contact-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">GET IN TOUCH</span>
          <h2 className="section-title uppercase">Your Vision, Our Mission: Let&apos;s Shape Success Together</h2>
          <div className="header-bar"></div>
        </div>

        <div className="contact-form-full">
          <div className="contact-form-container-card">
            {formSubmitted ? (
              <div className="form-success-card">
                <Check className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting Clienxo. One of our lead engineers will review your requirement and reach out within 1 business day.</p>
                <button className="btn-secondary-outline mt-4" onClick={resetForm}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate>
                <div className="form-group-custom">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    className={formErrors.name ? 'input-error' : ''}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                  {formErrors.name && <span className="error-message-text">{formErrors.name}</span>}
                </div>

                <div className="form-group-custom mt-4">
                  <label htmlFor="form-phone">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="form-phone"
                    placeholder="Your Company LLC"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <div className="form-group-custom mt-4">
                  <label htmlFor="form-email">Email Address *</label>
                  <input
                    type="email"
                    id="form-email"
                    className={formErrors.email ? 'input-error' : ''}
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                  {formErrors.email && <span className="error-message-text">{formErrors.email}</span>}
                </div>

                <div className="form-group-custom mt-4">
                  <label htmlFor="form-type">Service Interest</label>
                  <select
                    id="form-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  >
                    <option value="web">Web Application Dev</option>
                    <option value="mobile">Mobile Application Dev</option>
                    <option value="saas">SaaS Portal Architecture</option>
                    <option value="ai">Artificial Intelligence Integration</option>
                    <option value="security">Infrastructure Audit</option>
                  </select>
                </div>

                <div className="form-group-custom mt-4">
                  <label htmlFor="form-message">Describe Your Requirement *</label>
                  <textarea
                    id="form-message"
                    rows="5"
                    className={formErrors.message ? 'input-error' : ''}
                    placeholder="Please details your project goals, database needs, timeline targets, etc..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  ></textarea>
                  {formErrors.message && <span className="error-message-text">{formErrors.message}</span>}
                </div>

                <button type="submit" className="form-submit-btn-white mt-6">
                  Submit <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

