export const ACTS = [
  {
    id: 1,
    title: "Acto 1: Introducción y Contexto",
    subtitle: "El origen de todo lo que nos conecta",
    color: "#0284c7",
  },
  {
    id: 2,
    title: "Acto 2: Fundamentos Técnicos",
    subtitle: "La ciencia física dentro del cable",
    color: "#2563eb",
  },
  {
    id: 3,
    title: "Acto 3: Evolución (10M a 1G)",
    subtitle: "La carrera de la velocidad",
    color: "#059669",
  },
  {
    id: 4,
    title: "Acto 4: El Límite del Cobre y la Luz",
    subtitle: "10 Gbps, Alien Crosstalk y Fibra Óptica",
    color: "#d97706",
  },
  {
    id: 5,
    title: "Acto 5: Conclusión y Futuro",
    subtitle: "El rey del último metro",
    color: "#7c3aed",
  },
];

export const SLIDES = [
  {
    id: 1,
    actId: 1,
    title: "IEEE 802.3: Informe y Comparaciones",
    subtitle:
      "Evolución de Ethernet sobre Cobre (De 10 Mbps a 10 Gbps) — UTN FRT 2026",
    tag: "Portada / Inicio",
  },
  {
    id: 2,
    actId: 1,
    title: "El Estándar IEEE 802.3 y el Modelo OSI",
    subtitle:
      "Definición técnica y alcance en las Capas 1 (Física) y 2 (Enlace / MAC)",
    tag: "Modelo OSI",
  },
  {
    id: 3,
    actId: 1,
    title: "El Cambio de Paradigma: Del Coaxial al Par Trenzado",
    subtitle:
      "De la vulnerabilidad del Bus con colisiones a la solidez de la Estrella con Switch",
    tag: "Topología",
  },
  {
    id: 4,
    actId: 2,
    title: "La Ciencia del Par Trenzado: Cancelación de Interferencia",
    subtitle:
      "Señalización diferencial, cancelación de ruido en fase y variación de pasos de trenzado",
    tag: "Física Electromagnética",
  },
  {
    id: 5,
    actId: 2,
    title: "Categorías de Cables: De Cat 3 a Cat 6a",
    subtitle:
      "Aumento del ancho de banda analógico (MHz) y blindaje estructural (UTP vs STP/FTP)",
    tag: "Cableado TIA",
  },
  {
    id: 6,
    actId: 2,
    title: "La Transición Dúplex: CSMA/CD vs Full-Duplex",
    subtitle:
      "De compartir el canal con colisiones a canales dedicados de transmisión y recepción",
    tag: "Modo Dúplex",
  },
  {
    id: 7,
    actId: 3,
    title: "10BASE-T (1990): El Origen del Ethernet Moderno",
    subtitle: "10 Mbps sobre Cat 3 UTP y codificación Manchester (20 MHz)",
    tag: "IEEE 802.3i",
  },
  {
    id: 8,
    actId: 3,
    title: "100BASE-TX (1995): Fast Ethernet y Autonegociación",
    subtitle:
      "100 Mbps sobre Cat 5, codificación 4B/5B y modulación multinivel MLT-3",
    tag: "IEEE 802.3u",
  },
  {
    id: 9,
    actId: 3,
    title: "1000BASE-T (1999): Gigabit Ethernet sobre 4 Pares",
    subtitle:
      "1 Gbps sobre Cat 5e, modulación PAM-5 y DSPs con cancelación de eco bidireccional",
    tag: "IEEE 802.3ab",
  },
  {
    id: 10,
    actId: 4,
    title: "10GBASE-T (2006): Empujando el Cobre al Límite",
    subtitle:
      "10 Gbps sobre Cat 6a (500 MHz), modulación PAM-16 y mitigación de Alien Crosstalk",
    tag: "IEEE 802.3an",
  },
  {
    id: 11,
    actId: 4,
    title: "El Techo de Cristal del Cobre frente a la Fibra Óptica",
    subtitle:
      "Consumo térmico, latencia y distancia: Dónde el par trenzado cede ante la luz",
    tag: "Cobre vs Fibra",
  },
  {
    id: 12,
    actId: 4,
    title: "Tabla Comparativa: 30 Años de Evolución Técnica",
    subtitle:
      "Matriz estructurada de velocidades, frecuencias, pares, codificaciones y límites",
    tag: "Matriz Técnica",
  },
  {
    id: 13,
    actId: 5,
    title: "Las 3 Razones por las que el Cobre Sigue Reinando",
    subtitle:
      "Economía universal, robustez mecánica y electrificación mediante PoE",
    tag: "Vigencia del Cobre",
  },
  {
    id: 14,
    actId: 5,
    title: "Power over Ethernet (PoE): Datos y Energía en 1 Cable",
    subtitle:
      "Alimentando dispositivos de hasta 90W (IEEE 802.3af / 802.3at / 802.3bt)",
    tag: "PoE",
  },
  {
    id: 15,
    actId: 5,
    title: "Conclusión: El Puente Inquebrantable del Último Metro",
    subtitle:
      "Tres décadas de ingeniería superando barreras físicas en redes locales",
    tag: "Cierre",
  },
];
