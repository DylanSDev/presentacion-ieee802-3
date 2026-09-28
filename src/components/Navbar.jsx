import React from 'react';
import { ACTS } from '../data/slidesData';
import { Grid, Maximize, Minimize, Sun, Moon } from 'lucide-react';

export function Navbar({
  currentSlideData,
  totalSlides,
  currentSlideIndex,
  onOpenGrid,
  isFullscreen,
  onToggleFullscreen,
  theme,
  onToggleTheme
}) {
  const currentAct = ACTS.find((a) => a.id === currentSlideData.actId);
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <header className="presentation-header">
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="header-brand">
        <span className="brand-badge">IEEE 802.3</span>
        <span className="brand-title">La Evolución de Ethernet sobre Cobre</span>
      </div>

      <div className="header-controls">
        {currentAct && (
          <div className="act-indicator">
            <span className="act-dot" style={{ backgroundColor: currentAct.color }} />
            <span style={{ color: currentAct.color }}>{currentAct.title}</span>
          </div>
        )}

        {/* Theme Toggle Button */}
        <button
          className="icon-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
        >
          {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#0284c7" />}
        </button>

        {/* Grid Map Button */}
        <button
          className="icon-btn"
          onClick={onOpenGrid}
          title="Ver mapa de diapositivas (M)"
        >
          <Grid size={18} />
        </button>

        {/* Fullscreen Toggle Button */}
        <button
          className="icon-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Salir de Pantalla Completa (F)" : "Pantalla Completa (F)"}
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </header>
  );
}
