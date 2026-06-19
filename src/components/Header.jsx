"use client";
import { Sparkles, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import GooeyNav from './GooeyNav';

export default function Header({
  scrolled,
  activeSection,
  handleScrollTo,
  theme,
  handleToggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  openContact,
  mounted
}) {
  const sectionToIndex = {
    'home': 0,
    'services': 1,
    'about': 2,
    'contact': 3
  };
  const activeIndex = sectionToIndex[activeSection] !== undefined ? sectionToIndex[activeSection] : 0;

  const navItems = [
    { label: "Home", href: "#home", onClick: () => handleScrollTo('home') },
    { label: "Services", href: "#services", onClick: () => handleScrollTo('services') },
    { label: "About", href: "#about", onClick: () => handleScrollTo('about') },
    { label: "Contact", href: "#contact", onClick: openContact },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScrollTo('home')}>
          <Sparkles className="logo-spark" />
          <span className="logo-text" data-text="CLIENXO">CLIEN<span className="text-gradient">XO</span></span>
        </div>

        <nav className="desktop-nav">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex}
            particleCount={12}
            particleDistances={[60, 8]}
            particleR={80}
            animationTime={500}
            timeVariance={200}
          />
        </nav>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={handleToggleTheme} aria-label="Toggle theme">
            {!mounted ? (
              <div style={{ width: 20, height: 20 }} />
            ) : theme === 'light' ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <button className="cta-quote-btn outline-cta" onClick={openContact}>
            Get Free Quote <ArrowRight size={15} />
          </button>

          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="mobile-nav-drawer">
          <button onClick={() => handleScrollTo('home')}>Home</button>
          <button onClick={() => handleScrollTo('services')}>Services</button>
          <button onClick={() => handleScrollTo('about')}>About</button>
          <button onClick={() => { setIsMenuOpen(false); openContact(); }}>Contact</button>
          <button className="mobile-cta-btn" onClick={() => { setIsMenuOpen(false); openContact(); }}>Get Free Quote</button>
        </div>
      )}
    </header>
  );
}
