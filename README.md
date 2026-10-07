# RPR Designs · portafolio

Marca del sitio: logo `media/rpr-designs.png` (menú, Inicio y favicon). El nombre completo
(Rubén Omar Núñez Plascencia) va **solo** en Experiencia.

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

## Regla de diseño: cada página con un estilo único

Cada página lleva un **diseño gráfico propio y distinto** al de las demás, para mostrar la variedad
de estilos que me gustan. No se repite la estética entre páginas ni se usa un diseño genérico.

| Página | Estilo |
|---|---|
| Inicio | Fanzine punk fotocopiado: hojas rotas con cinta, fotos B/N (color al pasar el mouse), negro + papel + rojo |
| Programas | Pantalla de selección de videojuego de peleas |
| Proyectos | Por definir: hoy comparte la base oscura de Programas |
| Galería | Por definir: hoy comparte la base oscura de Programas |
| Experiencia | CV formal / editorial |
| Contacto | Por definir: hoy usa el grunge base |

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


### Estilos únicos por página
- [ ] Darle a Proyectos, Galería y Contacto su propio estilo (hoy se parecen a otras páginas).

### Fotos tuyas
- [x] **Inicio (informal):** `media/sobre-mi/yo.jpeg` (Warped Tour CDMX, horizontal 4:3). Polaroid `.yo-foto` en `index.html`;
      se ve en B/N tipo fotocopia y a color al pasar el mouse.
- [ ] **Experiencia (formal):** foto profesional para el CV formal (aún sin espacio en `experiencia.html`).

### Otros
- [ ] Muestras extra que quieras agregar a la Galería (`galeria.js`).
- [ ] Revisar el texto de cada programa en Programas (`tag` y `moves` en `FIGHTERS`).
