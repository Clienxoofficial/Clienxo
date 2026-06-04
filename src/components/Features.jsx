"use client";
import { Sparkles, Shield, Zap, Briefcase } from 'lucide-react';

export default function Features() {
  return (
    <section className="features-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">FEATURES</span>
          <h2 className="section-title uppercase">Excellence Redefined: Unleashing Tailored Solutions for Your Success Journey</h2>
          <div className="header-bar"></div>
        </div>

        <div className="features-grid-four">
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Sparkles size={20} /></div>
            <h4>Deliver On Time</h4>
            <p>Timely delivery is where high-performance engineering meets precise agile execution.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Shield size={20} /></div>
            <h4>Security</h4>
            <p>Every database, API gateway, and cloud infrastructure endpoint is secured with military-grade encryption.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Zap size={20} /></div>
            <h4>Flexibility</h4>
            <p>Easily scale your server compute power, database configurations, and UI design modules on the go.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Briefcase size={20} /></div>
            <h4>Driving</h4>
            <p>Leading technology stacks engineered specifically to drive business growth and user engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
