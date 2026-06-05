"use client";
import React from 'react';
import { 
  Rocket, Layers, User, Building2, Briefcase, 
  ShoppingCart, HeartHandshake 
} from 'lucide-react';

const IDEAL_FOR_DATA = [
  {
    icon: <Rocket className="ind-icon" />,
    title: 'Early-Stage Startups',
    desc: 'Launch your product in record time with custom landing pages, responsive designs, and robust MVP architectures.'
  },
  {
    icon: <Layers className="ind-icon" />,
    title: 'SaaS Companies',
    desc: 'Scale your SaaS offering with custom dashboards, Stripe subscription billing, and robust multi-tenant architectures.'
  },
  {
    icon: <User className="ind-icon" />,
    title: 'Personal Brands',
    desc: 'Showcase your portfolio and build a strong online presence with clean, aesthetic, and high-converting websites.'
  },
  {
    icon: <Building2 className="ind-icon" />,
    title: 'Small Businesses',
    desc: 'Automate customer leads, booking calendar engines, and email responses to grow without expanding headcount.'
  },
  {
    icon: <Briefcase className="ind-icon" />,
    title: 'Agencies',
    desc: 'Partner with us to design and build custom client management systems, workflows, and dashboard reports.'
  },
  {
    icon: <ShoppingCart className="ind-icon" />,
    title: 'E-commerce Startups',
    desc: 'Develop custom shopping carts, storefront checkouts, and clean databases optimized for high traffic.'
  },
  {
    icon: <HeartHandshake className="ind-icon" />,
    title: 'Service-Based Businesses',
    desc: 'Streamline scheduling, customer portals, and reporting with customized booking applications.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="industries-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">TARGET AUDIENCE</span>
          <h2 className="section-title uppercase">Ideal For Modern Businesses</h2>
          <div className="header-bar"></div>
        </div>

        <div className="industries-grid">
          {IDEAL_FOR_DATA.map((ind, idx) => (
            <div key={idx} className="industries-card glass-card">
              <div className="industries-glow-overlay"></div>
              <div className="industries-icon-box">
                {ind.icon}
              </div>
              <h3 className="industries-card-title">{ind.title}</h3>
              <p className="industries-card-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
