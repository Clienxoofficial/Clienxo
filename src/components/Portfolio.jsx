"use client";
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Smartphone, Globe } from 'lucide-react';
import { PROJECTS } from '../constants/data';

const CATEGORY_LABELS = {
  all: 'All Work',
  web: 'Web Solutions',
  mobile: 'Mobile Apps',
  ai: 'AI & Data Science',
  security: 'Cybersecurity'
};

// Component for rendering category-specific visual mockups
function ProjectVisual({ category, title, metric }) {
  if (category === 'web') {
    return (
      <div className="visual-container visual-web">
        <div className="web-browser-header">
          <div className="web-dot"></div>
          <div className="web-dot"></div>
          <div className="web-dot"></div>
          <div className="web-address-bar">https://clienxo.com/projects/{category}</div>
        </div>
        <div className="web-browser-content">
          <div className="code-editor-sim">
            <div className="editor-line"><span className="token-pink">const</span> dashboard = <span className="token-blue">new</span> <span className="token-yellow">ClienxoPlatform</span>();</div>
            <div className="editor-line"><span className="token-pink">await</span> dashboard.<span className="token-green">initialize</span>();</div>
            <div className="editor-line"><span className="token-gray">// {metric}</span></div>
            <div className="editor-line"><span className="token-pink">const</span> active = <span className="token-blue">true</span>;</div>
          </div>
          <div className="chart-preview-widget">
            <div className="widget-bar" style={{ height: '40%' }}></div>
            <div className="widget-bar highlight" style={{ height: '75%' }}></div>
            <div className="widget-bar" style={{ height: '55%' }}></div>
            <div className="widget-bar" style={{ height: '90%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'mobile') {
    return (
      <div className="visual-container visual-mobile">
        <div className="mobile-phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="phone-header">
              <span className="phone-time">09:41</span>
              <div className="phone-icons">
                <span className="phone-battery"></span>
              </div>
            </div>
            <div className="phone-body">
              <div className="phone-avatar-row">
                <div className="phone-avatar"></div>
                <div className="phone-user-info">
                  <div className="line-sm"></div>
                  <div className="line-xs"></div>
                </div>
              </div>
              <div className="phone-pulse-chart">
                <svg viewBox="0 0 100 40" className="pulse-svg">
                  <path
                    d="M0,20 Q15,5 30,25 T60,15 T80,30 L100,10"
                    fill="none"
                    stroke="var(--accent-secondary, #0891b2)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="phone-stats-block">
                <span className="phone-metric-num">{metric}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'ai') {
    return (
      <div className="visual-container visual-ai">
        <div className="neural-network-bg">
          <svg className="neural-svg" viewBox="0 0 200 120">
            {/* Connection Lines */}
            <line x1="30" y1="60" x2="80" y2="30" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="30" y1="60" x2="80" y2="90" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="80" y1="30" x2="140" y2="30" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="80" y1="90" x2="140" y2="90" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="80" y1="30" x2="140" y2="90" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="80" y1="90" x2="140" y2="30" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="140" y1="30" x2="180" y2="60" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />
            <line x1="140" y1="90" x2="180" y2="60" stroke="rgba(94, 235, 255, 0.15)" strokeWidth="1" className="neural-line-anim" />

            {/* Neural Nodes */}
            <circle cx="30" cy="60" r="5" fill="var(--text-primary)" className="node-pulse" />
            
            <circle cx="80" cy="30" r="4" fill="var(--accent-secondary, #0891b2)" />
            <circle cx="80" cy="90" r="4" fill="var(--accent-secondary, #0891b2)" />
            
            <circle cx="140" cy="30" r="4" fill="var(--accent-secondary, #0891b2)" />
            <circle cx="140" cy="90" r="4" fill="var(--accent-secondary, #0891b2)" />
            
            <circle cx="180" cy="60" r="6" fill="var(--text-primary)" className="node-pulse-fast" />

            {/* Floating glowing particle */}
            <circle cx="110" cy="60" r="3" fill="#ffffff" className="neural-particle-anim" />
          </svg>
          <div className="ai-status-bar">
            <Cpu size={12} className="ai-icon-spin" />
            <span>NEURAL MATRIX ACTIVE: {metric}</span>
          </div>
        </div>
      </div>
    );
  }

  if (category === 'security') {
    return (
      <div className="visual-container visual-security">
        <div className="security-grid-overlay">
          <div className="security-shield-holder">
            <Shield size={36} className="security-shield-glow" />
            <div className="radar-circle-glow"></div>
            <div className="radar-circle-glow delay-1"></div>
          </div>
          <div className="threat-metrics-sim">
            <div className="metric-dot green"></div>
            <span className="metric-text-small">{metric}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Portfolio({ handleScrollTo, setFormData, openContact }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  // Smooth filter fade out / fade in
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      if (selectedFilter === 'all') {
        setFilteredProjects(PROJECTS);
      } else {
        setFilteredProjects(PROJECTS.filter(p => p.category === selectedFilter));
      }
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  const handleViewCaseStudy = (project) => {
    setFormData(prev => ({
      ...prev,
      projectType: project.category,
      message: `Hi, I am interested in discussing your case study: ${project.title}. Please contact me.`
    }));
    openContact();
  };

  return (
    <section id="portfolio" className="portfolio-section-bento fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">PORTFOLIO</span>
          <h2 className="section-title uppercase">Engineering Excellence: Case Studies & Projects</h2>
          <div className="header-bar"></div>
        </div>

        {/* Dynamic Bento Filters */}
        <div className="portfolio-bento-filters-container">
          <div className="portfolio-bento-filters">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                className={`portfolio-bento-tab ${selectedFilter === key ? 'active' : ''}`}
                onClick={() => setSelectedFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className={`portfolio-bento-grid ${isTransitioning ? 'is-filtering' : ''}`}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`portfolio-card-bento card-${project.category} bento-span-${(idx % 3 === 0) ? 'wide' : 'normal'}`}
            >
              {/* Card visual showcase */}
              <div className="bento-visual-header">
                <ProjectVisual category={project.category} title={project.title} metric={project.metric} />
              </div>

              {/* Card Content info */}
              <div className="bento-content-body">
                <div className="bento-tag-row">
                  <span className={`bento-category-pill pill-${project.category}`}>
                    {project.category === 'web' && <Globe size={11} />}
                    {project.category === 'mobile' && <Smartphone size={11} />}
                    {project.category === 'ai' && <Cpu size={11} />}
                    {project.category === 'security' && <Shield size={11} />}
                    {CATEGORY_LABELS[project.category]}
                  </span>
                  <span className="bento-metric-text">{project.metric}</span>
                </div>

                <h3 className="bento-project-title">{project.title}</h3>
                <p className="bento-project-description">{project.desc}</p>

                {/* Tech specifications */}
                <div className="bento-project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bento-tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action */}
                <button
                  className="bento-view-study-btn"
                  onClick={() => handleViewCaseStudy(project)}
                >
                  <span>Explore Case Study</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
