"use client";
import { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SERVICES, PROCESS_STEPS } from '../constants/data';

export default function Services({ handleScrollTo, setSelectedService, openContact }) {
  const [activeAccordion, setActiveAccordion] = useState(null); // All closed by default — opens on click

  return (
    <section id="services" className="services-section-list fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">OUR SERVICES</span>
          <h2 className="section-title uppercase">Your Aspiration, Our Expertise, Tailored Services for Unmatched Excellence</h2>
          <div className="header-bar"></div>
        </div>

        <div className="services-accordion-list">
          {/* Accordion Row 1 */}
          <div className={`accordion-row ${activeAccordion === 1 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 1 ? 0 : 1)}>
              <span className="accordion-num">01</span>
              <span className="accordion-title">ENTERPRISE SOFTWARE SERVICES</span>
              <span className="accordion-arrow"><ChevronRight size={24} /></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-inner-content">
                <p>Our senior engineers design enterprise-grade architectures that solve operational bottlenecks. We develop scalable solutions with React, Node.js, Python, and Go, focusing on microservices patterns, continuous integration, and clean code principles.</p>
                <button className="btn-secondary-outline mt-4" onClick={() => handleScrollTo('contact')}>
                  Discuss Enterprise Projects <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Accordion Row 2 - Expanded by default */}
          <div className={`accordion-row ${activeAccordion === 2 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 2 ? 0 : 2)}>
              <span className="accordion-num">02</span>
              <span className="accordion-title">EXPERTISE SERVICES</span>
              <span className="accordion-arrow"><ChevronRight size={24} /></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-inner-content">
                <p className="mb-6">From initial database modeling to zero-downtime microservice orchestration, we deliver modern software solutions tailored to your operational scale.</p>
                <div className="services-showcase-grid">
                  <div className="service-showcase-card" onClick={() => setSelectedService(SERVICES.find(s => s.id === 'ai'))}>
                    <div className="showcase-card-overlay"></div>
                    <div className="showcase-content">
                      <span>Capabilities</span>
                      <h4>Artificial Intelligence</h4>
                    </div>
                  </div>
                  <div className="service-showcase-card" onClick={() => setSelectedService(SERVICES.find(s => s.id === 'software'))}>
                    <div className="showcase-card-overlay"></div>
                    <div className="showcase-content">
                      <span>Capabilities</span>
                      <h4>Front End Development</h4>
                    </div>
                  </div>
                  <div className="service-showcase-card" onClick={() => setSelectedService(SERVICES.find(s => s.id === 'database'))}>
                    <div className="showcase-card-overlay"></div>
                    <div className="showcase-content">
                      <span>Capabilities</span>
                      <h4>Database Architecture</h4>
                    </div>
                  </div>
                  <div className="service-showcase-card" onClick={() => setSelectedService(SERVICES.find(s => s.id === 'mobile'))}>
                    <div className="showcase-card-overlay"></div>
                    <div className="showcase-content">
                      <span>Capabilities</span>
                      <h4>Mobile App Development</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Row 3 */}
          <div className={`accordion-row ${activeAccordion === 3 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 3 ? 0 : 3)}>
              <span className="accordion-num">03</span>
              <span className="accordion-title">ENGINEERING PROCESS & TIMELINES</span>
              <span className="accordion-arrow"><ChevronRight size={24} /></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-inner-content">
                <p className="mb-4">How we take your ideas from raw concepts into highly secured, automated cloud environments:</p>
                <div className="process-timeline-mini">
                  {PROCESS_STEPS.map((step, idx) => (
                    <div key={idx} className="timeline-mini-item">
                      <span className="timeline-num">{step.step}</span>
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Row 4 */}
          <div className={`accordion-row ${activeAccordion === 4 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => setActiveAccordion(activeAccordion === 4 ? 0 : 4)}>
              <span className="accordion-num">04</span>
              <span className="accordion-title">MOBILE APP DEVELOPMENT & CLOUD</span>
              <span className="accordion-arrow"><ChevronRight size={24} /></span>
            </div>
            <div className="accordion-body">
              <div className="accordion-inner-content">
                <p>We build high-performance mobile apps with fluid user interfaces using Flutter, React Native, and Swift/Kotlin. Together with optimized AWS, Azure, and Google Cloud setups, we guarantee native responsiveness, cost efficiency, and zero-downtime failovers.</p>
                <button className="btn-secondary-outline mt-4" onClick={openContact}>
                  Discuss App & Cloud Scaling <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
