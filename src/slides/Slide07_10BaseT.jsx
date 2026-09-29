import React, { useState } from 'react';
import { Cpu, Activity, Zap, Sparkles } from 'lucide-react';

export function Slide07_10BaseT() {
  const [binarySeq, setBinarySeq] = useState('10110010');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3i (1990) · Ethernet Clásico
        </div>
        <h2 className="slide-title">10BASE-T: El Nacimiento del Ethernet Moderno</h2>
        <p className="slide-subtitle">
          El estándar que masificó el cable de par trenzado UTP y desplazó definitivamente al cable coaxial.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Manchester Signal Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Codificación Manchester (Transición en cada bit)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#475569' }}>Bits:</span>
              <input
                type="text"
                maxLength={8}
                value={binarySeq}
                onChange={(e) => setBinarySeq(e.target.value.replace(/[^01]/g, ''))}
                style={{
                  width: '85px',
                  background: '#f1f8fc',
                  border: '2px solid #111111',
                  borderRadius: '6px',
                  color: '#0284c7',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.82rem',
                  padding: '2px 5px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              />
            </div>
          </div>

          {/* SVG Waveform Rendering */}
          <div style={{ margin: '0.4rem 0' }}>
            <svg width="100%" height="115" viewBox="0 0 400 115" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {binarySeq.split('').map((bit, idx) => {
                const step = 400 / (binarySeq.length || 1);
                const xStart = idx * step;
                const xMid = xStart + step / 2;
                const xEnd = xStart + step;
                const isOne = bit === '1';

                return (
                  <g key={idx}>
                    <rect x={xStart} y="6" width={step} height="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                    <text x={xMid} y="19" fill="#0284c7" fontSize="10.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">
                      {bit}
                    </text>

                    <line x1={xMid} y1="26" x2={xMid} y2="105" stroke="#cbd5e1" strokeDasharray="2 2" />

                    <path
                      d={
                        isOne
                          ? `M ${xStart} 90 H ${xMid} V 40 H ${xEnd}`
                          : `M ${xStart} 40 H ${xMid} V 90 H ${xEnd}`
                      }
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />

                    <circle cx={xMid} cy={65} r="3" fill="#d97706" stroke="#111" strokeWidth="1" />
                  </g>
                );
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#475569', marginTop: '4px', fontWeight: '600' }}>
              <span>Bit 1 = Bajo ➔ Alto</span>
              <span style={{ color: '#d97706', fontWeight: '800' }}>● Sincronismo Central</span>
              <span>Bit 0 = Alto ➔ Bajo</span>
            </div>
          </div>

          <div style={{ padding: '0.55rem 0.8rem', background: '#fef3c7', border: '2px solid #d97706', borderRadius: '8px', fontSize: '0.78rem', color: '#111111', fontWeight: '500' }}>
            ⚠️ <strong>Ineficiencia Espectral:</strong> Requiere una frecuencia de 10 MHz para transmitir 10 Mbps (1 baudio = 1 bit con doble transición).
          </div>
        </div>

        {/* Right: Technical Fact Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Especificaciones de 10BASE-T</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.84rem', color: '#475569' }}>
              <li><strong>Velocidad Nominal:</strong> 10 Mbps</li>
              <li><strong>Cable Mínimo:</strong> UTP Categoría 3 (16 MHz)</li>
              <li><strong>Distancia Máxima:</strong> 100 metros por segmento</li>
              <li><strong>Topología:</strong> Estrella con Hub o Switch</li>
            </ul>
          </div>

          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Uso de 2 de los 4 Pares</h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
              10BASE-T solo energiza <strong>4 de los 8 hilos</strong> del conector RJ-45:
              <br />
              • Pines 1 y 2: Par Transmisor (TX+ / TX-)
              <br />
              • Pines 3 y 6: Par Receptor (RX+ / RX-)
              <br />
              Los pines 4, 5, 7 y 8 quedaban libres (más adelante usados por PoE).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
