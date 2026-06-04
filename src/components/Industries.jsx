"use client";
import React from 'react';
import { 
  HeartPulse, GraduationCap, Building2, Coins, 
  ShoppingBag, Truck, Rocket, Building 
} from 'lucide-react';

const INDUSTRIES_DATA = [
  {
    icon: <HeartPulse className="ind-icon" />,
    title: 'Healthcare',
    desc: 'Telemedicine networks, patient charts logging, and secure HIPAA compliance layers.'
  },
  {
    icon: <GraduationCap className="ind-icon" />,
    title: 'Education',
    desc: 'Interactive virtual portals, student rosters, and online testing dashboards.'
  },
  {
    icon: <Building2 className="ind-icon" />,
    title: 'Real Estate',
    desc: 'Property CRM boards, booking engines, and analytics reports.'
  },
  {
    icon: <Coins className="ind-icon" />,
    title: 'Finance',
    desc: 'Secure customer billing panels, ledger setups, and API keys validation.'
  },
  {
    icon: <ShoppingBag className="ind-icon" />,
    title: 'E-Commerce',
    desc: 'Fast checkout paths, Stripe split transfers, and database inventory alerts.'
  },
  {
    icon: <Truck className="ind-icon" />,
    title: 'Logistics',
    desc: 'Warehouse dispatch grids, routing databases, and shipping calculations.'
  },
  {
    icon: <Rocket className="ind-icon" />,
    title: 'Startups',
    desc: 'Rapid MVP scaling pipelines, server management setups, and API development.'
  },
  {
    icon: <Building className="ind-icon" />,
    title: 'Enterprises',
    desc: 'Custom multi-tenant platforms, ERP connections, and dedicated cloud servers.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="industries-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">OUR MARKETS</span>
          <h2 className="section-title uppercase">Industries We Serve</h2>
          <div className="header-bar"></div>
        </div>

        <div className="industries-grid">
          {INDUSTRIES_DATA.map((ind, idx) => (
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
