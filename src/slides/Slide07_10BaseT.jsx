import React, { useState } from 'react';
import { Cpu, Activity, Zap, Sparkles, Clock, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Slide07_10BaseT() {
  const [binarySeq, setBinarySeq] = useState('10110010');
  const [hoveredPreset, setHoveredPreset] = useState(null);
  const [hoveredBitIndex, setHoveredBitIndex] = useState(null);

  const presets = [
    {
      label: 'Trama Datos',
      bits: '10110010',
      title: 'Trama de Datos Típica',
      desc: 'Patrón mixto con transiciones centrales en cada bit y transiciones de frontera entre bits idénticos.'
    },
    {
      label: 'Preámbulo 10M',
      bits: '10101010',
      title: 'Preámbulo Ethernet (10101010...)',
      desc: 'Genera una onda cuadrada periódica pura a 10 MHz que permite al receptor calibrar y enganchar su reloj (PLL).'
    },
    {
      label: 'Racha 1s y 0s',
      bits: '11110000',
      title: 'Racha de Bits Idénticos',
      desc: 'Demuestra las transiciones obligatorias en el límite del bit para no perder el sincronismo ante secuencias continuas de 1s o 0s.'
    }
  ];

  // Generate 100% continuous, physically accurate Manchester waveform
  const generateContinuousManchesterPath = () => {
    const bits = binarySeq || '0';
    const totalBits = bits.length;
    const width = 380;
    const bitWidth = width / totalBits;
    const yHigh = 32;
    const yLow = 88;
    const yMid = (yHigh + yLow) / 2;

    const pathSegments = [];
    const midTransitions = [];

    for (let i = 0; i < totalBits; i++) {
      const bit = bits[i];
      const xStart = i * bitWidth;
      const xMid = xStart + bitWidth / 2;
      const xEnd = (i + 1) * bitWidth;
      const isOne = bit === '1';

      // Bit 1 = Low to High (IEEE 802.3 standard)
      // Bit 0 = High to Low
      const firstHalfY = isOne ? yLow : yHigh;
      const secondHalfY = isOne ? yHigh : yLow;

      if (i === 0) {
        pathSegments.push(`M ${xStart.toFixed(1)} ${firstHalfY}`);
      } else {
        // Inter-bit boundary transition if previous bit ended at different level
        const prevBit = bits[i - 1];
        const prevEndLevel = prevBit === '1' ? yHigh : yLow;
        if (prevEndLevel !== firstHalfY) {
          pathSegments.push(`L ${xStart.toFixed(1)} ${firstHalfY}`);
        }
      }

      // First half of bit period
      pathSegments.push(`L ${xMid.toFixed(1)} ${firstHalfY}`);
      // Central clock synchronization transition
      pathSegments.push(`L ${xMid.toFixed(1)} ${secondHalfY}`);
      // Second half of bit period
      pathSegments.push(`L ${xEnd.toFixed(1)} ${secondHalfY}`);

      // Save mid-transition point for marker
      midTransitions.push({
        index: i,
        x: xMid,
        y: yMid,
        isOne,
        xStart,
        xEnd,
        bit
      });
    }

    return { path: pathSegments.join(' '), midTransitions, bitWidth, yHigh, yLow };
  };

  const { path: waveformPath, midTransitions, bitWidth, yHigh, yLow } = generateContinuousManchesterPath();

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3i (1990) · Ethernet Clásico
        </div>
        <h2 className="slide-title">10BASE-T: Codificación Manchester y Autosincronismo</h2>
        <p className="slide-subtitle">
          El estándar que masificó el par trenzado UTP, combinando datos y reloj en cada bit para sincronizar sin hilo extra.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Manchester Signal Visualizer */}
        <div className="interactive-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.65rem' }}>
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Activity size={18} />
              Codificación Manchester (IEEE 802.3)
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: '700', color: '#475569' }}>Bits:</span>
              <input
                type="text"
                maxLength={8}
                value={binarySeq}
                onChange={(e) => setBinarySeq(e.target.value.replace(/[^01]/g, ''))}
                placeholder="01010101"
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
                    padding: '0.24rem 0.4rem',
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

          {/* Oscilloscope Canvas with Continuous Electrical Waveform and Bit Tooltips */}
          <div style={{ position: 'relative', margin: '0.1rem 0' }}>
            <svg width="100%" height="125" viewBox="0 0 400 125" style={{ background: '#f8fafc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* Voltage Grid Reference Lines */}
              <line x1="28" y1={yHigh} x2="395" y2={yHigh} stroke="#cbd5e1" strokeDasharray="3 3" />
              <text x="24" y={yHigh + 3} fill="#0284c7" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">+1V</text>

              <line x1="28" y1={(yHigh + yLow) / 2} x2="395" y2={(yHigh + yLow) / 2} stroke="#e2e8f0" strokeWidth="1" />
              <text x="24" y={(yHigh + yLow) / 2 + 3} fill="#64748b" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">0V</text>

              <line x1="28" y1={yLow} x2="395" y2={yLow} stroke="#cbd5e1" strokeDasharray="3 3" />
              <text x="24" y={yLow + 3} fill="#d97706" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="end">-1V</text>

              {/* Bit Headers & Boundaries */}
              <g transform="translate(15, 0)">
                {midTransitions.map((t, idx) => {
                  const isHovered = hoveredBitIndex === idx;
                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredBitIndex(idx)}
                      onMouseLeave={() => setHoveredBitIndex(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Active highlight background column */}
                      {isHovered && (
                        <rect
                          x={t.xStart}
                          y="4"
                          width={bitWidth - 1}
                          height="110"
                          rx="4"
                          fill="#e0f2fe"
                          opacity="0.45"
                        />
                      )}

                      {/* Bit top banner box */}
                      <rect
                        x={t.xStart}
                        y="4"
                        width={bitWidth - 1}
                        height="16"
                        rx="4"
                        fill={isHovered ? '#0284c7' : '#ffffff'}
                        stroke="#111111"
                        strokeWidth="1.2"
                      />
                      <text
                        x={t.xStart + bitWidth / 2}
                        y="16"
                        fill={isHovered ? '#ffffff' : t.isOne ? '#0284c7' : '#d97706'}
                        fontSize="10.5"
                        fontWeight="800"
                        fontFamily="Fredoka, Outfit"
                        textAnchor="middle"
                      >
                        {t.bit}
                      </text>

                      {/* Clock sampling center vertical guideline */}
                      <line x1={t.x} y1="21" x2={t.x} y2="108" stroke={isHovered ? '#0284c7' : '#cbd5e1'} strokeDasharray="2 2" strokeWidth={isHovered ? 1.5 : 1} />

                      {/* Transition synchronization dot */}
                      <circle
                        cx={t.x}
                        cy={(yHigh + yLow) / 2}
                        r={isHovered ? '4.5' : '3.5'}
                        fill="#d97706"
                        stroke="#111111"
                        strokeWidth="1.2"
                      />
                    </g>
                  );
                })}

                {/* The Continuous Manchester Voltage Path */}
                <path d={waveformPath} fill="none" stroke="#0284c7" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              </g>

              {/* Scope Bottom Labels */}
              <text x="200" y="119" fill="#475569" fontSize="8.5" fontFamily="Fredoka, Outfit" fontWeight="700" textAnchor="middle">
                ● Transición central obligatoria = Extracción de Reloj (Autosincronismo)
              </text>
            </svg>

            {/* Tooltip for Hovered Bit in Scope */}
            <AnimatePresence>
              {hoveredBitIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
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
                  Bit {midTransitions[hoveredBitIndex]?.bit}: {midTransitions[hoveredBitIndex]?.isOne ? '1 (Bajo -1V ➔ Alto +1V en T/2)' : '0 (Alto +1V ➔ Bajo -1V en T/2)'}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rule Card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
            <div className="inner-box" style={{ padding: '0.35rem 0.6rem', borderLeft: '4px solid #0284c7' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>Bit 1 = Bajo ➔ Alto</div>
              <div style={{ fontSize: '0.7rem', color: '#475569' }}>Flanco de subida en T/2 (-1V ➔ +1V)</div>
            </div>
            <div className="inner-box" style={{ padding: '0.35rem 0.6rem', borderLeft: '4px solid #d97706' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#d97706', fontFamily: 'Fredoka, Outfit' }}>Bit 0 = Alto ➔ Bajo</div>
              <div style={{ fontSize: '0.7rem', color: '#475569' }}>Flanco de bajada en T/2 (+1V ➔ -1V)</div>
            </div>
          </div>

          {/* Inefficiency warning box */}
          <div style={{ padding: '0.45rem 0.7rem', background: '#fef3c7', border: '1.5px solid #d97706', borderRadius: '8px', fontSize: '0.76rem', color: '#111111', lineHeight: '1.35' }}>
            ⚠️ <strong>Ineficiencia Espectral (1 bit = 1 baudio con doble transición):</strong> Para transmitir 10 Mbps exige una frecuencia de <strong>10 MHz</strong> en el cable.
          </div>
        </div>

        {/* Right: Technical Fact Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #0284c7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
              <div className="bullet-icon"><Zap size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Especificaciones de 10BASE-T</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.84rem', color: '#475569' }}>
              <li><strong>Velocidad Nominal:</strong> 10 Mbps (Half / Full Duplex)</li>
              <li><strong>Cable Mínimo:</strong> UTP Categoría 3 (16 MHz)</li>
              <li><strong>Distancia Máxima:</strong> 100 metros por segmento de enlace</li>
              <li><strong>Topología:</strong> Estrella con Hub o Switch central</li>
            </ul>
          </div>

          <div className="glass-card" style={{ flex: 1, borderLeft: '6px solid #2563eb', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
              <div className="bullet-icon" style={{ borderColor: '#2563eb', color: '#2563eb' }}><Cpu size={16} /></div>
              <h3 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Uso de 2 de los 4 Pares (RJ-45)</h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
              10BASE-T solo energiza <strong>4 de los 8 hilos</strong> del conector RJ-45:
              <br />
              • <strong>Pines 1 y 2:</strong> Par Transmisor (TX+ / TX-)
              <br />
              • <strong>Pines 3 y 6:</strong> Par Receptor (RX+ / RX-)
              <br />
              Los pines 4, 5, 7 y 8 quedaban libres (más adelante aprovechados por PoE para suministrar corriente continua).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
