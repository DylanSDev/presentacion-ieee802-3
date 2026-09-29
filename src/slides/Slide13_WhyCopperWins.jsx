import React, { useState } from 'react';
import { DollarSign, Shield, Zap, CheckCircle2, Sparkles } from 'lucide-react';

export function Slide13_WhyCopperWins() {
  const [activeCard, setActiveCard] = useState(0);

  const pillars = [
    {
      id: 0,
      icon: DollarSign,
      title: '1. Economía y Universalidad',
      color: '#059669',
      desc: 'Costo por puerto radicalmente menor frente a la fibra óptica.',
      points: [
        'Conectores RJ-45 y cables UTP de bajo costo de fabricación y transporte.',
        'Herramientas de crimpado simples: un técnico puede armar una terminal en 2 minutos sin pulidoras de vidrio.',
        'Puertos integrados por defecto en casi todas las placas madre, switches y routers del planeta.'
      ]
    },
    {
      id: 1,
      icon: Shield,
      title: '2. Robustez Estructural',
      color: '#2563eb',
      desc: 'Tolerancia física superior para canaletas y entornos hostiles.',
      points: [
        'A diferencia del núcleo de vidrio frágil de la fibra, el cobre es altamente flexible y resistente.',
        'Soporta radios de curvatura cerrados y tracción en canaletas de oficinas, hogares e industrias.',
        'Mantenimiento accesible sin necesidad de costosas fusionadoras por arco voltaico.'
      ]
    },
    {
      id: 2,
      icon: Zap,
      title: '3. Power over Ethernet (PoE)',
      color: '#d97706',
      desc: 'Alimentación eléctrica y datos en el mismo cable: Imposible en fibra.',
      points: [
        'Capaz de suministrar hasta 90W de potencia continua simultáneamente con el tráfico de red.',
        'Elimina tomas de corriente y fuentes externas en cámaras de vigilancia, teléfonos IP y APs Wi-Fi.',
        'La fibra óptica es dieléctrica pura (vidrio) y no puede transportar energía eléctrica.'
      ]
    }
  ];

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Vigencia en el Acceso · El Rey del Último Metro
        </div>
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
              className="glass-card glass-card-interactive"
              onClick={() => setActiveCard(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                borderTop: `6px solid ${p.color}`,
                background: isSelected ? '#f0f9ff' : '#ffffff',
                boxShadow: isSelected ? '6px 6px 0px #111111' : '3.5px 3.5px 0px #111111',
                transform: isSelected ? 'translate(-2px, -2px)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div className="bullet-icon" style={{ borderColor: '#111', color: p.color, background: '#ffffff', boxShadow: '2px 2px 0px #111' }}>
                  <Icon size={18} strokeWidth={2.4} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>{p.title}</h3>
              </div>

              <p style={{ fontSize: '0.84rem', color: p.color, fontWeight: '800', fontFamily: 'Fredoka, Outfit' }}>
                {p.desc}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.3rem' }}>
                {p.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
                    <CheckCircle2 size={15} color={p.color} style={{ flexShrink: 0, marginTop: '2px' }} strokeWidth={2.4} />
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
