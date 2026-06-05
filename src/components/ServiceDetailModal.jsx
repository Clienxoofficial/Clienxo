"use client";
import { X, Check, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ selectedService, setSelectedService, setFormData, openContact }) {
  if (!selectedService) return null;

  const handleDiscussService = () => {
    setFormData(prev => ({
      ...prev,
      projectType: selectedService.id === 'database' ? 'security' : selectedService.id,
      message: `Hi, I am interested in discussing your ${selectedService.title} services. Please contact me with more information.`
    }));
    setSelectedService(null);
    openContact();
  };

  return (
    <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedService(null)} aria-label="Close modal">
          <X size={20} />
        </button>
        <div className="modal-header">
          <div className="modal-icon-box">{selectedService.icon}</div>
          <h3>{selectedService.title}</h3>
        </div>
        <div className="modal-body">
          <p className="modal-large-desc">{selectedService.detail}</p>
          
          {selectedService.servicesList && (
            <div className="modal-services-section">
              <h4 className="modal-section-title">What We Offer</h4>
              <div className="modal-services-grid">
                {selectedService.servicesList.map((srv, idx) => (
                  <div key={idx} className="modal-srv-item">
                    <span className="modal-srv-dot"></span>
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedService.benefitsList && (
            <div className="modal-benefits-section">
              <h4 className="modal-section-title">Key Benefits</h4>
              <div className="modal-benefits-grid">
                {selectedService.benefitsList.map((bnf, idx) => (
                  <div key={idx} className="modal-bnf-item">
                    <Check size={14} className="modal-bnf-check" />
                    <span>{bnf}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="modal-action-btn" onClick={handleDiscussService}>
            Discuss This Service <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
