import React from 'react';
import { ChevronRight, GraduationCap, Calendar, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.45rem 1.35rem',
          borderRadius: '50px',
          background: 'var(--bg-inner-box)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
        }}
      >
        <GraduationCap size={18} color="var(--cyan-primary)" />
        <span style={{ fontSize: '0.92rem', fontWeight: '800', color: 'var(--text-heading)', letterSpacing: '0.04em' }}>
          UNIVERSIDAD TECNOLÓGICA NACIONAL · FRT
        </span>
        <span style={{ color: 'var(--text-dim)' }}>|</span>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.88rem', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
          <Calendar size={14} /> 2026
        </div>
      </motion.div>

      {/* Main Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{ maxWidth: '980px', marginBottom: '2rem' }}
      >
        <div className="slide-tag" style={{ margin: '0 auto 1rem auto', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} /> ESTÁNDAR IEEE 802.3 · COMUNICACIONES Y REDES DE DATOS
        </div>
        
        <h1
          className="slide-title"
          style={{
            fontSize: '3.6rem',
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
            maxWidth: '820px',
            margin: '0 auto',
            color: 'var(--text-muted)',
            lineHeight: 1.5
          }}
        >
          De 10 Mbps a 10 Gbps — Tres décadas superando los límites físicos del par trenzado en las redes de área local.
        </p>
      </motion.div>

      {/* Authors Card Deck with Framer Motion Stagger */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          width: '100%',
          maxWidth: '940px',
          marginBottom: '2.2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.85rem', fontSize: '0.82rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
          <Users size={16} color="var(--cyan-primary)" /> Integrantes del Equipo
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
          {authors.map((author, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, translateY: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="glass-card"
              style={{
                padding: '0.95rem 0.5rem',
                textAlign: 'center',
                borderTop: '3px solid var(--cyan-primary)',
                background: 'var(--bg-card)'
              }}
            >
              <div style={{ fontSize: '1.08rem', fontWeight: '800', color: 'var(--text-heading)' }}>
                {author.firstName}
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--cyan-primary)', marginTop: '2px' }}>
                {author.lastName}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Big Action Button with Spring Hover */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="nav-btn nav-btn-primary"
        onClick={onStart}
        style={{
          padding: '0.95rem 2.4rem',
          fontSize: '1.12rem',
          fontWeight: '800',
          letterSpacing: '0.02em',
          boxShadow: '0 0 30px var(--cyan-glow)'
        }}
      >
        Iniciar Presentación <ChevronRight size={22} />
      </motion.button>
    </div>
  );
}
