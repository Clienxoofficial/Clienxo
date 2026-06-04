"use client";
import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Check, Mail, Phone, MessageSquare, Sparkles, Send, ExternalLink } from 'lucide-react';
import { CONTACT, WA_BASE, TEL_LINK, MAIL_LINK } from '../constants/config';

export default function ContactModal({ isOpen, onClose, formData, setFormData }) {
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
      setFormSubmitted(false);
      setFormErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape' && isOpen) triggerClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => { setIsClosing(false); onClose(); }, 480);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', projectType: 'web', message: '' });
    setFormSubmitted(false);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      ref={overlayRef}
      className={`cm-overlay ${isClosing ? 'cm-overlay--out' : 'cm-overlay--in'}`}
      onClick={(e) => { if (e.target === overlayRef.current) triggerClose(); }}
    >
      {/* Floating particles */}
      <div className="cm-particles" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className={`cm-particle cm-particle--${i % 4}`}
            style={{ '--p-delay': `${(i * 0.4).toFixed(1)}s`, '--p-x': `${(i * 19 + 5) % 100}%` }}
          />
        ))}
      </div>

      {/* Ambient orbs */}
      <div className="cm-orb cm-orb--1" aria-hidden="true" />
      <div className="cm-orb cm-orb--2" aria-hidden="true" />

      {/* Modal panel */}
      <div
        className={`cm-panel ${isClosing ? 'cm-panel--out' : 'cm-panel--in'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Clienxo"
      >
        {/* ── Top bar ── */}
        <div className="cm-topbar">
          <div className="cm-topbar__brand">
            <div className="cm-topbar__icon"><Sparkles size={15} /></div>
            <span>CLIEN<span className="text-gradient">XO</span></span>
          </div>
          <button className="cm-close" onClick={triggerClose} aria-label="Close">
            <X size={19} />
          </button>
        </div>

        {/* ── Split body ── */}
        <div className="cm-body">

          {/* LEFT — contact info */}
          <div className="cm-left">
            <p className="cm-left__eyebrow">GET IN TOUCH</p>
            <h2 className="cm-left__title">
              Let&apos;s Build<br />
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="cm-left__sub">
              Reach out directly or fill the form. We respond within 24 hours.
            </p>

            {/* Contact options */}
            <div className="cm-contacts">
              <a href={MAIL_LINK} className="cm-contact-card">
                <div className="cm-contact-icon">
                  <Mail size={20} />
                </div>
                <div className="cm-contact-info">
                  <span className="cm-contact-label">Email Us</span>
                  <span className="cm-contact-value">{CONTACT.email}</span>
                </div>
                <ExternalLink size={14} className="cm-contact-arrow" />
              </a>

              <a href={TEL_LINK} className="cm-contact-card">
                <div className="cm-contact-icon">
                  <Phone size={20} />
                </div>
                <div className="cm-contact-info">
                  <span className="cm-contact-label">Call Us</span>
                  <span className="cm-contact-value">{CONTACT.phoneDisplay}</span>
                </div>
                <ExternalLink size={14} className="cm-contact-arrow" />
              </a>

              <a href={WA_BASE} target="_blank" rel="noreferrer" className="cm-contact-card">
                <div className="cm-contact-icon cm-contact-icon--green">
                  <MessageSquare size={20} />
                </div>
                <div className="cm-contact-info">
                  <span className="cm-contact-label">WhatsApp</span>
                  <span className="cm-contact-value">{CONTACT.phoneDisplay}</span>
                </div>
                <ExternalLink size={14} className="cm-contact-arrow" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="cm-badges">
              <span className="cm-badge"><Check size={11} /> Free consultation</span>
              <span className="cm-badge"><Check size={11} /> NDA on request</span>
              <span className="cm-badge"><Check size={11} /> 24h response</span>
            </div>
          </div>

          {/* RIGHT — send message form */}
          <div className="cm-right">
            <div className="cm-right__header">
              <Send size={16} />
              <span>Send a Message</span>
            </div>

            {formSubmitted ? (
              <div className="cm-success">
                <div className="cm-success__orb">
                  <Check size={34} />
                </div>
                <h3>Message Received!</h3>
                <p>We&apos;ll get back to you within <strong>1 business day</strong>. Check your inbox!</p>
                <button className="cm-reset-btn" onClick={resetForm}>
                  Send Another <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form className="cm-form" onSubmit={handleFormSubmit} noValidate>
                <div className="cm-form-row">
                  <div className="cm-field">
                    <label htmlFor="cmf-name">Full Name *</label>
                    <input
                      id="cmf-name" type="text"
                      placeholder="John Doe"
                      className={formErrors.name ? 'cm-field__input--err' : ''}
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                    {formErrors.name && <span className="cm-err">{formErrors.name}</span>}
                  </div>
                  <div className="cm-field">
                    <label htmlFor="cmf-company">Company <span className="cm-optional">(optional)</span></label>
                    <input
                      id="cmf-company" type="text"
                      placeholder="Your Company"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="cm-form-row">
                  <div className="cm-field">
                    <label htmlFor="cmf-email">Email Address *</label>
                    <input
                      id="cmf-email" type="email"
                      placeholder="you@company.com"
                      className={formErrors.email ? 'cm-field__input--err' : ''}
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                    {formErrors.email && <span className="cm-err">{formErrors.email}</span>}
                  </div>
                  <div className="cm-field">
                    <label htmlFor="cmf-service">Service Interest</label>
                    <select
                      id="cmf-service"
                      value={formData.projectType}
                      onChange={(e) => setFormData(p => ({ ...p, projectType: e.target.value }))}
                    >
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="saas">SaaS Portal</option>
                      <option value="ai">AI Integration</option>
                      <option value="security">Security Audit</option>
                    </select>
                  </div>
                </div>

                <div className="cm-field">
                  <label htmlFor="cmf-msg">Your Message *</label>
                  <textarea
                    id="cmf-msg" rows="5"
                    placeholder="Describe your project, goals, timeline..."
                    className={formErrors.message ? 'cm-field__input--err' : ''}
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  />
                  {formErrors.message && <span className="cm-err">{formErrors.message}</span>}
                </div>

                <button type="submit" className="cm-submit">
                  <span>Send Message</span>
                  <div className="cm-submit__icon"><ArrowRight size={16} /></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
