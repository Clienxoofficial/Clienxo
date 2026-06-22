"use client";
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ handleScrollTo, openContact }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let animationFrameId;
    const handleScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax slide down effect instead of 3D flip
  const translateY = scrollY * 0.4;
  const opacity = Math.max(1 - scrollY / 700, 0);
  const scale = Math.max(1 - scrollY / 1200, 0.9);

  const heroStyle = {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity: opacity,
    transformOrigin: 'center center',
  };

  return (
    <section id="home" className="hero-section-premium" style={{ perspective: '1200px' }}>
      {/* Background ambient elements */}
      <div className="space-ambient-glow"></div>
      <div className="spotlight-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="ambient-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
      </div>

      <div className="hero-container-split" style={heroStyle}>
        {/* Left Side: Enterprise Typography and Stats */}
        <div className="hero-left-col fade-in-section is-visible">
          <h1 className="hero-title-premium">
            AI &amp; Custom Software <br />
            <span className="text-gradient-neon">For Growing Businesses</span>
          </h1>

          <p className="hero-subtitle-premium">
            We help startups and businesses automate workflows, reduce operational costs, and accelerate growth through AI-powered solutions, custom software, and modern web applications.
          </p>

          <div className="hero-ctas-premium">
            <button className="btn-start-project" onClick={openContact}>
              Start Your Project <ArrowRight size={16} />
            </button>
            <button className="btn-view-portfolio" onClick={() => handleScrollTo('services')}>
              View Services
            </button>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="hero-stats-row">
          <div className="stat-item">
            <span className="num text-gradient-neon">25+</span>
            <span className="label">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="num text-gradient-neon">15+</span>
            <span className="label">AI Solutions Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="num text-gradient-neon">10,000+</span>
            <span className="label">Hours Saved Through Automation</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="num text-gradient-neon">100%</span>
            <span className="label">Client Satisfaction</span>
          </div>
        </div>

        {/* Right Side: Futuristic AI Core Orb Scene */}
        <div className="hero-right-col fade-in-section is-visible">
          <div className="ai-scene-container">
            <svg className="ai-dev-svg" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Glow Filters */}
                <filter id="neon-glow-primary" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="neon-glow-secondary" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="12" result="blur1" />
                  <feGaussianBlur stdDeviation="4" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="ambient-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="40" />
                </filter>

                {/* Gradients */}
                <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C6BFF" />
                  <stop offset="100%" stopColor="#4F8CFF" />
                </linearGradient>

                <linearGradient id="grad-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5EEBFF" />
                  <stop offset="100%" stopColor="#4F8CFF" />
                </linearGradient>

                <linearGradient id="grad-jacket" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                <linearGradient id="grad-hologram" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(94, 235, 255, 0.15)" />
                  <stop offset="100%" stopColor="rgba(124, 107, 255, 0.02)" />
                </linearGradient>
              </defs>

              {/* BACKGROUND NEON GLOWS */}
              <g className="ambient-glows">
                <circle cx="160" cy="260" r="100" fill="#7C6BFF" opacity="0.15" filter="url(#ambient-blur)" />
                <circle cx="340" cy="280" r="90" fill="#5EEBFF" opacity="0.18" filter="url(#ambient-blur)" />
              </g>

              {/* FUTURISTIC DESK */}
              <g className="cyber-desk">
                <path d="M 40,430 L 440,430" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                <path d="M 180,430 L 380,430" stroke="#5EEBFF" strokeWidth="2" opacity="0.6" filter="url(#neon-glow-primary)" />
              </g>

              {/* DEVELOPER CHARACTER GROUP */}
              <g className="dev-character">
                <path className="dev-body" d="M 60,450 C 60,360 90,320 145,315 C 150,305 160,295 170,295 C 180,295 190,305 195,315 C 250,320 280,360 280,450 Z" fill="url(#grad-jacket)" stroke="rgba(124, 107, 255, 0.2)" strokeWidth="1.5" />
                <path className="dev-body-trim" d="M 145,315 C 150,335 155,360 155,450 M 195,315 C 190,335 185,360 185,450" stroke="#7C6BFF" strokeWidth="1.5" opacity="0.4" fill="none" />

                {/* Head & Neck */}
                <path d="M 155,295 L 155,270 L 185,270 L 185,295 Z" fill="#1e1b4b" stroke="rgba(124, 107, 255, 0.15)" strokeWidth="1" />
                <path className="dev-face" d="M 160,270 C 160,215 210,220 205,255 C 205,270 190,280 160,270 Z" fill="#1e1e38" stroke="rgba(124, 107, 255, 0.3)" strokeWidth="1" />
                <path className="dev-hair" d="M 160,270 C 155,240 160,210 190,215 C 200,215 205,225 200,235 C 195,225 180,230 180,245 C 180,250 175,255 170,260" fill="#0f172a" />

                {/* Cyber Visor */}
                <path className="dev-visor" d="M 180,235 L 208,245 L 204,256 L 176,246 Z" fill="#5EEBFF" filter="url(#neon-glow-primary)" />
                <path className="dev-visor-glow" d="M 180,235 L 208,245" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 185,248 C 195,255 200,260 195,268" stroke="rgba(94, 235, 255, 0.4)" strokeWidth="3" fill="none" filter="url(#neon-glow-primary)" />

                {/* Left Arm & Hand */}
                <g className="dev-arm-left">
                  <path d="M 100,375 Q 150,385 220,385" stroke="url(#grad-jacket)" strokeWidth="18" strokeLinecap="round" fill="none" />
                  <path d="M 100,375 Q 150,385 220,385" stroke="rgba(124, 107, 255, 0.3)" strokeWidth="20" strokeLinecap="round" fill="none" opacity="0.2" />
                  <circle cx="220" cy="385" r="9" fill="#7C6BFF" opacity="0.6" />
                  <path className="hand-left-fingers" d="M 224,380 L 236,377 M 225,385 L 238,382 M 224,390 L 235,388" stroke="#5EEBFF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow-primary)" />
                </g>

                {/* Right Arm & Hand */}
                <g className="dev-arm-right">
                  <path d="M 125,365 Q 170,380 230,380" stroke="url(#grad-jacket)" strokeWidth="18" strokeLinecap="round" fill="none" />
                  <path d="M 125,365 Q 170,380 230,380" stroke="rgba(124, 107, 255, 0.3)" strokeWidth="20" strokeLinecap="round" fill="none" opacity="0.2" />
                  <circle cx="230" cy="380" r="9" fill="#7C6BFF" opacity="0.6" />
                  <path className="hand-right-fingers" d="M 234,374 L 246,372 M 235,379 L 248,377 M 234,385 L 245,384" stroke="#5EEBFF" strokeWidth="2" strokeLinecap="round" filter="url(#neon-glow-primary)" />
                </g>
              </g>

              {/* GLOWING LAPTOP */}
              <g className="cyber-laptop">
                <polygon points="210,395 315,395 340,412 235,412" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
                <g fill="#5EEBFF" opacity="0.8" filter="url(#neon-glow-primary)">
                  <circle cx="235" cy="402" r="1.5" />
                  <circle cx="247" cy="402" r="1.5" />
                  <circle cx="259" cy="402" r="1.5" />
                  <circle cx="271" cy="402" r="1.5" />
                  <circle cx="283" cy="402" r="1.5" />
                  <circle cx="295" cy="402" r="1.5" />
                  <circle cx="307" cy="402" r="1.5" />
                  <circle cx="241" cy="407" r="1.5" />
                  <circle cx="253" cy="407" r="1.5" />
                  <circle cx="265" cy="407" r="1.5" />
                  <circle cx="277" cy="407" r="1.5" />
                  <circle cx="289" cy="407" r="1.5" />
                  <circle cx="301" cy="407" r="1.5" />
                  <circle cx="313" cy="407" r="1.5" />
                </g>
                <polygon points="315,395 375,290 365,285 305,390" fill="#18181b" stroke="#27272a" strokeWidth="1" />
                <line x1="315" y1="395" x2="375" y2="290" stroke="#7C6BFF" strokeWidth="2" filter="url(#neon-glow-primary)" />
                <polygon points="312,392 371,293 363,288 304,387" fill="#09090b" />
                <g className="laptop-screen-code" stroke="#5EEBFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
                  <line x1="318" y1="375" x2="330" y2="355" />
                  <line x1="324" y1="378" x2="340" y2="352" stroke="#7C6BFF" />
                  <line x1="330" y1="360" x2="345" y2="335" />
                  <line x1="338" y1="345" x2="350" y2="325" stroke="#7C6BFF" />
                </g>
                <polygon points="307,390 365,290 200,280 170,390" fill="url(#grad-hologram)" opacity="0.3" pointerEvents="none" />
              </g>

              {/* FLOATING HOLOGRAPHIC PANELS & NEURAL NETWORK */}
              <g className="hologram-group">
                {/* Code Terminal Panel */}
                <g className="holo-panel-terminal">
                  <polygon points="260,160 380,120 380,240 260,280" fill="rgba(15, 23, 42, 0.4)" stroke="rgba(94, 235, 255, 0.3)" strokeWidth="1.5" filter="url(#neon-glow-primary)" />
                  <circle cx="275" cy="165" r="2.5" fill="#ef4444" />
                  <circle cx="283" cy="162" r="2.5" fill="#f59e0b" />
                  <circle cx="291" cy="159" r="2.5" fill="#10b981" />
                  <text x="303" y="161" fill="rgba(94, 235, 255, 0.8)" fontFamily="monospace" fontSize="8" fontWeight="bold" transform="rotate(-18.5, 303, 161)">ai_agent.py</text>
                  <g stroke="#5EEBFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.95">
                    <line x1="275" y1="185" x2="330" y2="167" stroke="#7C6BFF" />
                    <line x1="275" y1="198" x2="350" y2="173" />
                    <line x1="285" y1="210" x2="360" y2="185" />
                    <line x1="285" y1="222" x2="340" y2="204" />
                    <line x1="285" y1="234" x2="320" y2="223" stroke="#7C6BFF" />
                    <line x1="275" y1="244" x2="295" y2="238" />
                  </g>
                  <rect className="holo-cursor" x="300" y="231" width="5" height="8" fill="#5EEBFF" transform="rotate(-18.5, 300, 231)" />
                </g>

                {/* Stats/Graph Panel */}
                <g className="holo-panel-stats">
                  <rect x="360" y="70" width="100" height="70" rx="8" fill="rgba(15, 23, 42, 0.5)" stroke="rgba(124, 107, 255, 0.25)" strokeWidth="1.5" />
                  <line x1="370" y1="120" x2="450" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <line x1="370" y1="100" x2="450" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <line x1="370" y1="80" x2="450" y2="80" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <path className="holo-graph-line" d="M 370,120 Q 390,90 410,110 T 450,85" fill="none" stroke="#5EEBFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#neon-glow-primary)" />
                  <circle className="holo-graph-dot" cx="450" cy="85" r="4" fill="#ffffff" filter="url(#neon-glow-primary)" />
                  <text x="370" y="132" fill="#7C6BFF" fontFamily="sans-serif" fontSize="7" fontWeight="bold" letterSpacing="0.5">NEURAL CORE: 99.9%</text>
                </g>

                {/* Neural Network Nodes */}
                <g className="holo-neural-nodes" opacity="0.8">
                  <g stroke="rgba(94, 235, 255, 0.2)" strokeWidth="1">
                    <line x1="390" y1="320" x2="430" y2="290" />
                    <line x1="430" y1="290" x2="440" y2="350" />
                    <line x1="440" y1="350" x2="390" y2="320" />
                    <line x1="430" y1="290" x2="460" y2="310" />
                    <line x1="440" y1="350" x2="460" y2="310" />
                  </g>
                  <circle cx="390" cy="320" r="5" fill="#7C6BFF" filter="url(#neon-glow-primary)" />
                  <circle cx="430" cy="290" r="4" fill="#5EEBFF" filter="url(#neon-glow-primary)" />
                  <circle cx="440" cy="350" r="6" fill="#4F8CFF" filter="url(#neon-glow-primary)" />
                  <circle cx="460" cy="310" r="4" fill="#ffffff" filter="url(#neon-glow-primary)" />

                  <g transform="translate(420, 310)">
                    <polygon points="-8,-4 0,-12 8,-4 5,8 -5,8" fill="rgba(94, 235, 255, 0.1)" stroke="#5EEBFF" strokeWidth="1" />
                    <circle cx="0" cy="-2" r="2.5" fill="#5EEBFF" />
                  </g>
                </g>

                {/* Badges */}
                <g className="holo-tech-badges">
                  <g transform="translate(240, 90)">
                    <rect x="-24" y="-8" width="48" height="16" rx="4" fill="rgba(124, 107, 255, 0.2)" stroke="#7C6BFF" strokeWidth="1" />
                    <text x="0" y="4" fill="#ffffff" fontFamily="monospace" fontSize="8" textAnchor="middle" fontWeight="bold">&lt;AI&gt;</text>
                  </g>
                  <g transform="translate(340, 50)">
                    <circle cx="0" cy="0" r="9" fill="rgba(94, 235, 255, 0.2)" stroke="#5EEBFF" strokeWidth="1" />
                    <text x="0" y="3.5" fill="#5EEBFF" fontFamily="monospace" fontSize="9" textAnchor="middle" fontWeight="bold">&#123;&#125;</text>
                  </g>
                </g>

                {/* Rising Particles */}
                <g className="rising-particles">
                  <circle className="part p-1" cx="230" cy="180" r="2" fill="#5EEBFF" />
                  <circle className="part p-2" cx="290" cy="100" r="1.5" fill="#7C6BFF" />
                  <circle className="part p-3" cx="370" cy="150" r="2" fill="#ffffff" />
                  <circle className="part p-4" cx="420" cy="190" r="1" fill="#5EEBFF" />
                  <circle className="part p-5" cx="440" cy="270" r="2" fill="#4F8CFF" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
