"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';
import { 
  HeartPulse, GraduationCap, Building2, Coins, 
  ShoppingBag, Truck, Rocket, Building, 
  Sparkles, ArrowRight, CheckCircle 
} from 'lucide-react';

const DETAILED_INDUSTRIES = [
  {
    icon: <HeartPulse className="ind-detail-icon" />,
    title: 'Healthcare & Biotech',
    desc: 'Custom software compliant with HIPAA guidelines. We configure secure telemetry channels, patient databases, and consulting scheduling boards.',
    points: ['HIPAA compliant databases logs', 'Encrypted telemedicine video streams', 'Wearable telemetry integration', 'Direct patient messaging modules']
  },
  {
    icon: <Coins className="ind-detail-icon text-indigo" />,
    title: 'Finance & Banking',
    desc: 'High-security financial ledgers, transactional systems, and payment gateway APIs with double-ledger check mechanisms.',
    points: ['PCI-DSS security standards', 'Double-entry ledger databases', 'Stripe split payments API', 'Real-time billing dashboards']
  },
  {
    icon: <ShoppingBag className="ind-detail-icon" />,
    title: 'Retail & E-Commerce',
    desc: 'Multi-vendor marketplace setups, subscription platforms, custom shopping carts, and rapid inventory search panels.',
    points: ['Fast client product loading', 'Dynamic cart management', 'Automated logistics notifications', 'Redis-backed inventory caches']
  },
  {
    icon: <Truck className="ind-detail-icon" />,
    title: 'Logistics & Supply Chain',
    desc: 'Real-time fleet trackers, inventory check grids, automated warehouse dispatch requests, and shipping pricing widgets.',
    points: ['Real-time dispatch board trackers', 'Low-stock warnings setups', 'Automatic package shipping logs', 'Multi-department access']
  },
  {
    icon: <Rocket className="ind-detail-icon" />,
    title: 'Startups & Scaleups',
    desc: 'Rapid design of functional MVPs (Minimum Viable Products) with clean backend infrastructure ready for user scaling.',
    points: ['Rapid 4-week MVP development', 'Docker server packages', 'Scalable Node/FastAPI setups', 'AWS infrastructure integrations']
  },
  {
    icon: <Building className="ind-detail-icon" />,
    title: 'Enterprise Businesses',
    desc: 'Integrate core departments, configure custom multi-tenant database clusters, and secure server environments.',
    points: ['Custom multi-tenant platforms', 'SOC2 audit preparedness', 'SSO/SAML client logins', 'Database clusters configuration']
  }
];

export default function IndustriesPage() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web',
    message: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme') || 'dark';
      setTheme(localTheme);
      document.documentElement.setAttribute('data-theme', localTheme);

      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handleScrollTo = (id) => {
    window.location.href = `/#${id}`;
  };

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <div className="tech-grid"></div>
      <Header
        scrolled={scrolled}
        activeSection=""
        handleScrollTo={handleScrollTo}
        theme={theme}
        handleToggleTheme={handleToggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openContact={openContact}
      />

      <main className="subpage-wrapper">
        <section className="subpage-hero-section">
          <div className="section-container">
            <span className="subpage-badge"><Sparkles size={12} /> Industries We Serve</span>
            <h1 className="subpage-title text-gradient">Industry-Specific Solutions</h1>
            <p className="subpage-subtitle">We deploy customized software platforms, secure database clusters, and automation tools across target commercial industries.</p>
          </div>
        </section>

        <section className="industries-detail-list-section">
          <div className="section-container">
            <div className="industries-detailed-grid">
              {DETAILED_INDUSTRIES.map((ind, idx) => (
                <div key={idx} className="industry-detail-card glass-card">
                  <div className="ind-detail-header">
                    <div className="ind-detail-icon-box">
                      {ind.icon}
                    </div>
                    <h3>{ind.title}</h3>
                  </div>
                  <p className="ind-detail-desc">{ind.desc}</p>
                  
                  <div className="ind-detail-points-box">
                    <ul className="ind-detail-points-list">
                      {ind.points.map((p, pIdx) => (
                        <li key={pIdx}>
                          <CheckCircle size={14} className="ind-check" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="subpage-cta-section">
          <div className="section-container text-center">
            <h2 className="text-gradient">Ready to Scale Your Industry Solution?</h2>
            <p>Establish a product consultation call with our senior software engineers to scope your project.</p>
            <button className="cta-quote-btn outline-cta mx-auto mt-6" onClick={openContact}>
              Consult Engineer <ArrowRight size={15} />
            </button>
          </div>
        </section>
      </main>

      <Footer handleScrollTo={handleScrollTo} openContact={openContact} />

      <ContactPage
        isOpen={isContactOpen}
        onClose={closeContact}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
