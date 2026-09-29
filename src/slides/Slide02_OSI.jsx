import React, { useState } from 'react';
import { Layers, CheckCircle2, Network, Sparkles } from 'lucide-react';

export function Slide02_OSI() {
  const [selectedLayer, setSelectedLayer] = useState(1);

  const layers = [
    { id: 7, name: 'Capa 7 — Aplicación', scope: 'Fuera de IEEE 802.3', active: false },
    { id: 6, name: 'Capa 6 — Presentación', scope: 'Fuera de IEEE 802.3', active: false },
    { id: 5, name: 'Capa 5 — Sesión', scope: 'Fuera de IEEE 802.3', active: false },
    { id: 4, name: 'Capa 4 — Transporte (TCP/UDP)', scope: 'Fuera de IEEE 802.3', active: false },
    { id: 3, name: 'Capa 3 — Red (IP)', scope: 'Fuera de IEEE 802.3', active: false },
    {
      id: 2,
      name: 'Capa 2 — Enlace de Datos (Subcapa MAC)',
      scope: 'IEEE 802.3 MAC',
      active: true,
      color: '#0284c7',
      details: {
        title: 'Capa 2 — Subcapa de Control de Acceso al Medio (MAC)',
        points: [
          { label: 'Estructura de la Trama:', desc: 'Empaqueta bits en tramas Ethernet (Preámbulo, SFD, MAC Destino/Origen, EtherType, Payload 46-1500 bytes y FCS CRC-32).' },
          { label: 'Direccionamiento Físico:', desc: 'Asigna direcciones MAC únicas de 48 bits escritas en hexadecimal (ej. 00:1A:2B:3C:4D:5E).' },
          { label: 'Gestión de Acceso al Medio:', desc: 'En redes históricas gestionaba CSMA/CD para detectar colisiones; en redes modernas coordina la conmutación Full-Duplex dedicada.' }
        ]
      }
    },
    {
      id: 1,
      name: 'Capa 1 — Capa Física (PHY)',
      scope: 'IEEE 802.3 PHY',
      active: true,
      color: '#2563eb',
      details: {
        title: 'Capa 1 — Especificaciones del Medio Físico (PHY)',
        points: [
          { label: 'Especificación del Cableado:', desc: 'Rige las categorías de cobre de par trenzado UTP/STP (Cat 3, 5, 5e, 6, 6a) y distancias máximas de canal de 100m.' },
          { label: 'Conectores e Interfaces:', desc: 'Define la interfaz modular 8P8C (RJ-45) y los esquemas de ponchado de pares (T568A / T568B).' },
          { label: 'Codificación y Voltajes:', desc: 'Determina cómo modular bits binarios (0 y 1) en pulsos de voltaje eléctrico mediante esquemas como Manchester, MLT-3, PAM-5 o PAM-16.' }
        ]
      }
    }
  ];

  const currentDetails = layers.find((l) => l.id === selectedLayer)?.details;

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> Arquitectura de Red · Modelo OSI
        </div>
        <h2 className="slide-title">¿Qué es IEEE 802.3 y dónde vive en el Modelo OSI?</h2>
        <p className="slide-subtitle">
          Ethernet no opera en toda la pila de red: se concentra de manera exclusiva y estandarizada en las dos capas inferiores.
        </p>
      </div>

      <div className="slide-body grid-2col-wide-right">
        {/* Interactive OSI Layer Selector */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', fontFamily: 'Fredoka, Outfit, sans-serif', marginBottom: '0.4rem' }}>
            Hacé clic en una Capa IEEE 802.3:
          </div>

          {layers.map((layer) => {
            const isIEEE = layer.active;
            const isSelected = selectedLayer === layer.id;

            return (
              <div
                key={layer.id}
                onClick={() => isIEEE && setSelectedLayer(layer.id)}
                style={{
                  padding: '0.65rem 1rem',
                  borderRadius: '10px',
                  background: isSelected
                    ? '#e0f2fe'
                    : isIEEE
                    ? '#f1f8fc'
                    : '#ffffff',
                  border: isSelected
                    ? '2.5px solid #111111'
                    : isIEEE
                    ? '2px solid #111111'
                    : '1.5px dashed #cbd5e1',
                  boxShadow: isSelected
                    ? '3.5px 3.5px 0px #111111'
                    : isIEEE
                    ? '2px 2px 0px #111111'
                    : 'none',
                  cursor: isIEEE ? 'pointer' : 'default',
                  opacity: isIEEE ? 1 : 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.15s ease',
                  transform: isSelected ? 'translate(-2px, -2px)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {isIEEE ? (
                    <CheckCircle2 size={18} color={layer.color} strokeWidth={2.6} />
                  ) : (
                    <div style={{ width: 18 }} />
                  )}
                  <span style={{ fontWeight: isSelected ? '800' : '700', fontSize: '0.88rem', color: '#111111' }}>
                    {layer.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono',
                    fontWeight: '800',
                    color: isIEEE ? layer.color : '#64748b',
                    background: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    border: '1.5px solid #111111',
                    boxShadow: '1.5px 1.5px 0px #111111'
                  }}
                >
                  {layer.scope}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Layer Details Panel */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Layers size={18} />
              {currentDetails ? currentDetails.title : 'Seleccioná la Capa 1 o Capa 2'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#e0f2fe', padding: '3px 8px', borderRadius: '6px', border: '1.5px solid #111111' }}>
              ESPECIFICACIÓN TÉCNICA
            </span>
          </div>

          {currentDetails ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.25rem' }}>
              {currentDetails.points.map((pt, idx) => (
                <div key={idx} className="inner-box">
                  <div style={{ fontWeight: '800', color: '#0284c7', fontSize: '0.92rem', marginBottom: '0.2rem', fontFamily: 'Fredoka, Outfit, sans-serif' }}>
                    {pt.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#1e293b', lineHeight: '1.45' }}>
                    {pt.desc}
                  </div>
                </div>
              ))}

              <div style={{ padding: '0.75rem 1rem', background: '#e0f2fe', borderRadius: '10px', border: '2px solid #111111', boxShadow: '2.5px 2.5px 0px #111111', fontSize: '0.84rem', color: '#111111', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Network size={18} color="#0284c7" strokeWidth={2.4} />
                <span style={{ fontWeight: '600' }}>
                  La independencia entre Capa 1 y Capa 2 permite cambiar de medio físico (cobre UTP a fibra óptica) sin alterar la estructura fundamental de la trama Ethernet.
                </span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#64748b' }}>
              Hacé clic en Capa 1 o Capa 2 en el menú lateral.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
