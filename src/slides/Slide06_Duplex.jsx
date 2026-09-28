import React, { useState } from 'react';
import { ArrowLeftRight, AlertOctagon, CheckCircle2 } from 'lucide-react';

export function Slide06_Duplex() {
  const [mode, setMode] = useState('full');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Modos de Comunicación · Capa de Enlace y Física</div>
        <h2 className="slide-title">La Transición Dúplex: CSMA/CD vs Full-Duplex</h2>
        <p className="slide-subtitle">
          De compartir un carril con colisiones a una autopista bidireccional dedicada que duplicó el rendimiento.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Highway / Collision Simulation */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <ArrowLeftRight size={18} />
              Tráfico: {mode === 'half' ? 'Half-Duplex (CSMA/CD en Hub)' : 'Full-Duplex (Conmutado en Switch)'}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`nav-btn ${mode === 'half' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                onClick={() => setMode('half')}
              >
                Half-Duplex
              </button>
              <button
                className={`nav-btn ${mode === 'full' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                onClick={() => setMode('full')}
              >
                Full-Duplex
              </button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '260px' }}>
            <svg width="100%" height="220" viewBox="0 0 500 220" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              {/* Host Left (PC A) */}
              <rect x="20" y="70" width="80" height="80" rx="8" fill="var(--svg-card-fill)" stroke="var(--cyan-primary)" strokeWidth="2" />
              <text x="60" y="105" fill="var(--cyan-primary)" fontSize="13" fontWeight="bold" textAnchor="middle">HOST A</text>
              <text x="60" y="125" fill="var(--svg-text-sub)" fontSize="10" textAnchor="middle">Transmisor</text>

              {/* Host Right (PC B) */}
              <rect x="400" y="70" width="80" height="80" rx="8" fill="var(--svg-card-fill)" stroke="var(--blue-accent)" strokeWidth="2" />
              <text x="440" y="105" fill="var(--blue-accent)" fontSize="13" fontWeight="bold" textAnchor="middle">HOST B</text>
              <text x="440" y="125" fill="var(--svg-text-sub)" fontSize="10" textAnchor="middle">Receptor</text>

              {mode === 'half' ? (
                <g>
                  {/* Single shared channel */}
                  <rect x="110" y="95" width="280" height="30" rx="4" fill="rgba(217, 119, 6, 0.15)" stroke="var(--amber-accent)" strokeWidth="1.5" />
                  <text x="250" y="85" fill="var(--amber-accent)" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">VÍA ÚNICA COMPARTIDA (1 CARRIL)</text>

                  {/* Packet from Left */}
                  <circle cx="210" cy="110" r="10" fill="var(--cyan-primary)">
                    <animate attributeName="cx" values="120;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  {/* Packet from Right */}
                  <circle cx="290" cy="110" r="10" fill="var(--blue-accent)">
                    <animate attributeName="cx" values="380;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Collision point at center */}
                  <g transform="translate(250, 110)">
                    <polygon points="0,-18 5,-5 18,-5 8,4 12,17 0,8 -12,17 -8,4 -18,-5 -5,-5" fill="var(--rose-accent)" />
                    <text x="0" y="32" fill="var(--rose-accent)" fontSize="11" fontWeight="bold" textAnchor="middle">💥 COLISIÓN (CSMA/CD)</text>
                  </g>
                </g>
              ) : (
                <g>
                  {/* Channel TX (Top) */}
                  <rect x="110" y="70" width="280" height="24" rx="4" fill="rgba(2, 132, 199, 0.1)" stroke="var(--cyan-primary)" strokeWidth="1" />
                  <text x="250" y="62" fill="var(--cyan-primary)" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">PAR TX DEDICADO (A ➔ B)</text>
                  <circle cx="250" cy="82" r="8" fill="var(--cyan-primary)">
                    <animate attributeName="cx" values="120;380" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Channel RX (Bottom) */}
                  <rect x="110" y="125" width="280" height="24" rx="4" fill="rgba(37, 99, 235, 0.1)" stroke="var(--blue-accent)" strokeWidth="1" />
                  <text x="250" y="165" fill="var(--blue-accent)" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">PAR RX DEDICADO (B ➔ A)</text>
                  <circle cx="250" cy="137" r="8" fill="var(--blue-accent)">
                    <animate attributeName="cx" values="380;120" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  <text x="250" y="112" fill="var(--emerald-accent)" fontSize="11" fontWeight="bold" textAnchor="middle">✓ CERO COLISIONES · 200% RENDIMIENTO</text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--amber-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <AlertOctagon size={18} color="var(--amber-accent)" />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Half-Duplex y CSMA/CD</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Los equipos debían <em>"escuchar el medio antes de transmitir"</em>. Si dos enviaban a la vez, se producía una colisión, se emitía una señal de atasco (*Jam Signal*) y se ejecutaba el algoritmo de retroceso exponencial (*Binary Exponential Backoff*), perdiendo hasta un 40-50% de eficiencia teórica.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--emerald-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={18} color="var(--emerald-accent)" />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Full-Duplex en Par Trenzado</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Al contar con al menos 2 pares físicos independientes en el cable UTP (uno dedicado a TX y otro a RX) conectados a un Switch, los datos viajan en ambos sentidos sin interferirse. <strong>CSMA/CD queda obsoleto</strong> y la tasa de transferencia se duplica (ej. 100 Mbps TX + 100 Mbps RX = 200 Mbps bidireccional).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
