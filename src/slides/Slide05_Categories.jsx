import React, { useState } from 'react';
import { Layers, Zap, Gauge, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export function Slide05_Categories() {
  const [selectedCat, setSelectedCat] = useState('cat6a');

  const categories = {
    cat3: {
      name: 'Categoría 3 (Cat 3)',
      freq: '16 MHz',
      speed: '10 Mbps',
      standard: '10BASE-T (802.3i)',
      distance: '100 metros',
      structureTag: 'UTP BÁSICO (SUELTO)',
      structureDesc: 'Sin blindaje · Trenzado muy holgado (2-3 vueltas/pie)',
      features: [
        'Trenzado ligero no blindado (2-3 vueltas/pie)',
        'Suficiente para telefonía analógica y 10BASE-T',
        'Pares con holgura y cubierta plástica delgada'
      ],
      anatomy: [
        { label: 'Cubierta Exterior', desc: 'PVC estándar delgada sin relleno interno', icon: '⚪' },
        { label: '4 Pares de Cobre', desc: 'Trenzado suelto (2-3 vueltas/pie)', icon: '🌀' },
        { label: 'Blindaje / Separador', desc: 'Sin apantallar ni cruceta (UTP básico)', icon: '❌' }
      ],
      color: '#64748b'
    },
    cat5: {
      name: 'Categoría 5 (Cat 5)',
      freq: '100 MHz',
      speed: '100 Mbps',
      standard: '100BASE-TX (802.3u)',
      distance: '100 metros',
      structureTag: 'UTP COMPACTO DENSO',
      structureDesc: 'Trenzado uniforme (3-4 vueltas/pulgada) · Ajuste ceñido',
      features: [
        'Trenzado 3x más denso que Cat 3',
        'Habilitó Fast Ethernet (100 Mbps)',
        'Chaqueta ceñida sin holgura interna'
      ],
      anatomy: [
        { label: 'Cubierta Exterior', desc: 'PVC ajustada que agrupa los pares', icon: '⚪' },
        { label: '4 Pares de Cobre', desc: 'Trenzado denso (3-4 vueltas/pulgada)', icon: '🌀' },
        { label: 'Rendimiento', desc: '100 Mbps Fast Ethernet estable a 100 MHz', icon: '⚡' }
      ],
      color: '#0284c7'
    },
    cat5e: {
      name: 'Categoría 5e (Cat 5e - Enhanced)',
      freq: '100 MHz',
      speed: '1,000 Mbps (1 Gbps)',
      standard: '1000BASE-T (802.3ab)',
      distance: '100 metros',
      structureTag: 'TORSIÓN ASIMÉTRICA + RIPCORD',
      structureDesc: 'Paso de trenzado distinto en cada par + Hilo de nylon',
      features: [
        'Paso de torsión asimétrico calibrado por par',
        'Hilo de desgarro de nylon (Ripcord) integrado',
        'Control estricto de NEXT/FEXT para Gigabit 4 pares'
      ],
      anatomy: [
        { label: 'Torsión Asimétrica', desc: 'Paso calibrado distinto en cada par', icon: '🌀' },
        { label: 'Hilo Ripcord', desc: 'Nylon central para desgarro de chaqueta', icon: '🧵' },
        { label: 'Control NEXT/FEXT', desc: 'Tolerancias estrictas para Gigabit 1000BASE-T', icon: '🛡️' }
      ],
      color: '#059669'
    },
    cat6: {
      name: 'Categoría 6 (Cat 6)',
      freq: '250 MHz',
      speed: '1 Gbps (100m) / 10 Gbps (55m)',
      standard: '10GBASE-T limitado',
      distance: '55m para 10G / 100m para 1G',
      structureTag: 'CRUCETA PLÁSTICA (SPLINE)',
      structureDesc: 'Separador central en cruz que aísla los 4 cuadrantes',
      features: [
        'Cruceta plástica aislante central (Spline)',
        'Elimina físicamente la diafonía entre pares',
        '10 Gbps limitado a 55m por Alien Crosstalk'
      ],
      anatomy: [
        { label: 'Cruceta Central (Spline)', desc: 'Polietileno que aísla los 4 pares en cruz', icon: '➕' },
        { label: 'Calibre 23 AWG', desc: 'Conductores de cobre de mayor sección', icon: '⚡' },
        { label: 'Diafonía Interna Cero', desc: 'Elimina interacción magnética entre pares', icon: '🛡️' }
      ],
      color: '#d97706'
    },
    cat6a: {
      name: 'Categoría 6a (Cat 6a - Augmented)',
      freq: '500 MHz',
      speed: '10,000 Mbps (10 Gbps)',
      standard: '10GBASE-T (802.3an)',
      distance: '100 metros garantizados',
      structureTag: 'BLINDAJE FOIL + DRENAJE + CRUCETA',
      structureDesc: 'Lámina de aluminio reflectora + Hilo de tierra + Cruceta',
      features: [
        'Lámina de blindaje metálico Foil que bloquea ANEXT',
        'Hilo de drenaje conductor de cobre para puesta a tierra',
        'Cruceta central + 500 MHz garantizados a 100m'
      ],
      anatomy: [
        { label: 'Blindaje Foil (Aluminio)', desc: 'Bloquea el Alien Crosstalk a 500 MHz', icon: '🛡️' },
        { label: 'Hilo de Drenaje', desc: 'Cobre estañado para descarga electrostática', icon: '⚡' },
        { label: 'Cruceta + Chaqueta Gruesa', desc: 'Alcance garantizado a 100m en canaletas', icon: '➕' }
      ],
      color: '#e11d48'
    }
  };

  const cat = categories[selectedCat];

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Especificación TIA/EIA · Categorías de Cableado
        </div>
        <h2 className="slide-title">Categorías de Cables: De Cat 3 a Cat 6a</h2>
        <p className="slide-subtitle">
          A medida que las velocidades aumentaron, el cable elevó su frecuencia analógica de operación y blindaje estructural.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Category Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', height: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.45rem', flexShrink: 0 }}>
            {Object.keys(categories).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedCat(k)}
                style={{
                  padding: '0.45rem 0.25rem',
                  borderRadius: '9px',
                  background: selectedCat === k ? '#e0f2fe' : '#ffffff',
                  border: '2px solid #111111',
                  boxShadow: selectedCat === k ? '3px 3px 0px #111111' : '1.5px 1.5px 0px #111111',
                  color: selectedCat === k ? '#111111' : '#475569',
                  fontFamily: 'Fredoka, Outfit, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'center',
                  transform: selectedCat === k ? 'translate(-1px, -1px)' : 'none'
                }}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Selected Category Feature Display */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.65rem', borderLeft: `6px solid ${cat.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>{cat.name}</h3>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: '800', color: cat.color, background: '#f1f8fc', padding: '2px 7px', borderRadius: '6px', border: '1.5px solid #111111', boxShadow: '1.5px 1.5px 0px #111111', fontSize: '0.74rem' }}>
                {cat.standard}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}>
                  <Gauge size={13} color="#0284c7" /> Ancho de Banda
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit', marginTop: '1px' }}>
                  {cat.freq}
                </div>
              </div>

              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}>
                  <Zap size={13} color="#d97706" /> Velocidad Máxima
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#d97706', fontFamily: 'Fredoka, Outfit', marginTop: '1px' }}>
                  {cat.speed}
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#111111', marginBottom: '0.25rem', textTransform: 'uppercase', fontFamily: 'Fredoka, Outfit' }}>
                Especificaciones Físicas:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {cat.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#334155' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: cat.color, border: '1px solid #111', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Structural Cross-Section Diagram with Side Legends */}
        <div className="interactive-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem' }}>
          <div className="interactive-panel-header" style={{ width: '100%' }}>
            <span className="interactive-title">
              <Shield size={18} />
              Corte Transversal ({selectedCat.toUpperCase()})
            </span>
            <span style={{ fontSize: '0.72rem', color: cat.color, fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#f1f8fc', padding: '2px 7px', borderRadius: '6px', border: '1.5px solid #111' }}>
              DISTANCIA: {cat.distance}
            </span>
          </div>

          {/* 2-Column Split: SVG on Left + Clean Callout Legends on Right */}
          <div style={{ display: 'grid', gridTemplateColumns: '175px 1fr', gap: '0.85rem', alignItems: 'center', width: '100%', margin: '0.15rem 0' }}>
            {/* Clean SVG Diagram */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="170" height="170" viewBox="0 0 200 200">
                {/* Outer Jacket */}
                <circle
                  cx="100"
                  cy="100"
                  r={selectedCat === 'cat3' ? 82 : selectedCat === 'cat5' ? 85 : selectedCat === 'cat5e' ? 87 : selectedCat === 'cat6' ? 89 : 92}
                  fill="#f8fafc"
                  stroke="#111111"
                  strokeWidth={selectedCat === 'cat3' ? '2' : selectedCat === 'cat5' ? '2.5' : selectedCat === 'cat5e' ? '3' : selectedCat === 'cat6' ? '3.5' : '4'}
                />

                {/* Cat 6a Metallic Foil Shielding Layer */}
                {selectedCat === 'cat6a' && (
                  <circle cx="100" cy="100" r="85" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="5 3" />
                )}

                {/* Cat 6a Ground Drain Wire */}
                {selectedCat === 'cat6a' && (
                  <circle cx="155" cy="55" r="4.5" fill="#f59e0b" stroke="#111" strokeWidth="1.5" />
                )}

                {/* Cat 5e Ripcord (Nylon thread) in center */}
                {selectedCat === 'cat5e' && (
                  <g transform="translate(100, 100)">
                    <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#059669" strokeWidth="1.8" />
                    <circle cx="0" cy="0" r="1.5" fill="#059669" />
                  </g>
                )}

                {/* Cat 6 and Cat 6a Plastic Spline Cross-Separator */}
                {(selectedCat === 'cat6' || selectedCat === 'cat6a') && (
                  <g>
                    <rect x="94" y="25" width="12" height="150" rx="3" fill="#ffffff" stroke="#111111" strokeWidth="1.8" />
                    <rect x="25" y="94" width="150" height="12" rx="3" fill="#ffffff" stroke="#111111" strokeWidth="1.8" />
                    <circle cx="100" cy="100" r="9" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                  </g>
                )}

                {/* 4 Pairs Position & Layout */}
                {/* Pair 1: Blue / White-Blue */}
                <g transform={selectedCat === 'cat3' ? "translate(58, 60)" : selectedCat === 'cat5' || selectedCat === 'cat5e' ? "translate(68, 68)" : "translate(60, 60)"}>
                  <circle cx="0" cy="0" r="11" fill="#2563eb" stroke="#111" strokeWidth="1.6" />
                  <circle cx="9" cy="9" r="11" fill="#93c5fd" stroke="#111" strokeWidth="1.6" />
                </g>

                {/* Pair 2: Orange / White-Orange */}
                <g transform={selectedCat === 'cat3' ? "translate(132, 58)" : selectedCat === 'cat5' || selectedCat === 'cat5e' ? "translate(122, 68)" : "translate(130, 60)"}>
                  <circle cx="0" cy="0" r="11" fill="#ea580c" stroke="#111" strokeWidth="1.6" />
                  <circle cx="9" cy="9" r="11" fill="#fdba74" stroke="#111" strokeWidth="1.6" />
                </g>

                {/* Pair 3: Green / White-Green */}
                <g transform={selectedCat === 'cat3' ? "translate(56, 132)" : selectedCat === 'cat5' || selectedCat === 'cat5e' ? "translate(68, 122)" : "translate(60, 130)"}>
                  <circle cx="0" cy="0" r="11" fill="#16a34a" stroke="#111" strokeWidth="1.6" />
                  <circle cx="9" cy="9" r="11" fill="#86efac" stroke="#111" strokeWidth="1.6" />
                </g>

                {/* Pair 4: Brown / White-Brown */}
                <g transform={selectedCat === 'cat3' ? "translate(130, 130)" : selectedCat === 'cat5' || selectedCat === 'cat5e' ? "translate(122, 122)" : "translate(130, 130)"}>
                  <circle cx="0" cy="0" r="11" fill="#78350f" stroke="#111" strokeWidth="1.6" />
                  <circle cx="9" cy="9" r="11" fill="#d6d3d1" stroke="#111" strokeWidth="1.6" />
                </g>
              </svg>
            </div>

            {/* Right: Anatomical Callouts & Legends */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', color: cat.color, textTransform: 'uppercase', fontFamily: 'Fredoka, Outfit', letterSpacing: '0.04em' }}>
                Anatomía del Cable:
              </div>
              {cat.anatomy.map((item, idx) => (
                <div key={idx} className="inner-box" style={{ padding: '0.35rem 0.6rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#111111', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Fredoka, Outfit' }}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: '1.3' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro Footer Explaining the exact structural change */}
          <div className="inner-box" style={{ width: '100%', padding: '0.35rem 0.65rem', textAlign: 'center', fontSize: '0.76rem', color: '#111111', fontWeight: '700' }}>
            🏷️ <strong>{cat.structureTag}:</strong> {cat.structureDesc}
          </div>
        </div>
      </div>
    </div>
  );
}
