import React, { useState } from 'react';
import { Zap, Camera, Wifi, Phone, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';

export function Slide14_PoE() {
  const [selectedDevice, setSelectedDevice] = useState('camera');

  const devices = {
    phone: {
      name: 'Teléfono VoIP Empresarial',
      icon: Phone,
      powerReq: '7 W',
      standard: 'PoE Tipo 1 (IEEE 802.3af)',
      maxPower: '15.4 W en origen',
      voltage: '44 - 57 V DC',
      pairs: '2 pares utilizados',
      color: '#0284c7'
    },
    wifi: {
      name: 'Access Point Wi-Fi 6E / 7',
      icon: Wifi,
      powerReq: '25 W',
      standard: 'PoE+ Tipo 2 (IEEE 802.3at)',
      maxPower: '30.0 W en origen',
      voltage: '50 - 57 V DC',
      pairs: '2 pares utilizados',
      color: '#059669'
    },
    camera: {
      name: 'Cámara IP Domo PTZ con Calefactor',
      icon: Camera,
      powerReq: '51 W',
      standard: 'PoE++ Tipo 3 (IEEE 802.3bt)',
      maxPower: '60.0 W en origen',
      voltage: '50 - 57 V DC',
      pairs: '4 pares utilizados',
      color: '#d97706'
    },
    lighting: {
      name: 'Panel de Iluminación LED / Terminal POS',
      icon: Lightbulb,
      powerReq: '73 W',
      standard: 'PoE++ Tipo 4 (IEEE 802.3bt)',
      maxPower: '90.0 W en origen',
      voltage: '52 - 57 V DC',
      pairs: '4 pares utilizados (energía total)',
      color: '#e11d48'
    }
  };

  const dev = devices[selectedDevice];
  const DevIcon = dev.icon;

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">
          <Sparkles size={14} /> IEEE 802.3af / at / bt · Electrificación de Red
        </div>
        <h2 className="slide-title">Power over Ethernet (PoE): Datos y Energía en 1 Cable</h2>
        <p className="slide-subtitle">
          Cómo Ethernet aprovecha el cobre para alimentar dispositivos remotos de hasta 90W sin enchufes eléctricos dedicados.
        </p>
      </div>

      <div className="slide-body grid-2col">
        {/* Left: Interactive Device Selection & Power Delivery */}
        <div className="interactive-panel">
          <div className="interactive-panel-header">
            <span className="interactive-title">
              <Zap size={18} />
              Simulador de Dispositivo (PD)
            </span>
            <span style={{ fontSize: '0.78rem', color: dev.color, fontFamily: 'JetBrains Mono', fontWeight: '800', background: '#f1f8fc', padding: '2px 8px', borderRadius: '6px', border: '1.5px solid #111' }}>
              {dev.standard}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.45rem' }}>
            {Object.keys(devices).map((k) => {
              const d = devices[k];
              const Icon = d.icon;
              const isSel = selectedDevice === k;
              return (
                <button
                  key={k}
                  onClick={() => setSelectedDevice(k)}
                  style={{
                    padding: '0.65rem 0.25rem',
                    borderRadius: '10px',
                    background: isSel ? '#e0f2fe' : '#ffffff',
                    border: '2px solid #111111',
                    boxShadow: isSel ? '3px 3px 0px #111111' : '1.5px 1.5px 0px #111111',
                    color: isSel ? '#111111' : '#475569',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.74rem',
                    fontWeight: isSel ? '800' : '700',
                    fontFamily: 'Fredoka, Outfit',
                    transition: 'all 0.15s ease',
                    transform: isSel ? 'translate(-1px, -1px)' : 'none'
                  }}
                >
                  <Icon size={18} color={d.color} strokeWidth={2.4} />
                  <span>{k.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* SVG Power Flow Animation */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '0.4rem' }}>
            <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#f1f8fc', borderRadius: '10px', border: '2px solid #111111' }}>
              {/* PoE Switch (PSE) */}
              <rect x="20" y="20" width="80" height="80" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="60" y="55" fill="#0284c7" fontSize="10" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">SWITCH PoE</text>
              <text x="60" y="70" fill="#64748b" fontSize="8.5" fontWeight="600" textAnchor="middle">(PSE Fuente)</text>

              {/* UTP Cable carrying data (Cyan) + Power (Gold) */}
              <line x1="100" y1="45" x2="300" y2="45" stroke="#0284c7" strokeWidth="3" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
              </line>
              <text x="200" y="38" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="middle">DATOS ETHERNET (1G / 10G)</text>

              <line x1="100" y1="75" x2="300" y2="75" stroke="#d97706" strokeWidth="4">
                <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
              </line>
              <text x="200" y="94" fill="#d97706" fontSize="9.5" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">ENERGÍA DC: {dev.maxPower} (48V)</text>

              {/* End Device (PD) */}
              <rect x="300" y="20" width="80" height="80" rx="8" fill="#ffffff" stroke="#111111" strokeWidth="2.5" />
              <text x="340" y="55" fill={dev.color} fontSize="9.5" fontWeight="800" fontFamily="Fredoka, Outfit" textAnchor="middle">{selectedDevice.toUpperCase()}</text>
              <text x="340" y="70" fill="#059669" fontSize="9" fontWeight="bold" textAnchor="middle">({dev.powerReq})</text>
            </svg>
          </div>
        </div>

        {/* Right: Selected Standard Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', height: '100%' }}>
          <div className="glass-card" style={{ flex: 1, borderLeft: `6px solid ${dev.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                <DevIcon size={20} color={dev.color} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>{dev.name}</h3>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.4' }}>
                Alimentación continua sobre el mismo conector RJ-45 sin tomas de 220V/110V dedicadas ni fuentes externas.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Potencia PSE Máxima</div>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: dev.color, fontFamily: 'Fredoka, Outfit' }}>{dev.maxPower}</div>
              </div>
              <div className="inner-box" style={{ padding: '0.45rem 0.75rem' }}>
                <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: '700' }}>Pares Utilizados</div>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111111', fontFamily: 'Fredoka, Outfit' }}>{dev.pairs}</div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '0.75rem 0.95rem' }}>
            <div style={{ fontSize: '0.82rem', color: '#111111', display: 'flex', alignItems: 'center', gap: '8px', lineHeight: '1.38' }}>
              <CheckCircle2 size={18} color="#059669" strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span><strong>Aislamiento en Modo Común:</strong> Se inyecta la corriente continua a través del punto medio de transformadores, sin distorsionar la señal diferencial de datos.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
