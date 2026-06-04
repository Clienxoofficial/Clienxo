"use client";

import { useState, useEffect } from 'react';

// Component Imports
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import Estimator from '../components/Estimator';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ServiceDetailModal from '../components/ServiceDetailModal';
import ContactPage from '../components/ContactPage';

// New Section Imports
import Expertise from '../components/Expertise';
import TechEcosystem from '../components/TechEcosystem';
import SolutionsBuild from '../components/SolutionsBuild';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import FaqAccordion from '../components/FaqAccordion';

export default function Home() {
  // Navigation & Theme
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) return localTheme;
        if (window.matchMedia) {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return prefersDark ? 'dark' : 'light';
        }
      }
    } catch (e) {
      console.warn("Theme query failed", e);
    }
    return 'dark';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Shared States
  const [selectedService, setSelectedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'web',
    message: ''
  });

  // Open contact modal
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Handle scroll progress tracking
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Setup Theme on Mount & Update
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-triggered entry animations & active link state
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.fade-in-section').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const sections = ['home', 'about', 'services', 'process', 'estimator', 'testimonials', 'why-choose-us', 'expertise', 'tech-ecosystem', 'solutions-build', 'process-timeline', 'industries', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      if (!entries) return;
      entries.forEach(entry => {
        if (entry && entry.isIntersecting && entry.target) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    // Reveal elements animation observer
    const revealObserver = new IntersectionObserver((entries) => {
      if (!entries) return;
      entries.forEach(entry => {
        if (entry && entry.isIntersecting && entry.target) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => {
      revealObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleScrollTo = (id) => {
    setIsMenuOpen(false);
    // 'contact' now opens the modal instead of scrolling
    if (id === 'contact') {
      openContact();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="tech-grid"></div>
      
      {/* Premium Dark Theme Neon Glow Elements */}
      <div className="dark-theme-glow-1"></div>
      <div className="dark-theme-glow-2"></div>

      <Header
        scrolled={scrolled}
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
        theme={theme}
        handleToggleTheme={handleToggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openContact={openContact}
      />

      <Hero handleScrollTo={handleScrollTo} openContact={openContact} />

      <About handleScrollTo={handleScrollTo} openContact={openContact} />

      <Stats />

      <Features />

      <WhyChooseUs />

      <Services handleScrollTo={handleScrollTo} setSelectedService={setSelectedService} openContact={openContact} />

      <Expertise />

      <TechEcosystem />

      <SolutionsBuild />

      <ProcessTimeline />

      <Industries />

      <Estimator handleScrollTo={handleScrollTo} setFormData={setFormData} openContact={openContact} />

      <Testimonials />

      <FaqAccordion />

      <Footer handleScrollTo={handleScrollTo} openContact={openContact} />

      <ServiceDetailModal
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        setFormData={setFormData}
        openContact={openContact}
      />

      <ContactPage
        isOpen={isContactOpen}
        onClose={closeContact}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
