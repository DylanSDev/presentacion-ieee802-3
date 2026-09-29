import React, { useState } from 'react';
import { Network, AlertTriangle, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

export function Slide03_Paradigm() {
  const [topology, setTopology] = useState('bus');
  const [cableCut, setCableCut] = useState(false);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Topología y Arquitectura Física</div>
        <h2 className="slide-title">El Cambio de Paradigma: Del Coaxial al Par Trenzado</h2>
        <p className="slide-subtitle">
          Cómo el paso del Bus compartido a la Estrella conmutada revolucionó la confiabilidad de las redes LAN.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Topology Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Network size={18} />
              {topology === 'bus' ? 'Bus Coaxial (10BASE2/5)' : 'Estrella UTP (10BASE-T + Switch)'}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`nav-btn ${topology === 'bus' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => { setTopology('bus'); setCableCut(false); }}
              >
                Bus Coaxial
              </button>
              <button
                className={`nav-btn ${topology === 'star' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => { setTopology('star'); setCableCut(false); }}
              >
                Estrella + Switch
              </button>
            </div>
          </div>

          {/* Canvas SVG Architecture */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '270px' }}>
            <svg width="100%" height="260" viewBox="0 0 520 260" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              {topology === 'bus' ? (
                // BUS TOPOLOGY
                <g>
                  {/* Central Bus Cable */}
                  <line
                    x1="40"
                    y1="130"
                    x2={cableCut ? "230" : "480"}
                    y2="130"
                    stroke={cableCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                    strokeWidth="6"
                    strokeDasharray={cableCut ? "6 6" : "none"}
                  />
                  {cableCut && (
                    <line x1="270" y1="130" x2="480" y2="130" stroke="var(--rose-accent)" strokeWidth="6" strokeDasharray="6 6" />
                  )}

                  {/* Terminators 50 Ohm */}
                  <rect x="25" y="120" width="15" height="20" fill="var(--amber-accent)" rx="2" />
                  <rect x="480" y="120" width="15" height="20" fill="var(--amber-accent)" rx="2" />
                  <text x="32" y="112" fill="var(--amber-accent)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>
                  <text x="488" y="112" fill="var(--amber-accent)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>

                  {/* Nodes connecting with BNC T-connectors */}
                  {[
                    { x: 100, label: 'Host A' },
                    { x: 210, label: 'Host B' },
                    { x: 310, label: 'Host C' },
                    { x: 420, label: 'Host D' }
                  ].map((node, i) => (
                    <g key={i}>
                      <line x1={node.x} y1="130" x2={node.x} y2="185" stroke={cableCut ? "var(--text-dim)" : "var(--blue-accent)"} strokeWidth="2.5" />
                      <circle cx={node.x} cy="130" r="4.5" fill="var(--cyan-primary)" />
                      <rect
                        x={node.x - 36}
                        y="185"
                        width="72"
                        height="40"
                        rx="6"
                        fill={cableCut ? "rgba(244, 63, 94, 0.15)" : "var(--svg-card-fill)"}
                        stroke={cableCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                        strokeWidth="1.5"
                      />
                      <text x={node.x} y="206" fill="var(--svg-text-main)" fontSize="11" fontWeight="700" textAnchor="middle">{node.label}</text>
                      <text x={node.x} y="240" fill={cableCut ? "var(--rose-accent)" : "var(--emerald-accent)"} fontSize="9" fontWeight="bold" textAnchor="middle">
                        {cableCut ? "RED CAÍDA" : "CONECTADO"}
                      </text>
                    </g>
                  ))}

                  {cableCut && (
                    <g transform="translate(250, 105)">
                      <text x="0" y="0" fill="var(--rose-accent)" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">⚡ CORTE CENTRAL</text>
                    </g>
                  )}
                </g>
              ) : (
                // STAR TOPOLOGY WITH SWITCH (PROPER CLEAN LAYOUT)
                <g>
                  {/* Central Switch Chassis */}
                  <rect x="190" y="95" width="140" height="70" rx="8" fill="var(--svg-card-fill)" stroke="var(--emerald-accent)" strokeWidth="2" />
                  
                  {/* Switch Name & Header */}
                  <text x="260" y="120" fill="var(--emerald-accent)" fontSize="12" fontWeight="800" textAnchor="middle">SWITCH ETHERNET</text>
                  <text x="260" y="136" fill="var(--svg-text-sub)" fontSize="8.5" textAnchor="middle">4 Puertos Dedicados</text>

                  {/* Switch 4 Ports / LEDs */}
                  <g transform="translate(215, 146)">
                    {/* Port 1 */}
                    <rect x="0" y="0" width="16" height="12" rx="2" fill="var(--bg-inner-box)" stroke="var(--border-subtle)" />
                    <circle cx="8" cy="-4" r="2.5" fill="var(--emerald-accent)" />
                    {/* Port 2 */}
                    <rect x="24" y="0" width="16" height="12" rx="2" fill="var(--bg-inner-box)" stroke="var(--border-subtle)" />
                    <circle cx="32" cy="-4" r="2.5" fill="var(--emerald-accent)" />
                    {/* Port 3 */}
                    <rect x="48" y="0" width="16" height="12" rx="2" fill="var(--bg-inner-box)" stroke="var(--border-subtle)" />
                    <circle cx="56" cy="-4" r="2.5" fill={cableCut ? "var(--rose-accent)" : "var(--emerald-accent)"} />
                    {/* Port 4 */}
                    <rect x="72" y="0" width="16" height="12" rx="2" fill="var(--bg-inner-box)" stroke="var(--border-subtle)" />
                    <circle cx="80" cy="-4" r="2.5" fill="var(--emerald-accent)" />
                  </g>

                  {/* 4 Hosts surrounding the switch */}
                  {[
                    // Host A: Top Left
                    { hx: 75, hy: 25, px: 215, py: 105, label: 'Host A', isCut: false, align: 'top' },
                    // Host B: Top Right
                    { hx: 445, hy: 25, px: 305, py: 105, label: 'Host B', isCut: false, align: 'top' },
                    // Host C: Bottom Left (The one cut in simulation)
                    { hx: 75, hy: 195, px: 215, py: 155, label: 'Host C', isCut: cableCut, align: 'bottom' },
                    // Host D: Bottom Right
                    { hx: 445, hy: 195, px: 305, py: 155, label: 'Host D', isCut: false, align: 'bottom' }
                  ].map((node, i) => (
                    <g key={i}>
                      {/* Point-to-point dedicated cable line */}
                      <line
                        x1={node.px}
                        y1={node.py}
                        x2={node.hx > 260 ? node.hx - 36 : node.hx + 36}
                        y2={node.hy + 18}
                        stroke={node.isCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                        strokeWidth="2.5"
                        strokeDasharray={node.isCut ? "4 4" : "none"}
                      />

                      {/* Moving Data Packet on active lines */}
                      {!node.isCut && (
                        <circle cx={node.px} cy={node.py} r="3.5" fill="var(--cyan-primary)">
                          <animate
                            attributeName="cx"
                            values={`${node.px};${node.hx > 260 ? node.hx - 36 : node.hx + 36}`}
                            dur="1.2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="cy"
                            values={`${node.py};${node.hy + 18}`}
                            dur="1.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      {/* Host Card Box */}
                      <rect
                        x={node.hx - 38}
                        y={node.hy}
                        width="76"
                        height="36"
                        rx="6"
                        fill={node.isCut ? "rgba(244, 63, 94, 0.15)" : "var(--svg-card-fill)"}
                        stroke={node.isCut ? "var(--rose-accent)" : "var(--blue-accent)"}
                        strokeWidth="1.5"
                      />
                      <text x={node.hx} y={node.hy + 22} fill="var(--svg-text-main)" fontSize="11" fontWeight="700" textAnchor="middle">{node.label}</text>
                      
                      {/* Status Label */}
                      <text
                        x={node.hx}
                        y={node.hy + (node.align === 'top' ? -8 : 49)}
                        fill={node.isCut ? "var(--rose-accent)" : "var(--emerald-accent)"}
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {node.isCut ? "⚠️ AISLADO (Solo C)" : "✓ OPERATIVO"}
                      </text>
                    </g>
                  ))}
                </g>
              )}
            </svg>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className={`nav-btn ${cableCut ? 'nav-btn-primary' : ''}`}
              onClick={() => setCableCut(!cableCut)}
              style={{ fontSize: '0.85rem' }}
            >
              <Zap size={16} />
              {cableCut ? 'Restaurar Cable' : 'Simular Corte de Cable'}
            </button>
          </div>
        </div>

        {/* Right: Technical Comparison Explanations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--amber-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <AlertTriangle size={18} color="var(--amber-accent)" />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>La Fragilidad del Bus Coaxial (10BASE5/2)</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Medio compartido de un solo cable continuo. Si el cable se cortaba o se aflojaba una resistencia de 50Ω, <strong>toda la red colapsaba inmediatamente</strong>. Las colisiones eran constantes porque todos los hosts compartían el mismo dominio.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--emerald-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <CheckCircle size={18} color="var(--emerald-accent)" />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>La Solidez de la Estrella con Switch (UTP)</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Cada computadora se conecta mediante un enlace punto a punto independiente al switch. Si un cable de par trenzado se corta, <strong>solo ese equipo pierde conectividad</strong>, manteniendo al 100% el resto de la red.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '4px solid var(--cyan-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <ShieldAlert size={18} color="var(--cyan-primary)" />
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Aislamiento de Colisiones y Ancho de Banda</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              Los switches leen las direcciones MAC de Capa 2 y conmutan tramas directamente entre los puertos interesados, otorgando ancho de banda exclusivo a cada terminal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
