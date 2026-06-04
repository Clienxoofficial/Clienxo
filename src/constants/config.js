/**
 * Clienxo — Central Contact Configuration
 * All sensitive values are loaded from .env.local
 * Never hardcode phone/email directly in components.
 */

export const CONTACT = {
  phoneDisplay:  process.env.NEXT_PUBLIC_PHONE_DISPLAY  || '+91 94476 28475',
  phoneLink:     process.env.NEXT_PUBLIC_PHONE_LINK     || '+919447628475',
  waNumber:      process.env.NEXT_PUBLIC_WA_NUMBER      || '919447628475',
  email:         process.env.NEXT_PUBLIC_EMAIL          || 'sivanandmp18@gmail.com',
  companyName:   process.env.NEXT_PUBLIC_COMPANY_NAME   || 'Clienxo',
  siteUrl:       process.env.NEXT_PUBLIC_SITE_URL       || 'https://clienxo.com',
};

export const WA_BASE = `https://wa.me/${CONTACT.waNumber}`;
export const TEL_LINK = `tel:${CONTACT.phoneLink}`;
export const MAIL_LINK = `mailto:${CONTACT.email}`;
