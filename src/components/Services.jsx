"use client";
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants/data';

export default function Services({ handleScrollTo, setSelectedService, openContact }) {
  return (
    <section id="services" className="services-grid-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">OUR SERVICES</span>
          <h2 className="section-title uppercase">Growth Services For Modern Startups</h2>
          <div className="header-bar"></div>
          <p className="section-desc-subtitle">
            We build high-performance software, integrate intelligent AI automations, and design seamless user experiences to accelerate your launch.
          </p>
        </div>

        <div className="services-grid-cards">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="service-card-premium glass-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="card-glow-effect"></div>
              
              <div className="service-card-top">
                <div className="service-card-icon-box">
                  {service.icon}
                </div>
                <span className="service-card-num">0{idx + 1}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-short">{service.short}</p>

              {service.servicesList && (
                <ul className="service-card-bullets">
                  {service.servicesList.slice(0, 3).map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="bullet-indicator"></span>
                      {item}
                    </li>
                  ))}
                  {service.servicesList.length > 3 && (
                    <li className="bullets-more">+ {service.servicesList.length - 3} more services</li>
                  )}
                </ul>
              )}

              <div className="service-card-footer">
                <button className="service-learn-more-btn">
                  View Benefits & Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
