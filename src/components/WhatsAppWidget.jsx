"use client";

import { CONTACT, WA_BASE } from '../constants/config';

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
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.498 1.451 5.438 1.453 5.584 0 10.128-4.542 10.131-10.127.002-2.706-1.037-5.251-2.93-7.149C17.34 1.433 14.79 .392 12.012.392 6.431.392 1.887 4.934 1.884 10.522c-.001 1.986.517 3.93 1.498 5.59l-1.007 3.675 3.772-.99zM17.47 14.397c-.3-.149-1.777-.878-2.076-.984-.3-.11-.519-.165-.736.165-.219.33-.847 1.07-.1038 1.258-.19.188-.38.077-.678-.073-1.292-.643-2.125-1.424-2.828-2.63-.19-.324.19-.301.543-.997.09-.188.045-.353-.022-.486-.068-.135-.52-1.25-.713-1.713-.188-.453-.378-.39-.52-.397-.135-.007-.29-.007-.446-.007-.156 0-.411.059-.626.294-.215.233-.822.802-.822 1.953 0 1.15.836 2.259.95 2.413.116.155 1.64 2.5 3.97 3.51.554.241 1.05.385 1.408.497.556.177 1.061.151 1.461.092.445-.067 1.777-.729 2.026-1.432.25-.702.25-1.303.175-1.43-.075-.129-.27-.206-.57-.355z" />
        </svg>
      </button>
    </div>
  );
}
