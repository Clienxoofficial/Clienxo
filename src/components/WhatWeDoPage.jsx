"use client";
import { useState, useEffect } from 'react';
import {
  ArrowLeft, Sparkles,
  Users, Layers, Cpu, MessageSquare, Calendar, BookOpen,
  BarChart3, Box, Zap, ShoppingCart, Key, ShieldCheck, ArrowRight
} from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    icon: <Users />,
    title: 'CRM Systems',
    desc: 'Automate sales pipelines, pipeline tracking, and optimize customer relationships.'
  },
  {
    icon: <ShieldCheck />,
    title: 'ERP Systems',
    desc: 'Integrate supply chains, financial operations, HR modules, and core logistics.'
  },
  {
    icon: <Layers />,
    title: 'SaaS Platforms',
    desc: 'Scalable multi-tenant products featuring structured billing and stripe split payments.'
  },
  {
    icon: <Cpu />,
    title: 'AI Assistants',
    desc: 'Task delegation and context-aware business tools powered by custom LLM agents.'
  },
  {
    icon: <MessageSquare />,
    title: 'AI Chatbots',
    desc: '24/7 client communication widgets supporting instant ticket routing and NLP.'
  },
  {
    icon: <Calendar />,
    title: 'Booking Systems',
    desc: 'Real-time booking and calendar reservations synchronized with automatic reminders.'
  },
  {
    icon: <BookOpen />,
    title: 'Learning Management Systems',
    desc: 'Custom educational software platforms, progress charts, and grading panels.'
  },
  {
    icon: <BarChart3 />,
    title: 'Business Dashboards',
    desc: 'Real-time analytical graphs, charts, and automated report generators.'
  },
  {
    icon: <Box />,
    title: 'Inventory Management Systems',
    desc: 'Stock counts tracking, procurement cycles management, and low-level alerts.'
  },
  {
    icon: <Zap />,
    title: 'Automation Platforms',
    desc: 'Zero-code process links, webhooks management, and server scheduling tasks.'
  },
  {
    icon: <ShoppingCart />,
    title: 'E-Commerce Platforms',
    desc: 'Fast custom storefront architectures, shopping carts, and inventory checkouts.'
  },
  {
    icon: <Key />,
    title: 'Customer Portals',
    desc: 'Secure dashboard portals allowing users to track tickets and billing plans.'
  }
];

export default function WhatWeDoPage({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setMounted(true));
      document.body.style.overflow = 'hidden';
    } else {
      setMounted(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      setMounted(false);
      onClose();
    }, 520);
  };

  if (!isOpen) return null;

  return (
    <div className={`wwdo-root ${mounted && !isLeaving ? 'wwdo-root--in' : 'wwdo-root--out'}`}>
      <div className="wwdo-scanline" aria-hidden="true" />

      {/* Background effects */}
      <div className="wwdo-bg-grid" aria-hidden="true" />
      <div className="wwdo-bg-orb wwdo-bg-orb--1" aria-hidden="true" />
      <div className="wwdo-bg-orb wwdo-bg-orb--2" aria-hidden="true" />

      {/* Header */}
      <header className={`wwdo-header ${mounted && !isLeaving ? 'wwdo-header--in' : ''}`}>
        <button className="wwdo-back-btn" onClick={handleClose} aria-label="Go back">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <div className="wwdo-header__brand">
          <Sparkles size={14} />
          <span>CLIEN<span className="text-gradient">XO</span></span>
        </div>
        <div className="wwdo-header__spacer" />
      </header>

      {/* Main content */}
      <main className={`wwdo-main ${mounted && !isLeaving ? 'wwdo-main--in' : ''}`}>

        {/* Hero heading */}
        <div className="wwdo-hero">
          <p className="wwdo-hero__eyebrow">WHAT WE BUILD</p>
          <h1 className="wwdo-hero__title">
            Digital Products &amp; <span className="text-gradient">Solutions</span>
          </h1>
          <p className="wwdo-hero__sub">
            From AI-powered platforms to enterprise-grade web systems — we engineer every product end-to-end.
          </p>
        </div>

        {/* 12-card grid */}
        <div className="wwdo-grid">
          {SOLUTIONS_DATA.map((sol, idx) => (
            <div
              key={idx}
              className="wwdo-card"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="wwdo-card__icon-wrap">
                {sol.icon}
              </div>
              <div className="wwdo-card__body">
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
              </div>
              <div className="wwdo-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="wwdo-cta-row">
          <p className="wwdo-cta-label">Ready to build something great?</p>
          <button className="wwdo-cta-btn" onClick={handleClose}>
            Get a Free Quote <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
