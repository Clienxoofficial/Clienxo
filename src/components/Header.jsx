"use client";
import { Sparkles, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

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
  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleScrollTo('home')}>
          <Sparkles className="logo-spark" />
          <span className="logo-text" data-text="CLIENXO">CLIEN<span className="text-gradient">XO</span></span>
        </div>

        <nav className="desktop-nav">
          <button className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleScrollTo('home')}>Platform</button>
          <button className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => handleScrollTo('services')}>Services</button>
          <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={openContact}>Contact Us</button>
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
          <button onClick={() => handleScrollTo('home')}>Platform</button>
          <button onClick={() => handleScrollTo('services')}>Services</button>
          <button onClick={() => { setIsMenuOpen(false); openContact(); }}>Contact Us</button>
          <button className="mobile-cta-btn" onClick={() => { setIsMenuOpen(false); openContact(); }}>Get Free Quote</button>
        </div>
      )}
    </header>
  );
}
