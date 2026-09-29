import React, { useState } from 'react';
import { Cpu, Zap, CheckCircle2, Sparkles, AlertTriangle, ShieldCheck, Activity, Eye, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Slide09_1000BaseT() {
  const [dspActive, setDspActive] = useState(true);
  const [selectedPair, setSelectedPair] = useState(0);

  const pairs = [
    { id: 0, name: 'Par A (Pines 1-2)', pins: '1-2', color: '#0284c7', y: 32, label: 'Par Naranja' },
    { id: 1, name: 'Par B (Pines 3-6)', pins: '3-6', color: '#059669', y: 58, label: 'Par Verde' },
    { id: 2, name: 'Par C (Pines 4-5)', pins: '4-5', color: '#d97706', y: 84, label: 'Par Azul' },
    { id: 3, name: 'Par D (Pines 7-8)', pins: '7-8', color: '#9333ea', y: 110, label: 'Par Marrón' }
  ];

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3ab (1999) · Gigabit Ethernet
        </div>
        <h2 className="slide-title">1000BASE-T: Gigabit sobre Cobre y la Revolución DSP</h2>
        <p className="slide-subtitle">
          El hito de alcanzar 1,000 Mbps sobre el límite de 100 MHz de Cat 5e usando los 4 pares bidireccionales y modulación PAM-5.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive 4-Pair DSP Simulator */}
        <div className="interactive-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.6rem' }}>
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Cpu size={18} />
              Simulador DSP: Cancelación de Eco y NEXT
            </span>
            {/* DSP State Toggle */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                className={`nav-btn ${dspActive ? 'nav-btn-primary' : ''}`}
                style={{
                  padding: '0.22rem 0.55rem',
                  fontSize: '0.74rem',
                  background: dspActive ? '#059669' : '#ffffff',
                  color: dspActive ? '#ffffff' : '#334155',
                  borderColor: '#111111'
                }}
                onClick={() => setDspActive(true)}
              >
                <ShieldCheck size={13} style={{ marginRight: '3px' }} /> DSP Activo (1 Gbps)
              </button>
              <button
                className={`nav-btn ${!dspActive ? 'nav-btn-primary' : ''}`}
                style={{
                  padding: '0.22rem 0.55rem',
                  fontSize: '0.74rem',
                  background: !dspActive ? '#e11d48' : '#ffffff',
                  color: !dspActive ? '#ffffff' : '#334155',
                  borderColor: '#111111'
                }}
                onClick={() => setDspActive(false)}
              >
                <AlertTriangle size={13} style={{ marginRight: '3px' }} /> Sin DSP (Colapso)
              </button>
            </div>
          </div>

          {/* SVG 4-Pair Bidirectional Canvas */}
          <div style={{ position: 'relative' }}>
            <svg width="100%" height="152" viewBox="0 0 440 152" style={{ background: dspActive ? '#f8fafc' : '#fff1f2', borderRadius: '10px', border: '2px solid #111111', transition: 'background 0.3s ease' }}>
              {/* PHY Transceiver Left (Host PC) */}
              <rect x="8" y="10" width="82" height="132" rx="7" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="49" y="30" fill="#0284c7" fontSize="9.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY HOST</text>
              <text x="49" y="44" fill="#64748b" fontSize="7.5" fontWeight="600" textAnchor="middle">4x Híbridos</text>
              
              <rect x="14" y="54" width="70" height="28" rx="4" fill={dspActive ? '#dcfce7' : '#fee2e2'} stroke="#111111" strokeWidth="1.2" />
              <text x="49" y="66" fill={dspActive ? '#059669' : '#e11d48'} fontSize="8" fontWeight="800" fontFamily="JetBrains Mono" textAnchor="middle">
                {dspActive ? 'DSP ACTIVO' : 'SIN FILTRO'}
              </text>
              <text x="49" y="77" fill={dspActive ? '#059669' : '#e11d48'} fontSize="7" fontWeight="700" textAnchor="middle">
                {dspActive ? '✓ -30dB Eco' : '💥 Sombra Eco'}
              </text>

              <text x="49" y="100" fill="#475569" fontSize="7.2" fontWeight="700" textAnchor="middle">4 Pares TX/RX</text>
              <text x="49" y="114" fill="#0284c7" fontSize="7.8" fontFamily="JetBrains Mono" fontWeight="800" textAnchor="middle">
                {dspActive ? '1000 Mbps' : '0 Mbps'}
              </text>
              <text x="49" y="128" fill={dspActive ? '#059669' : '#e11d48'} fontSize="7.2" fontWeight="700" textAnchor="middle">
                {dspActive ? 'BER < 10⁻¹²' : 'BER = 100%'}
              </text>

              {/* PHY Transceiver Right (Switch) */}
              <rect x="350" y="10" width="82" height="132" rx="7" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="391" y="30" fill="#2563eb" fontSize="9.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY SWITCH</text>
              <text x="391" y="44" fill="#64748b" fontSize="7.5" fontWeight="600" textAnchor="middle">4x Híbridos</text>

              <rect x="356" y="54" width="70" height="28" rx="4" fill={dspActive ? '#dcfce7' : '#fee2e2'} stroke="#111111" strokeWidth="1.2" />
              <text x="391" y="66" fill={dspActive ? '#059669' : '#e11d48'} fontSize="8" fontWeight="800" fontFamily="JetBrains Mono" textAnchor="middle">
                {dspActive ? 'DSP ACTIVO' : 'SIN FILTRO'}
              </text>
              <text x="391" y="77" fill={dspActive ? '#059669' : '#e11d48'} fontSize="7" fontWeight="700" textAnchor="middle">
                {dspActive ? '✓ -25dB NEXT' : '💥 Sombra NEXT'}
              </text>

              <text x="391" y="100" fill="#475569" fontSize="7.2" fontWeight="700" textAnchor="middle">4 Pares TX/RX</text>
              <text x="391" y="114" fill="#2563eb" fontSize="7.8" fontFamily="JetBrains Mono" fontWeight="800" textAnchor="middle">
                {dspActive ? '1000 Mbps' : '0 Mbps'}
              </text>
              <text x="391" y="128" fill={dspActive ? '#059669' : '#e11d48'} fontSize="7.2" fontWeight="700" textAnchor="middle">
                {dspActive ? 'Full-Duplex' : 'Frames Caídos'}
              </text>

              {/* 4 Bidirectional Cable Pairs */}
              {pairs.map((p, i) => {
                const isSelected = selectedPair === i;
                return (
                  <g
                    key={p.id}
                    onClick={() => setSelectedPair(i)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Active pair glow highlight */}
                    {isSelected && (
                      <rect
                        x="92"
                        y={p.y - 10}
                        width="256"
                        height="20"
                        rx="4"
                        fill={p.color}
                        opacity="0.12"
                      />
                    )}

                    {/* Wire Path */}
                    {dspActive ? (
                      <line
                        x1="90"
                        y1={p.y}
                        x2="350"
                        y2={p.y}
                        stroke={isSelected ? p.color : '#94a3b8'}
                        strokeWidth={isSelected ? '3' : '2'}
                      />
                    ) : (
                      /* Noisy jagged line when DSP is disabled */
                      <path
                        d={`M 90 ${p.y} Q 130 ${p.y + 5}, 170 ${p.y - 4} T 250 ${p.y + 6} T 310 ${p.y - 5} L 350 ${p.y}`}
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth="2.5"
                        strokeDasharray="4 2"
                      />
                    )}

                    {/* Animated Packets */}
                    {dspActive ? (
                      <>
                        {/* Packet Host -> Switch */}
                        <circle cx="160" cy={p.y} r="3.5" fill={p.color} stroke="#111" strokeWidth="1">
                          <animate attributeName="cx" values="92;348" dur="1.1s" repeatCount="indefinite" />
                        </circle>
                        {/* Packet Switch -> Host */}
                        <circle cx="280" cy={p.y} r="3.5" fill={p.color} stroke="#111" strokeWidth="1">
                          <animate attributeName="cx" values="348;92" dur="1.1s" repeatCount="indefinite" />
                        </circle>
                      </>
                    ) : (
                      /* Chaos Collision Bursts */
                      <g transform={`translate(220, ${p.y})`}>
                        <circle cx="0" cy="0" r="7" fill="#fecaca" stroke="#e11d48" strokeWidth="1.2">
                          <animate attributeName="r" values="4;8;4" dur="0.6s" repeatCount="indefinite" />
                        </circle>
                        <text x="0" y="3" fill="#e11d48" fontSize="7" fontWeight="900" textAnchor="middle">💥</text>
                      </g>
                    )}

                    {/* Pair Label Banner */}
                    <text
                      x="220"
                      y={p.y - 4}
                      fill={dspActive ? (isSelected ? p.color : '#334155') : '#e11d48'}
                      fontSize="7.8"
                      fontFamily="JetBrains Mono"
                      fontWeight="800"
                      textAnchor="middle"
                    >
                      {dspActive
                        ? `${p.name} ➔ 250 Mbps (PAM-5)`
                        : `${p.name} ➔ ❌ Eco (+30dB) + NEXT anulan señal`}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* PAM-5 Eye Diagram & Signal State Indicator */}
          <div style={{ background: dspActive ? '#e0f2fe' : '#fee2e2', border: `1.5px solid ${dspActive ? '#0284c7' : '#e11d48'}`, padding: '0.4rem 0.65rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              {dspActive ? <Eye size={17} color="#0284c7" /> : <AlertTriangle size={17} color="#e11d48" />}
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: '800', color: dspActive ? '#0284c7' : '#e11d48', fontFamily: 'Fredoka, Outfit' }}>
                  {dspActive ? 'Señal Limpia PAM-5 (5 Niveles: +2, +1, 0, -1, -2V)' : 'Señal Destruida por Eco Propio y Diafonía'}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#334155' }}>
                  {dspActive
                    ? 'El DSP sustrae el eco de transmisión (-30 dB) y resta el ruido NEXT de los otros 3 pares en tiempo real.'
                    : 'Sin el DSP, la transmisión propia (fuerte) tapa la señal recibida (débil). El receptor no distingue niveles.'}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'JetBrains Mono', fontWeight: '800', color: dspActive ? '#059669' : '#e11d48' }}>
                {dspActive ? '4 x 250 = 1,000 Mbps' : 'Tasa: 0 Mbps'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: The 3 Technological Leaps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #0284c7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Transmisión Simultánea en 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Se abandonó la división de pares dedicados (TX vs RX). Los 4 pares transmiten y reciben a la vez gracias a <strong>circuitos híbridos</strong> de acoplamiento direccional.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #2563eb', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Procesamiento Digital de Señal (DSP)</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Al transmitir y recibir por el mismo hilo, el receptor escucha su propio eco más diafonía NEXT/FEXT. El chip DSP calcula el eco exacto y <strong>lo resta en tiempo real</strong>.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #059669', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><CheckCircle2 size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Modulación PAM-5 y Cat 5e</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Usa 5 niveles de voltaje (-2V a +2V) transportando 2 bits por baudio (125 MBaud x 2 = 250 Mbps/par). Permite alcanzar 1 Gbps sin superar los 100 MHz de Cat 5e.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
