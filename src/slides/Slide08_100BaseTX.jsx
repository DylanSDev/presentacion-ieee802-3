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
        <h2 className="slide-title">100BASE-TX: El Salto de 10x y la Autonegociación</h2>
        <p className="slide-subtitle">
          Multiplicó la velocidad por diez mediante codificación 4B/5B, modulación MLT-3 y compatibilidad automática.
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
            <span style={{ fontSize: '0.78rem', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#e0f2fe', padding: '2px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
              Frecuencia Fundamental: 31.25 MHz
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <svg width="100%" height="150" viewBox="0 0 400 150" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* Voltage Levels Grid */}
              <line x1="40" y1="30" x2="380" y2="30" stroke="#cbd5e1" strokeDasharray="2 2" />
              <text x="30" y="34" fill="#0284c7" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">+1V</text>

              <line x1="40" y1="75" x2="380" y2="75" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="30" y="79" fill="#475569" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">0V</text>

              <line x1="40" y1="120" x2="380" y2="120" stroke="#cbd5e1" strokeDasharray="2 2" />
              <text x="30" y="124" fill="#d97706" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">-1V</text>

              {/* MLT-3 Waveform */}
              <path
                d="M 50 75 H 80 V 30 H 120 V 75 H 160 V 120 H 200 V 75 H 240 V 30 H 280 V 75 H 320 V 120 H 360"
                fill="none"
                stroke="#0284c7"
                strokeWidth="3.2"
              />

              {/* Bit indicators */}
              {['1', '1', '1', '1', '1', '1', '1'].map((bit, i) => (
                <text key={i} x={65 + i * 40} y="20" fill="#111111" fontSize="11" fontFamily="Fredoka, Outfit" fontWeight="800" textAnchor="middle">
                  Bit {bit}
                </text>
              ))}
            </svg>
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '6px', textAlign: 'center', fontWeight: '500' }}>
              Solo transiciona de nivel cuando el bit es 1, requiriendo 4 transiciones para un ciclo completo (125 MHz / 4 = <strong>31.25 MHz</strong>).
            </div>
          </div>

          {/* Autonegotiation Interactive Demo */}
          <div className="inner-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Simulador de Autonegociación (FLP Pulses)</span>
              <button
                className="nav-btn nav-btn-primary"
                onClick={handleNegotiate}
                disabled={negotiating}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
              >
                <RefreshCw size={13} className={negotiating ? 'spin' : ''} /> {negotiating ? 'Negociando...' : 'Re-negociar Enlace'}
              </button>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.82rem', fontWeight: '800', color: negotiating ? '#d97706' : '#059669', background: '#ffffff', padding: '4px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
              Estado: {negotiating ? 'Intercambiando Fast Link Pulses (FLP)...' : `Enlace Activo ➔ ${speedNegotiated}`}
            </div>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Layers size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Codificación en Dos Pasos: 4B/5B</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Convierte cada grupo de 4 bits de datos en 5 bits de línea (100 Mbps ➔ 125 MBaud). Esto garantiza que nunca existan más de tres ceros consecutivos, manteniendo la sincronización de reloj sin necesidad de señal dedicada.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Activity size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Modulación MLT-3 (Multi-Level Transmit)</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Si se usara Manchester a 100 Mbps, se necesitaría una frecuencia de 100 MHz (el límite físico de Cat 5). MLT-3 rota entre 3 niveles (+1, 0, -1), logrando que la frecuencia fundamental caiga a apenas <strong>31.25 MHz</strong>, operando cómodamente dentro de Cat 5.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Autonegociación Retrocompatible</h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Permitió que una tarjeta de red 100BASE-TX se conecte a un hub de 10 Mbps sin fallar, acordando la mayor velocidad común soportada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
