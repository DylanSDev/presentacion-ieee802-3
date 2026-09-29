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
          De la fragilidad del Bus compartido con colisiones (10BASE2/5) a la solidez de la Estrella punto a punto con Switch (10BASE-T).
        </p>
      </div>      <div className="slide-body grid-2col">
        {/* Left: Interactive Topology Visualizer */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Network size={18} />
              {topology === 'bus' ? 'Bus Coaxial (10BASE2/5)' : 'Estrella UTP (10BASE-T + Switch)'}
            </span>
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <button
                className={`nav-btn ${topology === 'bus' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.65rem', fontSize: '0.76rem' }}
                onClick={() => { setTopology('bus'); setCableCut(false); }}
              >
                Bus Coaxial
              </button>
              <button
                className={`nav-btn ${topology === 'star' ? 'nav-btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.65rem', fontSize: '0.76rem' }}
                onClick={() => { setTopology('star'); setCableCut(false); }}
              >
                Estrella + Switch
              </button>
            </div>
          </div>

          {/* Canvas SVG Architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0.35rem 0' }}>
            <svg width="100%" height="200" viewBox="0 0 520 200" style={{ background: '#f1f8fc', borderRadius: '12px', border: '2px solid #111111' }}>
              {topology === 'bus' ? (
                // BUS TOPOLOGY
                <g>
                  {/* Central Bus Cable */}
                  <line
                    x1="40"
                    y1="100"
                    x2={cableCut ? "230" : "480"}
                    y2="100"
                    stroke={cableCut ? "#e11d48" : "#0284c7"}
                    strokeWidth="6"
                    strokeDasharray={cableCut ? "6 6" : "none"}
                  />
                  {cableCut && (
                    <line x1="270" y1="100" x2="480" y2="100" stroke="#e11d48" strokeWidth="6" strokeDasharray="6 6" />
                  )}

                  {/* Terminators 50 Ohm */}
                  <rect x="25" y="88" width="16" height="24" fill="#facc15" stroke="#111" strokeWidth="1.5" rx="3" />
                  <rect x="479" y="88" width="16" height="24" fill="#facc15" stroke="#111" strokeWidth="1.5" rx="3" />
                  <text x="33" y="81" fill="#111" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>
                  <text x="487" y="81" fill="#111" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>

                  {/* Nodes connecting with BNC T-connectors */}
                  {[
                    { x: 100, label: 'Host A' },
                    { x: 210, label: 'Host B' },
                    { x: 310, label: 'Host C' },
                    { x: 420, label: 'Host D' }
                  ].map((node, i) => (
                    <g key={i}>
                      <line x1={node.x} y1="100" x2={node.x} y2="145" stroke={cableCut ? "#94a3b8" : "#0284c7"} strokeWidth="2.5" />
                      <circle cx={node.x} cy="100" r="5" fill="#0284c7" stroke="#111" strokeWidth="1.5" />
                      <rect
                        x={node.x - 34}
                        y="145"
                        width="68"
                        height="32"
                        rx="7"
                        fill={cableCut ? "#ffe4e6" : "#ffffff"}
                        stroke={cableCut ? "#e11d48" : "#111111"}
                        strokeWidth="2"
                      />
                      <text x={node.x} y="163" fill="#111111" fontSize="10.5" fontWeight="800" textAnchor="middle">{node.label}</text>
                      <text x={node.x} y="190" fill={cableCut ? "#e11d48" : "#059669"} fontSize="8.5" fontWeight="bold" textAnchor="middle">
                        {cableCut ? "RED CAÍDA" : "CONECTADO"}
                      </text>
                    </g>
                  ))}

                  {cableCut && (
                    <g transform="translate(250, 75)">
                      <text x="0" y="0" fill="#e11d48" fontSize="11.5" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">⚡ CORTE CENTRAL</text>
                    </g>
                  )}
                </g>
              ) : (
                // STAR TOPOLOGY WITH SWITCH
                <g>
                  {/* Central Switch Chassis */}
                  <rect x="195" y="70" width="130" height="60" rx="10" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
                  
                  <text x="260" y="93" fill="#059669" fontSize="10.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">SWITCH ETHERNET</text>
                  <text x="260" y="106" fill="#64748b" fontSize="8" fontWeight="600" textAnchor="middle">Puertos Dedicados</text>

                  {/* Switch 4 Ports / LEDs */}
                  <g transform="translate(216, 114)">
                    <rect x="0" y="0" width="15" height="10" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="7.5" cy="-3" r="2" fill="#059669" />
                    <rect x="23" y="0" width="15" height="10" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="30.5" cy="-3" r="2" fill="#059669" />
                    <rect x="46" y="0" width="15" height="10" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="53.5" cy="-3" r="2" fill={cableCut ? "#e11d48" : "#059669"} />
                    <rect x="69" y="0" width="15" height="10" rx="2" fill="#f1f8fc" stroke="#111" strokeWidth="1.5" />
                    <circle cx="76.5" cy="-3" r="2" fill="#059669" />
                  </g>

                  {/* 4 Hosts surrounding the switch */}
                  {[
                    { hx: 70, hy: 15, px: 215, py: 80, label: 'Host A', isCut: false, align: 'top' },
                    { hx: 450, hy: 15, px: 305, py: 80, label: 'Host B', isCut: false, align: 'top' },
                    { hx: 70, hy: 150, px: 215, py: 120, label: 'Host C', isCut: cableCut, align: 'bottom' },
                    { hx: 450, hy: 150, px: 305, py: 120, label: 'Host D', isCut: false, align: 'bottom' }
                  ].map((node, i) => (
                    <g key={i}>
                      <line
                        x1={node.px}
                        y1={node.py}
                        x2={node.hx > 260 ? node.hx - 34 : node.hx + 34}
                        y2={node.hy + 15}
                        stroke={node.isCut ? "#e11d48" : "#0284c7"}
                        strokeWidth="2.5"
                        strokeDasharray={node.isCut ? "4 4" : "none"}
                      />

                      {!node.isCut && (
                        <circle cx={node.px} cy={node.py} r="3.5" fill="#0284c7">
                          <animate
                            attributeName="cx"
                            values={`${node.px};${node.hx > 260 ? node.hx - 34 : node.hx + 34}`}
                            dur="1.2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="cy"
                            values={`${node.py};${node.hy + 15}`}
                            dur="1.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      <rect
                        x={node.hx - 34}
                        y={node.hy}
                        width="68"
                        height="30"
                        rx="6"
                        fill={node.isCut ? "#ffe4e6" : "#ffffff"}
                        stroke={node.isCut ? "#e11d48" : "#111111"}
                        strokeWidth="2"
                      />
                      <text x={node.hx} y={node.hy + 18} fill="#111111" fontSize="10" fontWeight="800" textAnchor="middle">{node.label}</text>
                      
                      <text
                        x={node.hx}
                        y={node.hy + (node.align === 'top' ? -6 : 41)}
                        fill={node.isCut ? "#e11d48" : "#059669"}
                        fontSize="8.5"
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
              style={{ fontSize: '0.8rem', padding: '0.3rem 0.85rem' }}
            >
              <Zap size={14} />
              {cableCut ? 'Restaurar Cable' : 'Simular Corte de Cable'}
            </button>
          </div>
        </div>

        {/* Right: Technical Comparison Explanations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', justifyContent: 'space-between' }}>
          <div className="glass-card" style={{ borderLeft: '5px solid #d97706' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <AlertTriangle size={16} color="#d97706" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                La Fragilidad del Bus Coaxial (10BASE5/2)
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Medio compartido de cable continuo. Si el cable se cortaba o fallaba un terminador de 50Ω, <strong>toda la red colapsaba</strong> por reflexiones y colisiones permanentes.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '5px solid #059669' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <CheckCircle size={16} color="#059669" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                La Solidez de la Estrella con Switch (UTP)
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Cada terminal tiene un enlace punto a punto independiente. Si un cable se corta, <strong>solo ese equipo queda aislado</strong>, manteniendo el 100% de la red operativa.
            </p>
          </div>

          <div className="glass-card" style={{ borderLeft: '5px solid #0284c7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <ShieldAlert size={16} color="#0284c7" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                Microsegmentación y Ancho de Banda Exclusivo
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.38' }}>
              Los switches leen las direcciones MAC en Capa 2 y conmutan tramas directamente entre puertos dedicados, eliminando los dominios de colisión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
