"use client";
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Mail, Phone, MessageSquare, ArrowRight, Check, ExternalLink, Sparkles, Send } from 'lucide-react';
import { CONTACT, WA_BASE, TEL_LINK, MAIL_LINK } from '../constants/config';
import ClienxoLogo from './ClienxoLogo';

export default function ContactPage({ isOpen, onClose, formData, setFormData }) {
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay so the enter animation fires after mount
      requestAnimationFrame(() => setMounted(true));
      setFormSubmitted(false);
      setFormErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      setMounted(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      setMounted(false);
      onClose();
    }, 520);
  }, [onClose]);

  // Escape to go back
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, handleClose]);

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

    // Build WhatsApp message
    const serviceMap = {
      web: 'Web Application',
      mobile: 'Mobile App',
      saas: 'SaaS Portal',
      ai: 'AI Integration',
      security: 'Security Audit',
    };
    const service = serviceMap[formData.projectType] || formData.projectType;
    const company = formData.phone.trim() ? `\n🏢 Company   : ${formData.phone.trim()}` : '';
    const text = [
      `👋 *New Enquiry — Clienxo*`,
      ``,
      `👤 Name      : ${formData.name.trim()}`,
      `📧 Email     : ${formData.email.trim()}${company}`,
      `🛠 Service   : ${service}`,
      ``,
      `📝 Message:`,
      formData.message.trim(),
    ].join('\n');

    // Open WhatsApp
    window.open(`${WA_BASE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', projectType: 'web', message: '' });
    setFormSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div className={`cp-root ${mounted && !isLeaving ? 'cp-root--in' : 'cp-root--out'}`}>
      <div className="cp-scanline" aria-hidden="true" />

      {/* Ambient background effects */}
      <div className="cp-bg-grid" aria-hidden="true" />
      <div className="cp-bg-orb cp-bg-orb--1" aria-hidden="true" />
      <div className="cp-bg-orb cp-bg-orb--2" aria-hidden="true" />
      <div className="cp-bg-orb cp-bg-orb--3" aria-hidden="true" />

      {/* Floating particles */}
      <div className="cp-particles" aria-hidden="true">
        {[...Array(22)].map((_, i) => (
          <span
            key={i}
            className={`cp-particle cp-particle--${i % 5}`}
            style={{ '--p-delay': `${(i * 0.35).toFixed(1)}s`, '--p-x': `${(i * 17 + 7) % 100}%` }}
          />
        ))}
      </div>

      {/* Top navigation bar */}
      <header className={`cp-header ${mounted && !isLeaving ? 'cp-header--in' : ''}`}>
        <button className="cp-back-btn" onClick={handleClose} aria-label="Go back">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <div className="cp-header__brand">
          <ClienxoLogo onClick={() => handleScrollTo('home')}/>
        </div>
        <div className="cp-header__spacer" />
      </header>

      {/* Page content */}
      <main className={`cp-main ${mounted && !isLeaving ? 'cp-main--in' : ''}`}>

        {/* ── Hero heading ── */}
        <div className="cp-hero">
          <p className="cp-hero__eyebrow">GET IN TOUCH</p>
          <h1 className="cp-hero__title">
            Let&apos;s Build <span className="text-gradient">Something Great</span>
          </h1>
          <p className="cp-hero__sub">
            Reach out directly or fill the form — we respond within 24 hours.
          </p>
        </div>

        {/* ── Content grid ── */}
        <div className="cp-grid">

          {/* LEFT: Direct contact options */}
          <div className="cp-contacts-col">
            <p className="cp-col-label"><Mail size={13} /> Direct Contact</p>

            <div className="cp-contact-cards">
              <a href={MAIL_LINK} className="cp-contact-card">
                <div className="cp-contact-card__icon">
                  <Mail size={18} />
                </div>
                <div className="cp-contact-card__body">
                  <span className="cp-contact-card__tag">Email Us</span>
                  <span className="cp-contact-card__val">{CONTACT.email}</span>
                  <span className="cp-contact-card__desc">Official support & business queries</span>
                </div>
                <ExternalLink size={14} className="cp-contact-card__ext" />
              </a>

              <a href={TEL_LINK} className="cp-contact-card">
                <div className="cp-contact-card__icon">
                  <Phone size={18} />
                </div>
                <div className="cp-contact-card__body">
                  <span className="cp-contact-card__tag">Call Us</span>
                  <span className="cp-contact-card__val">{CONTACT.phoneDisplay}</span>
                  <span className="cp-contact-card__desc">Direct engineer consulting line</span>
                </div>
                <ExternalLink size={14} className="cp-contact-card__ext" />
              </a>

              <a
                href={WA_BASE}
                target="_blank"
                rel="noreferrer"
                className="cp-contact-card cp-contact-card--wa"
              >
                <div className="cp-contact-card__icon cp-contact-card__icon--green">
                  <MessageSquare size={18} />
                </div>
                <div className="cp-contact-card__body">
                  <span className="cp-contact-card__tag">WhatsApp</span>
                  <span className="cp-contact-card__val">{CONTACT.phoneDisplay}</span>
                  <span className="cp-contact-card__desc">Instant chat & project kick-offs</span>
                </div>
                <ExternalLink size={14} className="cp-contact-card__ext" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="cp-trust">
              <div className="cp-trust__item"><Check size={12} /> Free 30-min consultation</div>
              <div className="cp-trust__item"><Check size={12} /> Signed NDA on request</div>
              <div className="cp-trust__item"><Check size={12} /> 24h guaranteed response</div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="cp-divider" aria-hidden="true">
            <div className="cp-divider__line" />
            <span className="cp-divider__text">OR</span>
            <div className="cp-divider__line" />
          </div>

          {/* RIGHT: Send message form */}
          <div className="cp-form-col">
            <p className="cp-col-label"><Send size={13} /> Send a Message</p>

            {formSubmitted ? (
              <div className="cp-success">
                <div className="cp-success__orb">
                  <Check size={36} />
                </div>
                <h3>Message Received!</h3>
                <p>Your message is on its way to us on <strong>WhatsApp</strong>.<br />We&apos;ll reply within <strong>24 hours</strong>. 🚀</p>
                <button className="cp-reset-btn" onClick={resetForm}>
                  Send Another <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleFormSubmit} noValidate>
                <div className="cp-form-row">
                  <div className="cp-field">
                    <label htmlFor="cpf-name">Full Name *</label>
                    <input
                      id="cpf-name" type="text" placeholder="John Doe"
                      className={formErrors.name ? 'cp-field--err' : ''}
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                    {formErrors.name && <span className="cp-err">{formErrors.name}</span>}
                  </div>
                  <div className="cp-field">
                    <label htmlFor="cpf-company">Company <em>(optional)</em></label>
                    <input
                      id="cpf-company" type="text" placeholder="Your Company"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-field">
                    <label htmlFor="cpf-email">Email Address *</label>
                    <input
                      id="cpf-email" type="email" placeholder="you@company.com"
                      className={formErrors.email ? 'cp-field--err' : ''}
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    />
                    {formErrors.email && <span className="cp-err">{formErrors.email}</span>}
                  </div>
                  <div className="cp-field">
                    <label htmlFor="cpf-service">Service Interest</label>
                    <select
                      id="cpf-service"
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

                <div className="cp-field">
                  <label htmlFor="cpf-msg">Your Message *</label>
                  <textarea
                    id="cpf-msg" rows="3"
                    placeholder="Describe your project, goals, timeline..."
                    className={formErrors.message ? 'cp-field--err' : ''}
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  />
                  {formErrors.message && <span className="cp-err">{formErrors.message}</span>}
                </div>

                <button type="submit" className="cp-submit cp-submit--wa">
                  <span>Send via WhatsApp</span>
                  <div className="cp-submit__icon"><MessageSquare size={14} /></div>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
