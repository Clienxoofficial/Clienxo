"use client";
import React from 'react';
import { 
  Users, Layers, Cpu, MessageSquare, Calendar, BookOpen, 
  BarChart3, Box, Zap, ShoppingCart, Key, ShieldCheck 
} from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    icon: <Users className="sol-icon" />,
    title: 'CRM Systems',
    desc: 'Automate sales pipelines, pipeline tracking, and optimize customer relationships.'
  },
  {
    icon: <ShieldCheck className="sol-icon" />,
    title: 'ERP Systems',
    desc: 'Integrate supply chains, financial operations, HR modules, and core logistics.'
  },
  {
    icon: <Layers className="sol-icon" />,
    title: 'SaaS Platforms',
    desc: 'Scalable multi-tenant products featuring structured billing and stripe split payments.'
  },
  {
    icon: <Cpu className="sol-icon" />,
    title: 'AI Assistants',
    desc: 'Task delegation and context-aware business tools powered by custom LLM agents.'
  },
  {
    icon: <MessageSquare className="sol-icon" />,
    title: 'AI Chatbots',
    desc: '24/7 client communication widgets supporting instant ticket routing and NLP.'
  },
  {
    icon: <Calendar className="sol-icon" />,
    title: 'Booking Systems',
    desc: 'Real-time booking and calendar reservations synchronized with automatic reminders.'
  },
  {
    icon: <BookOpen className="sol-icon" />,
    title: 'Learning Management Systems',
    desc: 'Custom educational software platforms, progress charts, and grading panels.'
  },
  {
    icon: <BarChart3 className="sol-icon" />,
    title: 'Business Dashboards',
    desc: 'Real-time analytical graphs, charts, and automated report generators.'
  },
  {
    icon: <Box className="sol-icon" />,
    title: 'Inventory Management Systems',
    desc: 'Stock counts tracking, procurement cycles management, and low-level alerts.'
  },
  {
    icon: <Zap className="sol-icon" />,
    title: 'Automation Platforms',
    desc: 'Zero-code process links, webhooks management, and server scheduling tasks.'
  },
  {
    icon: <ShoppingCart className="sol-icon" />,
    title: 'E-Commerce Platforms',
    desc: 'Fast custom storefront architectures, shopping carts, and inventory checkouts.'
  },
  {
    icon: <Key className="sol-icon" />,
    title: 'Customer Portals',
    desc: 'Secure dashboard portals allowing users to track tickets and billing plans.'
  }
];

export default function SolutionsBuild() {
  return (
    <section id="solutions-build" className="solutions-build-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">WHAT WE BUILD</span>
          <h2 className="section-title uppercase">Digital Products & Solutions</h2>
          <div className="header-bar"></div>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS_DATA.map((sol, idx) => (
            <div key={idx} className="solutions-card glass-card">
              <div className="solutions-card-header">
                <div className="solutions-icon-box">
                  {sol.icon}
                </div>
                <h3>{sol.title}</h3>
              </div>
              <p className="solutions-card-desc">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
