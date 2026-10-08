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
    disciplina: "Artista visual — mosaico artistico y vitrofusión",
    ubicacion: "Argentina",
    foto: "assets/perfil.jpeg",
    fotoAlt:
      "Retrato de María Delia Capdevila sonriendo, con suéter verde y fondo de pared texturada en tonos claros.",
    bio: "Soy de Villa de las rosas, provincia de Córdoba mi arte es el mosaico artístico, la vitrofusión y la cerámica aplicada al arte decorativo",
  },

  obraDestacada: {
    titulo:
      "Tan lejos que a mi vista escapas\nTan cerca que a mi alma reconfortas",
    anio: 2017,
    tecnica:
      "mosaico artistico mural en relieves de cristales y piedra natural.",
    dimensiones: "110cm x 90 cm",
    imagen: "assets/obra-destacada.jpeg",
    imagenAlt:
      "Mosaico en relieve de un paisaje: sol de fragmentos blancos, árboles estilizados, rocas y lecho de piedras claras.",
    texto: `Elegí esta pieza como obra destacada porque resume para mi el dialogo mineral de la piedra natural con el brillo del cristal.

El vidrio aporta transparencia y reflejo; la piedra, peso y memoria.

La imagen elegida responde a un paisaje reconocible de mi pueblo.

El paso del sol a las 9 de la mañana en el mes de abril a travez del arbol, fresno es una clara señal del transito de las almas`,
  },

  /* Obras de ejemplo para la línea de tiempo. Agregá o quitá entradas libremente. */
  obras: [
    {
      id: "obra-2026-01",
      titulo: "Escalera abundante",
      anio: 2026,
      tecnica: "Mosaico artistico en material ceramico",
      imagen: "assets/obra-escalera-mosaico.jpeg",
      imagenAlt:
        "Escalera exterior con contrapeldanos de mosaico colorido, barandas de madera natural y vegetación.",
      descripcion:
        "cada peldaño narra un motivo natural en trencadís. Intervención en cada peldaño de la escalera de ingreso al local de Aloe, Almacén natural, Las Tapias",
    },
    {
      id: "obra-2026-02",
      titulo: "Logo Municipalidad Villa de las Rosas",
      anio: 2026,
      tecnica: "Vidrio fusionado",
      imagen: "assets/obra-rosa-vidrio.jpeg",
      imagenAlt:
        "Composición cuadrada de vidrio con rosa roja central rodeada de formas verdes, amarillas y azules.",
      descripcion: "Flor estilizada en vidrio fusionado",
    },
    {
      id: "obra-2026-03",
      titulo: "Tabaco",
      anio: 2026,
      dimensiones: "110 cm x 75cm",
      tecnica: "Mural en vitrofusión espejado",
      imagen: "assets/obra-tabaco.jpg",
      imagenAlt:
        "Mural vertical de una planta de tabaco en vitrofusión, con flor violeta y hojas verdes sobre una pared rosada.",
      vertical: true,
      descripcion: "Ubicada en Villa de las Rosas en el edificio municipal",
    },
    {
      id: "obra-2025-01",
      titulo: "¡Vuela Qatar!",
      anio: 2025,
      tecnica: "Escultura en vitromosaico fusión",
      imagen: "assets/obra-ave-vuelo.jpeg",
      imagenAlt:
        "Escultura de halcón peregrino en vuelo, de vidrio traslúcido con puntas rojas, montada sobre base de madera natural.",
      detalle: "assets/obra-01.jpeg",
      detalleAlt:
        "Detalle del ala de la escultura: vidrio fusionado con inclusiones ámbar, rojas y amarillas.",
      descripcion:
        "Halcón peregrino emblema de la cetrería, cacería con halcones. Obra expuesta en QIAF 2025.",
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

  const tituloEl = document.getElementById("destacada-nombre");
  const lineasTitulo = obra.titulo
    .split(/\n/)
    .map((linea) => linea.trim())
    .filter(Boolean);
  tituloEl.innerHTML = lineasTitulo
    .map((linea) => `<span class="featured__title-line">${escapeHtml(linea)}</span>`)
    .join("");
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
        .map((obra, i) => {
          const imagenes = [{ src: obra.imagen, alt: obra.imagenAlt }];
          if (obra.detalle) {
            imagenes.push({
              src: obra.detalle,
              alt: obra.detalleAlt,
              esDetalle: true,
            });
          }
          const mediaHtml = imagenes
            .map(
              (img) => `
            <figure class="timeline-item__media${img.esDetalle ? " timeline-item__media--detalle" : ""}">
              <div class="timeline-item__frame${obra.vertical && !img.esDetalle ? " timeline-item__frame--vertical" : ""}">
                <img
                  src="${escapeHtml(img.src)}"
                  alt="${escapeHtml(img.alt)}"
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              ${img.esDetalle ? `<figcaption class="timeline-item__detail-label">Detalle</figcaption>` : ""}
            </figure>`
            )
            .join("");

          return `
        <article class="timeline-item reveal" role="listitem" style="--delay: ${(groupIndex * 0.05 + i * 0.04).toFixed(2)}s">
          ${mediaHtml}
          <div class="timeline-item__body">
            <h4 class="timeline-item__title">${escapeHtml(obra.titulo)}</h4>
            ${obra.dimensiones ? `<p class="timeline-item__size">${escapeHtml(obra.dimensiones)}</p>` : ""}
            <p class="timeline-item__technique">${escapeHtml(obra.tecnica)}</p>
            <p class="timeline-item__desc">${escapeHtml(obra.descripcion)}</p>
          </div>
        </article>`;
        })
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

function setupCrystals() {
  const field = document.getElementById("crystal-field");
  if (!field) return;

  const colors = ["#9edaf0", "#7ec8e6", "#b7e7f6", "#5ec8d8", "#8fd4e6"];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const spawn = (spread) => {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    const width = 18 + Math.random() * 16;
    const life = 14 + Math.random() * 8;
    leaf.style.setProperty("--w", `${width}px`);
    leaf.style.setProperty("--h", `${width * 0.48}px`);
    leaf.style.left = `${-12 + Math.random() * 18}%`;
    leaf.style.top = `${Math.random() * 100}%`;
    leaf.style.setProperty("--leaf", colors[Math.floor(Math.random() * colors.length)]);
    leaf.style.setProperty("--travel", `${78 + Math.random() * 28}vw`);
    leaf.style.setProperty("--sway", `${12 + Math.random() * 16}px`);
    leaf.style.setProperty("--tilt", `${-28 + Math.random() * 24}deg`);
    leaf.style.setProperty("--life", `${life}s`);
    leaf.style.animationDelay = spread ? `${-Math.random() * life}s` : "0s";
    if (!reduceMotion) {
      leaf.addEventListener("animationend", () => {
        leaf.remove();
        spawn(false);
      });
    }
    field.appendChild(leaf);
  };

  const total = reduceMotion ? 12 : 48;
  for (let i = 0; i < total; i += 1) spawn(!reduceMotion);
}

function init() {
  renderPerfil(portfolioData.artista);
  renderObraDestacada(portfolioData.obraDestacada);
  renderTimeline(portfolioData.obras);
  setupCrystals();
  setupNav();
  /* Observar revelados tras insertar el DOM de la timeline */
  requestAnimationFrame(setupReveal);
}

document.addEventListener("DOMContentLoaded", init);
