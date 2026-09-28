import React from 'react';
import { Zap, Globe } from 'lucide-react';

export function Slide11_CopperVsFiber() {
  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Arquitectura de Medios Físicos · Cobre vs Luz</div>
        <h2 className="slide-title">El Techo de Cristal del Cobre frente a la Fibra Óptica</h2>
        <p className="slide-subtitle">
          Por qué para enlaces troncales, centros de datos y ultra-altas velocidades (40G a 800G) la luz es insustituible.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Copper UTP Limits */}
        <div className="glass-card" style={{ borderTop: '4px solid var(--amber-accent)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--amber-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={20} /> Cobre (Par Trenzado UTP/STP)
            </h3>
            <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', fontWeight: 'bold', color: 'var(--amber-accent)', background: 'var(--bg-inner-box)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              REINADO LAN (0-100m)
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Distancia Límite Física</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Máximo 100 metros (Atenuación severa)</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Sensibilidad Electromagnética</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Vulnerable a EMI externa y Crosstalk en altas frecuencias</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Consumo y Latencia en 10G+</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>Alto consumo por puerto (3-5W) + latencia LDPC</div>
            </div>
          </div>
        </div>

        {/* Right: Optical Fiber Superiority for Core */}
        <div className="glass-card" style={{ borderTop: '4px solid var(--cyan-primary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--cyan-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={20} /> Fibra Óptica (Láser / Fotones)
            </h3>
            <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono', fontWeight: 'bold', color: 'var(--cyan-primary)', background: 'var(--bg-inner-box)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              BACKBONES & DATA CENTERS
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Alcance de Distancia</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--cyan-primary)' }}>Hasta 40 km (Monomodo) sin repetidores</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Inmunidad EMI</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--emerald-accent)' }}>100% Inmune a interferencias electromagnéticas</div>
            </div>

            <div className="inner-box">
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Escalabilidad de Velocidad</div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-heading)' }}>
                40G · 100G · 400G · 800G (IEEE 802.3df)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
