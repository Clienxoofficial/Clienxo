"use client";
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants/data';
import DotField from './DotField';

export default function Services({ handleScrollTo, setSelectedService, openContact }) {
  const renderCard = (service, idx) => (
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
  );

  return (
    <section id="services" className="services-grid-section fade-in-section">
      <DotField
        dotRadius={1.8}
        dotSpacing={16}
        bulgeStrength={60}
        glowRadius={180}
        sparkle={false}
        waveAmplitude={6}
        cursorRadius={220}
      />
      <div className="section-container relative z-10">
        <div className="section-header">
          <span className="section-mini-title">OUR SERVICES</span>
          <h2 className="section-title uppercase">Growth Services For Modern Startups</h2>
          <div className="header-bar"></div>
          <p className="section-subtitle">
            We build high-performance software, integrate intelligent AI automations, and design seamless user experiences to accelerate your launch.
          </p>
        </div>

        <div className="services-grid-cards services-container-modern">
          {SERVICES.map((service, idx) => renderCard(service, idx))}
        </div>
      </div>
    </section>
  );
}
