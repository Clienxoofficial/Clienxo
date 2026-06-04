"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';
import { 
  Code, Smartphone, Brain, Shield, Database, Cloud, 
  ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle 
} from 'lucide-react';

const SERVICE_DETAILS = [
  {
    id: 'software',
    icon: <Code className="service-icon text-indigo" />,
    title: 'Custom Software Development',
    subtitle: 'Tailored desktop, web, and enterprise automation platforms built using top tech stacks.',
    description: 'We architect enterprise-grade systems that solve operational bottlenecks. We develop scalable solutions with React, Node.js, Python, and Go, focusing on microservices patterns, continuous integration, and clean code principles.',
    benefits: ['Automates manual workflows', 'Integrates with legacy databases', 'Microservices scaling capability', 'Clean token-based API paths'],
    techs: ['React', 'NodeJS', 'Python', 'FastAPI']
  },
  {
    id: 'mobile',
    icon: <Smartphone className="service-icon text-cyan" />,
    title: 'Mobile Applications',
    subtitle: 'Premium native and cross-platform mobile apps for iOS and Android devices.',
    description: 'We build high-performance mobile apps with fluid user interfaces using Flutter, React Native, and Swift/Kotlin. From real-time messaging services to secure offline synchronization, we guarantee native responsiveness.',
    benefits: ['Native responsiveness', 'Offline-first database synchronization', 'Push alerts systems', 'Seamless biometrics checks'],
    techs: ['Flutter', 'React Native', 'Firebase', 'Swift']
  },
  {
    id: 'ai',
    icon: <Brain className="service-icon text-purple" />,
    title: 'AI & Data Analytics',
    subtitle: 'Intelligent automation, predictive machine learning models, and smart dashboard reporting.',
    description: 'Transform your business decisions with modern artificial intelligence. We offer custom LLM prompt engineering, machine learning pipelines, predictive analysis models, and interactive BI visual reporting.',
    benefits: ['Custom LLM integrations', 'Automated ticket replies systems', 'Predictive volume analytics', 'Fast visual reports dashboards'],
    techs: ['Python', 'TensorFlow', 'FastAPI', 'Elasticsearch']
  },
  {
    id: 'security',
    icon: <Shield className="service-icon text-rose" />,
    title: 'Cybersecurity & Audits',
    subtitle: 'Complete systems protection, penetration testing, compliance checks, and zero-trust setups.',
    description: 'Identify vulnerabilities before attackers do. Our security experts run comprehensive penetration tests, secure API endpoints, set up multi-factor OAuth systems, and ensure HIPAA/GDPR/SOC2 compliances.',
    benefits: ['Zero-Trust server structures', 'Continuous penetration checks', 'Encrypted database records', 'SOC2/HIPAA compliance frameworks'],
    techs: ['Terraform', 'OAuth2', 'Kubernetes', 'Cybersecurity']
  }
];

export default function ServicesPage() {
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
        <section className="subpage-hero-section">
          <div className="section-container">
            <span className="subpage-badge"><Sparkles size={12} /> Service Catalog</span>
            <h1 className="subpage-title text-gradient">Core Capabilities & Services</h1>
            <p className="subpage-subtitle">We design premium digital systems, scalable cloud architectures, and machine learning models for high-performance business applications.</p>
          </div>
        </section>

        <section className="services-detail-section">
          <div className="section-container">
            <div className="services-details-list">
              {SERVICE_DETAILS.map((service, idx) => (
                <div key={service.id} className="service-detail-item glass-card">
                  <div className="service-detail-header-row">
                    <div className="service-detail-icon-box">
                      {service.icon}
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      <p className="service-subtitle-accent">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="service-detail-desc">{service.description}</p>
                  
                  <div className="service-detail-grid-row">
                    <div className="service-benefits-box">
                      <h4>Benefits & Outcomes</h4>
                      <ul className="service-benefits-list">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx}>
                            <CheckCircle size={14} className="benefit-check" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-techs-box">
                      <h4>Technologies Used</h4>
                      <div className="service-tech-badges-list">
                        {service.techs.map((t, tIdx) => (
                          <span key={tIdx} className="service-tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Highlights */}
        <section className="services-process-preview">
          <div className="section-container text-center">
            <h2 className="section-title">Our Production Workflow</h2>
            <div className="process-preview-grid">
              <div className="process-preview-card glass-card">
                <div className="step-num">01</div>
                <h3>Consultation</h3>
                <p>Establishing product scope and key engineering parameters.</p>
              </div>
              <div className="process-preview-card glass-card">
                <div className="step-num">02</div>
                <h3>Development</h3>
                <p>Incremental sprints delivering secure, clean backend & UI code.</p>
              </div>
              <div className="process-preview-card glass-card">
                <div className="step-num">03</div>
                <h3>Validation</h3>
                <p>Automated integration tests and regulatory compliance checks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA callout */}
        <section className="subpage-cta-section">
          <div className="section-container text-center">
            <h2 className="text-gradient">Ready to Scale Your Systems?</h2>
            <p>Establish a consultation call with our senior software architects to scope your requirements.</p>
            <button className="cta-quote-btn outline-cta mx-auto mt-6" onClick={openContact}>
              Consult Architect <ArrowRight size={15} />
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
