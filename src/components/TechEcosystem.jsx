"use client";
import React from 'react';
import { Layout, Server, Database, Cpu, Cloud } from 'lucide-react';

const ECOSYSTEM_DATA = [
  {
    category: 'Frontend',
    icon: <Layout size={20} />,
    techs: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    icon: <Server size={20} />,
    techs: ['Node.js', 'Express.js', 'Python']
  },
  {
    category: 'Database',
    icon: <Database size={20} />,
    techs: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'AI & Automation',
    icon: <Cpu size={20} />,
    techs: ['OpenAI', 'AI Agents', 'Workflow Automation']
  },
  {
    category: 'Cloud & Deployment',
    icon: <Cloud size={20} />,
    techs: ['Vercel', 'Netlify', 'AWS']
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

        <div className="ecosystem-grid-five">
          {ECOSYSTEM_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="ecosystem-cat-card glass-card"
            >
              <div className="ecosystem-cat-header">
                <div className="ecosystem-cat-icon-box">
                  {cat.icon}
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="ecosystem-tech-list">
                {cat.techs.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="ecosystem-tech-item float-item"
                    style={{ animationDelay: `${(idx * 2 + tIdx) * 0.1}s` }}
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
