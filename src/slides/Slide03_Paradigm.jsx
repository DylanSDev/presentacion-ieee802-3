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
              Simulador: {topology === 'bus' ? 'Bus Coaxial (10BASE2/5)' : 'Estrella UTP (10BASE-T + Switch)'}
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
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '260px' }}>
            <svg width="100%" height="240" viewBox="0 0 500 240" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              {topology === 'bus' ? (
                <g>
                  {/* Central Bus Cable */}
                  <line
                    x1="40"
                    y1="120"
                    x2={cableCut ? "220" : "460"}
                    y2="120"
                    stroke={cableCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                    strokeWidth="6"
                    strokeDasharray={cableCut ? "6 6" : "none"}
                  />
                  {cableCut && (
                    <line x1="260" y1="120" x2="460" y2="120" stroke="var(--rose-accent)" strokeWidth="6" strokeDasharray="6 6" />
                  )}

                  {/* Terminators 50 Ohm */}
                  <rect x="25" y="110" width="15" height="20" fill="var(--amber-accent)" rx="2" />
                  <rect x="460" y="110" width="15" height="20" fill="var(--amber-accent)" rx="2" />
                  <text x="32" y="102" fill="var(--amber-accent)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>
                  <text x="468" y="102" fill="var(--amber-accent)" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold" textAnchor="middle">50Ω</text>

                  {/* Nodes connecting with BNC T-connectors */}
                  {[
                    { x: 100, label: 'Host A' },
                    { x: 200, label: 'Host B' },
                    { x: 300, label: 'Host C' },
                    { x: 400, label: 'Host D' }
                  ].map((node, i) => {
                    return (
                      <g key={i}>
                        <line x1={node.x} y1="120" x2={node.x} y2="175" stroke={cableCut ? "var(--text-dim)" : "var(--blue-accent)"} strokeWidth="2" />
                        <circle cx={node.x} cy="120" r="4" fill="var(--cyan-primary)" />
                        <rect
                          x={node.x - 30}
                          y="175"
                          width="60"
                          height="40"
                          rx="6"
                          fill={cableCut ? "rgba(244, 63, 94, 0.15)" : "var(--svg-card-fill)"}
                          stroke={cableCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                          strokeWidth="1.5"
                        />
                        <text x={node.x} y="198" fill="var(--svg-text-main)" fontSize="11" fontWeight="700" textAnchor="middle">{node.label}</text>
                        <text x={node.x} y="228" fill={cableCut ? "var(--rose-accent)" : "var(--emerald-accent)"} fontSize="9" fontWeight="bold" textAnchor="middle">
                          {cableCut ? "RED CAÍDA" : "CONECTADO"}
                        </text>
                      </g>
                    );
                  })}

                  {cableCut && (
                    <g transform="translate(240, 95)">
                      <text x="0" y="0" fill="var(--rose-accent)" fontSize="14" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">⚡ CORTE</text>
                    </g>
                  )}
                </g>
              ) : (
                <g>
                  {/* Central Switch */}
                  <rect x="200" y="85" width="100" height="55" rx="8" fill="var(--svg-card-fill)" stroke="var(--emerald-accent)" strokeWidth="2" />
                  <text x="250" y="110" fill="var(--emerald-accent)" fontSize="12" fontWeight="800" textAnchor="middle">SWITCH LAN</text>
                  <text x="250" y="128" fill="var(--svg-text-sub)" fontSize="9" textAnchor="middle">Conmutación dedicada</text>

                  {/* 4 Hosts connected point-to-point */}
                  {[
                    { x: 70, y: 40, label: 'Host A', isCut: false },
                    { x: 430, y: 40, label: 'Host B', isCut: false },
                    { x: 70, y: 190, label: 'Host C', isCut: cableCut },
                    { x: 430, y: 190, label: 'Host D', isCut: false }
                  ].map((node, i) => (
                    <g key={i}>
                      <line
                        x1="250"
                        y1="112"
                        x2={node.x}
                        y2={node.y + 15}
                        stroke={node.isCut ? "var(--rose-accent)" : "var(--cyan-primary)"}
                        strokeWidth="2.5"
                        strokeDasharray={node.isCut ? "4 4" : "none"}
                      />
                      <rect
                        x={node.x - 35}
                        y={node.y}
                        width="70"
                        height="36"
                        rx="6"
                        fill={node.isCut ? "rgba(244, 63, 94, 0.15)" : "var(--svg-card-fill)"}
                        stroke={node.isCut ? "var(--rose-accent)" : "var(--blue-accent)"}
                        strokeWidth="1.5"
                      />
                      <text x={node.x} y={node.y + 22} fill="var(--svg-text-main)" fontSize="11" fontWeight="700" textAnchor="middle">{node.label}</text>
                      <text x={node.x} y={node.y + (node.y > 100 ? 48 : -6)} fill={node.isCut ? "var(--rose-accent)" : "var(--emerald-accent)"} fontSize="9" fontWeight="bold" textAnchor="middle">
                        {node.isCut ? "AISLADO (Host C)" : "OPERATIVO"}
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
