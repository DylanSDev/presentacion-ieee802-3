import React from 'react';
import { ACTS } from '../data/slidesData';
import { Grid, Maximize, Minimize, BookOpen } from 'lucide-react';

export function Navbar({
  currentSlideData,
  totalSlides,
  currentSlideIndex,
  onOpenGrid,
  isFullscreen,
  onToggleFullscreen
}) {
  const currentAct = ACTS.find((a) => a.id === currentSlideData.actId);
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <header className="presentation-header">
      {/* Top progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="header-brand">
        <span className="brand-badge">UTN - FRT · 2026</span>
        <span className="brand-title">IEEE 802.3 y sus Actualizaciones: Informe y Comparaciones</span>
      </div>

      <div className="header-controls">
        {currentAct && (
          <div className="act-indicator">
            <span className="act-dot" style={{ backgroundColor: currentAct.color }} />
            <span style={{ color: '#111111', fontWeight: '700' }}>{currentAct.title}</span>
          </div>
        )}

        {/* Grid Map Button */}
        <button
          className="icon-btn"
          onClick={onOpenGrid}
          title="Ver mapa de diapositivas (M / G)"
        >
          <Grid size={18} strokeWidth={2.4} />
        </button>

        {/* Fullscreen Toggle Button */}
        <button
          className="icon-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Salir de Pantalla Completa (F)" : "Pantalla Completa (F)"}
        >
          {isFullscreen ? <Minimize size={18} strokeWidth={2.4} /> : <Maximize size={18} strokeWidth={2.4} />}
        </button>
      </div>
    </header>
  );
}
