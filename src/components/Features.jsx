"use client";
import { Sparkles, Shield, Zap, Briefcase } from 'lucide-react';
import DotField from './DotField';

export default function Features() {
  return (
    <section className="features-section fade-in-section">
      <DotField
        dotRadius={1.8}
        dotSpacing={16}
        bulgeStrength={60}
        glowRadius={180}
        sparkle={false}
        waveAmplitude={6}
        cursorRadius={220}
      />
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">FEATURES</span>
          <h2 className="section-title uppercase">Built for Speed, Engineered for Scale</h2>
          <div className="header-bar"></div>
        </div>

        <div className="features-grid-four">
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Sparkles size={20} /></div>
            <h4>Rapid Shipping</h4>
            <p>We build and ship MVPs and features in weekly sprints, keeping you ahead of the market.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Shield size={20} /></div>
            <h4>Zero-Trust Security</h4>
            <p>Your product is secured from day one with modern authorization, secure APIs, and encrypted databases.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Zap size={20} /></div>
            <h4>Infinite Scalability</h4>
            <p>Cloud infrastructures built with Kubernetes and serverless frameworks that auto-scale as you grow.</p>
          </div>
          <div className="feature-card-bordered">
            <div className="feature-icon-wrapper"><Briefcase size={20} /></div>
            <h4>Modern Tech Stack</h4>
            <p>No legacy tech. We build clean codebases using Next.js, Node.js, FastAPI, and Docker.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
