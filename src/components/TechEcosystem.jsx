"use client";
import React from 'react';
import { Layout, Server, Database, Cloud } from 'lucide-react';

const ECOSYSTEM_DATA = [
  {
    category: 'Frontend',
    icon: <Layout size={20} />,
    color: 'rgba(99, 102, 241, 0.15)',
    glow: 'rgba(99, 102, 241, 0.4)',
    techs: ['React', 'Next.js', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: <Server size={20} />,
    color: 'rgba(168, 85, 247, 0.15)',
    glow: 'rgba(168, 85, 247, 0.4)',
    techs: ['Python', 'Node.js', 'Express.js']
  },
  {
    category: 'Database',
    icon: <Database size={20} />,
    color: 'rgba(236, 72, 153, 0.15)',
    glow: 'rgba(236, 72, 153, 0.4)',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    category: 'Infrastructure',
    icon: <Cloud size={20} />,
    color: 'rgba(6, 182, 212, 0.15)',
    glow: 'rgba(6, 182, 212, 0.4)',
    techs: ['Linux', 'Docker', 'AWS', 'CI/CD']
  }
];

export default function TechEcosystem() {
  return (
    <section id="tech-ecosystem" className="tech-ecosystem-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">TECHNOLOGY ECOSYSTEM</span>
          <h2 className="section-title uppercase">Technologies We Use</h2>
          <div className="header-bar"></div>
        </div>

        <div className="ecosystem-grid">
          {ECOSYSTEM_DATA.map((cat, idx) => (
            <div 
              key={idx} 
              className="ecosystem-cat-card glass-card"
              style={{ '--cat-glow': cat.glow }}
            >
              <div className="ecosystem-cat-header">
                <div className="ecosystem-cat-icon-box" style={{ backgroundColor: cat.color }}>
                  {cat.icon}
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="ecosystem-tech-list">
                {cat.techs.map((tech, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="ecosystem-tech-item float-item"
                    style={{ animationDelay: `${(idx * 2 + tIdx) * 0.2}s` }}
                  >
                    <span className="tech-dot"></span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
