import React, { useState } from 'react';
import { Layers, CheckCircle2, Network, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

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
      name: 'Capa 2 — Enlace de Datos (MAC)',
      scope: 'IEEE 802.3 MAC',
      active: true,
      color: '#0284c7',
      details: {
        title: 'Capa 2 — Subcapa de Control de Acceso al Medio (MAC)',
        points: [
          { label: 'Estructura de la Trama:', desc: 'Empaqueta los datos en tramas Ethernet estándar: Preámbulo, SFD, MAC Destino/Origen, EtherType, Payload (46 a 1500 bytes) y FCS CRC-32.' },
          { label: 'Direccionamiento Físico:', desc: 'Asigna direcciones MAC globales de 48 bits (6 bytes) en formato hexadecimal para identificar interfaces en la red local.' },
          { label: 'Gestión de Acceso al Medio:', desc: 'En redes históricas controlaba CSMA/CD; en redes modernas coordina la conmutación Full-Duplex dedicada en switches.' }
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
          { label: 'Medio y Cableado:', desc: 'Rige las categorías de par trenzado de cobre (Cat 3 a Cat 6a) y distancias máximas de canal de 100 metros.' },
          { label: 'Conector Modular:', desc: 'Estandariza la interfaz física 8P8C (RJ-45) y la distribución de pares según esquemas T568A / T568B.' },
          { label: 'Modulación y Voltajes:', desc: 'Convierte bits binarios (0 y 1) en pulsos electromagnéticos mediante esquemas Manchester, MLT-3, PAM-5 o PAM-16.' }
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
        <h2 className="slide-title">El Estándar IEEE 802.3 y el Modelo OSI</h2>
        <p className="slide-subtitle">
          Ethernet opera exclusivamente en las dos capas inferiores de la pila de comunicaciones: Capa Física y Capa de Enlace.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive OSI Layer Selector */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', fontFamily: 'Fredoka, Outfit, sans-serif', marginBottom: '0.15rem' }}>
            Pila OSI (Seleccioná una Capa IEEE 802.3):
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {layers.map((layer) => {
              const isIEEE = layer.active;
              const isSelected = selectedLayer === layer.id;

              return (
                <div
                  key={layer.id}
                  onClick={() => isIEEE && setSelectedLayer(layer.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '9px',
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
                      ? '3px 3px 0px #111111'
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    {isIEEE ? (
                      <CheckCircle2 size={17} color={layer.color} strokeWidth={2.6} />
                    ) : (
                      <div style={{ width: 17 }} />
                    )}
                    <span style={{ fontWeight: isSelected ? '800' : '700', fontSize: '0.84rem', color: '#111111' }}>
                      {layer.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'JetBrains Mono',
                      fontWeight: '800',
                      color: isIEEE ? layer.color : '#64748b',
                      background: '#ffffff',
                      padding: '2px 7px',
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
        </div>

        {/* Right: Selected Layer Details Panel */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Layers size={18} />
              {currentDetails ? currentDetails.title : 'Seleccioná la Capa 1 o Capa 2'}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#0284c7', fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#e0f2fe', padding: '2px 7px', borderRadius: '6px', border: '1.5px solid #111' }}>
              ESPECIFICACIÓN
            </span>
          </div>

          {currentDetails ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', margin: '0.2rem 0' }}>
              {currentDetails.points.map((pt, idx) => (
                <div key={idx} className="inner-box" style={{ padding: '0.5rem 0.75rem' }}>
                  <div style={{ fontWeight: '800', color: '#0284c7', fontSize: '0.86rem', marginBottom: '0.1rem', fontFamily: 'Fredoka, Outfit, sans-serif' }}>
                    {pt.label}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#1e293b', lineHeight: '1.35' }}>
                    {pt.desc}
                  </div>
                </div>
              ))}

              <div style={{ padding: '0.55rem 0.8rem', background: '#e0f2fe', borderRadius: '9px', border: '2px solid #111111', boxShadow: '2px 2px 0px #111111', fontSize: '0.78rem', color: '#111111', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Network size={16} color="#0284c7" strokeWidth={2.4} style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: '600', lineHeight: '1.3' }}>
                  <strong>Independencia de Capas:</strong> Permite migrar de medio físico (cobre a fibra) sin alterar la trama Ethernet en Capa 2.
                </span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px', color: '#64748b' }}>
              Hacé clic en Capa 1 o Capa 2 en el menú lateral.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
