import React, { useState } from 'react';
import { Zap, Camera, Wifi, Phone, Lightbulb, CheckCircle2 } from 'lucide-react';

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
      color: 'var(--cyan-primary)'
    },
    wifi: {
      name: 'Access Point Wi-Fi 6E / 7',
      icon: Wifi,
      powerReq: '25 W',
      standard: 'PoE+ Tipo 2 (IEEE 802.3at)',
      maxPower: '30.0 W en origen',
      voltage: '50 - 57 V DC',
      pairs: '2 pares utilizados',
      color: 'var(--emerald-accent)'
    },
    camera: {
      name: 'Cámara IP Domo PTZ con Calefactor',
      icon: Camera,
      powerReq: '51 W',
      standard: 'PoE++ Tipo 3 (IEEE 802.3bt)',
      maxPower: '60.0 W en origen',
      voltage: '50 - 57 V DC',
      pairs: '4 pares utilizados',
      color: 'var(--amber-accent)'
    },
    lighting: {
      name: 'Panel de Iluminación LED / Terminal POS',
      icon: Lightbulb,
      powerReq: '73 W',
      standard: 'PoE++ Tipo 4 (IEEE 802.3bt)',
      maxPower: '90.0 W en origen',
      voltage: '52 - 57 V DC',
      pairs: '4 pares utilizados (energía total)',
      color: 'var(--rose-accent)'
    }
  };

  const dev = devices[selectedDevice];
  const DevIcon = dev.icon;

  return (
    <div className="slide-content-wrapper">
      <div className="slide-header">
        <div className="slide-tag">IEEE 802.3af / at / bt · Electrificación de Red</div>
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
            <span style={{ fontSize: '0.75rem', color: dev.color, fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}>
              {dev.standard}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
            {Object.keys(devices).map((k) => {
              const d = devices[k];
              const Icon = d.icon;
              const isSel = selectedDevice === k;
              return (
                <button
                  key={k}
                  onClick={() => setSelectedDevice(k)}
                  style={{
                    padding: '0.6rem 0.2rem',
                    borderRadius: '8px',
                    background: isSel ? 'var(--cyan-glow)' : 'var(--bg-inner-box)',
                    border: isSel ? `1.5px solid ${d.color}` : '1px solid var(--border-subtle)',
                    color: isSel ? 'var(--text-heading)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontWeight: isSel ? '800' : '600'
                  }}
                >
                  <Icon size={16} color={d.color} />
                  <span>{k.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* SVG Power Flow Animation */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: 'var(--svg-bg-canvas)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              {/* PoE Switch (PSE) */}
              <rect x="20" y="25" width="80" height="80" rx="6" fill="var(--svg-card-fill)" stroke="var(--cyan-primary)" strokeWidth="2" />
              <text x="60" y="60" fill="var(--cyan-primary)" fontSize="10" fontWeight="bold" textAnchor="middle">SWITCH PoE</text>
              <text x="60" y="75" fill="var(--svg-text-sub)" fontSize="8" textAnchor="middle">(PSE Fuente)</text>

              {/* UTP Cable carrying data (Cyan) + Power (Gold) */}
              <line x1="100" y1="50" x2="300" y2="50" stroke="var(--cyan-primary)" strokeWidth="3" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
              </line>
              <text x="200" y="42" fill="var(--cyan-primary)" fontSize="9" fontWeight="bold" textAnchor="middle">DATOS ETHERNET (1 Gbps / 10 Gbps)</text>

              <line x1="100" y1="80" x2="300" y2="80" stroke="var(--amber-accent)" strokeWidth="4">
                <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
              </line>
              <text x="200" y="98" fill="var(--amber-accent)" fontSize="9" fontWeight="bold" textAnchor="middle">ENERGÍA DC: {dev.maxPower} (48V)</text>

              {/* End Device (PD) */}
              <rect x="300" y="25" width="80" height="80" rx="6" fill="var(--svg-card-fill)" stroke={dev.color} strokeWidth="2" />
              <text x="340" y="60" fill={dev.color} fontSize="9" fontWeight="bold" textAnchor="middle">{selectedDevice.toUpperCase()}</text>
              <text x="340" y="75" fill="var(--emerald-accent)" fontSize="8" fontWeight="bold" textAnchor="middle">({dev.powerReq})</text>
            </svg>
          </div>
        </div>

        {/* Right: Selected Standard Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="glass-card" style={{ borderLeft: `4px solid ${dev.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <DevIcon size={20} color={dev.color} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-heading)' }}>{dev.name}</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
              Requiere alimentación continua entregada por la misma toma RJ-45 sin adaptadores de corriente ni tomas de pared a 220V/110V.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <div className="inner-box">
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Potencia PSE Máxima</div>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', color: dev.color, fontFamily: 'JetBrains Mono' }}>{dev.maxPower}</div>
            </div>
            <div className="inner-box">
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Pares Utilizados</div>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-heading)', fontFamily: 'JetBrains Mono' }}>{dev.pairs}</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '0.8rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--emerald-accent)" />
              <span>PoE funciona aplicando voltaje en modo común a través de transformadores de aislamiento, sin interferir con la señal diferencial de datos.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
