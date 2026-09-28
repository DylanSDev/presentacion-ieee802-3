import React, { useState } from 'react';
import { DollarSign, Shield, Zap, CheckCircle2 } from 'lucide-react';

export function Slide13_WhyCopperWins() {
  const [activeCard, setActiveCard] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: DollarSign,
      title: '1. Economía y Universalidad',
      color: 'var(--emerald-accent)',
      desc: 'Costo por puerto radicalmente menor frente a la fibra óptica.',
      points: [
        'Conectores RJ-45 y cables UTP de bajo costo de fabricación y transporte.',
        'Herramientas de crimpado simples: un técnico puede armar una terminal en menos de 2 minutos sin pulidoras de vidrio.',
        'Puertos integrados por defecto en casi todas las placas madre, switches de consumo y routers del planeta.'
      ]
    },
    {
      id: 1,
      icon: Shield,
      title: '2. Robustez Estructural',
      color: 'var(--blue-accent)',
      desc: 'Tolerancia física superior para canaletas y entornos hostiles.',
      points: [
        'A diferencia del núcleo de vidrio frágil de la fibra, el cobre es altamente flexible y resistente al quiebre.',
        'Soporta radios de curvatura cerrados y tracción en canaletas de oficinas, hogares e industrias.',
        'Mantenimiento accesible sin necesidad de costosas fusionadoras de fibra por arco voltaico.'
      ]
    },
    {
      id: 2,
      icon: Zap,
      title: '3. Power over Ethernet (PoE)',
      color: 'var(--amber-accent)',
      desc: 'Alimentación eléctrica y datos en el mismo cable: Imposible en fibra.',
      points: [
        'Capaz de suministrar hasta 90W de potencia eléctrica continua simultáneamente con el tráfico de red.',
        'Elimina tomas de corriente y fuentes externas en cámaras de vigilancia, teléfonos IP y puntos de acceso Wi-Fi.',
        'La fibra óptica es dieléctrica pura (vidrio) y no puede transportar energía eléctrica.'
      ]
    }
  ];

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Vigencia en el Acceso · El Rey del Último Metro</div>
        <h2 className="slide-title">¿Por qué el Cobre Sigue Reinando en la Red de Acceso?</h2>
        <p className="slide-subtitle">
          Aunque la fibra óptica domina las distancias largas, tres pilares convierten al par trenzado en el rey insustituible.
        </p>
      </div>

      <div className="slide-body grid-3col">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activeCard === idx;

          return (
            <div
              key={idx}
              className={`glass-card glass-card-interactive ${isSelected ? 'pulse-glow' : ''}`}
              onClick={() => setActiveCard(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderTop: `4px solid ${p.color}`,
                background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="bullet-icon" style={{ borderColor: p.color, color: p.color, background: 'var(--bg-inner-box)' }}>
                  <Icon size={18} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-heading)' }}>{p.title}</h3>
              </div>

              <p style={{ fontSize: '0.85rem', color: p.color, fontWeight: '700' }}>
                {p.desc}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                {p.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    <CheckCircle2 size={14} color={p.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
