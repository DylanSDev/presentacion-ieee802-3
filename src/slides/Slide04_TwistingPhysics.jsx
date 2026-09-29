import React, { useState, useEffect } from 'react';
import { Activity, Radio, Sliders, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export function Slide04_TwistingPhysics() {
  const [noiseLevel, setNoiseLevel] = useState(65);
  const [isDifferential, setIsDifferential] = useState(true);
  const [phase, setPhase] = useState(0);

  // Animated oscilloscope scan
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setPhase((prev) => (prev + 0.08) % (Math.PI * 4));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Generate multi-point realistic oscilloscope path
  const generateWavePath = (type) => {
    const points = [];
    const width = 380;
    const heightMid = 18;
    const totalPoints = 65;
    const dx = width / totalPoints;

    for (let i = 0; i <= totalPoints; i++) {
      const x = i * dx;
      const t = (x * 0.04) - phase;
      
      // Pure data signal: 10 MHz fundamental carrier
      const dataVal = 6 * Math.sin(t);
      
      // Common-mode high frequency noise (EMI spikes from motors/fluorescents)
      const noiseVal = (noiseLevel / 100) * (
        3.8 * Math.sin(t * 6.5) + 
        2.4 * Math.cos(t * 11.2) + 
        1.6 * Math.sin(t * 18.7)
      );

      let y;
      if (type === 'pos') {
        // V+ = +V_data + V_noise
        y = heightMid - (dataVal + noiseVal);
      } else if (type === 'neg') {
        // V- = -V_data + V_noise (Notice noise is IN-PHASE: common mode)
        y = heightMid - (-dataVal + noiseVal);
      } else if (type === 'diff') {
        if (isDifferential) {
          // V_out = V+ - V- = 2 * V_data (Noise canceled completely!)
          y = heightMid - (1.7 * dataVal);
        } else {
          // Single-ended: only V+ with all noise remaining
          y = heightMid - (dataVal + noiseVal);
        }
      }

      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }

    return points.join(' ');
  };

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Física Electromagnética · Rechazo en Modo Común (CMRR)
        </div>
        <h2 className="slide-title">La Ciencia del Par Trenzado: Cancelación de Ruido EMI</h2>
        <p className="slide-subtitle">
          Cómo la señalización diferencial y el paso de torsión anulan matemáticamente la interferencia externa y la diafonía.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Signal Oscilloscope Simulator */}
        <div className="interactive-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.65rem' }}>
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Osciloscopio: Cancelación Diferencial
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#475569' }}>Inyectar Ruido EMI:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                style={{ width: '80px', accentColor: '#0284c7', cursor: 'pointer' }}
              />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.76rem', color: '#0284c7', fontWeight: '800', background: '#e0f2fe', padding: '1px 6px', borderRadius: '4px', border: '1.5px solid #111' }}>
                {noiseLevel}%
              </span>
            </div>
          </div>

          {/* SVG Waveforms Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {/* Wave 1: Positive Conductor (+) */}
            <div className="inner-box" style={{ padding: '0.35rem 0.65rem', background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#0284c7', marginBottom: '2px', fontWeight: '800' }}>
                <span>Hilo (+) Señal Original + Ruido</span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem' }}>V(+) = +V_datos + N_ruido</span>
              </div>
              <svg width="100%" height="36" viewBox="0 0 380 36" style={{ background: '#f1f8fc', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}>
                {/* Scope Grid Lines */}
                <line x1="0" y1="18" x2="380" y2="18" stroke="#cbd5e1" strokeDasharray="3 3" />
                <path d={generateWavePath('pos')} fill="none" stroke="#0284c7" strokeWidth="2.2" />
              </svg>
            </div>

            {/* Wave 2: Inverted Negative Conductor (-) */}
            <div className="inner-box" style={{ padding: '0.35rem 0.65rem', background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#d97706', marginBottom: '2px', fontWeight: '800' }}>
                <span>Hilo (-) Señal Invertida + Mismo Ruido (Modo Común)</span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem' }}>V(-) = -V_datos + N_ruido</span>
              </div>
              <svg width="100%" height="36" viewBox="0 0 380 36" style={{ background: '#f1f8fc', borderRadius: '6px', border: '1.5px solid #cbd5e1' }}>
                {/* Scope Grid Lines */}
                <line x1="0" y1="18" x2="380" y2="18" stroke="#cbd5e1" strokeDasharray="3 3" />
                <path d={generateWavePath('neg')} fill="none" stroke="#d97706" strokeWidth="2.2" />
              </svg>
            </div>

            {/* Wave 3: Output Receiver Result (V_pos - V_neg) */}
            <div
              style={{
                background: isDifferential ? '#f0fdf4' : '#fff1f2',
                border: `2px solid ${isDifferential ? '#059669' : '#e11d48'}`,
                borderRadius: '10px',
                padding: '0.45rem 0.75rem',
                boxShadow: '2px 2px 0px #111111',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.76rem', color: isDifferential ? '#166534' : '#9f1239', marginBottom: '3px', fontWeight: '800' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {isDifferential ? <CheckCircle2 size={15} color="#059669" /> : <AlertTriangle size={15} color="#e11d48" />}
                  {isDifferential ? 'Receptor Diferencial: V(+) - V(-) = 2V (Ruido 100% Anulado)' : 'Receptor Simple (Single-Ended): Datos Corrompidos por Ruido'}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', background: '#ffffff', padding: '1px 6px', borderRadius: '4px', border: '1.5px solid #111' }}>
                  {isDifferential ? 'SNR PURO' : 'ERROR BER'}
                </span>
              </div>
              <svg width="100%" height="36" viewBox="0 0 380 36" style={{ background: isDifferential ? '#dcfce7' : '#ffe4e6', borderRadius: '6px', border: '1.5px solid #111111' }}>
                <line x1="0" y1="18" x2="380" y2="18" stroke="#94a3b8" strokeDasharray="3 3" />
                <path d={generateWavePath('diff')} fill="none" stroke={isDifferential ? "#059669" : "#e11d48"} strokeWidth="2.6" />
              </svg>
            </div>
          </div>

          {/* Toggle Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className={`nav-btn ${isDifferential ? 'nav-btn-primary' : ''}`}
              onClick={() => setIsDifferential(!isDifferential)}
              style={{ fontSize: '0.8rem', padding: '0.35rem 0.95rem' }}
            >
              {isDifferential ? 'Desactivar Receptor Diferencial (Ver Error)' : 'Activar Receptor Diferencial (Cancelar Ruido)'}
            </button>
          </div>
        </div>

        {/* Right: Explanatory Core Principles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #0284c7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <div className="bullet-icon"><Radio size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                1. Transmisión Balanceada y Modo Común
              </h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
              Por un hilo viaja la señal original (+V) y por el otro la invertida (-V). Al estar fuertemente trenzados, el ruido electromagnético externo (N) incide con <strong>idéntica fase y magnitud</strong> en ambos hilos (modo común). Al restar ambas señales en el receptor:
              <br />
              <code style={{ background: '#f1f8fc', border: '1.5px solid #111', padding: '3px 8px', borderRadius: '6px', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>
                V_diff = (+V + N) - (-V + N) = 2V
              </code>
              <br />
              <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: '700', marginTop: '4px', display: 'block' }}>
                ✓ El ruido inducido N se cancela matemáticamente sin distorsionar los datos.
              </span>
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #d97706', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.25rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#d97706', color: '#d97706' }}><Sliders size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                2. Ritmos de Trenzado Asimétricos (Paso de Torsión)
              </h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
              Dentro del cable UTP de 4 pares, cada par tiene un número distinto de <strong>vueltas por metro</strong> (tasa de paso diferente).
              <br />
              Si todos los pares tuvieran el mismo trenzado, sus campos electromagnéticos viajarían paralelos induciéndose <strong>diafonía interna (Crosstalk)</strong>. Al variar el paso de cada par, la interacción magnética se anula a lo largo de los 100 metros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
