"use client";

import { CONTACT, WA_BASE } from '../constants/config';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const handleOpenWidget = () => {
    const text = encodeURIComponent("Hi Clienxo, I'd like to discuss a project!");
    window.open(`${WA_BASE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="wa-widget-container">
      {/* Sleek Premium Tooltip */}
      <div className="wa-tooltip">
        Chat with us
      </div>

      {/* Floating Button Bubble */}
      <button
        className="wa-float-btn"
        onClick={handleOpenWidget}
        aria-label="Chat on WhatsApp"
      >
        {/* Custom official WhatsApp SVG Logo */}
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
