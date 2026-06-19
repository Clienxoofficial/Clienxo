"use client";
import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Sliders, Shield, Zap, HeartHandshake, Award } from 'lucide-react';
import DotField from './DotField';

const CHOOSE_CARDS = [
  {
    icon: <UserCheck className="why-icon" />,
    title: 'Experienced Developers',
    desc: 'Our engineering staff consists of senior developers fluent in enterprise architectures.'
  },
  {
    icon: <Sliders className="why-icon" />,
    title: 'Scalable Architecture',
    desc: 'Systems designed using clean microservices patterns that handle traffic spikes easily.'
  },
  {
    icon: <Shield className="why-icon" />,
    title: 'Security First',
    desc: 'Zero-trust networks setup, end-to-end payload encryption, and complete audits.'
  },
  {
    icon: <Zap className="why-icon" />,
    title: 'Fast Delivery',
    desc: 'Agile sprints structure allowing you to view and test features every week.'
  },
  {
    icon: <HeartHandshake className="why-icon" />,
    title: 'Long-Term Support',
    desc: 'Continuous application updates, server adjustments, and 24/7 security watch.'
  },
  {
    icon: <Award className="why-icon" />,
    title: 'Modern Technologies',
    desc: 'We build using top-tier developer platforms (Next.js, FastAPI, Docker, and AWS).'
  }
];

const STATS_DATA = [
  { label: 'Uptime SLA', target: 99.9, suffix: '%', decimals: 1 },
  { label: 'Projects Delivered', target: 25, suffix: '', decimals: 0 },
  { label: 'Data Security Audits', target: 100, suffix: '%', decimals: 0 },
  { label: 'Response Time', target: 15, suffix: 'm', decimals: 0 }
];

export default function WhyChooseUs() {
  const [stats, setStats] = useState(STATS_DATA.map(() => 0));
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries && entries[0] && entries[0].isIntersecting) {
        setHasStarted(true);
      }
    }, { threshold: 0.15 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setStats(prev => 
        STATS_DATA.map((item, idx) => {
          const increment = item.target / steps;
          const currentVal = Math.min(item.target, increment * currentStep);
          return parseFloat(currentVal.toFixed(item.decimals));
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section id="why-choose-us" ref={containerRef} className="why-choose-us-section fade-in-section">
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
          <span className="section-mini-title">OUR EDGE</span>
          <h2 className="section-title uppercase">Why Businesses Choose Us</h2>
          <div className="header-bar"></div>
        </div>

        <div className="why-grid-layout">
          {/* Left Side: Cards */}
          <div className="why-cards-grid">
            {CHOOSE_CARDS.map((card, idx) => (
              <div key={idx} className="why-card glass-card">
                <div className="why-icon-box">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Stats Panel */}
          <div className="why-stats-panel glass-card">
            <h3>Enterprise Capabilities</h3>
            <p className="stats-panel-desc">We deliver premium engineering infrastructure that optimizes data workflows, cuts server expenditure, and secures client interactions.</p>
            <div className="stats-ticker-grid">
              {STATS_DATA.map((item, idx) => (
                <div key={idx} className="stat-ticker-box">
                  <div className="stat-ticker-number text-gradient-neon">
                    {stats[idx]}{item.suffix}
                  </div>
                  <div className="stat-ticker-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
