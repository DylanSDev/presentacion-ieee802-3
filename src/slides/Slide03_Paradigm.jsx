import React, { useState } from 'react';
import { Network, AlertTriangle, CheckCircle, ShieldAlert, Zap, Sparkles } from 'lucide-react';

export function Slide03_Paradigm() {
  const [topology, setTopology] = useState('bus');
  const [cableCut, setCableCut] = useState(false);

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Topología y Arquitectura Física
        </div>
        <h2 className="slide-title">El Cambio de Paradigma: Del Coaxial al Par Trenzado</h2>
        <p className="slide-subtitle">
          Cómo el paso del Bus compartido a la Estrella conmutada revolucionó la confiabilidad de las redes de datos.
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
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => { setTopology('bus'); setCableCut(false); }}
              >
                Bus Coaxial
              </button>
              <button
                className={`nav-btn ${topology === 'star' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.78rem' }}
                onClick={() => { setTopology('star'); setCableCut(false); }}
              >
                Estrella + Switch
              </button>
            </div>
          </div>

          {/* Canvas SVG Architecture */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '270px' }}>
            <svg width="100%" height="260" viewBox="0 0 520 260" style={{ background: '#f1f8fc', borderRadius: '12px', border: '2px solid #111111' }}>
              {topology === 'bus' ? (
                // BUS TOPOLOGY
                <g>
                  {/* Central Bus Cable */}
                  <line
                    x1="40"
                    y1="130"
                    x2={cableCut ? "230" : "480"}
                    y2="130"
                    stroke={cableCut ? "#e11d48" : "#0284c7"}
                    strokeWidth="6"
                    strokeDasharray={cableCut ? "6 6" : "none"}
                  />
                  {cableCut && (
                    <line x1="270" y1="130" x2="480" y2="130" stroke="#e11d48" strokeWidth="6" strokeDasharray="6 6" />
                  )}

                  {/* Terminators 50 Ohm */}
                  <rect x="25" y="118" width="16" height="24" fill="#facc15" stroke="#111" strokeWidth="1.5" rx="3" />
                  <rect x="479" y="118" width="16" height="24" fill="#facc15" stroke="#111" strokeWidth="1.5" rx="3" />
                  <text x="33" y="110" fill="#111" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>
                  <text x="487" y="110" fill="#111" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>

                  {/* Nodes connecting with BNC T-connectors */}
                  {[
                    { x: 100, label: 'Host A' },
                    { x: 210, label: 'Host B' },
                    { x: 310, label: 'Host C' },
                    { x: 420, label: 'Host D' }
                  ].map((node, i) => (
                    <g key={i}>
                      <line x1={node.x} y1="130" x2={node.x} y2="185" stroke={cableCut ? "#94a3b8" : "#0284c7"} strokeWidth="2.5" />
                      <circle cx={node.x} cy="130" r="5" fill="#0284c7" stroke="#111" strokeWidth="1.5" />
                      <rect
                        x={node.x - 36}
                        y="185"
                        width="72"
                        height="40"
                        rx="8"
                        fill={cableCut ? "#ffe4e6" : "#ffffff"}
                        stroke={cableCut ? "#e11d48" : "#111111"}
                        strokeWidth="2"
                      />
                      <text x={node.x} y="206" fill="#111111" fontSize="11" fontWeight="800" textAnchor="middle">{node.label}</text>
                      <text x={node.x} y="240" fill={cableCut ? "#e11d48" : "#059669"} fontSize="9.5" fontWeight="bold" textAnchor="middle">
                        {cableCut ? "RED CAÍDA" : "CONECTADO"}
                      </text>
                    </g>
                  ))}

                  {cableCut && (
                    <g transform="translate(250, 105)">
                      <text x="0" y="0" fill="#e11d48" fontSize="13" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">⚡ CORTE CENTRAL</text>
                    </g>
                  )}
                </g>
              ) : (
                // STAR TOPOLOGY WITH SWITCH
                <g>
                  {/* Central Switch Chassis */}
                  <rect x="190" y="95" width="140" height="70" rx="10" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
                  
                  {/* Switch Name & Header */}
                  <text x="260" y="120" fill="#059669" fontSize="12" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">SWITCH ETHERNET</text>
                  <text x="260" y="136" fill="#64748b" fontSize="9" fontWeight="600" textAnchor="middle">Puertos Conmutados Dedicados</text>

                  {/* Switch 4 Ports / LEDs */}
                  <g transform="translate(215, 146)">
                    <rect x="0" y="0" width="16" height="12" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="8" cy="-4" r="2.5" fill="#059669" />
                    <rect x="24" y="0" width="16" height="12" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="32" cy="-4" r="2.5" fill="#059669" />
                    <rect x="48" y="0" width="16" height="12" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="56" cy="-4" r="2.5" fill={cableCut ? "#e11d48" : "#059669"} />
                    <rect x="72" y="0" width="16" height="12" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="80" cy="-4" r="2.5" fill="#059669" />
                  </g>

                  {/* 4 Hosts surrounding the switch */}
                  {[
                    { hx: 75, hy: 25, px: 215, py: 105, label: 'Host A', isCut: false, align: 'top' },
                    { hx: 445, hy: 25, px: 305, py: 105, label: 'Host B', isCut: false, align: 'top' },
                    { hx: 75, hy: 195, px: 215, py: 155, label: 'Host C', isCut: cableCut, align: 'bottom' },
                    { hx: 445, hy: 195, px: 305, py: 155, label: 'Host D', isCut: false, align: 'bottom' }
                  ].map((node, i) => (
                    <g key={i}>
                      <line
                        x1={node.px}
                        y1={node.py}
                        x2={node.hx > 260 ? node.hx - 36 : node.hx + 36}
                        y2={node.hy + 18}
                        stroke={node.isCut ? "#e11d48" : "#0284c7"}
                        strokeWidth="2.5"
                        strokeDasharray={node.isCut ? "4 4" : "none"}
                      />

                      {!node.isCut && (
                        <circle cx={node.px} cy={node.py} r="4" fill="#0284c7">
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

                      <rect
                        x={node.hx - 38}
                        y={node.hy}
                        width="76"
                        height="36"
                        rx="8"
                        fill={node.isCut ? "#ffe4e6" : "#ffffff"}
                        stroke={node.isCut ? "#e11d48" : "#111111"}
                        strokeWidth="2"
                      />
                      <text x={node.hx} y={node.hy + 22} fill="#111111" fontSize="11" fontWeight="800" textAnchor="middle">{node.label}</text>
                      
                      <text
                        x={node.hx}
                        y={node.hy + (node.align === 'top' ? -8 : 49)}
                        fill={node.isCut ? "#e11d48" : "#059669"}
                        fontSize="9.5"
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div className="glass-card" style={{ borderLeft: '5px solid #d97706' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <AlertTriangle size={18} color="#d97706" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                La Fragilidad del Bus Coaxial (10BASE5/2)
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Medio compartido de un solo cable continuo. Si el cable se cortaba o se aflojaba una resistencia terminadora de 50Ω, <strong>toda la red colapsaba inmediatamente</strong> por reflexiones de señal.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '5px solid #059669' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <CheckCircle size={18} color="#059669" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                La Solidez de la Estrella con Switch (UTP)
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Cada computadora se conecta mediante un enlace punto a punto independiente al switch. Si un cable de par trenzado se corta, <strong>solo ese equipo queda aislado</strong>, manteniendo al 100% el resto de la red.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '5px solid #0284c7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <ShieldAlert size={18} color="#0284c7" />
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                Aislamiento de Colisiones y Ancho de Banda
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.45' }}>
              Los switches leen las direcciones MAC de Capa 2 y conmutan tramas directamente entre los puertos interesados, otorgando ancho de banda exclusivo a cada terminal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
