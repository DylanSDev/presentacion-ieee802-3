import React, { useState } from 'react';

export function Slide12_ComparisonTable() {
  const [highlightedRow, setHighlightedRow] = useState(null);

  const tableData = [
    {
      std: '802.3i (1990)',
      name: '10BASE-T',
      speed: '10 Mbps',
      cable: 'Cat 3 (UTP)',
      freq: '16 MHz',
      pairs: '2 pares dedicados (TX/RX)',
      mod: 'Manchester (1 baudio/bit)',
      dist: '100 m',
      color: '#64748b'
    },
    {
      std: '802.3u (1995)',
      name: '100BASE-TX',
      speed: '100 Mbps',
      cable: 'Cat 5 (UTP)',
      freq: '100 MHz',
      pairs: '2 pares dedicados (TX/RX)',
      mod: '4B/5B + MLT-3 (3 niveles)',
      dist: '100 m',
      color: '#0284c7'
    },
    {
      std: '802.3ab (1999)',
      name: '1000BASE-T',
      speed: '1,000 Mbps (1 Gbps)',
      cable: 'Cat 5e (UTP)',
      freq: '100 MHz',
      pairs: '4 pares bidireccionales',
      mod: 'PAM-5 (5 niveles) + DSP',
      dist: '100 m',
      color: '#059669'
    },
    {
      std: '802.3an (2006)',
      name: '10GBASE-T',
      speed: '10,000 Mbps (10 Gbps)',
      cable: 'Cat 6a (F/UTP - STP)',
      freq: '500 MHz',
      pairs: '4 pares bidireccionales',
      mod: 'PAM-16 + LDPC',
      dist: '100 m (Cat 6: 55m)',
      color: '#d97706'
    }
  ];

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Matriz Técnica Integral · Comparativa 1990 - 2006</div>
        <h2 className="slide-title">Tabla Comparativa: 30 Años de Evolución Técnica</h2>
        <p className="slide-subtitle">
          De 10 Mbps a 10 Gbps: Todo sobre el mismo conector RJ-45 de 8 pines gracias al avance del procesamiento digital.
        </p>
      </div>

      <div className="slide-body" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="glass-card" style={{ flex: 1, padding: '1rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-subtle)', background: 'var(--bg-inner-box)' }}>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono' }}>Estándar</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-heading)' }}>Nombre</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--amber-accent)' }}>Velocidad</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-heading)' }}>Cable Base</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--blue-accent)' }}>Frecuencia</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-heading)' }}>Uso de Pares</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--emerald-accent)' }}>Modulación / Codificación</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-heading)' }}>Distancia</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => {
                const isHovered = highlightedRow === idx;

                return (
                  <tr
                    key={idx}
                    onMouseEnter={() => setHighlightedRow(idx)}
                    onMouseLeave={() => setHighlightedRow(null)}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: isHovered ? 'var(--cyan-glow)' : 'transparent',
                      transition: 'background 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '800', fontFamily: 'JetBrains Mono', color: row.color }}>
                      {row.std}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '700', color: 'var(--text-heading)' }}>
                      {row.name}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--amber-accent)' }}>
                      {row.speed}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-main)' }}>
                      {row.cable}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--blue-accent)', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
                      {row.freq}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-main)' }}>
                      {row.pairs}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--emerald-accent)', fontFamily: 'JetBrains Mono', fontSize: '0.82rem', fontWeight: 'bold' }}>
                      {row.mod}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-heading)', fontWeight: 'bold' }}>
                      {row.dist}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '0.75rem' }}>
          <div className="inner-box">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Salto de Frecuencia</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--cyan-primary)' }}>16 MHz ➔ 500 MHz (31x)</div>
          </div>
          <div className="inner-box">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Salto de Velocidad</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--amber-accent)' }}>10 Mbps ➔ 10,000 Mbps (1,000x)</div>
          </div>
          <div className="inner-box">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Conector Estándar</span>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--emerald-accent)' }}>RJ-45 (8P8C) Inalterado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
