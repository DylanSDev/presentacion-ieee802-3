import React, { useState } from 'react';
import { Activity, Radio, Sliders } from 'lucide-react';

export function Slide04_TwistingPhysics() {
  const [noiseLevel, setNoiseLevel] = useState(60);
  const [isDifferential, setIsDifferential] = useState(true);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Física Electromagnética · Cancelación de Fase</div>
        <h2 className="slide-title">La Ciencia del Par Trenzado: Cancela la Interferencia</h2>
        <p className="slide-subtitle">
          Cómo el trenzado de hilos y la señalización diferencial anulan la diafonía (Crosstalk) y el ruido externo (EMI).
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ruido EMI:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                style={{ width: '80px', accentColor: 'var(--cyan-primary)' }}
              />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--cyan-primary)', fontWeight: 'bold' }}>{noiseLevel}%</span>
            </div>
          </div>

          {/* SVG Waveform Visualization */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '260px' }}>
            {/* Wave 1: Positive Wire (+) */}
            <div className="inner-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--blue-accent)', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>Hilo (+) Señal Original + Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_pos = +V + N(t)</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={`M 0 22 Q 50 ${10 - (noiseLevel * 0.15)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke="var(--blue-accent)"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {/* Wave 2: Inverted Negative Wire (-) */}
            <div className="inner-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--amber-accent)', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>Hilo (-) Señal Invertida + Mismo Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>V_neg = -V + N(t)</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={`M 0 22 Q 50 ${34 - (noiseLevel * 0.15)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke="var(--amber-accent)"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {/* Wave 3: Resulting Reconstructed Signal */}
            <div style={{ background: isDifferential ? 'rgba(5, 150, 105, 0.15)' : 'rgba(244, 63, 94, 0.15)', border: `1.5px solid ${isDifferential ? 'var(--emerald-accent)' : 'var(--rose-accent)'}`, borderRadius: '8px', padding: '0.5rem 1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: isDifferential ? 'var(--emerald-accent)' : 'var(--rose-accent)', marginBottom: '4px', fontWeight: 'bold' }}>
                <span>Señal Resultante: <strong>{isDifferential ? 'V_diff = V_pos - V_neg = 2V (Ruido Anulado)' : 'Sin balanceo (Ruido corrompe datos)'}</strong></span>
                <span style={{ fontFamily: 'JetBrains Mono' }}>{isDifferential ? 'LIMPIA (SNR ÓPTIMO)' : 'CORROMPIDA'}</span>
              </div>
              <svg width="100%" height="45" viewBox="0 0 400 45">
                <path
                  d={isDifferential
                    ? "M 0 22 Q 50 6 100 22 T 200 22 T 300 22 T 400 22"
                    : `M 0 22 Q 50 ${10 - (noiseLevel * 0.2)} 100 22 T 200 22 T 300 22 T 400 22`}
                  fill="none"
                  stroke={isDifferential ? "var(--emerald-accent)" : "var(--rose-accent)"}
                  strokeWidth="3"
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
              {isDifferential ? 'Desactivar Transmisión Diferencial' : 'Activar Cancelación Diferencial'}
            </button>
          </div>
        </div>

        {/* Right: Explanatory Core Principles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Radio size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>1. Transmisión Balanceada y Cancelación de Fase</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Por un hilo viaja la señal original ($+V$) y por el otro la señal invertida ($-V$). Como los hilos están estrechamente trenzados, el ruido electromagnético externo ($N$) afecta a ambos por igual. Al restar ambas señales en el receptor:
              <br />
              <code style={{ color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>
                V_final = (+V + N) - (-V + N) = 2V
              </code>
              <br />
              El ruido $N$ se elimina matemáticamente.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--blue-accent)', color: 'var(--blue-accent)' }}><Sliders size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>2. Ritmos de Trenzado Diferentes entre Pares</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Dentro de un cable de 4 pares, cada par tiene un número distinto de <strong>vueltas por metro</strong> (tasa de paso). Si todos tuvieran el mismo paso, sus campos magnéticos se alinearían en paralelo generando <strong>diafonía interna (Crosstalk)</strong>. Al tener pasos distintos, esa alineación nunca se repite de forma sostenida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
