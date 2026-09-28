import React, { useState } from 'react';
import { Layers, Zap, Gauge, Shield } from 'lucide-react';

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
      features: ['Trenzado ligero no blindado', 'Suficiente para telefonía y 10BASE-T', 'Uso de 2 pares (4 hilos)'],
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
      features: ['Cruceta aislante que separa físicamente los 4 pares', 'Reduce diafonía interna drásticamente', '10 Gbps limitado a 55m por Alien Crosstalk'],
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
        <div className="slide-tag">Especificación TIA/EIA · Estándares de Cableado</div>
        <h2 className="slide-title">Categorías de Cables: De Cat 3 a Cat 6a</h2>
        <p className="slide-subtitle">
          A medida que las velocidades se multiplicaron, el cable de cobre debió elevar su frecuencia de operación y aislamiento.
        </p>
      </div>

      <div className="slide-body grid-2col-wide-left">
        {/* Left: Interactive Category Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.4rem' }}>
            {Object.keys(categories).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedCat(k)}
                style={{
                  padding: '0.6rem 0.3rem',
                  borderRadius: '8px',
                  background: selectedCat === k ? 'var(--cyan-glow)' : 'var(--bg-inner-box)',
                  border: selectedCat === k ? `1.5px solid ${categories[k].color}` : '1px solid var(--border-subtle)',
                  color: selectedCat === k ? 'var(--text-heading)' : 'var(--text-muted)',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.82rem',
                  fontWeight: selectedCat === k ? '800' : '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Selected Category Feature Display */}
          <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: `4px solid ${cat.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-heading)' }}>{cat.name}</h3>
              <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 'bold', color: cat.color, background: 'var(--bg-inner-box)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                {cat.standard}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="inner-box">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Gauge size={14} color="var(--cyan-primary)" /> Ancho de Banda (Frecuencia)
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono' }}>
                  {cat.freq}
                </div>
              </div>

              <div className="inner-box">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Zap size={14} color="var(--amber-accent)" /> Velocidad Máxima
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--amber-accent)', fontFamily: 'JetBrains Mono' }}>
                  {cat.speed}
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.4rem', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
                Características Físicas Clave:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {cat.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: cat.color }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Structural Cross-Section Diagram */}
        <div className="interactive-panel" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div className="interactive-panel-header" style={{ width: '100%' }}>
            <span className="interactive-title">
              <Shield size={18} />
              Corte Transversal ({selectedCat.toUpperCase()})
            </span>
          </div>

          <svg width="240" height="240" viewBox="0 0 240 240">
            {/* Outer Jacket */}
            <circle cx="120" cy="120" r="95" fill="var(--svg-card-fill)" stroke={cat.color} strokeWidth="3" />
            
            {/* Shielding foil if Cat 6a */}
            {selectedCat === 'cat6a' && (
              <circle cx="120" cy="120" r="88" fill="none" stroke="var(--rose-accent)" strokeWidth="2" strokeDasharray="3 3" />
            )}

            {/* Plastic Spline if Cat 6 or Cat 6a */}
            {(selectedCat === 'cat6' || selectedCat === 'cat6a') && (
              <g stroke="var(--svg-grid-stroke)" strokeWidth="2.5">
                <line x1="120" y1="40" x2="120" y2="200" />
                <line x1="40" y1="120" x2="200" y2="120" />
              </g>
            )}

            {/* 4 Pairs of Twisted Wires */}
            {/* Pair 1: Blue / White-Blue */}
            <g transform="translate(80, 80)">
              <circle cx="0" cy="0" r="14" fill="#2563eb" stroke="#fff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="14" fill="#93c5fd" stroke="#fff" strokeWidth="1.5" />
            </g>
            {/* Pair 2: Orange / White-Orange */}
            <g transform="translate(145, 80)">
              <circle cx="0" cy="0" r="14" fill="#ea580c" stroke="#fff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="14" fill="#fdba74" stroke="#fff" strokeWidth="1.5" />
            </g>
            {/* Pair 3: Green / White-Green */}
            <g transform="translate(80, 145)">
              <circle cx="0" cy="0" r="14" fill="#16a34a" stroke="#fff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="14" fill="#86efac" stroke="#fff" strokeWidth="1.5" />
            </g>
            {/* Pair 4: Brown / White-Brown */}
            <g transform="translate(145, 145)">
              <circle cx="0" cy="0" r="14" fill="#78350f" stroke="#fff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="14" fill="#d6d3d1" stroke="#fff" strokeWidth="1.5" />
            </g>

            <text x="120" y="230" textAnchor="middle" fill="var(--svg-text-sub)" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
              {selectedCat === 'cat6' || selectedCat === 'cat6a' ? 'CRUCETA SEPARADORA INTERNA' : 'PAR TRENZADO DIRECTO'}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
