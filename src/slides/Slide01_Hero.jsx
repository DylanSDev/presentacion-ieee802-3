import React from 'react';
import { ChevronRight, GraduationCap, Calendar, Users, Sparkles } from 'lucide-react';

export function Slide01_Hero({ onStart }) {
  const authors = [
    { firstName: 'Dylan', lastName: 'Diaz' },
    { firstName: 'Atilio', lastName: 'Vergara' },
    { firstName: 'Fernando', lastName: 'Jimenez' },
    { firstName: 'Celina', lastName: 'Zato Sosa' },
    { firstName: 'Ignacio', lastName: 'Veliz' }
  ];

  return (
    <div className="slide-content-wrapper" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '1rem 2rem' }}>
      {/* University & Institutional Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 1.25rem',
          borderRadius: '50px',
          background: 'var(--bg-inner-box)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}
      >
        <GraduationCap size={18} color="var(--cyan-primary)" />
        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-heading)', letterSpacing: '0.04em' }}>
          UNIVERSIDAD TECNOLÓGICA NACIONAL · FRT
        </span>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
          <Calendar size={14} /> 2026
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div style={{ maxWidth: '950px', marginBottom: '2rem' }}>
        <div className="slide-tag" style={{ margin: '0 auto 1rem auto' }}>
          ESTÁNDAR IEEE 802.3 · COMUNICACIONES Y REDES DE DATOS
        </div>
        
        <h1
          className="slide-title"
          style={{
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, var(--text-heading) 0%, var(--cyan-primary) 50%, var(--blue-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em',
            fontWeight: '900',
            lineHeight: 1.15,
            marginBottom: '1rem'
          }}
        >
          IEEE 802.3: La Evolución de Ethernet sobre Cobre
        </h1>

        <p
          className="slide-subtitle"
          style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: 'var(--text-muted)',
            lineHeight: 1.5
          }}
        >
          De 10 Mbps a 10 Gbps — Tres décadas superando los límites físicos del par trenzado en las redes de área local.
        </p>
      </div>

      {/* Authors Card Deck */}
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          marginBottom: '2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
          <Users size={16} color="var(--cyan-primary)" /> Integrantes del Equipo
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
          {authors.map((author, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '0.85rem 0.5rem',
                textAlign: 'center',
                borderTop: '3px solid var(--cyan-primary)',
                background: 'var(--bg-card)'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-heading)' }}>
                {author.firstName}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--cyan-primary)', marginTop: '2px' }}>
                {author.lastName}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Action Button */}
      <button
        className="nav-btn nav-btn-primary"
        onClick={onStart}
        style={{
          padding: '0.9rem 2.2rem',
          fontSize: '1.1rem',
          fontWeight: '800',
          letterSpacing: '0.02em',
          boxShadow: '0 0 25px var(--cyan-glow)'
        }}
      >
        Iniciar Presentación <ChevronRight size={22} />
      </button>
    </div>
  );
}
