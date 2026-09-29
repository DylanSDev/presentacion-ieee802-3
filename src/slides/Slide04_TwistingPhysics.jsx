import React, { useState } from 'react';
import { Activity, Radio, Sliders, Sparkles } from 'lucide-react';

export function Slide04_TwistingPhysics() {
  const [noiseLevel, setNoiseLevel] = useState(60);
  const [isDifferential, setIsDifferential] = useState(true);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Física Electromagnética · Cancelación de Fase
        </div>
        <h2 className="slide-title">La Ciencia del Par Trenzado: Cancela la Interferencia</h2>
        <p className="slide-subtitle">
          Cómo el trenzado físico y la señalización diferencial anulan la diafonía (Crosstalk) y el ruido externo (EMI).
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Interactive Signal Oscilloscope Simulator */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Simulador de Señal Diferencial y Ruido EMI
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#475569' }}>Ruido EMI:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                style={{ width: '80px', accentColor: '#0284c7' }}
              />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#0284c7', fontWeight: '800', background: '#e0f2fe', padding: '1px 6px', borderRadius: '4px', border: '1px solid #111' }}>
                {noiseLevel}%
              </span>
            </div>
          </div>

          {/* SVG Waveform Visualization */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '260px', gap: '0.5rem' }}>
            {/* Wave 1: Positive Wire (+) */}
            <div className="inner-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#2563eb', marginBottom: '4px', fontWeight: '800' }}>
                <span>Hilo (+) Señal Original + Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_pos = +V + N(t)</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={`M 0 22 Q 50 ${10 - (noiseLevel * 0.15)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.8"
                />
              </svg>
            </div>

            {/* Wave 2: Inverted Negative Wire (-) */}
            <div className="inner-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#d97706', marginBottom: '4px', fontWeight: '800' }}>
                <span>Hilo (-) Señal Invertida + Mismo Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_neg = -V + N(t)</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={`M 0 22 Q 50 ${34 - (noiseLevel * 0.15)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2.8"
                />
              </svg>
            </div>

            {/* Wave 3: Resulting Reconstructed Signal */}
            <div
              style={{
                background: isDifferential ? '#dcfce7' : '#ffe4e6',
                border: `2px solid ${isDifferential ? '#059669' : '#e11d48'}`,
                borderRadius: '10px',
                padding: '0.6rem 1rem',
                boxShadow: '2.5px 2.5px 0px #111111'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: isDifferential ? '#059669' : '#e11d48', marginBottom: '4px', fontWeight: '800' }}>
                <span>Señal Resultante: <strong>{isDifferential ? 'V_diff = V_pos - V_neg = 2V (Ruido Anulado)' : 'Sin balanceo (Ruido corrompe datos)'}</strong></span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>{isDifferential ? 'LIMPIA (SNR ÓPTIMO)' : 'CORROMPIDA'}</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={isDifferential
                    ? "M 0 22 Q 50 6 100 22 T 200 22 T 300 22 T 400 22"
                    : `M 0 22 Q 50 ${10 - (noiseLevel * 0.2)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke={isDifferential ? "#059669" : "#e11d48"}
                  strokeWidth="3.2"
                />
              </svg>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className={`nav-btn ${isDifferential ? 'nav-btn-primary' : ''}`}
              onClick={() => setIsDifferential(!isDifferential)}
              style={{ fontSize: '0.85rem' }}
            >
              {isDifferential ? 'Desactivar Cancelación Diferencial' : 'Activar Cancelación Diferencial'}
            </button>
          </div>
        </div>

        {/* Right: Explanatory Core Principles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Radio size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                1. Transmisión Balanceada y Cancelación de Fase
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Por un hilo viaja la señal original (+V) y por el otro la señal invertida (-V). Como ambos hilos están estrechamente trenzados, el ruido electromagnético externo (N) afecta a ambos por igual. Al restar ambas señales en el receptor:
              <br />
              <code style={{ background: '#f1f8fc', border: '1.5px solid #111', padding: '3px 8px', borderRadius: '6px', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: 'bold', display: 'inline-block', marginTop: '6px' }}>
                V_final = (+V + N) - (-V + N) = 2V
              </code>
              <br />
              <span style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '4px', display: 'block' }}>
                El ruido N se elimina matemáticamente en modo común.
              </span>
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Sliders size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                2. Ritmos de Trenzado Diferentes entre Pares
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Dentro de un cable de 4 pares, cada par tiene un número distinto de <strong>vueltas por metro</strong> (tasa de paso). Si todos tuvieran el mismo paso, sus campos magnéticos se alinearían en paralelo generando <strong>diafonía interna (NEXT/FEXT)</strong>. Al tener pasos distintos, esa alineación nunca se repite de forma sostenida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
