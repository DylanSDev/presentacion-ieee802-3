import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

export function FooterNav({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  isAutoPlay,
  onToggleAutoPlay,
  onReset
}) {
  return (
    <footer className="presentation-footer">
      <div className="slide-counter-badge">
        <span className="slide-counter-current">{currentSlide.toString().padStart(2, '0')}</span>
        <span>/ {totalSlides.toString().padStart(2, '0')}</span>
        <span className="footer-nav-hint">
          Navegá con <span className="kbd-hint">←</span> <span className="kbd-hint">→</span> o <span className="kbd-hint">Espacio</span>
        </span>
      </div>

      <div className="nav-buttons">
        <button
          className="icon-btn"
          onClick={onReset}
          title="Ir al inicio (Home)"
        >
          <RotateCcw size={16} strokeWidth={2.4} />
        </button>

        <button
          className={`icon-btn ${isAutoPlay ? 'active' : ''}`}
          onClick={onToggleAutoPlay}
          title={isAutoPlay ? "Pausar reproducción automática" : "Reproducción automática"}
        >
          {isAutoPlay ? <Pause size={16} strokeWidth={2.4} /> : <Play size={16} strokeWidth={2.4} />}
        </button>

        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={currentSlide === 1}
        >
          <ChevronLeft size={18} strokeWidth={2.6} />
          Anterior
        </button>

        <button
          className="nav-btn nav-btn-primary"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
        >
          Siguiente
          <ChevronRight size={18} strokeWidth={2.6} />
        </button>
      </div>
    </footer>
  );
}
