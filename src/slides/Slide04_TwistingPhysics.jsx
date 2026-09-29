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
        <h2 className="slide-title">La Ciencia del Par Trenzado: Cancelación de Ruido</h2>
        <p className="slide-subtitle">
          Cómo el trenzado físico y la señalización diferencial anulan la diafonía (Crosstalk) y el ruido externo (EMI).
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Signal Oscilloscope Simulator */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Simulador de Señal Diferencial y Ruido EMI
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#475569' }}>Ruido EMI:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                style={{ width: '75px', accentColor: '#0284c7' }}
              />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.76rem', color: '#0284c7', fontWeight: '800', background: '#e0f2fe', padding: '1px 5px', borderRadius: '4px', border: '1px solid #111' }}>
                {noiseLevel}%
              </span>
            </div>
          </div>

          {/* SVG Waveform Visualization */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: '0.2rem 0' }}>
            {/* Wave 1: Positive Wire (+) */}
            <div className="inner-box" style={{ padding: '0.4rem 0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#2563eb', marginBottom: '2px', fontWeight: '800' }}>
                <span>Hilo (+) Señal Original + Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_pos = +V + N(t)</span>
              </div>
              <svg width="100%" height="32" viewBox="0 0 400 32">
                <path
                  d={`M 0 16 Q 50 ${6 - (noiseLevel * 0.1)} 100 16 T 200 16 T 300 16 T 400 16`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.6"
                />
              </svg>
            </div>

            {/* Wave 2: Inverted Negative Wire (-) */}
            <div className="inner-box" style={{ padding: '0.4rem 0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#d97706', marginBottom: '2px', fontWeight: '800' }}>
                <span>Hilo (-) Señal Invertida + Mismo Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_neg = -V + N(t)</span>
              </div>
              <svg width="100%" height="32" viewBox="0 0 400 32">
                <path
                  d={`M 0 16 Q 50 ${26 - (noiseLevel * 0.1)} 100 16 T 200 16 T 300 16 T 400 16`}
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2.6"
                />
              </svg>
            </div>

            {/* Wave 3: Resulting Reconstructed Signal */}
            <div
              style={{
                background: isDifferential ? '#dcfce7' : '#ffe4e6',
                border: `2px solid ${isDifferential ? '#059669' : '#e11d48'}`,
                borderRadius: '10px',
                padding: '0.4rem 0.75rem',
                boxShadow: '2px 2px 0px #111111'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: isDifferential ? '#059669' : '#e11d48', marginBottom: '2px', fontWeight: '800' }}>
                <span>Señal Resultante: <strong>{isDifferential ? 'V_diff = 2V (Ruido Anulado)' : 'Sin balanceo (Datos Corrompidos)'}</strong></span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>{isDifferential ? 'SNR ÓPTIMO' : 'ERROR SNR'}</span>
              </div>
              <svg width="100%" height="32" viewBox="0 0 400 32">
                <path
                  d={isDifferential
                    ? "M 0 16 Q 50 4 100 16 T 200 16 T 300 16 T 400 16"
                    : `M 0 16 Q 50 ${6 - (noiseLevel * 0.15)} 100 16 T 200 16 T 300 16 T 400 16`}
                  fill="none"
                  stroke={isDifferential ? "#059669" : "#e11d48"}
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className={`nav-btn ${isDifferential ? 'nav-btn-primary' : ''}`}
              onClick={() => setIsDifferential(!isDifferential)}
              style={{ fontSize: '0.8rem', padding: '0.3rem 0.85rem' }}
            >
              {isDifferential ? 'Desactivar Cancelación Diferencial' : 'Activar Cancelación Diferencial'}
            </button>
          </div>
        </div>

        {/* Right: Explanatory Core Principles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', justifyContent: 'space-between' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <div className="bullet-icon"><Radio size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                1. Transmisión Balanceada y Modo Común
              </h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.38' }}>
              Por un hilo viaja la señal original (+V) y por el otro la invertida (-V). Al estar fuertemente trenzados, el ruido electromagnético externo (N) incide por igual en ambos conductores. Al restar ambas señales en el receptor:
              <br />
              <code style={{ background: '#f1f8fc', border: '1.5px solid #111', padding: '2px 7px', borderRadius: '5px', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>
                V_diff = (+V + N) - (-V + N) = 2V
              </code>
              <br />
              <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: '700', marginTop: '3px', display: 'block' }}>
                ✓ El ruido inducido N se elimina matemáticamente sin pérdidas.
              </span>
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Sliders size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                2. Ritmos de Trenzado Asimétricos
              </h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.38' }}>
              Dentro del cable de 4 pares, cada par tiene un número diferente de <strong>vueltas por metro</strong> (tasa de paso).
              <br />
              Si todos tuvieran el mismo paso, sus campos electromagnéticos se alinearían en paralelo generando <strong>diafonía interna (Crosstalk)</strong>. Al variar el paso, la alineación periódica se rompe permanentemente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
