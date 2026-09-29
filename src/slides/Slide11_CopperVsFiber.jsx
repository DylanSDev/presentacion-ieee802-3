import React from 'react';
import { Zap, Globe, Sparkles } from 'lucide-react';

export function Slide11_CopperVsFiber() {
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
        <div className="glass-card" style={{ borderTop: '6px solid #d97706', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={20} color="#d97706" /> Cobre (Par Trenzado UTP/STP)
            </h3>
            <span style={{ fontSize: '0.76rem', fontFamily: 'JetBrains Mono', fontWeight: '800', color: '#d97706', background: '#fef3c7', padding: '3px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
              REINADO LAN (0-100m)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Distancia Límite Física</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Máximo 100 metros (Atenuación severa)</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Sensibilidad Electromagnética</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Vulnerable a EMI externa y Crosstalk en altas frecuencias</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Consumo y Latencia en 10G+</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>Alto consumo por puerto (3-5W) + latencia LDPC</div>
            </div>
          </div>
        </div>

        {/* Right: Optical Fiber Superiority for Core */}
        <div className="glass-card" style={{ borderTop: '6px solid #0284c7', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={20} color="#0284c7" /> Fibra Óptica (Láser / Fotones)
            </h3>
            <span style={{ fontSize: '0.76rem', fontFamily: 'JetBrains Mono', fontWeight: '800', color: '#0284c7', background: '#e0f2fe', padding: '3px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
              BACKBONES & DATA CENTERS
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Alcance de Distancia</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0284c7', fontFamily: 'Fredoka, Outfit' }}>Hasta 40 km (Monomodo) sin repetidores</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Inmunidad EMI</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#059669', fontFamily: 'Fredoka, Outfit' }}>100% Inmune a interferencias electromagnéticas</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: '700' }}>Escalabilidad de Velocidad</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
                40G · 100G · 400G · 800G (IEEE 802.3df)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
