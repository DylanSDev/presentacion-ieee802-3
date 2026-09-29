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
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#bad8ec', border: '2px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0px #111' }}>
              <Grid size={20} color="#111111" strokeWidth={2.5} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit, sans-serif' }}>
                Mapa de Diapositivas — IEEE 802.3
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                UTN FRT · Cátedra de Redes de Datos 2026
              </p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} title="Cerrar (Esc)">
            <X size={20} strokeWidth={2.5} />
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
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      color: act?.color || '#0284c7',
                      background: '#f1f8fc',
                      border: '1.5px solid #111',
                      padding: '2px 6px',
                      borderRadius: '6px'
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
