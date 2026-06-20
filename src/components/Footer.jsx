"use client";
import { useState } from 'react';
import { Briefcase, Users, Zap } from 'lucide-react';
import LegalModal from './LegalModal';
import { CONTACT, WA_BASE, TEL_LINK, MAIL_LINK } from '../constants/config';

export default function Footer({ handleScrollTo, openContact }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand-col">
            <p className="mt-4">We build next-generation web platforms, AI applications, and custom digital systems for scale-ups and modern startups.</p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Briefcase size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Users size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Zap size={18} /></a>
            </div>
          </div>

          <div className="footer-links-columns">
            <div className="footer-col">
              <h4>Navigation</h4>
              <button onClick={() => handleScrollTo('home')}>Home</button>
              <button onClick={() => handleScrollTo('services')}>Services</button>
              <button onClick={() => handleScrollTo('about')}>About Us</button>
              <button onClick={() => openContact()}>Contact</button>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <a href={TEL_LINK} className="support-phone">{CONTACT.phoneDisplay}</a>
              <a href={MAIL_LINK} className="support-email">{CONTACT.email}</a>
              <a href={WA_BASE} target="_blank" rel="noreferrer" className="support-wa-link">
                Chat on WhatsApp
              </a>
              <p className="support-sla">Direct support via WhatsApp & Email</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-container-flex">
            <p>© {new Date().getFullYear()} Clienxo. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <button
                className="footer-legal-btn"
                onClick={() => setLegalModal('privacy')}
              >
                Privacy Policy
              </button>
              <button
                className="footer-legal-btn"
                onClick={() => setLegalModal('terms')}
              >
                Terms of Service
              </button>
              <button className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {legalModal && (
        <LegalModal
          type={legalModal}
          onClose={() => setLegalModal(null)}
        />
      )}
    </>
  );
}
