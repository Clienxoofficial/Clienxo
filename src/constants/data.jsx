import { Globe, Cpu, MessageSquare, Layout, Code, ShieldCheck } from 'lucide-react';

export const HERO_WORDS = ["Startup Websites", "AI Automations", "AI Chatbots", "UI/UX Designs", "Custom Web Apps"];

export const SERVICES = [
  {
    id: 'websites',
    icon: <Globe className="service-icon" />,
    title: 'Startup Website Development',
    short: 'Build a strong online presence with modern, high-converting websites.',
    detail: 'Clienxo designs and engineers premium websites that captivate visitors, load instantly, and drive organic startup growth. From custom landing pages to robust Next.js product sites, we focus on responsive web performance, SEO-friendly HTML structures, and conversion optimization.',
    servicesList: ['Startup Landing Pages', 'Business Websites', 'SaaS Websites', 'Portfolio Websites', 'Product Launch Websites', 'Custom Website Development'],
    benefitsList: ['Professional Brand Presence', 'Faster Customer Acquisition', 'Mobile Responsive Design', 'SEO-Friendly Development']
  },
  {
    id: 'automation',
    icon: <Cpu className="service-icon" />,
    title: 'AI Automation Solutions',
    short: 'Reduce manual work and improve business efficiency through automation.',
    detail: 'Free your team from repetitive manual tasks. We design intelligent workflow integrations, lead processing, custom API integrations, and email triggers to streamline operations and ensure zero human error.',
    servicesList: ['Workflow Automation', 'Email Automation', 'Lead Management Automation', 'CRM Automation', 'Report Generation Automation', 'Custom AI Workflows'],
    benefitsList: ['Save Time & Resources', 'Increase Productivity', 'Reduce Human Errors', 'Scale Operations Faster']
  },
  {
    id: 'chatbots',
    icon: <MessageSquare className="service-icon" />,
    title: 'AI Chatbots & AI Agents',
    short: 'Provide instant customer support and automate business communication.',
    detail: 'Provide instant 24/7 engagement for your visitors. We build context-aware AI assistants, lead capture bots, and appointment setters that connect to your databases and answer user tickets instantly.',
    servicesList: ['Website AI Chatbots', 'Lead Generation Bots', 'Customer Support Bots', 'Appointment Booking Bots', 'AI Virtual Assistants', 'Sales Assistance Bots'],
    benefitsList: ['24/7 Customer Support', 'Higher Lead Conversion', 'Faster Response Time', 'Improved Customer Experience']
  },
  {
    id: 'uiux',
    icon: <Layout className="service-icon" />,
    title: 'UI/UX Design',
    short: 'Create user-friendly and visually appealing digital products.',
    detail: 'A premium product starts with design that makes sense. We engineer sleek user interfaces, custom SaaS dashboards, and mobile views. We wireframe, prototype, and conduct UX audits to guarantee maximum conversion and retention rates.',
    servicesList: ['Website UI Design', 'SaaS Dashboard Design', 'Mobile App UI Design', 'Wireframing', 'Prototyping', 'UX Research & Optimization'],
    benefitsList: ['Better User Engagement', 'Higher Conversion Rates', 'Modern & Professional Design', 'Improved User Retention']
  },
  {
    id: 'customapps',
    icon: <Code className="service-icon" />,
    title: 'Custom Web Applications',
    short: 'Develop scalable software solutions tailored to startup needs.',
    detail: 'Scale your startup operations with custom business management software. We develop high-speed admin dashboards, CRM panels, booking apps, and client portals built to match your team workflows perfectly.',
    servicesList: ['Admin Dashboards', 'CRM Systems', 'Business Management Portals', 'Appointment Management Systems', 'Client Management Systems', 'Custom Business Applications'],
    benefitsList: ['Streamlined Operations', 'Centralized Business Management', 'Scalable Infrastructure', 'Increased Efficiency']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    desc: 'We map out your business objectives, target audience, and engineering constraints to architect a customized technology strategy.'
  },
  {
    step: '02',
    title: 'UX/UI Engineering',
    desc: 'We design modern, interactive prototypes that showcase the premium user experience before writing a single line of backend code.'
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Our developers write modular, clean code in weekly sprints, keeping you updated in real-time through staging environment previews.'
  },
  {
    step: '04',
    title: 'Quality Engineering',
    desc: 'Rigorous automated tests, unit checks, responsive verification, and penetration tests are performed to guarantee product perfection.'
  },
  {
    step: '05',
    title: 'Deployment & Scaling',
    desc: 'We deploy to highly scalable cloud platforms and provide training guides, dashboard guides, and ongoing security updates.'
  }
];

export const PROJECTS = [
  {
    title: 'Clienxo CRM Suite',
    category: 'web',
    desc: 'A comprehensive cloud-based resource planning dashboard for managing global supply chains and payroll automation.',
    tags: ['React', 'PostgreSQL', 'NodeJS', 'AWS'],
    metric: '40% productivity boost'
  },
  {
    title: 'HealthVibe App',
    category: 'mobile',
    desc: 'Secure iOS and Android telemedicine app supporting encrypted video consultations and wearable device synchronization.',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'HIPAA'],
    metric: '500k+ Active Users'
  },
  {
    title: 'Secure Cloud Matrix',
    category: 'security',
    desc: 'A Zero-Trust network infrastructure overhaul for an international financial group protecting petabytes of customer transactions.',
    tags: ['Terraform', 'Kubernetes', 'Cybersecurity', 'Azure'],
    metric: 'Zero Security Breaches'
  },
  {
    title: 'Predictive Neural Engine',
    category: 'ai',
    desc: 'AI forecasting tool integrated into enterprise retail software to automatically project raw material supply demands.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Elasticsearch'],
    metric: '94.2% forecasting accuracy'
  },
  {
    title: 'SaaS Marketplace Hub',
    category: 'web',
    desc: 'Multi-tenant subscription platform with embedded payment split systems and automated developer billing panels.',
    tags: ['NextJS', 'Stripe', 'Redis', 'Tailwind'],
    metric: '$12M+ volume processed'
  },
  {
    title: 'CryptoGuardian Wallet',
    category: 'security',
    desc: 'Multi-signature decentralized finance mobile dashboard built with military-grade key encryption mechanisms.',
    tags: ['React Native', 'Rust', 'OAuth', 'Biometrics'],
    metric: 'Military-Grade Security'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Clienxo shipped our MVP in just 4 weeks! The React web app they engineered is lightning fast, beautiful, and our first 1,000 beta users loved it. Their speed and code quality are outstanding.",
    author: "Sarah Jenkins",
    role: "Co-Founder & CEO",
    company: "AeroSaaS (YC W25)",
    stars: 5,
    avatar: "SJ"
  },
  {
    quote: "Partnering with Clienxo was a game-changer for our launch. They built our AI-powered mobile app with a seamless UX and robust API integration, helping us secure our seed round in record time.",
    author: "Dr. Ryan Vance",
    role: "Founder",
    company: "HealthVibe AI",
    stars: 5,
    avatar: "RV"
  },
  {
    quote: "Our database was lagging under rapid user growth. Clienxo refactored our entire backend architecture on AWS and PostgreSQL, reducing latency by 80% and saving us thousands in server costs.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Vanguard SaaS",
    stars: 5,
    avatar: "ER"
  }
];
