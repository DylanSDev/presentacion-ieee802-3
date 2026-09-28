import React from 'react';
import { RotateCcw, Grid } from 'lucide-react';

export function Slide15_Conclusion({ onReset, onOpenGrid }) {
  const teamMembers = [
    { firstName: 'Dylan', lastName: 'Diaz' },
    { firstName: 'Atilio', lastName: 'Vergara' },
    { firstName: 'Fernando', lastName: 'Jimenez' },
    { firstName: 'Celina', lastName: 'Zato Sosa' },
    { firstName: 'Ignacio', lastName: 'Veliz' }
  ];

  return (
    <div className="slide-content-wrapper" style={{ justifyContent: 'center' }}>
      <div className="slide-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div className="slide-tag" style={{ margin: '0 auto 0.5rem auto' }}>
          Síntesis y Cierre · IEEE 802.3
        </div>
        <h2
          className="slide-title"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, var(--text-heading) 0%, var(--cyan-primary) 50%, var(--emerald-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          El Puente Inquebrantable del Último Metro
        </h2>
        <p className="slide-subtitle" style={{ maxWidth: '850px', margin: '0.5rem auto 0 auto', fontSize: '1.1rem', color: 'var(--text-main)' }}>
          "Mientras la luz láser sigue rompiendo récords en el núcleo de internet, el par trenzado de cobre permanece como el estándar más rentable, robusto y versátil de la historia de las telecomunicaciones."
        </p>
      </div>

      {/* Team Members Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              textAlign: 'center',
              padding: '1.25rem 0.75rem',
              borderTop: '3px solid var(--cyan-primary)',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem'
            }}
          >
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-heading)' }}>
              {member.firstName}
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--cyan-primary)', letterSpacing: '0.02em' }}>
              {member.lastName}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          className="nav-btn nav-btn-primary"
          onClick={onReset}
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
        >
          <RotateCcw size={18} /> Reiniciar Presentación
        </button>

        <button
          className="nav-btn"
          onClick={onOpenGrid}
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
        >
          <Grid size={18} /> Ver Mapa Completo de Diapositivas
        </button>
      </div>
    </div>
  );
}
