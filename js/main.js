/**
 * ============================================================
 * DATOS EDITABLES DEL PORTFOLIO
 * Reemplazá este objeto con la información real del artista.
 * Las rutas de imagen son relativas a index.html (GitHub Pages).
 * ============================================================
 */
const portfolioData = {
  artista: {
    nombre: "María Delia Capdevila",
    disciplina: "Artista visual — mosaico y vidrio",
    ubicacion: "Argentina",
    foto: "assets/perfil.jpeg",
    fotoAlt:
      "Retrato de María Delia Capdevila sonriendo, con suéter verde y fondo de pared texturada en tonos claros.",
    /* Texto de EJEMPLO — no es biografía verificada */
    bio: "Contenido de ejemplo. Artista visual que trabaja el mosaico, el vidrio fusionado y la técnica mixta, con un interés particular por la luz, la textura y los materiales naturales. Este párrafo es un marcador de posición: reemplazalo por una presentación breve en primera o tercera persona.",
  },

  obraDestacada: {
    titulo: "Bosque de piedras",
    anio: 2024,
    tecnica: "Mosaico en relieve — vidrio, cerámica y piedra natural",
    dimensiones: "120 × 90 cm (aprox., ejemplo)",
    imagen: "assets/obra-destacada.jpeg",
    imagenAlt:
      "Mosaico en relieve de un paisaje: sol de fragmentos blancos, árboles estilizados, rocas y lecho de piedras claras.",
    /* Texto extenso de EJEMPLO en primera persona */
    texto: `Esta es una descripción de ejemplo en primera persona. Eligí esta pieza como obra destacada porque resume, para mí, el diálogo entre lo mineral y lo vivo: el sol hecho de vidrio que no ilumina el cielo, sino que lo construye; el tronco que se inclina como si el tiempo hubiera dejado una marca; el suelo de piedras que invita a mirar de cerca.

En el taller, cada fragmento pide una decisión. El vidrio aporta transparencia y reflejo; la piedra, peso y memoria. Cuando trabajo esta obra, siento que no estoy ilustrando un paisaje: estoy armando un lugar donde la luz se detiene. Por eso me identifico con ella: no es solo lo que representa, sino cómo me obliga a mirar —despacio, con las manos y con el cuerpo— aquello que suele pasar desapercibido.

Reemplazá este texto por el relato real del artista sobre la obra con la que más se identifica.`,
  },

  /* Obras de ejemplo para la línea de tiempo. Agregá o quitá entradas libremente. */
  obras: [
    {
      id: "obra-2025-01",
      titulo: "Escalera habitada",
      anio: 2025,
      tecnica: "Mosaico en situ — cerámica y piedra",
      imagen: "assets/obra-escalera-mosaico.jpeg",
      imagenAlt:
        "Escalera exterior con contrapeldanos de mosaico colorido, barandas de madera natural y vegetación.",
      descripcion:
        "Ejemplo — Intervención en escalera: cada peldaño narra un motivo natural en trencadís.",
    },
    {
      id: "obra-2025-02",
      titulo: "Rosa de fuego",
      anio: 2025,
      tecnica: "Vidrio fusionado sobre base oscura",
      imagen: "assets/obra-rosa-vidrio.jpeg",
      imagenAlt:
        "Composición cuadrada de vidrio con rosa roja central rodeada de formas verdes, amarillas y azules.",
      descripcion:
        "Ejemplo — Flor estilizada en vidrio; contraste entre color saturado y fondo mate.",
    },
    {
      id: "obra-2024-01",
      titulo: "Vuelo de ámbar",
      anio: 2024,
      tecnica: "Escultura de vidrio fusionado sobre madera",
      imagen: "assets/obra-ave-vuelo.jpeg",
      imagenAlt:
        "Escultura de ave en vuelo hecha de vidrio traslúcido con puntas rojas, montada sobre base de madera natural.",
      descripcion:
        "Ejemplo — Ave en suspensión: transparencia, textura y movimiento capturados en vidrio.",
    },
    {
      id: "obra-2024-02",
      titulo: "Ala de luz",
      anio: 2024,
      tecnica: "Vidrio fusionado con inclusiones",
      imagen: "assets/obra-01.jpeg",
      imagenAlt:
        "Detalle macro de vidrio fusionado con celdas orgánicas e inclusiones ámbar, rojas y amarillas.",
      descripcion:
        "Ejemplo — Fragmento alado: burbujas y pigmentos atrapados en la masa vítrea.",
    },
    {
      id: "obra-2024-03",
      titulo: "Mirada mineral",
      anio: 2024,
      tecnica: "Técnica mixta — mosaico y pintura",
      imagen: "assets/obra-ojo.jpeg",
      imagenAlt:
        "Obra monocromática de un ojo con pupila floral brillante, iris de esquirlas y pinceladas gestuales.",
      descripcion:
        "Ejemplo — Ojo en escala ampliada; tensión entre mosaico táctil y gesto pictórico.",
    },
    {
      id: "obra-2023-01",
      titulo: "Florón cardinal",
      anio: 2023,
      tecnica: "Mosaico de piedra y cerámica",
      imagen: "assets/obra-08.jpeg",
      imagenAlt:
        "Mosaico circular con flor de lis roja en el centro, hojas verdes en el anillo y piedra irregular clara alrededor.",
      descripcion:
        "Ejemplo — Motivo heráldico reinterpretado en un pavimento de lectura contemporánea.",
    },
    {
      id: "obra-2023-02",
      titulo: "Vórtice",
      anio: 2023,
      tecnica: "Mosaico cerámico",
      imagen: "assets/obra-12.jpeg",
      imagenAlt:
        "Mosaico abstracto con rayos rojos y verdes que parten de un centro oscuro sobre campo de teselas claras.",
      descripcion:
        "Ejemplo — Composición radial: energía concentrada en el centro y expansión hacia el borde.",
    },
    {
      id: "obra-2023-03",
      titulo: "Serie de estudio I",
      anio: 2023,
      tecnica: "Vidrio y mosaico",
      imagen: "assets/obra-02.jpeg",
      imagenAlt: "Pieza de estudio en vidrio o mosaico — imagen de ejemplo del archivo del artista.",
      descripcion: "Ejemplo — Pieza de taller que explora color y corte de material.",
    },
    {
      id: "obra-2022-01",
      titulo: "Serie de estudio II",
      anio: 2022,
      tecnica: "Mosaico",
      imagen: "assets/obra-05.jpeg",
      imagenAlt: "Obra de mosaico del archivo — imagen de ejemplo.",
      descripcion: "Ejemplo — Exploración temprana de patrones y texturas minerales.",
    },
    {
      id: "obra-2022-02",
      titulo: "Serie de estudio III",
      anio: 2022,
      tecnica: "Vidrio fusionado",
      imagen: "assets/obra-06.jpeg",
      imagenAlt: "Obra de vidrio del archivo — imagen de ejemplo.",
      descripcion: "Ejemplo — Ensayo de traslucidez y borde orgánico en el horno.",
    },
    {
      id: "obra-2021-01",
      titulo: "Primeras piezas",
      anio: 2021,
      tecnica: "Técnica mixta",
      imagen: "assets/obra-10.jpeg",
      imagenAlt: "Obra temprana del archivo — imagen de ejemplo.",
      descripcion: "Ejemplo — Registro de búsqueda formal en los primeros años de taller.",
    },
  ],
};

/* ============ Renderizado ============ */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPerfil(artista) {
  document.title = `${artista.nombre} — Portfolio`;
  document.getElementById("logo-nombre").textContent = artista.nombre;
  document.getElementById("perfil-titulo").textContent = artista.nombre;
  document.getElementById("perfil-disciplina").textContent = artista.disciplina;
  document.getElementById("perfil-ubicacion").innerHTML =
    `<span class="sr-only">Ubicación: </span>${escapeHtml(artista.ubicacion)}`;
  document.getElementById("perfil-bio").textContent = artista.bio;

  const foto = document.getElementById("perfil-foto");
  foto.src = artista.foto;
  foto.alt = artista.fotoAlt;

  document.getElementById("footer-credito").textContent =
    `© ${new Date().getFullYear()} ${artista.nombre} — Portfolio de ejemplo`;
}

function renderObraDestacada(obra) {
  const img = document.getElementById("destacada-imagen");
  img.src = obra.imagen;
  img.alt = obra.imagenAlt;

  document.getElementById("destacada-nombre").textContent = obra.titulo;
  document.getElementById("destacada-anio").textContent = obra.anio;
  document.getElementById("destacada-tecnica").textContent = obra.tecnica;
  document.getElementById("destacada-dimensiones").textContent = obra.dimensiones;

  const textoEl = document.getElementById("destacada-texto");
  const paragrafos = obra.texto
    .trim()
    .split(/\n\s*\n/)
    .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
    .join("");
  textoEl.innerHTML = paragrafos;
}

function groupObrasByYear(obras) {
  const map = new Map();
  obras.forEach((obra) => {
    if (!map.has(obra.anio)) map.set(obra.anio, []);
    map.get(obra.anio).push(obra);
  });
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

function renderTimeline(obras) {
  const root = document.getElementById("timeline");
  const grupos = groupObrasByYear(obras);

  root.innerHTML = grupos
    .map(([anio, items], groupIndex) => {
      const obrasHtml = items
        .map(
          (obra, i) => `
        <article class="timeline-item reveal" role="listitem" style="--delay: ${(groupIndex * 0.05 + i * 0.04).toFixed(2)}s">
          <div class="timeline-item__media">
            <img
              src="${escapeHtml(obra.imagen)}"
              alt="${escapeHtml(obra.imagenAlt)}"
              width="640"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="timeline-item__body">
            <h4 class="timeline-item__title">${escapeHtml(obra.titulo)}</h4>
            <p class="timeline-item__technique">${escapeHtml(obra.tecnica)}</p>
            <p class="timeline-item__desc">${escapeHtml(obra.descripcion)}</p>
          </div>
        </article>`
        )
        .join("");

      return `
        <div class="timeline-year" role="listitem" aria-labelledby="year-${anio}">
          <div class="timeline-year__marker">
            <span class="timeline-year__dot" aria-hidden="true"></span>
            <h3 class="timeline-year__label" id="year-${anio}">${anio}</h3>
          </div>
          <div class="timeline-year__works" role="list">
            ${obrasHtml}
          </div>
        </div>`;
    })
    .join("");
}

/* ============ Navegación y movimiento ============ */

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav-principal");
  if (!toggle || !nav) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú de navegación");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  const open = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú de navegación");
    nav.classList.add("is-open");
    document.body.classList.add("nav-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) close();
    else open();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupReveal() {
  const nodes = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((el) => observer.observe(el));
}

function init() {
  renderPerfil(portfolioData.artista);
  renderObraDestacada(portfolioData.obraDestacada);
  renderTimeline(portfolioData.obras);
  setupNav();
  /* Observar revelados tras insertar el DOM de la timeline */
  requestAnimationFrame(setupReveal);
}

document.addEventListener("DOMContentLoaded", init);
