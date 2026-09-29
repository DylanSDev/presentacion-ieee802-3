import React, { useState } from 'react';
import { Layers, Zap, Gauge, Shield, Sparkles } from 'lucide-react';

export function Slide05_Categories() {
  const [selectedCat, setSelectedCat] = useState('cat6a');

  const categories = {
    cat3: {
      name: 'Categoría 3 (Cat 3)',
      freq: '16 MHz',
      speed: '10 Mbps',
      standard: '10BASE-T (802.3i)',
      distance: '100 metros',
      crossSection: 'UTP básico (2-3 trenzas por pie)',
      features: ['Trenzado ligero no blindado (UTP)', 'Suficiente para telefonía analógica y 10BASE-T', 'Utiliza 2 pares (4 hilos)'],
      color: '#64748b'
    },
    cat5: {
      name: 'Categoría 5 (Cat 5)',
      freq: '100 MHz',
      speed: '100 Mbps',
      standard: '100BASE-TX (802.3u)',
      distance: '100 metros',
      crossSection: 'UTP con ~3-4 trenzas por pulgada',
      features: ['Trenzado más denso y uniforme', 'Habilitó Fast Ethernet (100 Mbps)', 'Soporta 100BASE-TX en 2 pares'],
      color: '#0284c7'
    },
    cat5e: {
      name: 'Categoría 5e (Cat 5e - Enhanced)',
      freq: '100 MHz',
      speed: '1,000 Mbps (1 Gbps)',
      standard: '1000BASE-T (802.3ab)',
      distance: '100 metros',
      crossSection: 'Tolerancias estrictas + NEXT/FEXT',
      features: ['Misma frecuencia (100 MHz) que Cat 5', 'Estrictos límites contra diafonía de retorno', 'Estándar rey para Gigabit en 4 pares'],
      color: '#059669'
    },
    cat6: {
      name: 'Categoría 6 (Cat 6)',
      freq: '250 MHz',
      speed: '1 Gbps (100m) / 10 Gbps (55m)',
      standard: '10GBASE-T limitado',
      distance: '55m para 10G / 100m para 1G',
      crossSection: 'Cruceta plástica interna (Spline)',
      features: ['Cruceta plástica aislante central (Spline)', 'Reduce diafonía interna drásticamente', '10 Gbps limitado a 55m por Alien Crosstalk'],
      color: '#d97706'
    },
    cat6a: {
      name: 'Categoría 6a (Cat 6a - Augmented)',
      freq: '500 MHz',
      speed: '10,000 Mbps (10 Gbps)',
      standard: '10GBASE-T (802.3an)',
      distance: '100 metros garantizados',
      crossSection: 'F/UTP o S/FTP con blindaje global/par',
      features: ['500 MHz de ancho de banda analógico', 'Blindaje foil que elimina Alien Crosstalk (ANEXT)', 'Obligatorio para 10 Gbps a 100m en canaletas'],
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

        {/* Right: Structural Cross-Section Diagram */}
        <div className="interactive-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="interactive-panel-header" style={{ width: '100%' }}>
            <span className="interactive-title">
              <Shield size={18} />
              Corte Transversal ({selectedCat.toUpperCase()})
            </span>
            <span style={{ fontSize: '0.72rem', color: cat.color, fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#f1f8fc', padding: '2px 7px', borderRadius: '6px', border: '1.5px solid #111' }}>
              DISTANCIA: {cat.distance}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.35rem 0' }}>
            <svg width="200" height="200" viewBox="0 0 240 240">
              {/* Outer Jacket */}
              <circle cx="120" cy="120" r="95" fill="#f1f8fc" stroke="#111111" strokeWidth="3" />
              
              {/* Shielding foil if Cat 6a */}
              {selectedCat === 'cat6a' && (
                <circle cx="120" cy="120" r="88" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="4 4" />
              )}

              {/* Plastic Spline if Cat 6 or Cat 6a */}
              {(selectedCat === 'cat6' || selectedCat === 'cat6a') && (
                <g stroke="#111111" strokeWidth="2.5">
                  <line x1="120" y1="40" x2="120" y2="200" />
                  <line x1="40" y1="120" x2="200" y2="120" />
                </g>
              )}

              {/* 4 Pairs of Twisted Wires */}
              {/* Pair 1: Blue / White-Blue */}
              <g transform="translate(80, 80)">
                <circle cx="0" cy="0" r="14" fill="#2563eb" stroke="#111" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="14" fill="#93c5fd" stroke="#111" strokeWidth="1.8" />
              </g>
              {/* Pair 2: Orange / White-Orange */}
              <g transform="translate(145, 80)">
                <circle cx="0" cy="0" r="14" fill="#ea580c" stroke="#111" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="14" fill="#fdba74" stroke="#111" strokeWidth="1.8" />
              </g>
              {/* Pair 3: Green / White-Green */}
              <g transform="translate(80, 145)">
                <circle cx="0" cy="0" r="14" fill="#16a34a" stroke="#111" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="14" fill="#86efac" stroke="#111" strokeWidth="1.8" />
              </g>
              {/* Pair 4: Brown / White-Brown */}
              <g transform="translate(145, 145)">
                <circle cx="0" cy="0" r="14" fill="#78350f" stroke="#111" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="14" fill="#d6d3d1" stroke="#111" strokeWidth="1.8" />
              </g>

              <text x="120" y="230" textAnchor="middle" fill="#111111" fontSize="10.5" fontFamily="Fredoka, Outfit" fontWeight="bold">
                {selectedCat === 'cat6' || selectedCat === 'cat6a' ? 'CRUCETA AISLANTE INTERNA' : 'PAR TRENZADO DIRECTO'}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
