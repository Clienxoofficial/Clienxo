"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: 'How do you price software development projects?',
    answer: 'We offer flexible engagement models including fixed-price contracts for well-defined MVPs and monthly/hourly dedicated engineering sprints for agile SaaS development. Use our Interactive Estimator above to get a customized budget projection.'
  },
  {
    question: 'What is the typical development timeline?',
    answer: 'A standard MVP (Minimum Viable Product) or custom SaaS portal is delivered within 4 to 8 weeks. Larger enterprise ERP platforms or deep AI model integrations can scale from 3 to 6 months depending on requirements complexity.'
  },
  {
    question: 'What long-term support and maintenance options do you provide?',
    answer: 'We provide comprehensive post-launch SLA support including 24/7 server monitoring, database backup checks, Linux server updates, code corrections, and monthly performance audits.'
  },
  {
    question: 'Do you design custom SaaS platforms with subscription billing?',
    answer: 'Yes! We build multi-tenant SaaS platforms with secure subscription billing integrations (Stripe, PayPal, Lemonsqueezy), user permissions levels, admin panels, and scalable server pipelines.'
  },
  {
    question: 'Can you integrate AI chatbots and agents into existing products?',
    answer: 'Absolutely. We specialize in building LLM-powered custom chatbots and automated workflows that sync with your database, answer customer tickets, and perform specific background actions.'
  },
  {
    question: 'Do you manage server setups, VPS, and cloud deployments?',
    answer: 'Yes. We manage infrastructure deployments using AWS, Docker, Kubernetes, and secure VPS. We write Terraform templates for Infrastructure as Code (IaC) and set up automatic CI/CD deployment pipelines.'
  },
  {
    question: 'Do you provide technical SEO and website speed optimization?',
    answer: 'Yes! We conduct technical SEO audits, page speed corrections (Next.js server-side optimizations, image compression, CDN assets setups), and semantic markup structuring to guarantee top organic search ranks.'
  }
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">RESOURCES</span>
          <h2 className="section-title uppercase">Frequently Asked Questions</h2>
          <div className="header-bar"></div>
        </div>

        <div className="faq-accordion-wrapper">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-accordion-item glass-card ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggleIndex(idx)}
              >
                <div className="faq-accordion-header">
                  <div className="faq-question-box">
                    <HelpCircle size={18} className="faq-question-icon" />
                    <h3>{item.question}</h3>
                  </div>
                  <button className="faq-toggle-btn" aria-label="Toggle answer">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                <div className="faq-accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
