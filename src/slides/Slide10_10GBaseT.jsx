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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #d97706', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldAlert size={20} color="#d97706" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                    Alien Crosstalk (ANEXT)
                  </h3>
                </div>
                <span style={{ fontSize: '0.74rem', background: '#fef3c7', border: '1.5px solid #111', borderRadius: '6px', padding: '2px 7px', fontWeight: '800', color: '#d97706', fontFamily: 'JetBrains Mono' }}>
                  RUIDO EXTERNO
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
                A <strong>500 MHz</strong>, la energía electromagnética escapa de la cubierta e invade cables vecinos en la misma canaleta.
              </p>
            </div>

            <div className="inner-box" style={{ fontSize: '0.82rem', color: '#111111', lineHeight: '1.4' }}>
              <strong>Límite DSP:</strong> Al provenir de cables independientes no sincronizados, el procesador <em>no puede predecir ni cancelar</em> la señal invasora sin blindaje físico (Cat 6a).
            </div>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #e11d48', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Flame size={20} color="#e11d48" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                    Consumo Térmico y Latencia
                  </h3>
                </div>
                <span style={{ fontSize: '0.74rem', background: '#ffe4e6', border: '1.5px solid #111', borderRadius: '6px', padding: '2px 7px', fontWeight: '800', color: '#e11d48', fontFamily: 'JetBrains Mono' }}>
                  TECHO COBRE
                </span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: '#475569', marginTop: '0.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e11d48', display: 'inline-block' }} />
                  <span><strong>Disipación Térmica:</strong> 4 a 8W por puerto en switches densos.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e11d48', display: 'inline-block' }} />
                  <span><strong>Latencia LDPC:</strong> Añade 2 a 3 µs por salto de conmutación.</span>
                </li>
              </ul>
            </div>

            <div className="inner-box" style={{ fontSize: '0.82rem', color: '#111111', lineHeight: '1.4' }}>
              <strong>Consecuencia en Datacenters:</strong> Impulsó la adopción de fibra óptica (SFP+) y cables Direct Attach Copper (DAC/Twinax).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
