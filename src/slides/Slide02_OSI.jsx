import React, { useState } from 'react';
import { Layers, CheckCircle2, Cpu, Network } from 'lucide-react';

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
      color: 'var(--cyan-primary)',
      details: {
        title: 'Capa 2 — Subcapa de Control de Acceso al Medio (MAC)',
        points: [
          { label: 'Estructura de la Trama:', desc: 'Empaqueta bits en tramas Ethernet (Preámbulo, SFD, MAC Destino/Origen, EtherType, Payload 46-1500 bytes y FCS CRC-32).' },
          { label: 'Direccionamiento Físico:', desc: 'Asigna direcciones MAC únicas de 48 bits escritas en hexadecimal (ej. 00:1A:2B:3C:4D:5E).' },
          { label: 'Gestión de Acceso al Medio:', desc: 'En redes antiguas gestiona CSMA/CD para detectar colisiones; en redes modernas coordina la conmutación Full-Duplex.' }
        ]
      }
    },
    {
      id: 1,
      name: 'Capa 1 — Capa Física (PHY)',
      scope: 'IEEE 802.3 PHY',
      active: true,
      color: 'var(--blue-accent)',
      details: {
        title: 'Capa 1 — Especificaciones del Medio Físico (PHY)',
        points: [
          { label: 'Especificación del Cableado:', desc: 'Rige las categorías de cobre de par trenzado UTP/STP (Cat 3, 5, 5e, 6, 6a) y distancias máximas de 100m.' },
          { label: 'Conectores e Interfaces:', desc: 'Define la interfaz 8P8C (RJ-45) y la distribución de hilos/pines (T568A / T568B).' },
          { label: 'Codificación y Voltajes:', desc: 'Determina cómo convertir bits (0 y 1) en pulsos de voltaje eléctrico mediante esquemas como Manchester, MLT-3, PAM-5 o PAM-16.' }
        ]
      }
    }
  ];

  const currentDetails = layers.find((l) => l.id === selectedLayer)?.details;

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">Arquitectura de Red · Modelo OSI</div>
        <h2 className="slide-title">¿Qué es IEEE 802.3 y dónde vive en el Modelo OSI?</h2>
        <p className="slide-subtitle">
          Ethernet no opera en toda la pila de red: se concentra de manera exclusiva en las dos capas inferiores.
        </p>
      </div>

      <div className="slide-body grid-2col-wide-right">
        {/* Interactive OSI Layer Selector */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono', marginBottom: '0.5rem' }}>
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
                  borderRadius: '8px',
                  background: isSelected
                    ? 'var(--cyan-glow)'
                    : isIEEE
                    ? 'var(--bg-inner-box)'
                    : 'transparent',
                  border: isSelected
                    ? '1.5px solid var(--cyan-primary)'
                    : isIEEE
                    ? '1px solid var(--border-subtle)'
                    : '1px dashed var(--border-subtle)',
                  cursor: isIEEE ? 'pointer' : 'default',
                  opacity: isIEEE ? 1 : 0.45,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {isIEEE ? <CheckCircle2 size={16} color={layer.color} /> : <div style={{ width: 16 }} />}
                  <span style={{ fontWeight: isSelected ? '800' : '600', fontSize: '0.9rem', color: isIEEE ? 'var(--text-heading)' : 'var(--text-dim)' }}>
                    {layer.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'JetBrains Mono',
                    fontWeight: '700',
                    color: isIEEE ? layer.color : 'var(--text-dim)',
                    background: 'var(--bg-card)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)'
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
            <span style={{ fontSize: '0.75rem', color: 'var(--cyan-primary)', fontFamily: 'JetBrains Mono', fontWeight: '700' }}>
              ESPECIFICACIÓN TÉCNICA
            </span>
          </div>

          {currentDetails ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.25rem' }}>
              {currentDetails.points.map((pt, idx) => (
                <div key={idx} className="inner-box">
                  <div style={{ fontWeight: '800', color: 'var(--cyan-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {pt.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: '1.45' }}>
                    {pt.desc}
                  </div>
                </div>
              ))}

              <div style={{ padding: '0.75rem', background: 'var(--cyan-glow)', borderRadius: '8px', border: '1px solid var(--cyan-primary)', fontSize: '0.82rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Network size={16} color="var(--cyan-primary)" />
                <span>La independencia entre Capa 1 y Capa 2 permite cambiar de medio (cobre a fibra) sin cambiar la estructura de la trama Ethernet.</span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-dim)' }}>
              Hacé clic en Capa 1 o Capa 2 en el menú lateral.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
