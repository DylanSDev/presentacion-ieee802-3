# Guión de Presentación — IEEE 802.3: La Evolución de Ethernet sobre Cobre

> **Duración total estimada:** ~15 minutos  
> **Presentadores:** Dylan · Atilio · Fernando · Celina · Nacho  
> **Formato:** Presentación oral con apoyo visual (página web interactiva)

---

## Mapa de la Presentación

| Acto | Sección Web | Presentador | Duración | Tema Central |
| :--- | :--- | :--- | :--- | :--- |
| **Acto 1** | Hero / Intro | **Dylan** | ~3 min | Qué es IEEE 802.3, modelo OSI y el cambio de paradigma |
| **Acto 2** | Fundamentos | **Atilio** | ~3 min | La ciencia del par trenzado: EMI, categorías y dúplex |
| **Acto 3** | Evolución (parte 1) | **Fernando** | ~3 min | De 10 Mbps a 1 Gbps: la carrera de velocidad |
| **Acto 4** | Evolución (parte 2) + Comparativa | **Celina** | ~3 min | 10 Gbps, fibra óptica y tabla comparativa |
| **Acto 5** | Conclusión / Cierre | **Nacho** | ~3 min | Por qué el cobre sigue siendo rey y cierre |

---

## Acto 1 — "El origen de todo lo que nos conecta"

### 🎤 Presenta: Dylan (~3 minutos)

> **Sección web:** Hero animado + Introducción  
> **Visual sugerido:** Animación de apertura con el título del estándar, transición desde un cable coaxial hacia un cable de par trenzado moderno.

---

**[APERTURA — Hook narrativo]**

Cada vez que enviás un mensaje, hacés una videollamada o cargás una página web, hay un estándar invisible que hace posible que esos datos viajen desde tu computadora hasta el mundo. Ese estándar se llama **IEEE 802.3** — y lo conocemos comercialmente como **Ethernet**.

Ethernet no es una tecnología nueva: tiene más de 40 años. Pero lo que lo hace extraordinario es su capacidad para reinventarse una y otra vez sin romper la compatibilidad con todo lo que ya existía. Y eso es lo que venimos a contarles hoy.

---

**[BLOQUE 1 — Qué es IEEE 802.3 y dónde vive en el modelo OSI]**

El estándar IEEE 802.3 es un conjunto de especificaciones técnicas desarrolladas por el Instituto de Ingenieros Eléctricos y Electrónicos. Define cómo funcionan las redes de área local cableadas, lo que conocemos como redes LAN.

Dentro del modelo OSI, Ethernet opera en las dos capas más bajas:

- En la **Capa 1 — la Capa Física** — define qué cables se usan, cómo se conectan, y cómo se codifican las señales eléctricas o de luz.
- En la **Capa 2 — la Capa de Enlace de Datos** — específicamente en la subcapa MAC, define cómo se estructuran los datos en "tramas", cómo se asignan las direcciones MAC y cómo los dispositivos coordinan el acceso al medio para evitar colisiones.

---

**[BLOQUE 2 — El cambio de paradigma: del coaxial al par trenzado]**

En los años 80, Ethernet usaba cables coaxiales con una topología de bus: todos los dispositivos compartían un solo cable continuo. Si ese cable se cortaba en cualquier punto, toda la red se caía. Además, al compartir el mismo medio, las colisiones eran constantes.

A principios de los 90, llegó el gran cambio: se adoptó el **cable de par trenzado** y con él, una nueva **topología de estrella**. Ahora cada dispositivo se conecta punto a punto hacia un nodo central — primero fueron hubs, y después switches. Los switches permitieron dedicar ancho de banda exclusivo a cada puerto y, eventualmente, eliminar por completo las colisiones.

---

**[TRANSICIÓN]**

Este cambio de paradigma fue el punto de partida de una evolución técnica impresionante. Nuestro objetivo hoy es recorrer esa historia: desde los primeros 10 Mbps hasta los 10 Gbps, mostrando cómo la ingeniería logró exprimir cada vez más velocidad de un simple cable de cobre. Y para entender esa historia, primero necesitamos entender la ciencia detrás del cable. Atilio, te dejo con los fundamentos.

---

## Acto 2 — "La ciencia invisible dentro del cable"

### 🎤 Presenta: Atilio (~3 minutos)

> **Sección web:** Fundamentos Técnicos  
> **Visual sugerido:** Diagrama animado del trenzado de hilos, esquema de cancelación de fase, infografía de categorías de cables (Cat 3 → Cat 6a), animación Half-Duplex vs Full-Duplex.

---

**[BLOQUE 1 — Cómo el trenzado combate la interferencia]**

Gracias, Dylan. Ahora, antes de hablar de velocidades y estándares, tenemos que entender por qué funciona un cable de par trenzado — y la respuesta está en la física.

Cuando una corriente eléctrica viaja por un cable de cobre, genera un campo electromagnético a su alrededor. Si dos cables corren paralelos, el campo de uno induce corrientes no deseadas en el otro. A eso se le llama **diafonía o crosstalk**. Además, los cables de cobre captan interferencia electromagnética externa — lo que conocemos como **EMI** — proveniente de motores, luces fluorescentes o líneas de alta tensión.

La solución es elegante y simple: **trenzar los hilos**. Al trenzar los pares que transportan señales opuestas, los campos electromagnéticos se anulan mutuamente. Esta cancelación de fase reduce tanto el ruido emitido como el ruido absorbido. Y para mejorar aún más la protección, los cables modernos varían la cantidad de trenzas por metro en cada par dentro de la misma cubierta. ¿Por qué? Porque si todos los pares tuvieran exactamente el mismo ritmo de trenzado, sus campos se alinearían periódicamente y se interferirían entre sí — generando crosstalk interno entre pares vecinos. Al darle a cada par una tasa de trenzado diferente, esa alineación nunca se repite de forma sostenida, y la interferencia entre pares se minimiza.

---

**[BLOQUE 2 — Categorías de cables: de Cat 3 a Cat 6a]**

A medida que las velocidades aumentaron, el cable también tuvo que evolucionar. La TIA — Asociación de la Industria de las Telecomunicaciones — clasifica los cables por categorías según la frecuencia que pueden soportar:

- **Categoría 3**: hasta 16 MHz — suficiente para 10 Mbps.
- **Categoría 5**: hasta 100 MHz — habilitó los 100 Mbps de Fast Ethernet.
- **Categoría 5e** ("Enhanced"): mismos 100 MHz, pero con tolerancias más estrictas contra el crosstalk — necesario para Gigabit Ethernet.
- **Categoría 6**: soporta 250 MHz e incluye una cruceta plástica para separar los pares — permite 10 Gbps, pero solo hasta 55 metros.
- **Categoría 6a** ("Augmented"): opera a 500 MHz con blindaje mejorado contra el Alien Crosstalk — el requerido para 10 Gbps a la distancia completa de 100 metros.

---

**[BLOQUE 3 — De Half-Duplex a Full-Duplex]**

Hay otro concepto fundamental que necesitamos entender: la comunicación dúplex.

En las primeras redes con hubs, los dispositivos solo podían transmitir o recibir, nunca ambas cosas al mismo tiempo. Esto era **Half-Duplex** y requería un protocolo llamado **CSMA/CD** — los equipos tenían que "escuchar" el cable antes de hablar, y si dos transmitían a la vez, ocurría una colisión que destruía los datos.

Con la adopción del par trenzado y los switches, se pudo aislar eléctricamente la transmisión de la recepción: un par dedicado para enviar y otro para recibir. Esto habilitó el modo **Full-Duplex** — tráfico en ambos sentidos al mismo tiempo. Las colisiones desaparecieron y el rendimiento efectivo se duplicó.

---

**[TRANSICIÓN]**

Con estos fundamentos claros — el trenzado, las categorías de cable y el Full-Duplex — ya podemos entender cómo Ethernet fue rompiendo barrera tras barrera de velocidad. Fernando nos va a contar esa historia.

---

## Acto 3 — "La carrera de la velocidad: de 10 Mbps a 1 Gbps"

### 🎤 Presenta: Fernando (~3 minutos)

> **Sección web:** Evolución de los Estándares — Timeline interactivo (parte 1)  
> **Visual sugerido:** Línea de tiempo animada con hitos (1990, 1995, 1999), diagramas de codificación Manchester vs MLT-3 vs PAM-5, esquema de uso de 2 pares vs 4 pares.

---

**[BLOQUE 1 — 10BASE-T: el nacimiento del Ethernet moderno (1990)]**

Gracias, Atilio. Vamos a arrancar en 1990 con **10BASE-T**, el estándar IEEE 802.3i.

Este fue el estándar que mató al cable coaxial y al Token Ring de IBM. Al usar cable UTP Categoría 3, abarató enormemente los costos de instalación. Operaba a **10 Mbps** con una distancia máxima de 100 metros.

A nivel técnico, usaba solo **dos de los cuatro pares** del cable: uno para transmitir y otro para recibir. Y su codificación era **Manchester** — robusta, pero ineficiente: necesitaba una frecuencia de señal igual a la tasa de bits. O sea, 10 MHz para 10 Mbps. Desperdiciaba mucho ancho de banda del cable.

---

**[BLOQUE 2 — 100BASE-TX: Fast Ethernet (1995)]**

Cinco años después, en 1995, llega **100BASE-TX** — el IEEE 802.3u — multiplicando la velocidad por diez: **100 Mbps**.

Para lograrlo, necesitó cable Categoría 5 (100 MHz) y trajo una innovación fundamental: la **Autonegociación**. Por primera vez, la tarjeta de red y el switch podían negociar automáticamente la velocidad y el modo dúplex, garantizando retrocompatibilidad con equipos de 10 Mbps.

Pero el salto más importante fue la codificación. Usar Manchester a 100 Mbps habría requerido 100 MHz de frecuencia, llevando al cable al límite. Para evitarlo, 100BASE-TX aplica un proceso de dos pasos:

1. Primero, una codificación lógica **4B/5B** que convierte bloques de 4 bits en 5 bits, añadiendo redundancia.
2. Después, una modulación física **MLT-3** que usa tres niveles de voltaje (+1, 0, -1), reduciendo las transiciones electromagnéticas y logrando enviar 100 Mbps con una frecuencia fundamental de apenas **31.25 MHz**.

---

**[BLOQUE 3 — 1000BASE-T: Gigabit Ethernet (1999)]**

Y ahora llegamos al hito que parecía imposible: **1 Gbps sobre cobre**. Estándar 802.3ab, lanzado en 1999.

Aunque se diseñó para Cat 5, la sensibilidad al ruido obligó a masificar el cable **Cat 5e** con tolerancias más estrictas. Pero el verdadero salto fue la arquitectura.

Para no superar los 100 MHz de frecuencia del cable, la ingeniería implementó tres cambios radicales:

1. **Dejó de usar pares dedicados**. Ahora los cuatro pares transmiten y reciben al mismo tiempo de forma bidireccional.
2. Se incorporaron chips **DSP** (Procesamiento Digital de Señal) que aplican **cancelación de eco** y supresión de diafonía en tiempo real.
3. Se reemplazó MLT-3 por **PAM-5**: cinco niveles de voltaje distintos (-2, -1, 0, +1, +2), donde cuatro niveles transportan datos y el quinto se usa para corrección de errores.

Un salto de ingeniería brutal: multiplicar la velocidad por 10 sin cambiar la frecuencia del cable.

---

**[TRANSICIÓN]**

Pero la industria no se conformó con 1 Gbps. Quiso llegar a los 10 Gbps sobre cobre... y ahí es donde la física empezó a rebelarse. Celina nos va a contar qué pasó cuando intentaron empujar el cobre hasta su límite absoluto.

---

## Acto 4 — "El límite del cobre y la era de la luz"

### 🎤 Presenta: Celina (~3 minutos)

> **Sección web:** Evolución parte 2 + Tabla Comparativa  
> **Visual sugerido:** Continuación del timeline (2006+), diagrama de Alien Crosstalk, tabla comparativa animada con highlights, breve mención de fibra óptica con visual de contraste cobre vs luz.

---

**[BLOQUE 1 — 10GBASE-T: empujando el cobre al extremo (2006)]**

Gracias, Fernando. En 2006 se ratificó **10GBASE-T** — el IEEE 802.3an — y con él, el par trenzado llegó a una velocidad impensada: **10 Gbps**.

Pero a 500 MHz de frecuencia, apareció un nuevo enemigo: el **Alien Crosstalk**. Ya no era solo la interferencia entre los pares dentro de un mismo cable, sino la radiación electromagnética que se filtra entre cables distintos que corren paralelos en una misma canaleta. Es literalmente "ruido extraterrestre" que viene del cable vecino.

Esto forzó la creación de la **Categoría 6a**: un cable con blindaje individual por par o blindaje global, mucho más grueso, pesado y difícil de instalar. Con Cat 6 solo se llega a 55 metros; para cubrir los 100 metros completos, Cat 6a es obligatorio.

La modulación utilizada es **PAM-16**: 16 niveles distintos de voltaje. Distinguir entre señales tan minúsculas en un cable lleno de ruido requiere procesadores DSP extremadamente potentes y un algoritmo de corrección de errores llamado **LDPC**.

Pero todo esto tiene un costo doble:

- **Consumo energético alto**: los primeros equipos generaban un calor problemático en los switches.
- **Latencia adicional**: la corrección de errores añade entre 2 y 3 microsegundos por salto, algo inaceptable para centros de datos de alto rendimiento.

Por eso, muchos centros de datos decidieron migrar a fibra óptica o cables Twinax antes que usar cobre a 10G.

---

**[BLOQUE 2 — Más allá del cobre: fibra óptica]**

10GBASE-T evidenció el "techo de cristal" del cobre: alto consumo, alta latencia y los infranqueables 100 metros de distancia. Para interconectar edificios, enlazar switches core o sostener la infraestructura de los proveedores de internet, el cobre simplemente no alcanza.

Para las ultra-altas velocidades — 40G, 100G, 400G y hasta 800G con el estándar 802.3df — IEEE 802.3 se volcó a la **fibra óptica**. Pulsos láser a través de hilos de vidrio: inmunidad total a interferencias, fracción del consumo energético y enlaces de hasta 40 kilómetros de distancia.

---

**[BLOQUE 3 — La tabla que resume 30 años de evolución]**

Para poner todo esto en perspectiva, veamos la comparativa:

| Estándar | Velocidad | Cable | Frecuencia | Pares | Modulación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **802.3i** (1990) | 10 Mbps | Cat 3 | 16 MHz | 2 pares dedicados | Manchester |
| **802.3u** (1995) | 100 Mbps | Cat 5 | 100 MHz | 2 pares dedicados | 4B/5B + MLT-3 |
| **802.3ab** (1999) | 1 Gbps | Cat 5e | 100 MHz | 4 pares bidireccionales | PAM-5 |
| **802.3an** (2006) | 10 Gbps | Cat 6a | 500 MHz | 4 pares bidireccionales | PAM-16 + LDPC |

Tres décadas. De 10 Mbps a 10 Gbps. De 16 MHz a 500 MHz. De codificación Manchester a PAM-16. Todo sobre el mismo conector RJ-45 y el mismo concepto de "par trenzado".

---

**[TRANSICIÓN]**

Entonces, si la fibra es superior en velocidad, distancia y eficiencia... ¿por qué seguimos usando cables de cobre? Nacho nos trae la respuesta — y el cierre.

---

## Acto 5 — "El rey del último metro"

### 🎤 Presenta: Nacho (~3 minutos)

> **Sección web:** Conclusión + Call to Action / Cierre  
> **Visual sugerido:** Infografía de las 3 razones por las que el cobre sigue vigente (economía, robustez, PoE), animación de cierre con datos clave y créditos.

---

**[BLOQUE 1 — Lo que logramos con el cobre]**

Gracias, Celina. Vamos a cerrar esta presentación poniendo en contexto lo que acabamos de recorrer.

En poco más de tres décadas, la ingeniería logró multiplicar la velocidad de Ethernet sobre cobre **mil veces** — de 10 Mbps a 10 Gbps — utilizando el mismo tipo de cable y el mismo conector. Lo hicieron a punta de matemáticas: procesamiento digital de señal cada vez más complejo, modulaciones densas como PAM-5 y PAM-16, y tolerancias de fabricación extremas.

Y lo más notable es que cada nuevo estándar mantuvo **retrocompatibilidad** con los anteriores. La estructura lógica de la trama Ethernet nunca cambió — solo se reinventó por completo la capa física. Esa flexibilidad fue la clave que le permitió a Ethernet aplastar a competidores como Token Ring y ATM.

---

**[BLOQUE 2 — ¿Por qué el cobre sigue siendo el rey?]**

Ahora, es cierto que la fibra óptica domina los enlaces troncales y los centros de datos. Pero el cable de par trenzado sigue siendo el "rey del último metro" — y va a seguir siéndolo — por tres razones concretas:

**Primera: Economía y universalidad.** Los cables de cobre, los conectores RJ-45 y las herramientas de terminación son drásticamente más baratos que la fibra. Cualquier técnico puede crimpar un cable de red en minutos. Eso abarata el despliegue y el mantenimiento a escala global.

**Segunda: Robustez estructural.** A diferencia del frágil hilo de vidrio de la fibra, el cable UTP es flexible, soporta curvas pronunciadas y aguanta el trato rudo típico de las canaletas de oficinas y hogares.

**Tercera — y esta es la más importante: Power over Ethernet.** El estándar IEEE 802.3af/at/bt permite enviar **datos y energía eléctrica por el mismo cable** — hasta 90 vatios en los estándares modernos. Eso es lo que alimenta los teléfonos VoIP, las cámaras de seguridad IP y los puntos de acceso Wi-Fi que usamos todos los días, sin necesidad de instalar un enchufe eléctrico adicional. Esto es **físicamente imposible** con fibra óptica.

---

**[CIERRE — Mensaje final]**

Mientras la luz láser seguirá rompiendo récords de velocidad en el núcleo de internet, la versatilidad, el bajo costo y la capacidad de electrificación del estándar IEEE 802.3 sobre par trenzado garantizan que el cable de cobre va a seguir siendo el puente definitivo entre los dispositivos del usuario y la red mundial durante muchos años más.

Así que la próxima vez que conecten un cable de red... recuerden que detrás de esos 8 hilos trenzados hay más de 30 años de ingeniería brillante.

Muchas gracias.

---

## Resumen de Distribución

| Presentador | Rol Narrativo | Temas del Informe Cubiertos |
| :--- | :--- | :--- |
| **Dylan** | Narrador de apertura — Contexto y origen | §1.1, §1.2, §1.3 |
| **Atilio** | El científico — Fundamentos técnicos | §2.1, §2.2, §2.3 (mención §2.4) |
| **Fernando** | El cronista — Evolución 10M → 1G | §3.1, §3.2, §3.3 |
| **Celina** | La analista — 10G, fibra y comparativa | §3.4, §3.5, §4.1 |
| **Nacho** | El estratega — Conclusión y futuro | §4.2 (resumen), §5.1, §5.2 |

---

## Mapeo a Secciones de la Página Web

| Sección Web | Contenido | Efecto Visual Sugerido |
| :--- | :--- | :--- |
| **Hero / Landing** | Título + hook "todo lo que nos conecta" | Animación full-screen, transición coaxial → par trenzado |
| **¿Qué es IEEE 802.3?** | Definición + modelo OSI + cambio de paradigma | Diagrama OSI interactivo, antes/después topología |
| **La Ciencia del Cable** | Trenzado, EMI, categorías, dúplex | Animaciones de cancelación de fase, cards de categorías |
| **La Evolución** | Timeline 1990 → 2006 con los 4 estándares | Timeline scroll-driven con hitos y datos clave |
| **Comparativa** | Tabla resumen técnica | Tabla animada con highlights al hacer scroll |
| **¿Por qué el cobre sigue ganando?** | 3 razones: economía, robustez, PoE | Tres columnas con íconos y micro-animaciones |
| **Cierre** | Mensaje final + créditos del equipo | Fade-out con frase memorable |
