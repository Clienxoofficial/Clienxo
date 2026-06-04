"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';
import { Layout, Server, Database, Cloud, Terminal, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout className="tech-cat-icon text-indigo" />,
    desc: 'Dynamic, highly interactive, and fast user interfaces with smooth micro-interactions.',
    techs: [
      { name: 'React.js', rating: '95%', desc: 'Declarative component-driven frontend architecture.' },
      { name: 'Next.js', rating: '90%', desc: 'Server-side rendering, static builds, and routing.' },
      { name: 'JavaScript', rating: '98%', desc: 'Standard client scripting for application workflows.' },
      { name: 'TypeScript', rating: '92%', desc: 'Safe static-type variables checking for code scale.' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    icon: <Server className="tech-cat-icon text-purple" />,
    desc: 'High-performance server APIs, multi-tenant databases routing, and webhooks processing.',
    techs: [
      { name: 'Python', rating: '94%', desc: 'FastAPI REST APIs, data parsing, and AI libraries.' },
      { name: 'Node.js', rating: '96%', desc: 'Asynchronous event-driven event loops server platforms.' },
      { name: 'Express.js', rating: '90%', desc: 'Minimalist routing middleware frameworks.' }
    ]
  },
  {
    id: 'database',
    title: 'Database Architecture',
    icon: <Database className="tech-cat-icon text-rose" />,
    desc: 'Reliable transactional logging, full-text indexes, and Redis key caching systems.',
    techs: [
      { name: 'PostgreSQL', rating: '95%', desc: 'Structured relational data models, transactions, and JSONB.' },
      { name: 'MySQL', rating: '90%', desc: 'Standard ACID-compliant relational databases.' },
      { name: 'MongoDB', rating: '88%', desc: 'Flexible document storage for unstructured JSON catalogs.' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="tech-cat-icon text-cyan" />,
    desc: 'Automated CI/CD pipelines, Docker virtualization, server load balancing, and AWS clouds.',
    techs: [
      { name: 'Linux Servers', rating: '92%', desc: 'Secure VPS installations, Nginx, and cron configurations.' },
      { name: 'Docker Containers', rating: '95%', desc: 'Component containerization guaranteeing dev/prod equivalence.' },
      { name: 'AWS Cloud', rating: '90%', desc: 'Elastic Computing, S3 static assets, and IAM controls.' },
      { name: 'CI/CD Pipelines', rating: '94%', desc: 'Automated Github Actions checking, testing, and deployment.' }
    ]
  }
];

export default function TechnologiesPage() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web',
    message: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme') || 'dark';
      setTheme(localTheme);
      document.documentElement.setAttribute('data-theme', localTheme);

      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handleScrollTo = (id) => {
    window.location.href = `/#${id}`;
  };

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <div className="tech-grid"></div>
      <Header
        scrolled={scrolled}
        activeSection=""
        handleScrollTo={handleScrollTo}
        theme={theme}
        handleToggleTheme={handleToggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openContact={openContact}
      />

      <main className="subpage-wrapper">
        <section className="subpage-hero-section animate-fade-in">
          <div className="section-container">
            <span className="subpage-badge"><Cpu size={12} /> Tech Stack</span>
            <h1 className="subpage-title text-gradient">Technology Ecosystem</h1>
            <p className="subpage-subtitle">We build using scalable software platforms, performance-optimized database structures, and secure container infrastructures.</p>
          </div>
        </section>

        <section className="technologies-detail-section">
          <div className="section-container">
            <div className="tech-details-grid">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div key={cat.id} className="tech-detail-card glass-card">
                  <div className="tech-detail-card-header">
                    <div className="tech-cat-icon-wrapper">
                      {cat.icon}
                    </div>
                    <h3>{cat.title}</h3>
                  </div>
                  <p className="tech-cat-desc">{cat.desc}</p>
                  
                  <div className="tech-items-breakdown">
                    {cat.techs.map((t, tIdx) => (
                      <div key={tIdx} className="tech-item-row">
                        <div className="tech-item-header">
                          <span className="tech-name">{t.name}</span>
                          <span className="tech-rating text-gradient-neon">{t.rating} Expertise</span>
                        </div>
                        <p className="tech-item-desc">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Callout */}
        <section className="subpage-cta-section">
          <div className="section-container text-center">
            <h2 className="text-gradient">Ready to Architect Your Infrastructure?</h2>
            <p>We configure production VPS pipelines, database schemas, and Next.js frontend projects.</p>
            <button className="cta-quote-btn outline-cta mx-auto mt-6" onClick={openContact}>
              Start Consultation <ArrowRight size={15} />
            </button>
          </div>
        </section>
      </main>

      <Footer handleScrollTo={handleScrollTo} openContact={openContact} />

      <ContactPage
        isOpen={isContactOpen}
        onClose={closeContact}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
