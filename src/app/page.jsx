"use client";

import { useState, useEffect, useRef } from 'react';

// Component Imports
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ServiceDetailModal from '../components/ServiceDetailModal';
import ContactPage from '../components/ContactPage';

// New Section Imports
import SolutionsBuild from '../components/SolutionsBuild';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqAccordion from '../components/FaqAccordion';
import WhatWeDoPage from '../components/WhatWeDoPage';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Home() {
  // Navigation & Theme
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isClickScrollingRef = useRef(false);

  const getNavActiveSection = (section) => {
    if (['home'].includes(section)) return 'home';
    if (['about', 'why-choose-us'].includes(section)) return 'about';
    if (['services', 'solutions-build', 'process-timeline', 'faq'].includes(section)) return 'services';
    return section;
  };

  // Shared States
  const [selectedService, setSelectedService] = useState(null);

  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);

  const openWhatWeDo = () => setIsWhatWeDoOpen(true);
  const closeWhatWeDo = () => setIsWhatWeDoOpen(false);
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



  // Setup Theme on Mount & Update
  useEffect(() => {
    setMounted(true);
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

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

    const sections = ['home', 'about', 'services', 'why-choose-us', 'solutions-build', 'process-timeline', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      if (!entries) return;
      if (isClickScrollingRef.current) return;
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
    if (id === 'contact') {
      openContact();
      return;
    }
    
    // Instantly update active section to clicked link
    setActiveSection(id);
    isClickScrollingRef.current = true;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Release the observer update lock after smooth scroll settles
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  return (
    <>
      <div className="tech-grid"></div>
      
      {/* Premium Dark Theme Neon Glow Elements */}
      <div className="dark-theme-glow-1"></div>
      <div className="dark-theme-glow-2"></div>

      <Header
        scrolled={scrolled}
        activeSection={getNavActiveSection(activeSection)}
        handleScrollTo={handleScrollTo}
        theme={theme}
        handleToggleTheme={handleToggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openContact={openContact}
        mounted={mounted}
      />

      <Hero handleScrollTo={handleScrollTo} openContact={openContact} />

      <div style={{ position: 'relative', zIndex: 20, backgroundColor: 'var(--bg-primary)' }}>
        <About handleScrollTo={handleScrollTo} openContact={openContact} />

      <Stats />

      <Features />

      <WhyChooseUs />

      <Services handleScrollTo={handleScrollTo} setSelectedService={setSelectedService} openContact={openContact} />
      <SolutionsBuild openWhatWeDo={openWhatWeDo} />

      <ProcessTimeline />

      <FaqAccordion />

        <Footer handleScrollTo={handleScrollTo} openContact={openContact} />
      </div>

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

      <WhatWeDoPage
        isOpen={isWhatWeDoOpen}
        onClose={closeWhatWeDo}
      />
      <WhatsAppWidget />
    </>
  );
}
