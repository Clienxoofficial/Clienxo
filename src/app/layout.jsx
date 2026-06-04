import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import '../index.css';
import '../App.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Clienxo | Next-Gen Digital IT Solutions & Consulting',
  description: 'Clienxo - Custom Software Development, Cloud Consulting, Cybersecurity, and AI Solutions.',
  keywords: 'Clienxo, Software Development, IT Consulting, Tech Partner, Web Apps, Mobile Apps, Cloud Services',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
