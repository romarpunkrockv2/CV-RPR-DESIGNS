# RPR Designs · portafolio

Marca del sitio: logo `media/rpr-designs.png` (menú, Inicio y favicon). El nombre completo
(Rubén Omar Núñez Plascencia) va en Experiencia y en la bienvenida de Inicio.

**Bienvenida de Inicio** (`index.html` + `intro.js`, estilos en `inicio.css` → BIENVENIDA): video en B/N con velo negro al 60 %,
logo, "Portafolio" + nombre y botón Entrar. Al entrar, el velo se va y el video pasa a color a la vez, el logo vuela al menú
mientras el menú baja y aparece Sobre mí. Sale al entrar directo al sitio y al recargar; se salta al llegar desde otra página del portafolio o con atrás/adelante.

Sitio publicado en GitHub Pages: <https://romarpunkrockv2.github.io/CV-RPR-DESIGNS/>
Se sube arrastrando los archivos (o carpetas) en GitHub → *Add file → Upload files*.
GitHub tarda hasta ~10 min en mostrar los cambios; si cambias un `.css` o `.js`, sube también el `.html`
que lo llama con el número de `?v=` actualizado.

## Páginas

| Página | Archivo | Qué tiene |
|---|---|---|
| Inicio | `index.html` | Sobre mí: logo, descripción personal y un párrafo por hobby con su imagen |
| Programas | `programas.html` | Cada programa es como una página: portada (selector tipo videojuego con su muestra de fondo) y, debajo, sus proyectos paso por paso. `programas.html#bl` abre Blender |
| Galería | `galeria.html` | Trabajos extra y el archivo de la carrera (UDN 2014–2017) |
| Experiencia | `experiencia.html` | CV formal: perfil profesional, experiencia, formación, habilidades |
| Contacto | `contacto.html` | Datos de contacto |

`sobre-mi.html`, `habilidades.html`, `trabajo.html` y `proyectos.html` solo redirigen a las páginas nuevas (para enlaces viejos;
`proyectos.html#cj` abre Blender, `#catalogo` Código, `#pwa` IA).

## Regla de diseño: cada página con un estilo único

Cada página lleva un **diseño gráfico propio y distinto** al de las demás, para mostrar la variedad
de estilos que me gustan. No se repite la estética entre páginas ni se usa un diseño genérico.

| Página | Estilo |
|---|---|
| Inicio | Fanzine punk fotocopiado: hojas rotas con cinta, fotos B/N (color al pasar el mouse), negro + papel + rojo |
| Programas | Pantalla de selección de videojuego de peleas |
| Galería | Por definir: hoy comparte la base oscura de Programas |
| Experiencia | CV formal / editorial |
| Contacto | Por definir: hoy usa el grunge base |

## Dónde se edita cada cosa

- **Programas y sus muestras:** `inicio.js` → `FIGHTERS` (una muestra por programa en `samples`).
- **Proyectos:** `inicio.js` → `PROJECTS`, y su id en `projects` del programa donde se muestran (Blender: CJ · Código: Catálogo 2027 · IA: Sistema de producción).
  Los acentos toman el color del programa. Los demás programas aún no tienen proyectos (pendiente).
- **Galería:** `galeria.js` → `PIEZAS`.
- **Menú:** en celular (≤720 px) es de hamburguesa: botón `.menu-btn` + enlaces en `.menu` dentro del `<nav>` de cada página;
  lo abre y cierra `nav.js` (incluido al final de cada página) y sus estilos van en `style.css`. Si agregas una página, copia el `<nav>` completo.
- **Estilos:** `inicio.css` (Inicio, Programas, Proyectos, Galería) · `experiencia.css` · `style.css` (Contacto y base).
- **Regla:** cada trabajo aparece **una sola vez** en todo el sitio (Programas o Galería, no en dos).
- **Muestras de Programas:** se ven completas (ajustadas al máximo de alto o ancho) con la misma imagen difuminada detrás;
  páginas en vivo con `fit` (juego, visor 3D) se cargan al tamaño de su iframe en industriasduenas.com y se escalan.

## Pendiente

### Imágenes de Inicio (Sobre mí)
Miniaturas en `media/sobre-mi/` (`.webp`), tal cual (a color, en su proporción, sin recorte rasgado):
Música = `musica.webp` (portada de American Idiot) · Videojuegos = `videojuegos.webp` (Metro) ·
Cine = `cine.webp` (Regreso al futuro) · Deportes = `deportes.webp` (patineta).
Tecnología y Aprender por mi cuenta van **sin imagen**, en dos hojas de solo texto lado a lado (`.yo-duo`).
- [ ] `musica.webp` viene de una imagen de 225 × 225 px y se ve algo suave: si consigues la portada más grande (600 px o más), reemplázala.
- [ ] Borrar los dibujos provisionales que ya no se usan: `media/sobre-mi/*.svg`.


### Estilos únicos por página
- [ ] Darle a Galería y Contacto su propio estilo (hoy se parecen a otras páginas).

### Descripción de Inicio
- [x] Descripción personal (`.yo-intro` en `index.html`): texto tuyo. No mencionar el puesto actual: eso va en Experiencia.

### Fotos tuyas
- [x] **Inicio (informal):** `media/romar-warpedtour.jpeg` (Warped Tour CDMX, horizontal 4:3). Polaroid `.yo-foto` en `index.html`;
      se ve en B/N tipo fotocopia y a color al pasar el mouse.
- [ ] **Experiencia (formal):** foto profesional para el CV formal (aún sin espacio en `experiencia.html`).

### Programas (cada programa como página)
- [ ] **Proyectos de los demás programas:** Photoshop, Illustrator, InDesign, After Effects, Premiere, CapCut y WordPress
      aún no tienen sección de proyectos debajo de su portada. Para agregar uno: un objeto en `PROJECTS` (`inicio.js`)
      y su id en `projects` del programa. Hoy solo tienen: Blender (CJ), Código (Catálogo 2027) e IA (Sistema de producción).
- [ ] **Archivos por programa:** se habló de mostrar debajo de la portada información de habilidades y **archivos**
      (entregables, formatos) de cada programa; todavía no existe esa sección.
- [ ] **Revisar los textos** de cada programa (`sabe` = "Lo que sé" y `moves` = "Para qué lo uso" en `FIGHTERS`):
      los redactó la IA a partir de lo que se platicó; confirmar que te representen. Todos están en nivel `Intermedio`.
- [ ] **Probar en el navegador** lo que no se pudo verificar en las pruebas automáticas:
      el video de YouTube (Premiere) arranca con sonido al entrar con un clic; la muestra de CapCut se ve completa
      (en las pruebas salía estirada); el visor 3D de ALUMAX carga el modelo; la página baja bien a los proyectos.
- [ ] **Borrar archivos viejos que ya no se usan:** `media/muestras/capcut.mp4` y `capcut.jpg`
      (los reemplazó `capcut-od20.mp4`/`.jpg`); quitarlos también de GitHub.
      También `media/fondo.jpg`: era la textura encima del video de Inicio, que se quitó (el video ahora va a color, sin efectos).
      Y `media/sobre-mi/portafolio.svg`: la sección "Este portafolio" se quitó; Inicio ahora cierra con botones a las demás páginas (`.yo-pags`).
- [ ] (Opcional) WordPress en vivo se muestra a pantalla completa; decidir si va en recuadro escalado como el juego y el visor.

### Otros
- [ ] Muestras extra que quieras agregar a la Galería (`galeria.js`).
