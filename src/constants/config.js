/**
 * Clienxo — Central Contact Configuration
 * All sensitive values are loaded from .env.local
 * Never hardcode phone/email directly in components.
 */

export const CONTACT = {
  phoneDisplay:  process.env.NEXT_PUBLIC_PHONE_DISPLAY  || '+91 75940 04126',
  phoneLink:     process.env.NEXT_PUBLIC_PHONE_LINK     || '+917594004126',
  waNumber:      process.env.NEXT_PUBLIC_WA_NUMBER      || '917594004126',
  email:         process.env.NEXT_PUBLIC_EMAIL          || 'clienxoofficial@gmail.com',
  companyName:   process.env.NEXT_PUBLIC_COMPANY_NAME   || 'Clienxo',
  siteUrl:       process.env.NEXT_PUBLIC_SITE_URL       || 'https://clienxo.com',
};

export const WA_BASE = `https://wa.me/${CONTACT.waNumber}`;
export const TEL_LINK = `tel:${CONTACT.phoneLink}`;
export const MAIL_LINK = `mailto:${CONTACT.email}`;
