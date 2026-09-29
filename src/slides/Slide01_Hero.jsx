import React, { useState } from "react";
import { ChevronRight, Heart, Share2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Slide01_Hero({ onStart, onSelectSlide }) {
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const authors = [
    { name: "Dylan Diaz" },
    { name: "Atilio Vergara" },
    { name: "Fernando Jimenez" },
    { name: "Celina Zato Sosa" },
    { name: "Ignacio Veliz" },
  ];

  const handleNav = (slideNum) => {
    if (onSelectSlide) {
      onSelectSlide(slideNum);
    } else {
      onStart();
    }
  };

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
      {/* Top Floating Pill Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="hero-top-bar"
      >
        <div className="hero-pill-nav">
          <button className="hero-nav-link" onClick={() => handleNav(1)}>
            INICIO
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(2)}>
            MODELO OSI
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(3)}>
            TOPOLOGÍA
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(4)}>
            FÍSICA PAR
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(5)}>
            CATEGORÍAS
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(6)}>
            DÚPLEX
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(7)}>
            10M A 10G
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(11)}>
            FIBRA
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(12)}>
            TABLA
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(14)}>
            PoE
          </button>
          <button className="hero-nav-link" onClick={() => handleNav(15)}>
            CIERRE
          </button>
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
              size={19}
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
            <Share2 size={19} color="#111111" strokeWidth={2.4} />
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
              position: "absolute",
              top: "65px",
              right: "24px",
              zIndex: 100,
              background: "#ffffff",
              border: "2px solid #111111",
              borderRadius: "10px",
              padding: "0.5rem 0.9rem",
              boxShadow: "3px 3px 0px #111111",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              color: "#111111",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}
          >
            <Sparkles size={15} color="#0284c7" /> UTN - FRT · Cátedra de Redes
            de Datos · 2026
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Two-Column Content Layout */}
      <div className="hero-main-layout">
        {/* Left Column: Official Report Title & Academic Metadata */}
        <div className="hero-left-content">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="hero-display-title"
          >
            <span className="hero-title-blue">IEEE 802.3</span>
            <span className="hero-title-white-2">INFORME Y COMPARACIONES</span>
          </motion.div>

          {/* Subtitle Pill Banner with Institution & Subject */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="hero-subtitle-container"
          >
            <div className="hero-subtitle-pill">
              <strong>AÑO 2026 · UTN - FRT</strong>
              <br />
              <span style={{ fontSize: "0.88rem", color: "#475569" }}>
                Cátedra de Redes de Datos — Evolución del Par Trenzado de 10
                Mbps a 10 Gbps.
              </span>
            </div>
          </motion.div>

          {/* Team / Authors Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="hero-students-section"
          >
            <div className="hero-students-label">
              <Sparkles size={13} color="#1f4f6e" /> Alumnos · UTN Facultad
              Regional Tucumán
            </div>
            <div className="hero-students-row">
              {authors.map((author, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="hero-student-chip"
                >
                  <span>{author.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Primary Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStart}
            className="hero-cta-button"
          >
            Iniciar Presentación <ChevronRight size={20} strokeWidth={3} />
          </motion.button>
        </div>

        {/* Right Column: Aesthetic Photo Frame */}
        <div className="hero-right-frame-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-photo-card"
          >
            <img
              src="/hero-ethernet-babyblue.jpg"
              alt="Baby Blue Aesthetic Ethernet Cable"
              className="hero-photo-img"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
