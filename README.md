# CV · Rubén Omar Núñez

Sitio publicado en GitHub Pages: <https://romarpunkrockv2.github.io/CV-RPR-DESIGNS/>
Se sube arrastrando los archivos (o carpetas) en GitHub → *Add file → Upload files*.
GitHub tarda hasta ~10 min en mostrar los cambios; si cambias un `.css` o `.js`, sube también el `.html`
que lo llama con el número de `?v=` actualizado.

## Páginas

| Página | Archivo | Qué tiene |
|---|---|---|
| Inicio | `index.html` | Sobre mí: un párrafo por tema, cada uno con su imagen |
| Programas | `programas.html` | Selector tipo videojuego: una muestra por programa (de fondo, se reproduce sola) |
| Proyectos | `proyectos.html` | Cada proyecto completo, paso por paso |
| Galería | `galeria.html` | Trabajos extra y el archivo de la carrera (UDN 2014–2017) |
| Experiencia | `experiencia.html` | CV formal: perfil profesional, experiencia, formación, habilidades |
| Contacto | `contacto.html` | Datos de contacto |

`sobre-mi.html`, `habilidades.html` y `trabajo.html` solo redirigen a las páginas nuevas (para enlaces viejos).

## Dónde se edita cada cosa

- **Programas y sus muestras:** `inicio.js` → `FIGHTERS` (una muestra por programa en `samples`).
- **Proyectos:** `inicio.js` → `PROJECTS`.
- **Galería:** `galeria.js` → `PIEZAS`.
- **Estilos:** `inicio.css` (Inicio, Programas, Proyectos, Galería) · `experiencia.css` · `style.css` (Contacto y base).
- **Regla:** cada trabajo aparece **una sola vez** en todo el sitio (Programas, Proyectos o Galería, no en dos).

## Pendiente

### Imágenes de Inicio (Sobre mí)
Ahora son dibujos provisionales en `media/sobre-mi/`. Reemplazar por fotos reales
(misma carpeta; si cambia el nombre o la extensión, actualizar el `src` en `index.html`):

| Párrafo | Archivo provisional | Idea de imagen |
|---|---|---|
| Música | `musica.svg` | Concierto, tus discos, guitarra, una banda que te guste |
| Videojuegos | `videojuegos.svg` | Tu consola o setup, un juego favorito, arte conceptual |
| Tecnología | `tecnologia.svg` | Tus dispositivos, tu escritorio, algo que armaste |
| Aprender por mi cuenta | `aprender.svg` | Algo que aprendiste a hacer solo / un proyecto propio |
| Este portafolio | `portafolio.svg` | Una foto tuya trabajando o un collage de trabajos |

Tamaño recomendado: horizontal 4:3, unos 1200 × 900 px, en `.jpg` o `.webp`.

### Otros
- [ ] Foto tuya para Inicio (opcional).
- [ ] Muestras extra que quieras agregar a la Galería (`galeria.js`).
- [ ] Revisar el texto de cada programa en Programas (`tag` y `moves` en `FIGHTERS`).
