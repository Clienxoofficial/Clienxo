"use client";
import React from 'react';

export default function ClienxoLogo({ onClick }) {
  return (
    <div className="navbar-logo" onClick={onClick}>
      <svg 
        viewBox="0 0 100 100" 
        className="logo-cx"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic metallic gradient based on CSS variables */}
          <linearGradient id="logoMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--logo-metal-start)" />
            <stop offset="50%" stopColor="var(--logo-metal-start)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--logo-metal-end)" />
          </linearGradient>
          
          {/* Sleek bright blue-purple gradient for the main slash */}
          <linearGradient id="logoNeonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>

        {/* The Dark Metallic Diagonal Leg (\) */}
        <path 
          d="M 58,28 L 80,72" 
          stroke="url(#logoMetalGrad)" 
          strokeWidth="9.5" 
          strokeLinecap="round" 
        />

        {/* The "C" shape */}
        <path 
          d="M 52,25 C 28,25 22,36 22,50 C 22,64 28,75 52,75" 
          stroke="url(#logoMetalGrad)" 
          strokeWidth="9.5" 
          strokeLinecap="round" 
        />

        {/* The Blue-Purple Diagonal Slash (/) */}
        <path 
          d="M 42,75 L 82,25" 
          stroke="url(#logoNeonGrad)" 
          strokeWidth="9.5" 
          strokeLinecap="round" 
        />
      </svg>
      <div className="logo-text-group">
        <span className="logo-text">
          CLIEN<span className="text-gradient">XO</span>
        </span>
        <span className="logo-subtitle">
          AI AUTOMATION - REAL IMPACT
        </span>
      </div>
    </div>
  );
}
