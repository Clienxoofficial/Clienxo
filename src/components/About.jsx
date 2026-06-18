"use client";
import { CheckCircle2, ChevronRight, ShieldCheck, Users } from 'lucide-react';
import DotField from './DotField';

export default function About({ handleScrollTo, openContact }) {
  return (
    <section id="about" className="about-section fade-in-section">
      <DotField
        dotRadius={1.8}
        dotSpacing={16}
        bulgeStrength={60}
        glowRadius={180}
        sparkle={false}
        waveAmplitude={6}
        cursorRadius={220}
      />
      <div className="section-container relative z-10">
        <div className="section-header about-section-header">
          <span className="section-mini-title">WHO WE ARE</span>
          <h2 className="section-title">Engineering the Future With <span className="text-gradient-neon">AI & Custom Software</span></h2>
          <div className="header-bar about-header-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">

            {/* Robot Developer SVG Scene */}
            <div className="robot-scene-wrapper">
              <svg
                viewBox="0 0 420 500"
                xmlns="http://www.w3.org/2000/svg"
                className="robot-svg"
                aria-label="Animated robot developer coding"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--robot-bg-start)"/>
                    <stop offset="100%" stopColor="var(--robot-bg-end)"/>
                  </linearGradient>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e2040"/>
                    <stop offset="100%" stopColor="#13152e"/>
                  </linearGradient>
                  <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#252850"/>
                    <stop offset="100%" stopColor="#1a1d3a"/>
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d0f1f"/>
                    <stop offset="100%" stopColor="#080a18"/>
                  </linearGradient>
                  <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1c35"/>
                    <stop offset="100%" stopColor="#0f1025"/>
                  </linearGradient>
                  <linearGradient id="armGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1e2040"/>
                    <stop offset="100%" stopColor="#252850"/>
                  </linearGradient>
                  <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="1"/>
                    <stop offset="60%" stopColor="#6366f1" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#4338ca" stopOpacity="0.3"/>
                  </radialGradient>
                  <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="floorGlow" cx="50%" cy="20%" r="60%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.08"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                  </radialGradient>
                  {/* Filters */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="strongGlow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <clipPath id="screenClip">
                    <rect x="102" y="52" width="166" height="110" rx="4"/>
                  </clipPath>
                </defs>

                {/* ── BACKGROUND ── */}
                <rect width="420" height="500" fill="url(#bgGrad)" rx="16"/>
                <ellipse cx="210" cy="460" rx="160" ry="28" fill="url(#floorGlow)"/>

                {/* Grid lines */}
                {[60,120,180,240,300,360,420].map((x,i) => (
                  <line key={`vg${i}`} x1={x} y1="0" x2={x} y2="500" stroke="#6366f1" strokeOpacity="0.04" strokeWidth="1"/>
                ))}
                {[80,160,240,320,400].map((y,i) => (
                  <line key={`hg${i}`} x1="0" y1={y} x2="420" y2={y} stroke="#6366f1" strokeOpacity="0.04" strokeWidth="1"/>
                ))}

                {/* ── FLOATING PARTICLES ── */}
                <circle cx="48" cy="100" r="2.5" fill="#6366f1" opacity="0.6" className="rb-particle rb-p1"/>
                <circle cx="372" cy="140" r="2" fill="#a78bfa" opacity="0.5" className="rb-particle rb-p2"/>
                <circle cx="380" cy="300" r="3" fill="#38bdf8" opacity="0.4" className="rb-particle rb-p3"/>
                <circle cx="30" cy="320" r="2" fill="#22d3ee" opacity="0.5" className="rb-particle rb-p4"/>
                <circle cx="60" cy="220" r="1.5" fill="#f472b6" opacity="0.4" className="rb-particle rb-p5"/>
                <circle cx="390" cy="220" r="2" fill="#6366f1" opacity="0.5" className="rb-particle rb-p6"/>

                {/* ── DESK ── */}
                <rect x="60" y="370" width="300" height="18" rx="5" fill="url(#deskGrad)" stroke="#2a2d58" strokeWidth="1"/>
                {/* desk legs */}
                <rect x="80" y="388" width="12" height="50" rx="3" fill="#13152e"/>
                <rect x="328" y="388" width="12" height="50" rx="3" fill="#13152e"/>
                {/* desk reflection line */}
                <line x1="68" y1="374" x2="352" y2="374" stroke="#6366f1" strokeOpacity="0.15" strokeWidth="1"/>

                {/* ── KEYBOARD ── */}
                <rect x="120" y="358" width="180" height="14" rx="3" fill="#161830" stroke="#2a2d58" strokeWidth="1"/>
                {/* keyboard rows */}
                {[0,1,2].map(row => (
                  Array.from({length: 9 - row}).map((_, col) => (
                    <rect
                      key={`key${row}-${col}`}
                      x={128 + col * (row === 0 ? 18 : row === 1 ? 19.5 : 21) + row * 5}
                      y={360 + row * 4}
                      width={row === 0 ? 14 : row === 1 ? 15 : 17}
                      height="2.5"
                      rx="0.8"
                      fill="#1e2040"
                      stroke="#2a2d58"
                      strokeWidth="0.5"
                      className="rb-key"
                      style={{animationDelay: `${(row * 9 + col) * 0.05}s`}}
                    />
                  ))
                ))}

                {/* ── MONITOR ── */}
                {/* Stand */}
                <rect x="197" y="168" width="26" height="20" rx="3" fill="#161830" stroke="#2a2d58" strokeWidth="1"/>
                <rect x="178" y="186" width="64" height="8" rx="3" fill="#1e2040" stroke="#2a2d58" strokeWidth="1"/>
                {/* Monitor body */}
                <rect x="95" y="44" width="230" height="128" rx="8" fill="#1a1c35" stroke="#2a2d58" strokeWidth="1.5"/>
                <rect x="100" y="48" width="220" height="120" rx="6" fill="#0d0f1f" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4"/>
                {/* Screen glow */}
                <rect x="100" y="48" width="220" height="120" rx="6" fill="url(#screenGlow)" className="rb-screen-glow"/>
                {/* Screen content (clipped) */}
                <g clipPath="url(#screenClip)">
                  <rect x="102" y="52" width="166" height="110" fill="url(#screenGrad)"/>
                  {/* Code lines on screen */}
                  <text x="108" y="68" fontFamily="monospace" fontSize="7" fill="#c792ea" className="rb-code-line rb-cl1">const Robot = () =&gt; {'{'}</text>
                  <text x="116" y="79" fontFamily="monospace" fontSize="7" fill="#82aaff" className="rb-code-line rb-cl2">  const [mode, setMode]</text>
                  <text x="116" y="90" fontFamily="monospace" fontSize="7" fill="#c3e88d" className="rb-code-line rb-cl3">    = useState(&apos;code&apos;);</text>
                  <text x="116" y="101" fontFamily="monospace" fontSize="7" fill="#ffcb6b" className="rb-code-line rb-cl4">  useEffect(() =&gt; {'{'}</text>
                  <text x="124" y="112" fontFamily="monospace" fontSize="7" fill="#89ddff" className="rb-code-line rb-cl5">    deploy(ai_model);</text>
                  <text x="116" y="123" fontFamily="monospace" fontSize="7" fill="#ffcb6b" className="rb-code-line rb-cl6">  {'}'}, []);</text>
                  <text x="108" y="134" fontFamily="monospace" fontSize="7" fill="#c792ea" className="rb-code-line rb-cl7">{'}'}<tspan fill="#6366f1" className="rb-cursor">▋</tspan></text>
                  {/* Scanline */}
                  <rect x="102" y="52" width="166" height="110" fill="none" className="rb-scanline"/>
                </g>
                {/* Monitor chrome dots */}
                <circle cx="113" cy="58" r="2.5" fill="#ff5f57"/>
                <circle cx="121" cy="58" r="2.5" fill="#ffbd2e"/>
                <circle cx="129" cy="58" r="2.5" fill="#28c840"/>
                {/* Monitor glow edge */}
                <rect x="95" y="44" width="230" height="128" rx="8" fill="none" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.3" filter="url(#glow)"/>

                {/* ── ROBOT BODY ── */}
                {/* Body glow aura */}
                <ellipse cx="210" cy="310" rx="70" ry="55" fill="#6366f1" fillOpacity="0.04" className="rb-aura"/>

                {/* Main torso */}
                <g className="rb-body-bob">
                  {/* Shoulders */}
                  <rect x="135" y="225" width="150" height="100" rx="16" fill="url(#bodyGrad)" stroke="#2a2d58" strokeWidth="1.5"/>

                  {/* Chest panel */}
                  <rect x="155" y="240" width="110" height="65" rx="8" fill="#0d0f1f" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.5"/>
                  {/* Chest display - mini code */}
                  <text x="162" y="256" fontFamily="monospace" fontSize="5.5" fill="#6366f1" fillOpacity="0.9">AI_MODE: ACTIVE</text>
                  <text x="162" y="266" fontFamily="monospace" fontSize="5.5" fill="#22c55e">STATUS: CODING</text>
                  {/* Progress bar */}
                  <rect x="162" y="272" width="96" height="4" rx="2" fill="#1e2040"/>
                  <rect x="162" y="272" width="72" height="4" rx="2" fill="#6366f1" className="rb-progress"/>
                  {/* Mini dots */}
                  <circle cx="168" cy="285" r="3" fill="#6366f1" opacity="0.8" className="rb-dot1"/>
                  <circle cx="180" cy="285" r="3" fill="#38bdf8" opacity="0.6" className="rb-dot2"/>
                  <circle cx="192" cy="285" r="3" fill="#22c55e" opacity="0.7" className="rb-dot3"/>
                  <circle cx="204" cy="285" r="3" fill="#f472b6" opacity="0.5" className="rb-dot4"/>

                  {/* Belt/waist */}
                  <rect x="140" y="318" width="140" height="12" rx="4" fill="#13152e" stroke="#2a2d58" strokeWidth="1"/>
                  <circle cx="210" cy="324" r="5" fill="#6366f1" fillOpacity="0.7" filter="url(#softGlow)"/>
                </g>

                {/* LEFT ARM - typing animation */}
                <g className="rb-arm-left">
                  <rect x="103" y="228" width="36" height="16" rx="8" fill="url(#armGrad)" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Elbow joint */}
                  <circle cx="106" cy="250" r="8" fill="#1e2040" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Forearm */}
                  <rect x="90" y="248" width="30" height="14" rx="7" fill="url(#armGrad)" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Hand/claw */}
                  <circle cx="92" cy="262" r="7" fill="#252850" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.6"/>
                  <circle cx="88" cy="268" r="4" fill="#1e2040" stroke="#2a2d58" strokeWidth="0.8"/>
                  <circle cx="96" cy="270" r="4" fill="#1e2040" stroke="#2a2d58" strokeWidth="0.8"/>
                  {/* Finger tips */}
                  <circle cx="87" cy="272" r="2.5" fill="#6366f1" fillOpacity="0.7"/>
                  <circle cx="96" cy="274" r="2.5" fill="#6366f1" fillOpacity="0.7"/>
                </g>

                {/* RIGHT ARM - typing animation */}
                <g className="rb-arm-right">
                  <rect x="281" y="228" width="36" height="16" rx="8" fill="url(#armGrad)" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Elbow joint */}
                  <circle cx="314" cy="250" r="8" fill="#1e2040" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Forearm */}
                  <rect x="300" y="248" width="30" height="14" rx="7" fill="url(#armGrad)" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Hand/claw */}
                  <circle cx="328" cy="262" r="7" fill="#252850" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.6"/>
                  <circle cx="324" cy="268" r="4" fill="#1e2040" stroke="#2a2d58" strokeWidth="0.8"/>
                  <circle cx="332" cy="270" r="4" fill="#1e2040" stroke="#2a2d58" strokeWidth="0.8"/>
                  {/* Finger tips */}
                  <circle cx="323" cy="272" r="2.5" fill="#6366f1" fillOpacity="0.7"/>
                  <circle cx="333" cy="274" r="2.5" fill="#6366f1" fillOpacity="0.7"/>
                </g>

                {/* ── ROBOT HEAD ── */}
                <g className="rb-head-bob">
                  {/* Neck */}
                  <rect x="198" y="203" width="24" height="24" rx="4" fill="#161830" stroke="#2a2d58" strokeWidth="1"/>
                  <rect x="202" y="205" width="16" height="4" rx="2" fill="#1e2040"/>
                  <rect x="202" y="211" width="16" height="4" rx="2" fill="#1e2040"/>
                  <rect x="202" y="217" width="16" height="4" rx="2" fill="#1e2040"/>

                  {/* Head main */}
                  <rect x="158" y="140" width="104" height="66" rx="18" fill="url(#headGrad)" stroke="#2a2d58" strokeWidth="1.5"/>

                  {/* Ear panels */}
                  <rect x="148" y="154" width="12" height="32" rx="5" fill="#161830" stroke="#2a2d58" strokeWidth="1"/>
                  <rect x="260" y="154" width="12" height="32" rx="5" fill="#161830" stroke="#2a2d58" strokeWidth="1"/>
                  {/* Ear lights */}
                  <circle cx="154" cy="163" r="2.5" fill="#38bdf8" className="rb-ear-left" filter="url(#softGlow)"/>
                  <circle cx="266" cy="163" r="2.5" fill="#38bdf8" className="rb-ear-right" filter="url(#softGlow)"/>

                  {/* Antenna */}
                  <line x1="210" y1="140" x2="210" y2="118" stroke="#2a2d58" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="210" cy="112" r="7" fill="#1e2040" stroke="#6366f1" strokeWidth="1.5"/>
                  <circle cx="210" cy="112" r="4" fill="#6366f1" className="rb-antenna-pulse" filter="url(#glow)"/>

                  {/* EYES */}
                  {/* Left eye */}
                  <rect x="172" y="154" width="28" height="22" rx="6" fill="#0a0b18" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.6"/>
                  <ellipse cx="186" cy="165" rx="9" ry="9" fill="url(#eyeGlow)" className="rb-eye-left" filter="url(#strongGlow)"/>
                  <ellipse cx="186" cy="165" rx="4" ry="4" fill="#fff" fillOpacity="0.15"/>
                  <ellipse cx="188" cy="163" rx="2" ry="2" fill="#fff" fillOpacity="0.4"/>

                  {/* Right eye */}
                  <rect x="220" y="154" width="28" height="22" rx="6" fill="#0a0b18" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.6"/>
                  <ellipse cx="234" cy="165" rx="9" ry="9" fill="url(#eyeGlow)" className="rb-eye-right" filter="url(#strongGlow)"/>
                  <ellipse cx="234" cy="165" rx="4" ry="4" fill="#fff" fillOpacity="0.15"/>
                  <ellipse cx="236" cy="163" rx="2" ry="2" fill="#fff" fillOpacity="0.4"/>

                  {/* Blink overlays */}
                  <rect x="172" y="154" width="28" height="22" rx="6" fill="#0a0b18" className="rb-blink-left"/>
                  <rect x="220" y="154" width="28" height="22" rx="6" fill="#0a0b18" className="rb-blink-right"/>

                  {/* Mouth / speaker grille */}
                  <rect x="182" y="184" width="56" height="12" rx="4" fill="#0a0b18" stroke="#2a2d58" strokeWidth="1"/>
                  {[0,1,2,3,4,5].map(i => (
                    <rect key={`m${i}`} x={186 + i*8} y="187" width="4" height="6" rx="1.5" fill="#6366f1" fillOpacity={0.4 + i*0.1} className="rb-mouth-bar"/>
                  ))}

                  {/* Head top panel line detail */}
                  <line x1="174" y1="148" x2="246" y2="148" stroke="#6366f1" strokeOpacity="0.15" strokeWidth="1"/>
                  <line x1="178" y1="144" x2="242" y2="144" stroke="#6366f1" strokeOpacity="0.08" strokeWidth="1"/>
                </g>

                {/* ── ACCENT GLOW LINES ── */}
                <line x1="95" y1="172" x2="95" y2="360" stroke="#6366f1" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 6"/>
                <line x1="325" y1="172" x2="325" y2="360" stroke="#6366f1" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 6"/>

                {/* ── STATUS BADGE ── */}
                <rect x="10" y="450" width="120" height="32" rx="8" fill="#0d0f1f" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.5"/>
                <circle cx="26" cy="466" r="5" fill="#22c55e" className="rb-status-pulse"/>
                <text x="36" y="463" fontFamily="monospace" fontSize="7" fill="#e2e8f0" fontWeight="bold">BUILDING</text>
                <text x="36" y="474" fontFamily="monospace" fontSize="6.5" fill="#6b7280">v2.0 deploying...</text>

                {/* Version badge */}
                <rect x="290" y="450" width="120" height="32" rx="8" fill="#0d0f1f" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.5"/>
                <circle cx="306" cy="466" r="5" fill="#6366f1" className="rb-ai-pulse"/>
                <text x="316" y="463" fontFamily="monospace" fontSize="7" fill="#e2e8f0" fontWeight="bold">AI POWERED</text>
                <text x="316" y="474" fontFamily="monospace" fontSize="6.5" fill="#6b7280">Neural v3.1</text>
              </svg>
            </div>

            {/* Floating Glassmorphic Cockpit Cards */}
            <div className="ill-card-floating card-1">
              <ShieldCheck size={18} className="ill-icon-floating text-green" />
              <div>
                <h4>99.9% Uptime</h4>
                <p>Enterprise SLA</p>
              </div>
            </div>

            <div className="ill-card-floating card-2">
              <Users size={18} className="ill-icon-floating text-cyan" />
              <div>
                <h4>4 Expert Devs</h4>
                <p>3+ Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <h3>Accelerating Innovation: Building the Next Generation of Software.</h3>
            <p className="about-p">
              At Clienxo, we don&apos;t believe in generic templates or standard cut-and-paste software. We believe that custom businesses deserve tailored technological solutions.
            </p>
            <p className="about-p">
              Every database we optimize, every UI detail we animate, and every API server we launch is hand-crafted to achieve maximum efficiency.
            </p>
            <div className="about-check-list">
              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>A dedicated team of senior developers (no outsourcing)</span>
              </div>
              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>Agile communication through daily slack reports</span>
              </div>
              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>Standard 99.9% uptime deployment SLAs</span>
              </div>
              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>Comprehensive post-deployment security updates</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
