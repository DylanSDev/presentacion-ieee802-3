import React, { useState } from 'react';
import { ChevronRight, Heart, Share2, Sparkles, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Hand-drawn Doodle Star Vector matching the reference sticker style
function DoodleStar({ size = 26, className, style }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ filter: 'drop-shadow(1.5px 1.5px 0px rgba(0,0,0,0.25))', ...style }}
      animate={{
        rotate: [0, 8, -8, 0],
        scale: [1, 1.06, 0.96, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <path
        d="M12 1.5 C12.6 6.8 16.5 10.7 21.8 12 C16.5 13.3 12.6 17.2 12 22.5 C11.4 17.2 7.5 13.3 2.2 12 C7.5 10.7 11.4 6.8 12 1.5 Z"
        fill="#111111"
        stroke="#111111"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

// Hand-drawn Striped Sphere / Planet Doodle Sticker
function DoodlePlanet({ size = 72, className, style }) {
  return (
    <div className={className} style={{ width: size, height: size, ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#111111" strokeWidth="4.5" />
        <path
          d="M 10 38 Q 36 24, 76 28 Q 88 30, 93 42 Q 78 36, 45 36 Q 22 36, 10 38 Z"
          fill="#86c6eb"
          stroke="#111111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M 6 56 Q 30 46, 68 50 Q 86 52, 94 62 Q 74 58, 40 58 Q 18 58, 6 56 Z"
          fill="#86c6eb"
          stroke="#111111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M 16 78 Q 42 70, 72 74 Q 82 76, 86 82 Q 68 80, 42 80 Q 24 80, 16 78 Z"
          fill="#86c6eb"
          stroke="#111111"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M 82 68 C 80 82, 66 90, 50 93"
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Hand-drawn Botanical Branch / Leaf Doodle Sticker
function DoodleBranch({ size = 96, className, style }) {
  return (
    <div className={className} style={{ width: size, height: size, ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
        <path
          d="M 88 95 C 75 72, 54 42, 28 8"
          stroke="#111111"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M 28 8 C 22 1, 38 -2, 40 10 C 41 18, 33 13, 28 8 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M 37 24 C 18 18, 16 30, 29 33 C 38 35, 39 28, 37 24 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M 44 30 C 58 20, 66 30, 52 40 C 46 43, 43 36, 44 30 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M 50 46 C 31 40, 27 53, 42 58 C 50 60, 53 52, 50 46 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M 58 56 C 76 46, 84 60, 66 68 C 60 70, 56 63, 58 56 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M 64 70 C 46 66, 44 78, 60 84 C 66 86, 68 76, 64 70 Z"
          fill="#b8def2"
          stroke="#111111"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Slide01_Hero({ onStart }) {
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const authors = [
    { name: 'Dylan Diaz' },
    { name: 'Atilio Vergara' },
    { name: 'Fernando Jimenez' },
    { name: 'Celina Zato Sosa' },
    { name: 'Ignacio Veliz' }
  ];

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleShare = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="hero-aesthetic-board">
      {/* Decorative Left Blue Ribbon Tab */}
      <div className="hero-left-ribbon" />

      {/* Floating Sparkle Stars in Corners */}
      <DoodleStar className="hero-star-tl" size={26} />
      <DoodleStar className="hero-star-tr" size={26} />
      <DoodleStar className="hero-star-bl" size={28} />
      <DoodleStar className="hero-star-br" size={28} />

      {/* Top Floating Pill Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="hero-top-bar"
      >
        <div className="hero-pill-nav">
          <button className="hero-nav-link" onClick={onStart}>INICIO</button>
          <button className="hero-nav-link" onClick={onStart}>MODELO OSI</button>
          <button className="hero-nav-link" onClick={onStart}>PAR TRENZADO</button>
          <button className="hero-nav-link" onClick={onStart}>CATEGORÍAS</button>
          <button className="hero-nav-link" onClick={onStart}>10M A 10G</button>
          <button className="hero-nav-link" onClick={onStart}>PoE</button>
        </div>

        <div className="hero-top-actions">
          {/* Like Heart Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="hero-action-box"
            title="Dar me gusta a la presentación"
          >
            <Heart
              size={20}
              color={isLiked ? "#e11d48" : "#111111"}
              fill={isLiked ? "#e11d48" : "none"}
              strokeWidth={2.4}
            />
          </motion.button>

          {/* Share / Info Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="hero-action-box"
            title="Información Institucional"
          >
            <Share2 size={20} color="#111111" strokeWidth={2.4} />
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Info Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            style={{
              position: 'absolute',
              top: '72px',
              right: '28px',
              zIndex: 100,
              background: '#ffffff',
              border: '2px solid #111111',
              borderRadius: '10px',
              padding: '0.6rem 1rem',
              boxShadow: '3.5px 3.5px 0px #111111',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#111111',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Sparkles size={16} color="#0284c7" /> UTN - FRT · Cátedra de Redes de Datos · 2026
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Two-Column Content Layout */}
      <div className="hero-main-layout">
        {/* Left Column: Exact Title of Report & Metadata */}
        <div className="hero-left-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-display-title"
          >
            <span className="hero-title-blue">IEEE 802.3</span>
            <span className="hero-title-white-1">Y SUS ACTUALIZACIONES</span>
            <span className="hero-title-white-2">INFORME Y COMPARACIONES</span>
          </motion.div>

          {/* Subtitle Pill Banner with Institution & Subject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle-container"
          >
            <div className="hero-subtitle-pill">
              <strong>AÑO 2026 · UTN - FRT</strong><br />
              <span style={{ fontSize: '0.92rem', color: '#475569' }}>
                Cátedra de Redes de Datos — Evolución del Par Trenzado de 10 Mbps a 10 Gbps.
              </span>
            </div>
            {/* Overlapping Striped Sphere Sticker */}
            <DoodlePlanet size={66} className="hero-planet-sticker" />
          </motion.div>

          {/* Team / Authors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-students-section"
          >
            <div className="hero-students-label">
              <Sparkles size={14} color="#1f4f6e" /> Alumnos · UTN Facultad Regional Tucumán
            </div>
            <div className="hero-students-row">
              {authors.map((author, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="hero-student-chip"
                >
                  <span>{author.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Primary Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStart}
            className="hero-cta-button"
          >
            Iniciar Presentación <ChevronRight size={22} strokeWidth={3} />
          </motion.button>
        </div>

        {/* Right Column: Aesthetic Photo Frame with Overlay Leaf */}
        <div className="hero-right-frame-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="hero-photo-card"
          >
            <img
              src="/hero-ethernet-babyblue.jpg"
              alt="Baby Blue Aesthetic Ethernet Cable"
              className="hero-photo-img"
            />
          </motion.div>

          {/* Overlapping Botanical Branch Leaf Sticker */}
          <DoodleBranch size={105} className="hero-leaf-sticker" />
        </div>
      </div>

      {/* Floating Right Arrow Navigation Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onStart}
        className="hero-next-arrow-circle"
        title="Siguiente Diapositiva"
      >
        <ChevronRight size={24} strokeWidth={2.8} />
      </motion.button>
    </div>
  );
}
