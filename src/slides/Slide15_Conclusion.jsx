import React, { useEffect } from 'react';
import { RotateCcw, Grid, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export function Slide15_Conclusion({ onReset, onOpenGrid }) {
  const teamMembers = [
    { firstName: 'Dylan', lastName: 'Diaz' },
    { firstName: 'Atilio', lastName: 'Vergara' },
    { firstName: 'Fernando', lastName: 'Jimenez' },
    { firstName: 'Celina', lastName: 'Zato Sosa' },
    { firstName: 'Ignacio', lastName: 'Veliz' }
  ];

  useEffect(() => {
    // Trigger smooth celebratory confetti burst on conclusion slide
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#00f0ff', '#3b82f6', '#10b981', '#f59e0b'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="slide-content-wrapper" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="slide-header"
        style={{ textAlign: 'center', marginBottom: '1.5rem' }}
      >
        <div className="slide-tag" style={{ margin: '0 auto 0.5rem auto', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} /> SÍNTESIS Y CIERRE · IEEE 802.3
        </div>
        <h2
          className="slide-title"
          style={{
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, var(--text-heading) 0%, var(--cyan-primary) 50%, var(--emerald-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '900',
            lineHeight: 1.15
          }}
        >
          El Puente Inquebrantable del Último Metro
        </h2>
        <p className="slide-subtitle" style={{ maxWidth: '850px', margin: '0.6rem auto 0 auto', fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
          "Mientras la luz láser sigue rompiendo récords en el núcleo de internet, el par trenzado de cobre permanece como el estándar más rentable, robusto y versátil de la historia de las telecomunicaciones."
        </p>
      </motion.div>

      {/* Team Members Showcase with Framer Motion Stagger */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', width: '100%', maxWidth: '980px', marginBottom: '2rem' }}>
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            whileHover={{ scale: 1.05, translateY: -4 }}
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
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="nav-btn nav-btn-primary"
          onClick={onReset}
          style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
        >
          <RotateCcw size={18} /> Reiniciar Presentación
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="nav-btn"
          onClick={onOpenGrid}
          style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
        >
          <Grid size={18} /> Ver Mapa Completo de Diapositivas
        </motion.button>
      </motion.div>
    </div>
  );
}
