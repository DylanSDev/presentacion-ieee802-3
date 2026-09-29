import React, { useEffect } from 'react';
import { RotateCcw, Grid, Sparkles, GraduationCap } from 'lucide-react';
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
    // Celebratory confetti in baby blue / pastel palette
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#0284c7', '#38bdf8', '#10b981', '#f59e0b', '#bad8ec'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="slide-content-wrapper" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="slide-header"
        style={{ textAlign: 'center', marginBottom: '1.25rem' }}
      >
        <div className="slide-tag" style={{ margin: '0 auto 0.5rem auto', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} /> SÍNTESIS Y CIERRE · UTN - FRT 2026
        </div>
        <h2
          className="slide-title"
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111111',
            fontFamily: 'Fredoka, Rubik, Outfit, sans-serif',
            lineHeight: 1.15
          }}
        >
          El Puente Inquebrantable del Último Metro
        </h2>
        <p className="slide-subtitle" style={{ maxWidth: '840px', margin: '0.5rem auto 0 auto', fontSize: '1.08rem', color: '#475569', lineHeight: 1.5, fontWeight: '500' }}>
          "Mientras la luz láser sigue rompiendo récords en el núcleo de internet, el par trenzado de cobre permanece como el estándar más rentable, robusto, electrificado y versátil de la historia de las redes de datos."
        </p>
      </motion.div>

      {/* Team Members Showcase with Neo-Brutalist Sticker Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.85rem', width: '100%', maxWidth: '960px', marginBottom: '1.8rem' }}>
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
            whileHover={{ scale: 1.06, translateY: -4 }}
            className="glass-card"
            style={{
              textAlign: 'center',
              padding: '1.1rem 0.6rem',
              borderTop: '5px solid #0284c7',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem',
              borderRadius: '14px'
            }}
          >
            <div style={{ fontSize: '1.12rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>
              {member.firstName}
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0284c7', fontFamily: 'Outfit, sans-serif' }}>
              {member.lastName}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="nav-btn nav-btn-primary"
          onClick={onReset}
          style={{ padding: '0.75rem 1.8rem', fontSize: '1rem' }}
        >
          <RotateCcw size={18} /> Reiniciar Presentación
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="nav-btn"
          onClick={onOpenGrid}
          style={{ padding: '0.75rem 1.8rem', fontSize: '1rem' }}
        >
          <Grid size={18} /> Mapa de Diapositivas
        </motion.button>
      </motion.div>
    </div>
  );
}
