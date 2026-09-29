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
          El hito de alcanzar 1,000 Mbps sobre el límite de 100 MHz de Cat 5e usando los 4 pares bidireccionales y modulación PAM-5.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: 4-Pair Parallel Transmission Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Cpu size={18} />
              4 Pares Full-Duplex Bidireccionales
            </span>
            <button
              className={`nav-btn ${showDsp ? 'nav-btn-primary' : ''}`}
              style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}
              onClick={() => setShowDsp(!showDsp)}
            >
              {showDsp ? 'Ocultar Filtro DSP' : 'Mostrar Filtro DSP (Eco/NEXT)'}
            </button>
          </div>

          <div style={{ margin: '0.35rem 0' }}>
            <svg width="100%" height="150" viewBox="0 0 450 150" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* PHY Transceiver Left */}
              <rect x="10" y="10" width="85" height="130" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="52" y="48" fill="#0284c7" fontSize="10" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY GIGABIT</text>
              <text x="52" y="68" fill="#64748b" fontSize="8" fontWeight="600" textAnchor="middle">4x Híbridos</text>
              <text x="52" y="88" fill={showDsp ? '#059669' : '#e11d48'} fontSize="8" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* PHY Transceiver Right */}
              <rect x="355" y="10" width="85" height="130" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2" />
              <text x="397" y="48" fill="#2563eb" fontSize="10" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">PHY SWITCH</text>
              <text x="397" y="68" fill="#64748b" fontSize="8" fontWeight="600" textAnchor="middle">4x Híbridos</text>
              <text x="397" y="88" fill={showDsp ? '#059669' : '#e11d48'} fontSize="8" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* 4 Bidirectional Pairs */}
              {[
                { name: 'Par A (Pines 1-2)', y: 28, color: '#0284c7' },
                { name: 'Par B (Pines 3-6)', y: 56, color: '#059669' },
                { name: 'Par C (Pines 4-5)', y: 84, color: '#d97706' },
                { name: 'Par D (Pines 7-8)', y: 112, color: '#e11d48' }
              ].map((p, i) => (
                <g key={i}>
                  <line x1="95" y1={p.y} x2="355" y2={p.y} stroke={p.color} strokeWidth="2.5" />
                  <circle cx="170" cy={p.y} r="3.5" fill={p.color} stroke="#111" strokeWidth="1">
                    <animate attributeName="cx" values="95;355" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy={p.y} r="3.5" fill={p.color} stroke="#111" strokeWidth="1">
                    <animate attributeName="cx" values="355;95" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <text x="225" y={p.y - 3} fill={p.color} fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
                    {p.name} ➔ 250 Mbps Bidireccional
                  </text>
                </g>
              ))}
            </svg>
            <div style={{ textAlign: 'center', fontSize: '0.84rem', color: '#059669', fontWeight: '800', marginTop: '3px', fontFamily: 'Fredoka, Outfit' }}>
              4 pares x 250 Mbps = 1,000 Mbps (1 Gbps)
            </div>
          </div>

          <div style={{ background: '#e0f2fe', border: '1.5px solid #0284c7', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.76rem', color: '#111111', fontWeight: '500' }}>
            💡 <strong>Modulación PAM-5:</strong> Usa 5 niveles de voltaje (-2, -1, 0, +1, +2) para transmitir 2 bits por símbolo (125 MBaud x 2 bits = 250 Mbps/par), con corrección por enrejado Trellis.
          </div>
        </div>

        {/* Right: The 3 Technological Leaps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Transmisión Simultánea en 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Se abandonó la división de pares dedicados (TX vs RX). Los 4 pares transmiten y reciben a la vez gracias a <strong>circuitos híbridos</strong> de acoplamiento direccional.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Procesamiento Digital de Señal (DSP)</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Al transmitir y recibir por el mismo hilo, el receptor escucha su propio eco más diafonía NEXT/FEXT. El DSP calcula el eco exacto y <strong>lo resta en tiempo real</strong>.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><CheckCircle2 size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Estandarización de Cat 5e</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Aunque opera a los mismos 100 MHz de Cat 5, la estricta tolerancia de Cat 5e aseguró la fiabilidad requerida para operaciones corporativas masivas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
