"use client";
import { useState } from 'react';
import { Sparkles, Briefcase, Users, Zap } from 'lucide-react';
import LegalModal from './LegalModal';
import { CONTACT, WA_BASE, TEL_LINK, MAIL_LINK } from '../constants/config';

export default function Footer({ handleScrollTo, openContact }) {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand-col">
            <div className="navbar-logo">
              <Sparkles className="logo-spark" />
              <span className="logo-text" data-text="CLIENXO">CLIEN<span className="text-gradient">XO</span></span>
            </div>
            <p className="mt-4">We build next-generation web platforms, AI applications, and custom digital systems for scale-ups and modern startups.</p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Briefcase size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Users size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Zap size={18} /></a>
            </div>
          </div>

          <div className="footer-links-columns">
            <div className="footer-col">
              <h4>About Us</h4>
              <button onClick={() => handleScrollTo('about')}>Our Story</button>
              <button onClick={() => handleScrollTo('testimonials')}>Client Reviews</button>
              <a href="#careers">Careers</a>
              <a href="#blog">Press Kit</a>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <button onClick={() => handleScrollTo('services')}>Core Capabilities</button>
              <button onClick={() => handleScrollTo('estimator')}>Interactive Pricing</button>
              <a href="#sla">Uptime SLA</a>
              <a href="#consulting">IT Auditing</a>
            </div>

            <div className="footer-col">
              <h4>Solutions</h4>
              <button onClick={() => handleScrollTo('services')}>Core Services</button>
              <a href="#saas">Enterprise SaaS</a>
              <a href="#custom">Custom Databases</a>
              <a href="#cloud">Cloud Migrations</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#docs">API Reference</a>
              <a href="#help">Help Center</a>
              <a href="#status">System Status</a>
              <a href="#security">Trust Report</a>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <a href={TEL_LINK} className="support-phone">{CONTACT.phoneDisplay}</a>
              <a href={MAIL_LINK} className="support-email">{CONTACT.email}</a>
              <a href={WA_BASE} target="_blank" rel="noreferrer" className="support-wa-link">
                Chat on WhatsApp
              </a>
              <p className="support-sla">Direct developer support via WhatsApp, Email & Slack</p>
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
