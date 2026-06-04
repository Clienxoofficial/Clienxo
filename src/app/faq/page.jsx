"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, ArrowRight } from 'lucide-react';

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How do you price software development projects?',
    answer: 'We offer fixed-price contracts for well-defined MVPs and monthly/hourly dedicated engineering sprints for agile SaaS development. Use our Interactive Estimator on the home page to get a customized budget projection.'
  },
  {
    category: 'development',
    question: 'What is the typical development timeline?',
    answer: 'A standard MVP (Minimum Viable Product) or custom SaaS portal is delivered within 4 to 8 weeks. Larger enterprise ERP platforms or deep AI model integrations can scale from 3 to 6 months depending on requirements complexity.'
  },
  {
    category: 'support',
    question: 'What long-term support and maintenance options do you provide?',
    answer: 'We provide comprehensive post-launch SLA support including 24/7 server monitoring, database backup checks, Linux server updates, code corrections, and monthly performance audits.'
  },
  {
    category: 'saas',
    question: 'Do you design custom SaaS platforms with subscription billing?',
    answer: 'Yes! We build multi-tenant SaaS platforms with secure subscription billing integrations (Stripe, PayPal, Lemonsqueezy), user permissions levels, admin panels, and scalable server pipelines.'
  },
  {
    category: 'ai',
    question: 'Can you integrate AI chatbots and agents into existing products?',
    answer: 'Absolutely. We specialize in building LLM-powered custom chatbots and automated workflows that sync with your database, answer customer tickets, and perform specific background actions.'
  },
  {
    category: 'servers',
    question: 'Do you manage server setups, VPS, and cloud deployments?',
    answer: 'Yes. We manage infrastructure deployments using AWS, Docker, Kubernetes, and secure VPS. We write Terraform templates for Infrastructure as Code (IaC) and set up automatic CI/CD deployment pipelines.'
  },
  {
    category: 'seo',
    question: 'Do you provide technical SEO and website speed optimization?',
    answer: 'Yes! We conduct technical SEO audits, page speed corrections (Next.js server-side optimizations, image compression, CDN assets setups), and semantic markup structuring to guarantee top organic search ranks.'
  }
];

export default function FAQPage() {
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

  // FAQ States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

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

  // Filter logic
  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <span className="subpage-badge"><Sparkles size={12} /> Help Center</span>
            <h1 className="subpage-title text-gradient">Frequently Asked Questions</h1>
            <p className="subpage-subtitle">Search and filter answers about our custom software development processes, Pricing models, support SLA options, and technologies.</p>
          </div>
        </section>

        <section className="faq-search-filter-section">
          <div className="section-container">
            {/* Search Input Bar */}
            <div className="faq-search-bar-container glass-card">
              <Search className="search-icon-input" size={20} />
              <input 
                type="text" 
                placeholder="Search questions or keywords (e.g., Stripe, AWS, pricing)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>

            {/* Category tabs */}
            <div className="faq-category-tabs-row">
              <button className={`faq-cat-tab ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>All</button>
              <button className={`faq-cat-tab ${selectedCategory === 'pricing' ? 'active' : ''}`} onClick={() => setSelectedCategory('pricing')}>Pricing</button>
              <button className={`faq-cat-tab ${selectedCategory === 'development' ? 'active' : ''}`} onClick={() => setSelectedCategory('development')}>Timeline</button>
              <button className={`faq-cat-tab ${selectedCategory === 'support' ? 'active' : ''}`} onClick={() => setSelectedCategory('support')}>Support</button>
              <button className={`faq-cat-tab ${selectedCategory === 'saas' ? 'active' : ''}`} onClick={() => setSelectedCategory('saas')}>SaaS</button>
              <button className={`faq-cat-tab ${selectedCategory === 'ai' ? 'active' : ''}`} onClick={() => setSelectedCategory('ai')}>AI</button>
              <button className={`faq-cat-tab ${selectedCategory === 'servers' ? 'active' : ''}`} onClick={() => setSelectedCategory('servers')}>Servers</button>
              <button className={`faq-cat-tab ${selectedCategory === 'seo' ? 'active' : ''}`} onClick={() => setSelectedCategory('seo')}>SEO</button>
            </div>

            {/* List of Accordions */}
            <div className="faq-page-accordion-list">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`faq-accordion-item glass-card ${isOpen ? 'is-open' : ''}`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <div className="faq-accordion-header">
                        <div className="faq-question-box">
                          <HelpCircle size={18} className="faq-question-icon" />
                          <h3>{faq.question}</h3>
                        </div>
                        <button className="faq-toggle-btn">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                      <div className="faq-accordion-content">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="faq-no-results glass-card text-center">
                  <p>No questions matching "{searchQuery}" were found. Try another search term.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="subpage-cta-section">
          <div className="section-container text-center">
            <h2 className="text-gradient">Have a Specific Project Question?</h2>
            <p>Reach out to our software consultants directly and get a customized technical solution draft.</p>
            <button className="cta-quote-btn outline-cta mx-auto mt-6" onClick={openContact}>
              Contact Us Now <ArrowRight size={15} />
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
