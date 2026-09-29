import React, { useState } from 'react';
import { ShieldAlert, Flame, Sparkles } from 'lucide-react';

export function Slide10_10GBaseT() {
  const [cableType, setCableType] = useState('cat6a');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3an (2006) · 10 Gigabit Ethernet
        </div>
        <h2 className="slide-title">10GBASE-T: Empujando el Cobre al Límite Absoluto</h2>
        <p className="slide-subtitle">
          Alcanzar 10 Gbps a 500 MHz sobre par trenzado demandó enfrentar el Alien Crosstalk y diseñar Cat 6a con blindaje.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Alien Crosstalk Bundle Simulator */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <ShieldAlert size={18} />
              Simulador de Canaleta: Alien Crosstalk (ANEXT)
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                className={`nav-btn ${cableType === 'cat6' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => setCableType('cat6')}
              >
                Mazo Cat 6 (55m máx)
              </button>
              <button
                className={`nav-btn ${cableType === 'cat6a' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => setCableType('cat6a')}
              >
                Mazo Cat 6a (100m)
              </button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* Surrounding disturber cables */}
              {[
                { cx: 140, cy: 50 },
                { cx: 200, cy: 40 },
                { cx: 260, cy: 50 },
                { cx: 140, cy: 130 },
                { cx: 200, cy: 140 },
                { cx: 260, cy: 130 }
              ].map((c, i) => (
                <g key={i}>
                  <circle cx={c.cx} cy={c.cy} r="25" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
                  <text x={c.cx} y={c.cy + 4} fill="#111111" fontSize="8" fontFamily="JetBrains Mono" fontWeight="800" textAnchor="middle">CABLE {i + 1}</text>
                  {cableType === 'cat6' && (
                    <line x1={c.cx} y1={c.cy} x2="200" y2="90" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.8s" repeatCount="indefinite" />
                    </line>
                  )}
                </g>
              ))}

              {/* Central Victim Cable */}
              <circle
                cx="200"
                cy="90"
                r="30"
                fill={cableType === 'cat6a' ? '#dcfce7' : '#ffe4e6'}
                stroke={cableType === 'cat6a' ? '#059669' : '#e11d48'}
                strokeWidth={cableType === 'cat6a' ? '4' : '2.5'}
              />
              {cableType === 'cat6a' && (
                <circle cx="200" cy="90" r="34" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 3" />
              )}
              <text x="200" y="87" fill="#111111" fontSize="10" fontWeight="800" textAnchor="middle">CABLE BAJO</text>
              <text x="200" y="99" fill="#111111" fontSize="10" fontWeight="800" textAnchor="middle">PRUEBA</text>

              <text x="200" y="170" fill={cableType === 'cat6a' ? '#059669' : '#e11d48'} fontSize="11" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">
                {cableType === 'cat6a' ? '✓ Cat 6a con Blindaje: Alien Crosstalk Bloqueado a 100m' : '⚠️ Cat 6 UTP: Ruido entre cables vecinos satura señal pasados 55m'}
              </text>
            </svg>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Frecuencia Operativa</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>500 MHz</div>
            </div>
            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Modulación</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#d97706', fontFamily: 'Fredoka, Outfit' }}>PAM-16 + LDPC</div>
            </div>
          </div>
        </div>

        {/* Right: Technical Challenges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card" style={{ borderLeft: '6px solid #d97706' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <ShieldAlert size={18} color="#d97706" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>El Enemigo: Alien Crosstalk (ANEXT)</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              A 500 MHz, la radiación electromagnética se fuga del cable e interfiere en los cables vecinos dentro de la misma canaleta. Como este ruido proviene de un cable independiente, <strong>el DSP no puede cancelarlo</strong> porque no conoce la señal invasora.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '6px solid #e11d48' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <Flame size={18} color="#e11d48" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Los Costos: Consumo Térmico y Latencia</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.86rem', color: '#475569' }}>
              <li><strong>Consumo Energético:</strong> Los primeros transceptores consumían 4-8W por puerto, generando calor masivo en switches densos.</li>
              <li><strong>Latencia por LDPC:</strong> El algoritmo de corrección añade entre 2 y 3 microsegundos por salto, crítico para trading financiero o centros de cómputo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
