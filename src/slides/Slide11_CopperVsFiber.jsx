import React, { useState } from 'react';
import { Zap, Globe, Sparkles, Activity, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export function Slide11_CopperVsFiber() {
  const [selectedMedium, setSelectedMedium] = useState('both');

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Arquitectura de Medios Físicos · Cobre vs Luz
        </div>
        <h2 className="slide-title">El Techo de Cristal del Cobre frente a la Fibra Óptica</h2>
        <p className="slide-subtitle">
          Por qué para enlaces troncales, centros de datos y ultra-altas velocidades (40G a 800G) la luz es insustituible.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Copper UTP Limits */}
        <div
          className="glass-card"
          style={{
            borderTop: '6px solid #d97706',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} color="#d97706" /> Cobre (Par Trenzado UTP/STP)
              </h3>
              <span style={{ fontSize: '0.74rem', fontFamily: 'JetBrains Mono', fontWeight: '800', color: '#d97706', background: '#fef3c7', padding: '3px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
                REINADO LAN (0-100m)
              </span>
            </div>

            {/* Copper Transmission SVG Graphic */}
            <svg width="100%" height="80" viewBox="0 0 320 80" style={{ background: '#f1f8fc', borderRadius: '8px', border: '2px solid #111111', marginBottom: '0.5rem' }}>
              <text x="10" y="18" fill="#d97706" fontSize="9" fontWeight="800" fontFamily="Fredoka, Outfit">SEÑAL ELÉCTRICA (ELECTRONES)</text>
              {/* Copper Pair Wave with Attenuation & Noise */}
              <path d="M 20 45 Q 40 25, 60 45 T 100 45 T 140 45 T 180 47 T 220 50 T 260 52 T 300 54" fill="none" stroke="#d97706" strokeWidth="3" />
              {/* Noise perturbation */}
              <circle cx="180" cy="47" r="4" fill="#e11d48" />
              <text x="190" y="38" fill="#e11d48" fontSize="8" fontWeight="bold">EMI Externa</text>
              <text x="290" y="72" fill="#64748b" fontSize="8.5" fontWeight="bold" textAnchor="end">Atenuación a 100m</text>
            </svg>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Distancia Límite Física</div>
                <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Máximo 100 metros (Atenuación severa)</div>
              </div>

              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Sensibilidad Electromagnética</div>
                <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Vulnerable a EMI y Diafonía en altas frecuencias</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#fffbeb', border: '1.5px solid #d97706', borderRadius: '8px', padding: '0.4rem 0.7rem', fontSize: '0.78rem', color: '#92400e', fontWeight: '700' }}>
            ⚡ <strong>Consumo en 10G:</strong> 3 a 5W por puerto con penalización de latencia por LDPC.
          </div>
        </div>

        {/* Right: Optical Fiber Superiority for Core */}
        <div
          className="glass-card"
          style={{
            borderTop: '6px solid #0284c7',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={20} color="#0284c7" /> Fibra Óptica (Láser / Fotones)
              </h3>
              <span style={{ fontSize: '0.74rem', fontFamily: 'JetBrains Mono', fontWeight: '800', color: '#0284c7', background: '#e0f2fe', padding: '3px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
                BACKBONES & DATA CENTERS
              </span>
            </div>

            {/* Fiber Optical Transmission SVG Graphic */}
            <svg width="100%" height="80" viewBox="0 0 320 80" style={{ background: '#f1f8fc', borderRadius: '8px', border: '2px solid #111111', marginBottom: '0.5rem' }}>
              <text x="10" y="18" fill="#0284c7" fontSize="9" fontWeight="800" fontFamily="Fredoka, Outfit">SEÑAL ÓPTICA (FOTONES LÁSER)</text>
              {/* Glass Core Cladding */}
              <rect x="20" y="32" width="280" height="24" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              {/* Light beam reflection */}
              <path d="M 25 44 L 60 36 L 100 52 L 140 36 L 180 52 L 220 36 L 260 52 L 295 44" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="0.8s" repeatCount="indefinite" />
              </path>
              <text x="290" y="72" fill="#059669" fontSize="8.5" fontWeight="bold" textAnchor="end">100% Inmune a EMI · 40 km</text>
            </svg>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Alcance de Distancia</div>
                <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>Hasta 40 km (Monomodo) sin repetidores</div>
              </div>

              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Inmunidad EMI y Aislamiento</div>
                <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#059669', fontFamily: 'Fredoka, Outfit' }}>100% Dieléctrico (Vidrio): Inmune a descargas</div>
              </div>
            </div>
          </div>

          <div style={{ background: '#f0fdf4', border: '1.5px solid #059669', borderRadius: '8px', padding: '0.4rem 0.7rem', fontSize: '0.78rem', color: '#166534', fontWeight: '700' }}>
            🚀 <strong>Escalabilidad IEEE 802.3df:</strong> 40G · 100G · 400G · 800 Gbps a consumo ultra-bajo.
          </div>
        </div>
      </div>
    </div>
  );
}

