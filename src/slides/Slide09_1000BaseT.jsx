import React, { useState } from 'react';
import { Cpu, Zap, CheckCircle2, Sparkles } from 'lucide-react';

export function Slide09_1000BaseT() {
  const [showDsp, setShowDsp] = useState(true);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3ab (1999) · Gigabit Ethernet
        </div>
        <h2 className="slide-title">1000BASE-T: Gigabit sobre Cobre y la Revolución DSP</h2>
        <p className="slide-subtitle">
          El hito de alcanzar 1,000 Mbps sobre el límite de 100 MHz de Cat 5e mediante matemáticas y 4 pares simultáneos.
        </p>
      </div>

      <div className="slide-body grid-2col-wide-left">
        {/* Left: 4-Pair Parallel Transmission Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Cpu size={18} />
              4 Pares Full-Duplex Bidireccionales
            </span>
            <button
              className={`nav-btn ${showDsp ? 'nav-btn-primary' : ''}`}
              style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
              onClick={() => setShowDsp(!showDsp)}
            >
              {showDsp ? 'Ocultar Filtro DSP' : 'Mostrar Filtro DSP (Eco/NEXT)'}
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <svg width="100%" height="180" viewBox="0 0 450 180" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* PHY Transceiver Left */}
              <rect x="10" y="20" width="90" height="140" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="55" y="65" fill="#0284c7" fontSize="11" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY GIGABIT</text>
              <text x="55" y="85" fill="#64748b" fontSize="9" fontWeight="600" textAnchor="middle">4x Híbridos</text>
              <text x="55" y="105" fill={showDsp ? '#059669' : '#e11d48'} fontSize="9" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* PHY Transceiver Right */}
              <rect x="350" y="20" width="90" height="140" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="395" y="65" fill="#2563eb" fontSize="11" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY SWITCH</text>
              <text x="395" y="85" fill="#64748b" fontSize="9" fontWeight="600" textAnchor="middle">4x Híbridos</text>
              <text x="395" y="105" fill={showDsp ? '#059669' : '#e11d48'} fontSize="9" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* 4 Bidirectional Pairs */}
              {[
                { name: 'Par A (Pines 1-2)', y: 40, color: '#0284c7' },
                { name: 'Par B (Pines 3-6)', y: 70, color: '#059669' },
                { name: 'Par C (Pines 4-5)', y: 100, color: '#d97706' },
                { name: 'Par D (Pines 7-8)', y: 130, color: '#e11d48' }
              ].map((p, i) => (
                <g key={i}>
                  <line x1="100" y1={p.y} x2="350" y2={p.y} stroke={p.color} strokeWidth="3" />
                  <circle cx="180" cy={p.y} r="4.5" fill={p.color} stroke="#111" strokeWidth="1">
                    <animate attributeName="cx" values="100;350" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy={p.y} r="4.5" fill={p.color} stroke="#111" strokeWidth="1">
                    <animate attributeName="cx" values="350;100" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <text x="225" y={p.y - 4} fill={p.color} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
                    {p.name} ➔ 250 Mbps Bidireccional
                  </text>
                </g>
              ))}
            </svg>
            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#059669', fontWeight: '800', marginTop: '6px', fontFamily: 'Fredoka, Outfit' }}>
              4 pares x 250 Mbps = 1,000 Mbps (1 Gbps)
            </div>
          </div>

          <div style={{ background: '#e0f2fe', border: '2px solid #0284c7', padding: '0.7rem 1rem', borderRadius: '8px', fontSize: '0.84rem', color: '#111111', fontWeight: '500' }}>
            💡 <strong>Modulación PAM-5:</strong> Usa 5 niveles de voltaje (-2, -1, 0, +1, +2) permitiendo codificar 2 bits por símbolo (125 MBaud x 2 bits = 250 Mbps por par), reservando el quinto nivel para control de error por enrejado (Trellis).
          </div>
        </div>

        {/* Right: The 3 Technological Leaps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Uso Total de los 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Se abandonó la división de pares dedicados (TX vs RX). Los 4 pares transmiten y reciben simultáneamente gracias a <strong>circuitos híbridos</strong> de acoplamiento direccional.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Procesamiento Digital de Señal (DSP)</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Al transmitir y recibir por el mismo hilo, el receptor escucha su propio transmisor (eco) más la diafonía de los otros 3 pares (NEXT/FEXT). El chip DSP calcula la señal de eco exacta y <strong>la resta en tiempo real</strong> mediante filtrado adaptativo.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><CheckCircle2 size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Estandarización de Cat 5e</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Aunque funciona a los mismos 100 MHz de Cat 5, la estricta tolerancia de Cat 5e aseguró la fiabilidad requerida para operaciones corporativas masivas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
