import React from 'react';
import { SLIDES, ACTS } from '../data/slidesData';
import { X, Grid } from 'lucide-react';

export function GridViewModal({ isOpen, onClose, currentSlide, onSelectSlide }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-grid-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Grid size={22} color="#00f0ff" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>
              Mapa de Diapositivas — IEEE 802.3
            </h2>
          </div>
          <button className="icon-btn" onClick={onClose} title="Cerrar (Esc)">
            <X size={20} />
          </button>
        </div>

        <div className="grid-slides-list">
          {SLIDES.map((slide) => {
            const act = ACTS.find((a) => a.id === slide.actId);
            const isActive = slide.id === currentSlide;

            return (
              <div
                key={slide.id}
                className={`grid-slide-thumb ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="thumb-number">SLIDE {slide.id.toString().padStart(2, '0')}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      color: act?.color || '#00f0ff',
                      background: 'rgba(255,255,255,0.06)',
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}
                  >
                    Acto {slide.actId}
                  </span>
                </div>

                <div className="thumb-title">{slide.title}</div>
                <div className="thumb-act">{slide.tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
