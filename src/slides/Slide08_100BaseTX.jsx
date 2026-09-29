import React, { useState } from 'react';
import { Activity, Zap, Layers, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Slide08_100BaseTX() {
  const [binarySeq, setBinarySeq] = useState('11110011');
  const [hoveredPreset, setHoveredPreset] = useState(null);
  const [hoveredBitIndex, setHoveredBitIndex] = useState(null);

  const presets = [
    {
      label: 'Racha 1s (Máx Freq)',
      bits: '11111111',
      title: 'Frecuencia Máxima (31.25 MHz)',
      desc: 'Con bits 1 continuos, completa un ciclo cada 4 bits (0V ➔ +1V ➔ 0V ➔ -1V), reduciendo 125 MBaud a solo 31.25 MHz.'
    },
    {
      label: 'Alternado (1s y 0s)',
      bits: '10101010',
      title: 'Datos Alternados',
      desc: 'Muestra cómo los bits 0 mantienen el nivel de voltaje estático sin transición, reduciendo aún más la frecuencia media.'
    },
    {
      label: 'Mixto Típico',
      bits: '11110011',
      title: 'Secuencia Mixta 4B/5B',
      desc: 'Patrón codificado que evita más de 3 ceros seguidos, garantizando transiciones periódicas para el reloj.'
    }
  ];

  // Generate 100% physically accurate MLT-3 waveform
  const generateMLT3Path = () => {
    const bits = binarySeq || '0';
    const totalBits = bits.length;
    const width = 380;
    const bitWidth = width / totalBits;
    const yHigh = 28;
    const yMid = 58;
    const yLow = 88;

    const cycleLevels = [yMid, yHigh, yMid, yLow]; // 0V -> +1V -> 0V -> -1V
    let stateIdx = 0; // starts at 0V
    let currentY = yMid;

    const pathSegments = [];
    const bitDetails = [];

    for (let i = 0; i < totalBits; i++) {
      const bit = bits[i];
      const xStart = i * bitWidth;
      const xEnd = (i + 1) * bitWidth;
      const prevY = currentY;

      if (bit === '1') {
        // Bit 1: Transition to the next state in sequence
        stateIdx = (stateIdx + 1) % 4;
        currentY = cycleLevels[stateIdx];
      }
      // Bit 0: No transition, stay at currentY

      const voltageLabel = currentY === yHigh ? '+1V' : currentY === yLow ? '-1V' : '0V';

      if (i === 0) {
        pathSegments.push(`M ${xStart.toFixed(1)} ${currentY}`);
      } else if (prevY !== currentY) {
        // Vertical transition at the start of this bit
        pathSegments.push(`L ${xStart.toFixed(1)} ${currentY}`);
      }

      // Horizontal plateau for this bit duration
      pathSegments.push(`L ${xEnd.toFixed(1)} ${currentY}`);

      bitDetails.push({
        index: i,
        bit,
        xStart,
        xEnd,
        xCenter: xStart + bitWidth / 2,
        y: currentY,
        voltageLabel,
        transitioned: bit === '1'
      });
    }

    return { path: pathSegments.join(' '), bitDetails, bitWidth, yHigh, yMid, yLow };
  };

  const { path: waveformPath, bitDetails, bitWidth, yHigh, yMid, yLow } = generateMLT3Path();

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3u (1995) · Fast Ethernet
        </div>
        <h2 className="slide-title">100BASE-TX: Fast Ethernet y Modulación MLT-3</h2>
        <p className="slide-subtitle">
          El salto de 10x mediante codificación 4B/5B, modulación de 3 niveles a 31.25 MHz y autonegociación FLP.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive MLT-3 Waveform */}
        <div className="interactive-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.65rem' }}>
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Modulación Física MLT-3 (+1, 0, -1)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#475569' }}>Bits:</span>
              <input
                type="text"
                maxLength={8}
                value={binarySeq}
                onChange={(e) => setBinarySeq(e.target.value.replace(/[^01]/g, ''))}
                placeholder="11110011"
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
                  fontWeight: '800'
                }}
              />
            </div>
          </div>

          {/* Quick Preset Buttons with Tooltip Hover & Click Support */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setBinarySeq(p.bits);
                    setHoveredPreset(hoveredPreset === idx ? null : idx);
                  }}
                  onMouseEnter={() => setHoveredPreset(idx)}
                  onMouseLeave={() => setHoveredPreset(null)}
                  style={{
                    flex: 1,
                    padding: '0.22rem 0.4rem',
                    borderRadius: '7px',
                    background: binarySeq === p.bits ? '#e0f2fe' : '#ffffff',
                    border: '1.5px solid #111111',
                    boxShadow: binarySeq === p.bits ? '2px 2px 0px #111111' : '1px 1px 0px #111111',
                    color: binarySeq === p.bits ? '#0284c7' : '#475569',
                    fontFamily: 'Fredoka, Outfit',
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <span>{p.label}</span>
                  <HelpCircle size={11} color="#64748b" />
                </button>
              ))}
            </div>

            {/* Floating Tooltip for Presets */}
            <AnimatePresence>
              {hoveredPreset !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 2, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: '32px',
                    left: 0,
                    right: 0,
                    zIndex: 30,
                    background: '#ffffff',
                    border: '2px solid #111111',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    boxShadow: '4px 4px 0px #111111',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>
                    💡 {presets[hoveredPreset].title} ({presets[hoveredPreset].bits})
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#334155', lineHeight: '1.35', marginTop: '2px' }}>
                    {presets[hoveredPreset].desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Oscilloscope Canvas with Continuous MLT-3 Waveform */}
          <div style={{ position: 'relative', margin: '0.1rem 0' }}>
            <svg width="100%" height="115" viewBox="0 0 400 115" style={{ background: '#f8fafc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* Voltage Rails (+1V, 0V, -1V) */}
              <line x1="28" y1={yHigh} x2="395" y2={yHigh} stroke="#cbd5e1" strokeDasharray="3 3" />
              <text x="24" y={yHigh + 3} fill="#0284c7" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">+1V</text>

              <line x1="28" y1={yMid} x2="395" y2={yMid} stroke="#94a3b8" strokeWidth="1.2" />
              <text x="24" y={yMid + 3} fill="#475569" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">0V</text>

              <line x1="28" y1={yLow} x2="395" y2={yLow} stroke="#cbd5e1" strokeDasharray="3 3" />
              <text x="24" y={yLow + 3} fill="#d97706" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">-1V</text>

              {/* Bit Headers & Guides */}
              <g transform="translate(15, 0)">
                {bitDetails.map((b, idx) => {
                  const isHovered = hoveredBitIndex === idx;
                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredBitIndex(idx)}
                      onMouseLeave={() => setHoveredBitIndex(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Highlight column */}
                      {isHovered && (
                        <rect
                          x={b.xStart}
                          y="4"
                          width={bitWidth - 1}
                          height="102"
                          rx="4"
                          fill="#e0f2fe"
                          opacity="0.5"
                        />
                      )}

                      {/* Top Bit Box */}
                      <rect
                        x={b.xStart}
                        y="4"
                        width={bitWidth - 1}
                        height="15"
                        rx="4"
                        fill={isHovered ? '#0284c7' : '#ffffff'}
                        stroke="#111111"
                        strokeWidth="1.2"
                      />
                      <text
                        x={b.xCenter}
                        y="15"
                        fill={isHovered ? '#ffffff' : b.bit === '1' ? '#0284c7' : '#64748b'}
                        fontSize="10"
                        fontWeight="800"
                        fontFamily="Fredoka, Outfit"
                        textAnchor="middle"
                      >
                        Bit {b.bit}
                      </text>

                      {/* Sampling vertical guideline */}
                      <line x1={b.xCenter} y1="19" x2={b.xCenter} y2="102" stroke={isHovered ? '#0284c7' : '#cbd5e1'} strokeDasharray="2 2" />

                      {/* State dot on wave */}
                      <circle
                        cx={b.xCenter}
                        cy={b.y}
                        r={isHovered ? '4' : '3'}
                        fill={b.bit === '1' ? '#0284c7' : '#94a3b8'}
                        stroke="#111111"
                        strokeWidth="1"
                      />
                    </g>
                  );
                })}

                {/* Continuous MLT-3 Voltage Line */}
                <path d={waveformPath} fill="none" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              </g>

              {/* Bottom State Machine Banner */}
              <text x="200" y="110" fill="#475569" fontSize="8.2" fontFamily="Fredoka, Outfit" fontWeight="700" textAnchor="middle">
                Secuencia Cíclica: [ 0V ➔ +1V ➔ 0V ➔ -1V ] (Bit 1 = Avanza · Bit 0 = Mantiene)
              </text>
            </svg>

            {/* Floating Bit Tooltip */}
            <AnimatePresence>
              {hoveredBitIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 25,
                    background: '#111111',
                    color: '#ffffff',
                    borderRadius: '6px',
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.72rem',
                    fontFamily: 'Fredoka, Outfit',
                    fontWeight: '700',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
                  }}
                >
                  Bit {bitDetails[hoveredBitIndex]?.bit}: {bitDetails[hoveredBitIndex]?.bit === '1' ? `Avanza de nivel (${bitDetails[hoveredBitIndex]?.voltageLabel})` : `Mantiene nivel constante (${bitDetails[hoveredBitIndex]?.voltageLabel})`}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Key Advantage Box */}
          <div className="inner-box" style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', color: '#111111', lineHeight: '1.4', borderLeft: '4px solid #0284c7' }}>
            ⚡ <strong>Ventaja sobre Manchester:</strong> En lugar de exigir 125 MHz en el cable, MLT-3 requiere 4 bits por ciclo completo, reduciendo la frecuencia fundamental a solo <strong>31.25 MHz</strong> sobre Cat 5.
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #0284c7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon"><Layers size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>1. Codificación en Dos Pasos: 4B/5B</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Convierte bloques de 4 bits de datos en 5 bits de línea (100 Mbps ➔ 125 MBaud). Garantiza que nunca existan más de 3 ceros seguidos, manteniendo el reloj sin línea extra.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #2563eb', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Activity size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>2. Modulación MLT-3 (Multi-Level)</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Rota entre 3 niveles (+1, 0, -1), logrando que la frecuencia fundamental caiga a solo <strong>31.25 MHz</strong> (125 MHz / 4), operando cómodamente dentro de los 100 MHz de Cat 5.
            </p>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #059669', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#059669', color: '#059669' }}><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>3. Autonegociación Retrocompatible</h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Permitió que una tarjeta 100BASE-TX se conecte a un hub clásico de 10 Mbps sin configuración manual, intercambiando ráfagas FLP para acordar la mayor velocidad común.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
