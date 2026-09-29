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
              Tráfico: {mode === 'half' ? 'Half-Duplex (Hub CSMA/CD)' : 'Full-Duplex (Switch Dedicado)'}
            </span>
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <button
                className={`nav-btn ${mode === 'half' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.65rem', fontSize: '0.76rem' }}
                onClick={() => setMode('half')}
              >
                Half-Duplex
              </button>
              <button
                className={`nav-btn ${mode === 'full' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.65rem', fontSize: '0.76rem' }}
                onClick={() => setMode('full')}
              >
                Full-Duplex
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0.35rem 0' }}>
            <svg width="100%" height="185" viewBox="0 0 500 185" style={{ background: '#f1f8fc', borderRadius: '12px', border: '2px solid #111111' }}>
              {/* Host Left (PC A) */}
              <rect x="20" y="55" width="80" height="70" rx="9" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="60" y="86" fill="#0284c7" fontSize="11.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">HOST A</text>
              <text x="60" y="104" fill="#64748b" fontSize="8.5" fontWeight="600" textAnchor="middle">Transmisor</text>

              {/* Host Right (PC B) */}
              <rect x="400" y="55" width="80" height="70" rx="9" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="440" y="86" fill="#2563eb" fontSize="11.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">HOST B</text>
              <text x="440" y="104" fill="#64748b" fontSize="8.5" fontWeight="600" textAnchor="middle">Receptor</text>

              {mode === 'half' ? (
                <g>
                  {/* Single shared channel */}
                  <rect x="110" y="78" width="280" height="26" rx="6" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
                  <text x="250" y="68" fill="#d97706" fontSize="9.5" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">VÍA ÚNICA COMPARTIDA (1 CARRIL)</text>

                  {/* Packet from Left */}
                  <circle cx="210" cy="91" r="8" fill="#0284c7" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="120;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  {/* Packet from Right */}
                  <circle cx="290" cy="91" r="8" fill="#2563eb" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="380;250" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Collision point at center */}
                  <g transform="translate(250, 91)">
                    <polygon points="0,-14 4,-3 14,-3 6,3 9,13 0,6 -9,13 -6,3 -14,-3 -4,-3" fill="#e11d48" stroke="#111" strokeWidth="1.5" />
                    <text x="0" y="28" fill="#e11d48" fontSize="10" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">💥 COLISIÓN (CSMA/CD)</text>
                  </g>
                </g>
              ) : (
                <g>
                  {/* Channel TX (Top) */}
                  <rect x="110" y="55" width="280" height="22" rx="5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.8" />
                  <text x="250" y="48" fill="#0284c7" fontSize="9" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">PAR TX DEDICADO (A ➔ B)</text>
                  <circle cx="250" cy="66" r="7" fill="#0284c7" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="120;380" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Channel RX (Bottom) */}
                  <rect x="110" y="103" width="280" height="22" rx="5" fill="#e0e7ff" stroke="#2563eb" strokeWidth="1.8" />
                  <text x="250" y="139" fill="#2563eb" fontSize="9" fontFamily="Fredoka, Outfit" fontWeight="bold" textAnchor="middle">PAR RX DEDICADO (B ➔ A)</text>
                  <circle cx="250" cy="114" r="7" fill="#2563eb" stroke="#111" strokeWidth="1.5">
                    <animate attributeName="cx" values="380;120" dur="1.2s" repeatCount="indefinite" />
                  </circle>

                  <text x="250" y="93" fill="#059669" fontSize="10" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">✓ CERO COLISIONES · 200% RENDIMIENTO</text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', justifyContent: 'space-between' }}>
          <div className="glass-card" style={{ borderLeft: '6px solid #d97706' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <AlertOctagon size={17} color="#d97706" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Half-Duplex y Protocolo CSMA/CD</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Los equipos debían <em>"escuchar antes de transmitir"</em>. Si dos terminales enviaban a la vez, ocurría una colisión que destruía la trama, obligando a emitir una señal de atasco (*Jam Signal*) y ejecutar un retroceso exponencial binario.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '6px solid #059669' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <CheckCircle2 size={17} color="#059669" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Full-Duplex sobre Par Trenzado</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Al contar con al menos 2 pares físicos independientes en el cable UTP (uno dedicado a TX y otro a RX) conectados a un Switch, los datos viajan simultáneamente en ambos sentidos. <strong>CSMA/CD desaparece</strong> y se duplica el ancho de banda efectivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
