"use client";
import React from 'react';
import { Eye, FileText, Layout, Terminal, CheckCircle2, CloudLightning, Activity } from 'lucide-react';

const PROCESS_DATA = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Map out requirements, scope constraints, and define core technical parameters.',
    icon: <Eye size={18} />
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Establish database structure plans, microservice mappings, and release sprints.',
    icon: <FileText size={18} />
  },
  {
    step: '03',
    title: 'UI/UX Design',
    desc: 'Mock custom dashboards, interactive user wireframes, and design standards.',
    icon: <Layout size={18} />
  },
  {
    step: '04',
    title: 'Development',
    desc: 'Write robust, clean backend systems and frontends using the chosen tech stacks.',
    icon: <Terminal size={18} />
  },
  {
    step: '05',
    title: 'Testing',
    desc: 'Execute automated regression checks, unit checks, and penetration audits.',
    icon: <CheckCircle2 size={18} />
  },
  {
    step: '06',
    title: 'Deployment',
    desc: 'Launch product to AWS/Kubernetes server networks with complete CI/CD settings.',
    icon: <CloudLightning size={18} />
  },
  {
    step: '07',
    title: 'Maintenance',
    desc: 'Deploy patch corrections, database scaling adjustments, and security check upgrades.',
    icon: <Activity size={18} />
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process-timeline" className="process-timeline-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">METHODOLOGY</span>
          <h2 className="section-title uppercase">Development Process</h2>
          <div className="header-bar"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-connecting-line"></div>
          <div className="timeline-grid">
            {PROCESS_DATA.map((proc, idx) => (
              <div key={idx} className="timeline-node-card glass-card">
                <div className="timeline-step-badge">
                  <span>{proc.step}</span>
                  <div className="timeline-step-icon">
                    {proc.icon}
                  </div>
                </div>
                <h3 className="timeline-node-title">{proc.title}</h3>
                <p className="timeline-node-desc">{proc.desc}</p>
                <div className="timeline-pulse-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
