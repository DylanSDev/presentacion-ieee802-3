import React, { useState } from 'react';
import { Cpu, Zap, CheckCircle2 } from 'lucide-react';

export function Slide09_1000BaseT() {
  const [showDsp, setShowDsp] = useState(true);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">IEEE 802.3ab (1999) · Gigabit Ethernet</div>
        <h2 className="slide-title">1000BASE-T: Gigabit sobre Cobre y la Revolución DSP</h2>
        <p className="slide-subtitle">
          El hito de alcanzar 1,000 Mbps sobre el mismo límite de 100 MHz del cable Cat 5e mediante matemáticas y 4 pares simultáneos.
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
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
              onClick={() => setShowDsp(!showDsp)}
            >
              {showDsp ? 'Ocultar Filtro DSP' : 'Mostrar Filtro DSP (Eco/NEXT)'}
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <svg width="100%" height="180" viewBox="0 0 450 180" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              {/* PHY Transceiver Left */}
              <rect x="10" y="20" width="90" height="140" rx="6" fill="var(--svg-card-fill)" stroke="var(--cyan-primary)" strokeWidth="1.5" />
              <text x="55" y="70" fill="var(--cyan-primary)" fontSize="11" fontWeight="bold" textAnchor="middle">PHY GIGABIT</text>
              <text x="55" y="90" fill="var(--svg-text-sub)" fontSize="9" textAnchor="middle">4x Híbridos</text>
              <text x="55" y="110" fill="var(--emerald-accent)" fontSize="9" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* PHY Transceiver Right */}
              <rect x="350" y="20" width="90" height="140" rx="6" fill="var(--svg-card-fill)" stroke="var(--blue-accent)" strokeWidth="1.5" />
              <text x="395" y="70" fill="var(--blue-accent)" fontSize="11" fontWeight="bold" textAnchor="middle">PHY SWITCH</text>
              <text x="395" y="90" fill="var(--svg-text-sub)" fontSize="9" textAnchor="middle">4x Híbridos</text>
              <text x="395" y="110" fill="var(--emerald-accent)" fontSize="9" fontWeight="bold" textAnchor="middle">{showDsp ? 'DSP Activo' : 'Sin DSP'}</text>

              {/* 4 Bidirectional Pairs */}
              {[
                { name: 'Par A (Pines 1-2)', y: 40, color: 'var(--cyan-primary)' },
                { name: 'Par B (Pines 3-6)', y: 70, color: 'var(--emerald-accent)' },
                { name: 'Par C (Pines 4-5)', y: 100, color: 'var(--amber-accent)' },
                { name: 'Par D (Pines 7-8)', y: 130, color: 'var(--rose-accent)' }
              ].map((p, i) => (
                <g key={i}>
                  <line x1="100" y1={p.y} x2="350" y2={p.y} stroke={p.color} strokeWidth="3" />
                  <circle cx="180" cy={p.y} r="4" fill={p.color}>
                    <animate attributeName="cx" values="100;350" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy={p.y} r="4" fill={p.color}>
                    <animate attributeName="cx" values="350;100" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <text x="225" y={p.y - 4} fill={p.color} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
                    {p.name} ➔ 250 Mbps Bidireccional
                  </text>
                </g>
              ))}
            </svg>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--emerald-accent)', fontWeight: '800', marginTop: '6px' }}>
              4 pares x 250 Mbps = 1,000 Mbps (1 Gbps)
            </div>
          </div>

          <div style={{ background: 'var(--cyan-glow)', border: '1px solid var(--cyan-primary)', padding: '0.6rem', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-heading)' }}>
            💡 <strong>Modulación PAM-5:</strong> Usa 5 niveles de voltaje (-2, -1, 0, +1, +2) permitiendo codificar 2 bits por símbolo (125 MBaud x 2 bits = 250 Mbps por par), dejando el quinto nivel para control de error trellis.
          </div>
        </div>

        {/* Right: The 3 Technological Leaps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>1. Uso Total de los 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Se abandonó la división de pares dedicados (TX vs RX). Los 4 pares transmiten y reciben simultáneamente gracias a <strong>circuitos híbridos</strong> de acoplamiento direccional.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--blue-accent)', color: 'var(--blue-accent)' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>2. Procesamiento Digital de Señal (DSP)</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Al transmitir y recibir por el mismo hilo, el receptor escucha su propio transmisor (eco) más la diafonía de los otros 3 pares (NEXT/FEXT). El chip DSP calcula la señal de eco exacta y <strong>la resta en tiempo real</strong> mediante filtrado adaptativo.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--emerald-accent)', color: 'var(--emerald-accent)' }}><CheckCircle2 size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>3. Estandarización de Cat 5e</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Aunque funciona a los mismos 100 MHz de Cat 5, la estricta tolerancia de Cat 5e aseguró la fiabilidad requerida para operaciones corporativas masivas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
