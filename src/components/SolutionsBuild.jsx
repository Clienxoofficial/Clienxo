"use client";
import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export default function SolutionsBuild({ openWhatWeDo }) {
  return (
    <section id="solutions-build" style={{ padding: 'clamp(40px, 5vw, 60px) 0', display: 'flex', justifyContent: 'center' }}>
      <button className="solutions-explore-btn" onClick={openWhatWeDo} style={{ margin: 0 }}>
        <Layers size={18} />
        Explore All 12 Solutions
        <ArrowRight size={16} />
      </button>
    </section>
  );
}
