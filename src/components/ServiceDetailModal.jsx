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
          <div className="modal-highlights">
            <div className="highlight-tag"><Check size={14} className="text-green" /> Production Performance SLA</div>
            <div className="highlight-tag"><Check size={14} className="text-green" /> Comprehensive Security Audited</div>
            <div className="highlight-tag"><Check size={14} className="text-green" /> Dedicated Senior Engineers</div>
          </div>
          <button className="modal-action-btn" onClick={handleDiscussService}>
            Discuss This Service <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
