import React, { useState } from 'react';
import { ArrowLeftRight, AlertOctagon, CheckCircle2, Sparkles } from 'lucide-react';

export function Slide06_Duplex() {
  const [mode, setMode] = useState('full');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Modos de Comunicación · Capa de Enlace y Física
        </div>
        <h2 className="slide-title">La Transición Dúplex: CSMA/CD vs Full-Duplex</h2>
        <p className="slide-subtitle">
          De compartir un carril único con colisiones a una autopista bidireccional dedicada que duplicó el rendimiento real.
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
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => setMode('half')}
              >
                Half-Duplex
              </button>
              <button
                className={`nav-btn ${mode === 'full' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => setMode('full')}
              >
                Full-Duplex
              </button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '260px' }}>
            <svg width="100%" height="220" viewBox="0 0 500 220" style={{ background: '#f1f8fc', borderRadius: '12px', border: '2px solid #111111' }}>
              {/* Host Left (PC A) */}
              <rect x="20" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="60" y="105" fill="#0284c7" fontSize="13" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">HOST A</text>
              <text x="60" y="125" fill="#64748b" fontSize="10" fontWeight="600" textAnchor="middle">Transmisor</text>

              {/* Host Right (PC B) */}
              <rect x="400" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="440" y="105" fill="#2563eb" fontSize="13" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">HOST B</text>
              <text x="440" y="125" fill="#64748b" fontSize="10" fontWeight="600" textAnchor="middle">Receptor</text>

              {mode === 'half' ? (
                <g>
                  {/* Single shared channel */}
                  <rect x="110" y="95" width="280" height="30" rx="6" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
                  <text x="250" y="85" fill="#d97706" fontSize="10.5" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">VÍA ÚNICA COMPARTIDA (1 CARRIL)</text>

                  {/* Packet from Left */}
                  <circle cx="210" cy="110" r="10" fill="#0284c7" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="120;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  {/* Packet from Right */}
                  <circle cx="290" cy="110" r="10" fill="#2563eb" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="380;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Collision point at center */}
                  <g transform="translate(250, 110)">
                    <polygon points="0,-18 5,-5 18,-5 8,4 12,17 0,8 -12,17 -8,4 -18,-5 -5,-5" fill="#e11d48" stroke="#111" strokeWidth="1.5" />
                    <text x="0" y="34" fill="#e11d48" fontSize="11" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">💥 COLISIÓN (CSMA/CD)</text>
                  </g>
                </g>
              ) : (
                <g>
                  {/* Channel TX (Top) */}
                  <rect x="110" y="70" width="280" height="24" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.8" />
                  <text x="250" y="62" fill="#0284c7" fontSize="10" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">PAR TX DEDICADO (A ➔ B)</text>
                  <circle cx="250" cy="82" r="8" fill="#0284c7" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="120;380" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Channel RX (Bottom) */}
                  <rect x="110" y="125" width="280" height="24" rx="6" fill="#e0e7ff" stroke="#2563eb" strokeWidth="1.8" />
                  <text x="250" y="165" fill="#2563eb" fontSize="10" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">PAR RX DEDICADO (B ➔ A)</text>
                  <circle cx="250" cy="137" r="8" fill="#2563eb" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="380;120" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  <text x="250" y="112" fill="#059669" fontSize="11" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">✓ CERO COLISIONES · 200% RENDIMIENTO</text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card" style={{ borderLeft: '6px solid #d97706' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <AlertOctagon size={18} color="#d97706" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Half-Duplex y CSMA/CD</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Los equipos debían <em>"escuchar el medio antes de transmitir"</em>. Si dos enviaban a la vez, se producía una colisión, se emitía una señal de atasco (Jam Signal) y se ejecutaba el retroceso exponencial binario, perdiendo hasta un 40-50% de eficiencia teórica.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '6px solid #059669' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <CheckCircle2 size={18} color="#059669" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Full-Duplex en Par Trenzado</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Al contar con al menos 2 pares físicos independientes en el cable UTP (uno dedicado a TX y otro a RX) conectados a un Switch, los datos viajan en ambos sentidos sin interferirse. <strong>CSMA/CD queda obsoleto</strong> y la tasa de transferencia se duplica (ej. 100 Mbps TX + 100 Mbps RX = 200 Mbps total).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
