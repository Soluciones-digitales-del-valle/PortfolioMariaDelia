# Portfolio de artista visual

Sitio estático (HTML, CSS y JavaScript vanilla) listo para publicar en **GitHub Pages**. Sin backend, frameworks ni build.

## Estructura

```
├── index.html
├── css/styles.css
├── js/main.js          ← datos editables del artista y las obras
├── assets/             ← fotografías (perfil, obra destacada, obras)
└── README.md
```

## Cómo cambiar los datos

1. Abrí `js/main.js`.
2. Editá el objeto `portfolioData`:
   - `artista`: nombre, disciplina, ubicación, foto y bio.
   - `obraDestacada`: título, año, técnica, dimensiones, imagen y texto en primera persona.
   - `obras`: arreglo de piezas para la línea de tiempo (`titulo`, `anio`, `tecnica`, `imagen`, `imagenAlt`, `descripcion`).
3. Guardá el archivo y recargá la página. Las obras se agrupan solas por año (de más reciente a más antigua).

Los textos actuales están marcados como **contenido de ejemplo**. Reemplazalos por información real antes de publicar.

## Cómo reemplazar las imágenes

1. Colocá tus archivos en `assets/` (JPG, PNG o WebP).
2. Actualizá las rutas en `portfolioData` (`foto`, `imagen`, etc.). Usá rutas relativas, por ejemplo: `assets/mi-obra.jpg`.
3. Completá siempre `fotoAlt` / `imagenAlt` con una descripción breve de la imagen.

Consejo: nombres de archivo cortos y sin espacios facilitan el mantenimiento (`obra-2024-rosas.jpg`).

## Vista previa local

- Abrí `index.html` directamente en el navegador, o
- Serví la carpeta con un servidor estático, por ejemplo:

```bash
# Node.js (recomendado si no tenés Python)
npx serve -l 8080 .

# Python 3 (si está instalado)
python -m http.server 8080
```

Luego visitá `http://localhost:8080/`.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub y subí estos archivos (incluida la carpeta `assets/`).
2. En el repositorio: **Settings → Pages**.
3. En **Source**, elegí la rama `main` (o `master`) y la carpeta `/ (root)`.
4. Guardá. En unos minutos el sitio estará en:

`https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

Las rutas del proyecto ya son relativas, así que funcionan bajo esa URL sin cambios extra.

## Accesibilidad y notas

- Navegación por teclado, enlace “Saltar al contenido” y textos alternativos en imágenes.
- La línea de tiempo usa `loading="lazy"` en las obras.
- Las animaciones respetan `prefers-reduced-motion`.
