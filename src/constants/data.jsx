import { Code, Smartphone, Cloud, Brain, Shield, Database } from 'lucide-react';

export const HERO_WORDS = ["Digital Systems", "Custom Software", "Cloud Architectures", "AI Solutions", "Secure Networks"];

export const SERVICES = [
  {
    id: 'software',
    icon: <Code className="service-icon" />,
    title: 'Software Development',
    short: 'Tailored desktop, web, and enterprise automation platforms built using top tech stacks.',
    detail: 'Our engineering team designs enterprise-grade architectures that solve operational bottlenecks. We develop scalable solutions with React, Node.js, Python, and Go, focusing on microservices patterns, continuous integration, and clean code principles.'
  },
  {
    id: 'mobile',
    icon: <Smartphone className="service-icon" />,
    title: 'Mobile Applications',
    short: 'Premium native and cross-platform mobile apps for iOS and Android devices.',
    detail: 'We build high-performance mobile apps with fluid user interfaces using Flutter, React Native, and Swift/Kotlin. From real-time messaging services to secure offline synchronization, we guarantee native responsiveness.'
  },
  {
    id: 'cloud',
    icon: <Cloud className="service-icon" />,
    title: 'Cloud & Infrastructure',
    short: 'AWS, Azure, and Google Cloud setups optimized for cost, security, and zero-downtime.',
    detail: 'Ensure maximum availability through Infrastructure as Code (Terraform), Kubernetes orchestration, serverless migrations, and advanced DevOps deployment pipelines that scale intelligently to client demands.'
  },
  {
    id: 'ai',
    icon: <Brain className="service-icon" />,
    title: 'AI & Data Analytics',
    short: 'Intelligent automation, predictive machine learning models, and smart dashboard reporting.',
    detail: 'Transform your business decisions with modern artificial intelligence. We offer custom LLM prompt engineering, machine learning pipelines, predictive analysis models, and interactive BI visual reporting.'
  },
  {
    id: 'security',
    icon: <Shield className="service-icon" />,
    title: 'Cybersecurity & Audits',
    short: 'Complete systems protection, penetration testing, compliance checks, and zero-trust setups.',
    detail: 'Identify vulnerabilities before attackers do. Our security experts run comprehensive penetration tests, secure API endpoints, set up multi-factor OAuth systems, and ensure HIPAA/GDPR/SOC2 compliances.'
  },
  {
    id: 'database',
    icon: <Database className="service-icon" />,
    title: 'Database Architecture',
    short: 'High-performance database modeling, migrations, optimization, and scaling.',
    detail: 'We optimize query speeds and design database layers using PostgreSQL, MongoDB, Redis, and Elasticsearch, ensuring instant analytical querying and zero-loss backup recovery schemes.'
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
    desc: 'Our senior developers write modular, clean code in weekly sprints, keeping you updated in real-time through staging environment previews.'
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
    title: 'Clienxo ERP Suite',
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
