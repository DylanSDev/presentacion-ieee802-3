import React, { useState } from 'react';
import { Activity, Zap, RefreshCw, Layers } from 'lucide-react';

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
        <div className="slide-tag">IEEE 802.3u (1995) · Fast Ethernet</div>
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
            <span style={{ fontSize: '0.75rem', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
              Frecuencia Fundamental: 31.25 MHz
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <svg width="100%" height="150" viewBox="0 0 400 150" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              {/* Voltage Levels Grid */}
              <line x1="40" y1="30" x2="380" y2="30" stroke="var(--svg-grid-stroke)" strokeDasharray="2 2" />
              <text x="30" y="34" fill="var(--cyan-primary)" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">+1V</text>

              <line x1="40" y1="75" x2="380" y2="75" stroke="var(--svg-grid-stroke)" strokeWidth="1.5" />
              <text x="30" y="79" fill="var(--svg-text-sub)" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">0V</text>

              <line x1="40" y1="120" x2="380" y2="120" stroke="var(--svg-grid-stroke)" strokeDasharray="2 2" />
              <text x="30" y="124" fill="var(--amber-accent)" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">-1V</text>

              {/* MLT-3 Waveform */}
              <path
                d="M 50 75 H 80 V 30 H 120 V 75 H 160 V 120 H 200 V 75 H 240 V 30 H 280 V 75 H 320 V 120 H 360"
                fill="none"
                stroke="var(--cyan-primary)"
                strokeWidth="3"
              />

              {/* Bit indicators */}
              {['1', '1', '1', '1', '1', '1', '1'].map((bit, i) => (
                <text key={i} x={65 + i * 40} y="20" fill="var(--svg-text-main)" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">
                  Bit {bit}
                </text>
              ))}
            </svg>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px', textAlign: 'center' }}>
              Solo transiciona de nivel cuando el bit es 1, requiriendo 4 transiciones para un ciclo completo (125 MHz / 4 = <strong>31.25 MHz</strong>).
            </div>
          </div>

          {/* Autonegotiation Interactive Demo */}
          <div className="inner-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-heading)' }}>Simulador de Autonegociación (FLP Pulses)</span>
              <button
                className="nav-btn nav-btn-primary"
                onClick={handleNegotiate}
                disabled={negotiating}
                style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
              >
                <RefreshCw size={12} className={negotiating ? 'spin' : ''} /> {negotiating ? 'Negociando...' : 'Re-negociar Enlace'}
              </button>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 'bold', color: negotiating ? 'var(--amber-accent)' : 'var(--emerald-accent)' }}>
              Estado: {negotiating ? 'Intercambiando Fast Link Pulses (FLP)...' : `Enlace Activo ➔ ${speedNegotiated}`}
            </div>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Layers size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>1. Codificación en Dos Pasos: 4B/5B</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Convierte cada grupo de 4 bits de datos en 5 bits de línea (100 Mbps ➔ 125 MBaud). Esto garantiza que nunca existan más de tres ceros consecutivos, manteniendo la sincronización de reloj sin necesidad de señal dedicada.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--blue-accent)', color: 'var(--blue-accent)' }}><Activity size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>2. Modulación MLT-3 (Multi-Level Transmit)</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Si se usara Manchester a 100 Mbps, se necesitaría una frecuencia de 100 MHz (el límite físico de Cat 5). MLT-3 rota entre 3 niveles (+1, 0, -1), logrando que la frecuencia fundamental caiga a apenas <strong>31.25 MHz</strong>, operando cómodamente dentro de Cat 5.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--emerald-accent)', color: 'var(--emerald-accent)' }}><Zap size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>3. Autonegociación Retrocompatible</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Permitió que una tarjeta de red 100BASE-TX se conecte a un hub de 10 Mbps sin fallar, acordando la mayor velocidad común soportada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
