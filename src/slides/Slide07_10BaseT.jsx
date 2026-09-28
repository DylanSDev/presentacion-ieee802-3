import React, { useState } from 'react';
import { Cpu, Activity, Zap } from 'lucide-react';

export function Slide07_10BaseT() {
  const [binarySeq, setBinarySeq] = useState('10110010');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">IEEE 802.3i (1990) · Ethernet Clásico</div>
        <h2 className="slide-title">10BASE-T: El Nacimiento del Ethernet Moderno</h2>
        <p className="slide-subtitle">
          El estándar que masificó el cable de par trenzado UTP y desplazó definitivamente al cable coaxial.
        </p>
      </div>

      <div className="slide-body grid-2col-wide-left">
        {/* Left: Interactive Manchester Signal Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Codificación Manchester (Transición en cada bit)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Secuencia:</span>
              <input
                type="text"
                maxLength={8}
                value={binarySeq}
                onChange={(e) => setBinarySeq(e.target.value.replace(/[^01]/g, ''))}
                style={{
                  width: '90px',
                  background: 'var(--bg-inner-box)',
                  border: '1px solid var(--cyan-primary)',
                  borderRadius: '4px',
                  color: 'var(--cyan-primary)',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.8rem',
                  padding: '2px 6px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              />
            </div>
          </div>

          {/* SVG Waveform Rendering */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <svg width="100%" height="160" viewBox="0 0 400 160" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              {binarySeq.split('').map((bit, idx) => {
                const step = 400 / (binarySeq.length || 1);
                const xStart = idx * step;
                const xMid = xStart + step / 2;
                const xEnd = xStart + step;
                const isOne = bit === '1';

                return (
                  <g key={idx}>
                    <rect x={xStart} y="10" width={step} height="20" fill="var(--bg-inner-box)" stroke="var(--svg-grid-stroke)" />
                    <text x={xMid} y="24" fill="var(--cyan-primary)" fontSize="12" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">
                      {bit}
                    </text>

                    <line x1={xMid} y1="35" x2={xMid} y2="135" stroke="var(--svg-grid-stroke)" strokeDasharray="2 2" />

                    <path
                      d={
                        isOne
                          ? `M ${xStart} 110 H ${xMid} V 40 H ${xEnd}`
                          : `M ${xStart} 40 H ${xMid} V 110 H ${xEnd}`
                      }
                      fill="none"
                      stroke="var(--cyan-primary)"
                      strokeWidth="2.5"
                    />

                    <circle cx={xMid} cy={75} r="3" fill="var(--amber-accent)" />
                  </g>
                );
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              <span>Bit 1 = Transición Bajo ➔ Alto</span>
              <span style={{ color: 'var(--amber-accent)', fontWeight: 'bold' }}>● Sincronismo de Reloj Central</span>
              <span>Bit 0 = Transición Alto ➔ Bajo</span>
            </div>
          </div>

          <div style={{ padding: '0.75rem', background: 'rgba(217, 119, 6, 0.1)', border: '1px solid var(--amber-accent)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
            ⚠️ <strong>Ineficiencia Espectral:</strong> Requiere una frecuencia de señal de 10 MHz para transmitir 10 Mbps (1 baudio = 1 bit con doble transición). Desperdicia gran parte del ancho de banda del cable.
          </div>
        </div>

        {/* Right: Technical Fact Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Especificaciones de 10BASE-T</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li><strong>Velocidad Nominal:</strong> 10 Mbps</li>
              <li><strong>Cable Mínimo:</strong> UTP Categoría 3 (16 MHz)</li>
              <li><strong>Distancia Máxima:</strong> 100 metros por segmento</li>
              <li><strong>Topología:</strong> Estrella con Hub o Switch</li>
            </ul>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div className="bullet-icon" style={{ borderColor: 'var(--blue-accent)', color: 'var(--blue-accent)' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Uso de 2 de los 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              10BASE-T solo energiza <strong>4 de los 8 hilos</strong> del conector RJ-45:
              <br />
              • Pines 1 y 2: Par Transmisor (TX+ / TX-)
              <br />
              • Pines 3 y 6: Par Receptor (RX+ / RX-)
              <br />
              Los pines 4, 5, 7 y 8 quedaban completamente libres (más tarde utilizados para PoE o telefonía).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
