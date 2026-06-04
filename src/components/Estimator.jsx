"use client";
import { useState, useEffect } from 'react';
import { Code, Smartphone, Database, Brain, DollarSign, Calendar, Check, ArrowRight } from 'lucide-react';

export default function Estimator({ handleScrollTo, setFormData, openContact }) {
  const [estimatorType, setEstimatorType] = useState('web');
  const [estimatorComplexity, setEstimatorComplexity] = useState('business');
  const [estimatorAddons, setEstimatorAddons] = useState({
    auth: false,
    database: false,
    payment: false,
    seo: false,
    security: false
  });
  const [calculatedQuote, setCalculatedQuote] = useState({ price: 0, timeline: 0 });

  // Quote Calculator Logic
  useEffect(() => {
    let basePrice = 3000;
    let baseWeeks = 4;

    switch (estimatorType) {
      case 'web':
        basePrice = 3500;
        baseWeeks = 4;
        break;
      case 'mobile':
        basePrice = 5000;
        baseWeeks = 6;
        break;
      case 'saas':
        basePrice = 6500;
        baseWeeks = 8;
        break;
      case 'ai':
        basePrice = 6000;
        baseWeeks = 7;
        break;
      default:
        break;
    }

    let multiplier = 1.0;
    switch (estimatorComplexity) {
      case 'mvp': multiplier = 0.8; break;
      case 'business': multiplier = 1.2; break;
      case 'enterprise': multiplier = 1.8; break;
      default: break;
    }

    let addOnCost = 0;
    let addOnWeeks = 0;

    if (estimatorAddons.auth) { addOnCost += 800; addOnWeeks += 1; }
    if (estimatorAddons.database) { addOnCost += 1000; addOnWeeks += 1; }
    if (estimatorAddons.payment) { addOnCost += 700; addOnWeeks += 1; }
    if (estimatorAddons.seo) { addOnCost += 500; addOnWeeks += 0.5; }
    if (estimatorAddons.security) { addOnCost += 1200; addOnWeeks += 1.5; }

    const finalPrice = Math.round((basePrice * multiplier) + addOnCost);
    const finalWeeks = Math.ceil((baseWeeks * multiplier) + addOnWeeks);

    setCalculatedQuote({ price: finalPrice, timeline: finalWeeks });
  }, [estimatorType, estimatorComplexity, estimatorAddons]);

  const handleAddonToggle = (key) => {
    setEstimatorAddons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const applyQuoteToForm = () => {
    const activeAddonsList = Object.entries(estimatorAddons)
      .filter(([_, active]) => active)
      .map(([key]) => {
        if (key === 'auth') return 'User Auth';
        if (key === 'database') return 'Integrations/DB';
        if (key === 'payment') return 'Payments Gateway';
        if (key === 'seo') return 'SEO Optimization';
        if (key === 'security') return 'Advanced Security Audits';
        return key;
      });

    const addonsText = activeAddonsList.length > 0
      ? ` + [Add-ons: ${activeAddonsList.join(', ')}]`
      : '';

    const text = `Hi, I am interested in building a ${estimatorType.toUpperCase()} project (${estimatorComplexity.toUpperCase()} Level)${addonsText}. 
Estimate generated from calculator: $${calculatedQuote.price.toLocaleString()} in ~${calculatedQuote.timeline} weeks. I would like to discuss this further.`;

    setFormData(prev => ({
      ...prev,
      projectType: estimatorType,
      message: text
    }));

    openContact();
  };

  return (
    <section id="estimator" className="estimator-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">BUDGET ESTIMATOR</span>
          <h2 className="section-title uppercase">Interactive Project Cost & Timeline Estimator</h2>
          <div className="header-bar"></div>
          <p className="section-subtitle">
            Plan your database engineering, web development, or AI pipelines budget transparently.
          </p>
        </div>

        <div className="estimator-layout">
          <div className="estimator-configurator">
            <div className="estimator-group">
              <h4>1. Project Type</h4>
              <div className="estimator-options">
                <button className={`estimator-btn ${estimatorType === 'web' ? 'active' : ''}`} onClick={() => setEstimatorType('web')}><Code size={16} /> Web App</button>
                <button className={`estimator-btn ${estimatorType === 'mobile' ? 'active' : ''}`} onClick={() => setEstimatorType('mobile')}><Smartphone size={16} /> Mobile App</button>
                <button className={`estimator-btn ${estimatorType === 'saas' ? 'active' : ''}`} onClick={() => setEstimatorType('saas')}><Database size={16} /> SaaS Portal</button>
                <button className={`estimator-btn ${estimatorType === 'ai' ? 'active' : ''}`} onClick={() => setEstimatorType('ai')}><Brain size={16} /> AI Platform</button>
              </div>
            </div>

            <div className="estimator-group mt-6">
              <h4>2. Scalability & Scope</h4>
              <div className="estimator-options">
                <button className={`estimator-btn ${estimatorComplexity === 'mvp' ? 'active' : ''}`} onClick={() => setEstimatorComplexity('mvp')}>Startup MVP</button>
                <button className={`estimator-btn ${estimatorComplexity === 'business' ? 'active' : ''}`} onClick={() => setEstimatorComplexity('business')}>Grow Business</button>
                <button className={`estimator-btn ${estimatorComplexity === 'enterprise' ? 'active' : ''}`} onClick={() => setEstimatorComplexity('enterprise')}>Enterprise Scale</button>
              </div>
            </div>

            <div className="estimator-group mt-6">
              <h4>3. Technical Add-Ons</h4>
              <div className="addons-grid">
                <label className={`addon-checkbox-label ${estimatorAddons.auth ? 'checked' : ''}`}>
                  <input type="checkbox" checked={estimatorAddons.auth} onChange={() => handleAddonToggle('auth')} />
                  <div className="addon-content"><h5>Secure Authentication</h5><p>Multi-role authorization, Google/GitHub OAuth logins.</p></div>
                </label>
                <label className={`addon-checkbox-label ${estimatorAddons.database ? 'checked' : ''}`}>
                  <input type="checkbox" checked={estimatorAddons.database} onChange={() => handleAddonToggle('database')} />
                  <div className="addon-content"><h5>Database Integration</h5><p>Real-time updates, custom SQL schemas, query indices.</p></div>
                </label>
                <label className={`addon-checkbox-label ${estimatorAddons.payment ? 'checked' : ''}`}>
                  <input type="checkbox" checked={estimatorAddons.payment} onChange={() => handleAddonToggle('payment')} />
                  <div className="addon-content"><h5>Stripe / Billing Integration</h5><p>Credit cards billing systems, subscription lifecycles.</p></div>
                </label>
                <label className={`addon-checkbox-label ${estimatorAddons.seo ? 'checked' : ''}`}>
                  <input type="checkbox" checked={estimatorAddons.seo} onChange={() => handleAddonToggle('seo')} />
                  <div className="addon-content"><h5>Core SEO Pack</h5><p>Sitemaps creation, schema markup configurations.</p></div>
                </label>
                <label className={`addon-checkbox-label ${estimatorAddons.security ? 'checked' : ''}`}>
                  <input type="checkbox" checked={estimatorAddons.security} onChange={() => handleAddonToggle('security')} />
                  <div className="addon-content"><h5>Cybersecurity Audit</h5><p>WAF protection settings, encryption key rotation checkups.</p></div>
                </label>
              </div>
            </div>
          </div>

          <div className="estimator-results-card">
            <div className="results-badge">PROJECTIONS</div>
            <h3>Estimated Budget</h3>
            <div className="results-price">
              <DollarSign className="dollar-icon" />
              <span className="price-num">{calculatedQuote.price.toLocaleString()}</span>
              <span className="price-tag">*</span>
            </div>
            <div className="results-timeline mt-4">
              <Calendar className="calendar-icon" />
              <div>
                <strong>Estimated Timeframe</strong>
                <p>~ {calculatedQuote.timeline} Business Weeks</p>
              </div>
            </div>
            <div className="results-details-list">
              <div className="detail-row"><span>Standard hosting deployment setup</span><Check size={14} className="text-green" /></div>
              <div className="detail-row"><span>Git Repository ownership rights</span><Check size={14} className="text-green" /></div>
              <div className="detail-row"><span>30 Days post-launch SLA support</span><Check size={14} className="text-green" /></div>
            </div>
            <button className="apply-quote-btn" onClick={applyQuoteToForm}>
              Apply Estimate to Form <ArrowRight size={16} />
            </button>
            <p className="disclaimer">*Estimation only. Final quotes are generated post detailed consulting audit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
