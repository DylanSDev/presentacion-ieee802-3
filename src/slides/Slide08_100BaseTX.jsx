import React, { useState } from 'react';
import { Activity, Zap, RefreshCw, Layers, Sparkles } from 'lucide-react';

export function Slide08_100BaseTX() {
  const [negotiating, setNegotiating] = useState(false);
  const [speedNegotiated, setSpeedNegotiated] = useState('100 Mbps (Full-Duplex)');

  const handleNegotiate = () => {
    setNegotiating(true);
    setTimeout(() => {
      setNegotiating(false);
      setSpeedNegotiated('100 Mbps (Full-Duplex Auto-Neg)');
    }, 1200);
  };

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3u (1995) · Fast Ethernet
        </div>
        <h2 className="slide-title">100BASE-TX: Fast Ethernet y Autonegociación</h2>
        <p className="slide-subtitle">
          El salto de 10x mediante codificación 4B/5B, modulación MLT-3 y compatibilidad automática.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive MLT-3 Waveform */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Modulación Física MLT-3 (+1, 0, -1)
            </span>
            <span style={{ fontSize: '0.74rem', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#e0f2fe', padding: '2px 7px', borderRadius: '6px', border: '1.5px solid #111' }}>
              FRECUENCIA: 31.25 MHz
            </span>
          </div>

          <div style={{ margin: '0.35rem 0' }}>
            <svg width="100%" height="110" viewBox="0 0 400 110" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              <line x1="40" y1="20" x2="380" y2="20" stroke="#cbd5e1" strokeDasharray="2 2" />
              <text x="30" y="24" fill="#0284c7" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">+1V</text>

              <line x1="40" y1="55" x2="380" y2="55" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="30" y="59" fill="#475569" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">0V</text>

              <line x1="40" y1="90" x2="380" y2="90" stroke="#cbd5e1" strokeDasharray="2 2" />
              <text x="30" y="94" fill="#d97706" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">-1V</text>

              <path
                d="M 50 55 H 80 V 20 H 120 V 55 H 160 V 90 H 200 V 55 H 240 V 20 H 280 V 55 H 320 V 90 H 360"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3"
              />

              {['1', '1', '1', '1', '1', '1', '1'].map((bit, i) => (
                <text key={i} x={65 + i * 40} y="14" fill="#111111" fontSize="10" fontFamily="Fredoka, Outfit" fontWeight="800" textAnchor="middle">
                  Bit {bit}
                </text>
              ))}
            </svg>
            <div style={{ fontSize: '0.76rem', color: '#475569', marginTop: '4px', textAlign: 'center', fontWeight: '500' }}>
              Transiciona solo en bits 1: 4 transiciones por ciclo (125 MHz / 4 = <strong>31.25 MHz</strong>).
            </div>
          </div>

          {/* Autonegotiation Interactive Demo */}
          <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Autonegociación (Pulsos FLP)</span>
              <button
                className="nav-btn nav-btn-primary"
                onClick={handleNegotiate}
                disabled={negotiating}
                style={{ padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}
              >
                <RefreshCw size={11} className={negotiating ? 'spin' : ''} /> {negotiating ? 'Negociando...' : 'Re-negociar'}
              </button>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.76rem', fontWeight: '800', color: negotiating ? '#d97706' : '#059669', background: '#ffffff', padding: '2px 6px', borderRadius: '5px', border: '1.5px solid #111' }}>
              Estado: {negotiating ? 'Intercambiando FLP...' : `Enlace Activo ➔ ${speedNegotiated}`}
            </div>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon"><Layers size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Codificación en Dos Pasos: 4B/5B</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Convierte bloques de 4 bits de datos en 5 bits de línea (100 Mbps ➔ 125 MBaud). Garantiza que nunca existan más de 3 ceros seguidos, manteniendo el reloj sin línea extra.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Activity size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Modulación MLT-3 (Multi-Level)</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Rota entre 3 niveles (+1, 0, -1), logrando que la frecuencia fundamental caiga a solo <strong>31.25 MHz</strong>, operando cómodamente dentro de los 100 MHz de Cat 5.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Autonegociación Retrocompatible</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Permitió que una tarjeta 100BASE-TX se conecte a un hub clásico de 10 Mbps sin configuración manual, acordando la mayor velocidad común.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
