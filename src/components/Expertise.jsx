"use client";
import React from 'react';
import { Cpu, Code, Server, Database, Layers, Globe, TrendingUp, ShieldAlert, Layout } from 'lucide-react';

const EXPERTISE_DATA = [
  {
    icon: <Layers className="exp-icon" />,
    title: 'SaaS Development',
    items: ['Multi-Tenant SaaS', 'Subscription Platforms', 'Admin Dashboards', 'User Management Systems']
  },
  {
    icon: <Cpu className="exp-icon" />,
    title: 'AI Solutions',
    items: ['AI Chatbots', 'AI Agents', 'Automation Workflows', 'AI Integrations', 'AI Content Systems']
  },
  {
    icon: <Code className="exp-icon" />,
    title: 'Full Stack Development',
    items: ['React Applications', 'Node.js Development', 'Python Development', 'REST APIs']
  },
  {
    icon: <Server className="exp-icon" />,
    title: 'Backend Development',
    items: ['Python', 'Node.js', 'Express.js', 'API Development']
  },
  {
    icon: <Layout className="exp-icon" />,
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'Responsive UI', 'Performance Optimization']
  },
  {
    icon: <Database className="exp-icon" />,
    title: 'Database Solutions',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Database Optimization']
  },
  {
    icon: <Server className="exp-icon text-cyan" />,
    title: 'Cloud & Server Management',
    items: ['VPS Setup', 'Linux Server Management', 'AWS Deployment', 'Docker Deployment', 'CI/CD Setup']
  },
  {
    icon: <TrendingUp className="exp-icon" />,
    title: 'SEO Services',
    items: ['Technical SEO', 'On Page SEO', 'Website Speed Optimization', 'SEO Audits']
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">OUR CAPABILITIES</span>
          <h2 className="section-title uppercase">Advanced Solutions & Expertise</h2>
          <div className="header-bar"></div>
        </div>

        <div className="expertise-grid">
          {EXPERTISE_DATA.map((exp, idx) => (
            <div key={idx} className="expertise-card glass-card">
              <div className="expertise-icon-wrapper">
                {exp.icon}
              </div>
              <h3 className="expertise-card-title">{exp.title}</h3>
              <ul className="expertise-card-list">
                {exp.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="expertise-card-item">
                    <span className="expertise-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
