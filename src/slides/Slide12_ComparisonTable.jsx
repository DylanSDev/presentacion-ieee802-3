import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

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
        <div className="slide-tag">
          <Sparkles size={14} /> Matriz Técnica Integral · Comparativa 1990 - 2006
        </div>
        <h2 className="slide-title">Tabla Comparativa: 30 Años de Evolución Técnica</h2>
        <p className="slide-subtitle">
          De 10 Mbps a 10 Gbps: Todo sobre el conector RJ-45 de 8 pines gracias al avance del procesamiento digital.
        </p>
      </div>

      <div className="slide-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div className="glass-card" style={{ padding: '0.65rem 0.85rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{ borderBottom: '2.5px solid #111111', background: '#f1f8fc' }}>
                <th style={{ padding: '0.6rem 0.85rem', color: '#0284c7', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Estándar</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#111111', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Nombre</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#d97706', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Velocidad</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#111111', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Cable Base</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#2563eb', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Frecuencia</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#111111', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Uso de Pares</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#059669', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Modulación / Codificación</th>
                <th style={{ padding: '0.6rem 0.85rem', color: '#111111', fontFamily: 'Fredoka, Outfit', fontWeight: '800' }}>Distancia</th>
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
                      borderBottom: idx === tableData.length - 1 ? 'none' : '1.5px solid #e2e8f0',
                      background: isHovered ? '#e0f2fe' : idx % 2 === 0 ? '#ffffff' : '#fafafa',
                      transition: 'background 0.15s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <td style={{ padding: '0.55rem 0.85rem', fontWeight: '800', fontFamily: 'JetBrains Mono', color: row.color }}>
                      {row.std}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                      {row.name}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', fontWeight: '800', color: '#d97706', fontFamily: 'JetBrains Mono' }}>
                      {row.speed}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', color: '#334155', fontWeight: '600' }}>
                      {row.cable}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', color: '#2563eb', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
                      {row.freq}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', color: '#334155' }}>
                      {row.pairs}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', color: '#059669', fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {row.mod}
                    </td>
                    <td style={{ padding: '0.55rem 0.85rem', color: '#111111', fontWeight: '800' }}>
                      {row.dist}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', flexShrink: 0 }}>
          <div className="inner-box" style={{ textAlign: 'center', padding: '0.55rem 0.85rem' }}>
            <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Salto de Frecuencia</span>
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>16 MHz ➔ 500 MHz (31x)</div>
          </div>
          <div className="inner-box" style={{ textAlign: 'center', padding: '0.55rem 0.85rem' }}>
            <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Salto de Velocidad</span>
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#d97706', fontFamily: 'Fredoka, Outfit' }}>10 Mbps ➔ 10,000 Mbps (1,000x)</div>
          </div>
          <div className="inner-box" style={{ textAlign: 'center', padding: '0.55rem 0.85rem' }}>
            <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Conector Universal</span>
            <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#059669', fontFamily: 'Fredoka, Outfit' }}>RJ-45 (8P8C) Inalterado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
