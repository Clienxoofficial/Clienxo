"use client";
import { useEffect, useState } from 'react';
import { X, Shield, FileText, ChevronRight } from 'lucide-react';

const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  icon: Shield,
  lastUpdated: "June 2026",
  sections: [
    {
      heading: "1. Information We Collect",
      body: `When you contact us, request a quote, or use our services, we may collect the following information:
      
• **Personal Identifiers**: Full name, email address, phone number, and company name.
• **Project Details**: Messages, project descriptions, and service requirements you share with us.
• **Technical Data**: Browser type, IP address, device type, and pages visited (via standard web analytics).
• **Communication Records**: Records of emails, WhatsApp messages, and calls for support and project coordination.`
    },
    {
      heading: "2. How We Use Your Information",
      body: `We use the information collected solely to deliver and improve our services:

• To respond to inquiries and provide project quotes.
• To communicate project updates, timelines, and deliverables.
• To send relevant technical proposals and service information.
• To improve our website experience and service quality.
• To comply with applicable legal obligations.

We never sell, rent, or trade your personal data to third parties for marketing purposes.`
    },
    {
      heading: "3. Data Storage & Security",
      body: `Your data is stored securely and protected with industry-standard measures:

• All communications are encrypted in transit using TLS/SSL protocols.
• Access to your data is strictly limited to team members who need it to deliver your project.
• We use secure infrastructure hosted on AWS and Google Cloud with SOC 2-compliant environments.
• We retain your data only as long as necessary for the service relationship or as required by law.`
    },
    {
      heading: "4. Cookies & Tracking",
      body: `Our website uses minimal, privacy-respecting tracking:

• **Essential Cookies**: Required for basic website functionality and security.
• **Analytics**: We use anonymised analytics to understand page performance. No personally identifiable data is collected.
• You can disable cookies via your browser settings at any time without affecting core functionality.`
    },
    {
      heading: "5. Third-Party Services",
      body: `We may use trusted third-party tools to deliver services:

• **WhatsApp Business API** – for client communication.
• **Google Analytics** – for anonymised website traffic insights.
• **AWS / Google Cloud** – for secure data storage and infrastructure.

Each third party has their own privacy policy and we recommend reviewing them independently.`
    },
    {
      heading: "6. Your Rights",
      body: `You have full control over your personal data:

• **Access**: Request a copy of the data we hold about you.
• **Correction**: Request corrections to inaccurate information.
• **Deletion**: Request deletion of your personal data at any time.
• **Opt-Out**: Unsubscribe from any communications at any time.

To exercise any of these rights, contact us at: sivanandmp18@gmail.com`
    },
    {
      heading: "7. Contact Us",
      body: `If you have any questions about this Privacy Policy or how we handle your data, please reach out:

📧 Email: sivanandmp18@gmail.com
📞 Phone: +91 94476 28475
💬 WhatsApp: wa.me/919447628475

We aim to respond to all privacy-related queries within 2 business days.`
    }
  ]
};

const TERMS_CONTENT = {
  title: "Terms of Service",
  icon: FileText,
  lastUpdated: "June 2026",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: `By accessing our website, requesting a quote, or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.

These terms apply to all visitors, clients, and users who access or use Clienxo's services.`
    },
    {
      heading: "2. Services Provided",
      body: `Clienxo provides custom software development and IT consulting services including, but not limited to:

• Web and mobile application development (React, Next.js, Flutter, React Native)
• AI integrations, chatbots, and automation workflows
• SaaS platform development and cloud architecture
• Database design, optimisation, and migrations
• UI/UX design and enterprise software consulting

All services are delivered based on agreed project scopes defined in individual contracts or statements of work.`
    },
    {
      heading: "3. Project Agreements",
      body: `Each project engagement is governed by a separate written agreement or proposal that outlines:

• Project scope, deliverables, and timeline
• Payment terms and milestone schedule
• Revision and change request policies
• Intellectual property ownership
• Confidentiality and NDA terms (signed on request)

In case of conflict between these Terms of Service and a specific project agreement, the project agreement shall take precedence.`
    },
    {
      heading: "4. Payment Terms",
      body: `Unless otherwise specified in a project agreement:

• An initial deposit (typically 30–50%) is required before project commencement.
• Milestone-based payments are due within 7 days of milestone completion.
• Final payment is required before the delivery of production-ready code or deployment access.
• Late payments may result in project suspension after a 14-day grace period.
• All prices are exclusive of applicable taxes unless stated otherwise.`
    },
    {
      heading: "5. Intellectual Property",
      body: `Upon receipt of full payment for a project:

• All custom code, designs, and deliverables created exclusively for your project become your property.
• Clienxo retains the right to reference the project in our portfolio unless a non-disclosure agreement is in place.
• Any pre-existing frameworks, libraries, or tools used remain the property of their respective owners under their applicable licences.
• Open-source components used in your project are governed by their respective open-source licences.`
    },
    {
      heading: "6. Confidentiality",
      body: `Both parties agree to maintain the confidentiality of proprietary and sensitive information:

• We do not disclose client project details, business logic, or data to any third parties without explicit written consent.
• Signed NDAs are available on request at no additional cost.
• Client communications, credentials, and access details are stored securely and never shared externally.`
    },
    {
      heading: "7. Limitation of Liability",
      body: `Clienxo's total liability for any claim arising from our services shall not exceed the total fees paid for the specific project in question.

We are not liable for:
• Indirect, incidental, or consequential damages arising from use of our deliverables.
• Data loss caused by client-managed infrastructure or third-party services.
• Downtime resulting from third-party hosting providers or force majeure events.`
    },
    {
      heading: "8. Termination",
      body: `Either party may terminate a project engagement with 14 days' written notice. Upon termination:

• Work completed to date will be delivered to the client.
• Payment for completed milestones is due regardless of termination.
• Any deposits paid for work not yet started may be refunded at Clienxo's discretion.`
    },
    {
      heading: "9. Governing Law",
      body: `These Terms of Service are governed by the laws of India. Any disputes shall be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the jurisdiction of the courts of Kerala, India.`
    },
    {
      heading: "10. Contact",
      body: `For any questions regarding these Terms of Service:

📧 Email: sivanandmp18@gmail.com
📞 Phone: +91 94476 28475
🌐 Website: clienxo.com`
    }
  ]
};

export default function LegalModal({ type, onClose }) {
  const [closing, setClosing] = useState(false);
  const content = type === 'privacy' ? PRIVACY_CONTENT : TERMS_CONTENT;
  const Icon = content.icon;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  };

  if (!type) return null;

  return (
    <div className={`lm-overlay ${closing ? 'lm-overlay--out' : 'lm-overlay--in'}`} onClick={handleClose}>
      <div
        className={`lm-panel ${closing ? 'lm-panel--out' : 'lm-panel--in'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
      >
        {/* Header */}
        <div className="lm-header">
          <div className="lm-header__left">
            <div className="lm-header__icon">
              <Icon size={18} />
            </div>
            <div>
              <h2 className="lm-title">{content.title}</h2>
              <p className="lm-updated">Last updated: {content.lastUpdated}</p>
            </div>
          </div>
          <button className="lm-close" onClick={handleClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="lm-body">
          {content.sections.map((section, i) => (
            <div key={i} className="lm-section">
              <div className="lm-section__heading">
                <ChevronRight size={14} className="lm-section__arrow" />
                <h3>{section.heading}</h3>
              </div>
              <div className="lm-section__body">
                {section.body.split('\n').map((line, j) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <br key={j} />;
                  if (trimmed.startsWith('•')) {
                    return (
                      <div key={j} className="lm-bullet">
                        <span className="lm-bullet__dot">•</span>
                        <span dangerouslySetInnerHTML={{ __html: trimmed.slice(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </div>
                    );
                  }
                  if (trimmed.startsWith('📧') || trimmed.startsWith('📞') || trimmed.startsWith('💬') || trimmed.startsWith('🌐')) {
                    return <p key={j} className="lm-contact-line">{trimmed}</p>;
                  }
                  return <p key={j} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="lm-footer">
          <p>© {new Date().getFullYear()} Clienxo. All rights reserved.</p>
          <button className="lm-close-btn" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
