// inicio.js — datos y lógica de Programas (programas.html) y Proyectos (proyectos.html).
// Para agregar un programa: un objeto en FIGHTERS. Para un proyecto: un objeto en PROJECTS
// (cada paso puede llevar media: { img } | { video } | { live }).

// ── Programas ("peleadores") ────────────────────────────────────────────────
// ab = letras del logo; path = logo en SVG (24×24); c = color del programa en el escenario;
// samples = muestras de trabajos hechos con ese programa (la 1a se ve al elegirlo; ‹ › pasa a las demás):
// imagen, video + portada, youtube (id) + portada, o antes y después (before = antes, src = después;
// labels = letreros de los botones, por defecto Antes/Después; ar = proporción del recuadro, por defecto 16/9).
// Opcional en cualquier muestra: full = imagen grande que se abre al hacer clic; credit = créditos (salen en la tarjeta);
// link = [texto, url] botón en la tarjeta que abre otra página; c = color de la muestra (el sitio adopta el color del contenido);
// live = url de una página real que se carga al presionar (src = portada, label = texto del botón).
// Los archivos van en media/muestras/.
var FIGHTERS = [
  { id: 'ps', name: 'Photoshop', ab: 'Ps', bg: '#001E36', fg: '#31A8FF', c: '#31A8FF', clase: 'Imagen',
    tag: 'Mi herramienta de todos los días: fotos, promociones y piezas para redes.',
    moves: [['↓↘→ P', 'Fotomontaje', 'Composiciones con varias fotos para campañas y redes.'],
            ['→↓↘ K', 'Retoque de producto', 'Limpieza y ajuste de fotos de grúas y accesorios.'],
            ['↓↓ P', 'Promos automáticas', 'Un script que arma las promociones de accesorios con el banco de imágenes.'],
            ['← → P', 'Piezas para redes', 'Publicaciones, historias y anuncios.']],
    samples: [{ before: 'media/muestras/ps-od7000-antes.jpg', src: 'media/muestras/ps-od7000-despues.jpg', cap: 'OD7000 · de la fábrica a la carretera', c: '#F1E32C' }] },
  { id: 'ai', name: 'Illustrator', ab: 'Ai', bg: '#330000', fg: '#FF9A00', c: '#FF9A00', clase: 'Vector',
    tag: 'Logotipos, etiquetas y todo lo que tiene que verse nítido en cualquier tamaño.',
    moves: [['↓↘→ P', 'Rotulación de grúas', 'La gráfica completa de cada unidad, lista para imprimir y colocar.'],
            ['→↓↘ K', 'Logotipos', 'Diseño de marcas y escudos.'],
            ['↓↓ P', 'Vectorizado', 'Números, nombres y logos listos para corte e impresión.'],
            ['← → K', 'Etiquetas y formatos', 'Material impreso de la marca.']],
    samples: [{ before: 'media/muestras/ai-rd30-diseno.jpg', src: 'media/muestras/ai-rd30-real.jpg', labels: ['Diseño', 'Terminada'], ar: '1600/1182', cap: 'RD30 · rotulación AGM, del diseño a la grúa', c: '#2F6BFF' }] },
  { id: 'id', name: 'InDesign', ab: 'Id', bg: '#49021F', fg: '#FF3366', c: '#FF3366', clase: 'Editorial',
    tag: 'Catálogos, revistas y documentos de varias páginas.',
    moves: [['↓↘→ P', 'Catálogos', 'Catálogos de equipos con fotos, especificaciones y diseño de la marca.'],
            ['→↓↘ K', 'Revistas', 'Maquetación editorial, como la revista de Bird Attack Records.'],
            ['↓↓ P', 'Fichas y folletos', 'Fichas técnicas y material impreso listo para imprenta.']],
    samples: [{ src: 'media/muestras/id-infografia-rd50.jpg', full: 'media/muestras/id-infografia-rd50-grande.jpg', cap: 'Infografía RD50 Low Profile S.R.L. S.P. · AGM', c: '#2F6BFF',
                credit: 'Renders en Blender: yo · Dibujos técnicos: equipo de Diseño de Industrias Dueñas – KREYN',
                link: ['Ver el mismo modelo animado en 3D', 'https://industriasduenas.com/agm/'] }] },
  { id: 'ae', name: 'After Effects', ab: 'Ae', bg: '#00005B', fg: '#9999FF', c: '#9999FF', clase: 'Movimiento',
    tag: 'Animación y efectos para video.',
    moves: [['↓↘→ P', 'Animación', 'Textos, logotipos y elementos en movimiento.'],
            ['← → K', 'Efectos', 'Composición y técnicas de desplazamiento, como en el trailer de Resident Evil.']],
    samples: [{ video: 'media/muestras/ae-bob-esponja.mp4', src: 'media/muestras/ae-bob-esponja.jpg', cap: 'Viernes de humor · grúa KREYN en Fondo de Bikini', c: '#FFE135' }] },
  { id: 'pr', name: 'Premiere Pro', ab: 'Pr', bg: '#00005B', fg: '#EA77FF', c: '#EA77FF', clase: 'Video',
    tag: 'Edición de video de principio a fin.',
    moves: [['↓↘→ P', 'Edición', 'Cortes, ritmo, música y color.'],
            ['→↓↘ K', 'Video para redes', 'Versiones para cada formato y plataforma.']],
    samples: [{ youtube: 'y9U-Y60E44k', src: 'https://i.ytimg.com/vi/y9U-Y60E44k/maxresdefault.jpg', cap: 'RD40 RTR · proceso de fabricación', c: '#F1E32C' }] },
  { id: 'cc', name: 'CapCut', ab: 'Cc', bg: '#000000', fg: '#FFFFFF', c: '#E8E8E8', clase: 'Video rápido',
    tag: 'Para cuando el video tiene que salir hoy.',
    moves: [['↓↓ P', 'Reels y TikToks', 'Edición rápida en formato vertical.'],
            ['← → P', 'Subtítulos y textos', 'Videos que se entienden sin sonido.']],
    samples: [{ video: 'media/muestras/capcut.mp4', src: 'media/muestras/capcut.jpg', cap: 'OD20 DS · video para TikTok', c: '#F1E32C' }] },
  { id: 'bl', name: 'Blender', path: 'M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626', bg: '#E87D0D', fg: '#FFFFFF', c: '#E87D0D', clase: '3D',
    tag: 'Modelos y animación 3D de los equipos KREYN.',
    moves: [['↓↘→ P', 'Modelado', 'Las grúas armadas pieza por pieza, cada una con su material.'],
            ['→↓↘ K', 'Animación 3D', 'Movimiento de cámara y piezas.'],
            ['↓↓ P', 'Exportar a la web', 'Modelos listos y ligeros para verse en el navegador.']],
    samples: [{ video: 'media/muestras/blender-navidad.mp4', src: 'media/muestras/blender-navidad.jpg', cap: 'Animación navideña de Industrias Dueñas', c: '#D62828' }] },
  { id: 'wp', name: 'WordPress', path: 'M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0', bg: '#21759B', fg: '#FFFFFF', c: '#3BA5D8', clase: 'Web',
    tag: 'Todo el sitio de la empresa lo imaginé y lo diseñé yo.',
    moves: [['↓↘→ P', 'Sitio de KREYN', 'Diseño completo: portada, líneas de equipos, galería, catálogo y contacto.'],
            ['→↓↘ K', 'Bloques a la medida', 'Catálogo y visores 3D integrados en las páginas.'],
            ['↓↓ P', 'Contenido al día', 'Equipos nuevos, fotos y actualizaciones.']],
    samples: [{ live: 'https://industriasduenas.com/', src: 'media/sitio-web.jpg', label: 'Abrir el sitio', cap: 'industriasduenas.com · diseñado por mí (en vivo)', c: '#F1E32C' }] },
  { id: 'web', name: 'HTML · CSS · JS', ab: '</>', bg: '#121212', fg: '#C4FF2E', c: '#C4FF2E', clase: 'Código',
    tag: 'Kreyn Road: un juego web con sprites y assets hechos por mí.',
    moves: [['↓↘→ P', 'Videojuego', 'Kreyn Road: la grúa OD7000 esquivando patrullas, con tabla de récords. También en Android.'],
            ['→↓↘ K', 'Sprites y assets propios', 'La grúa, las patrullas, el logo y las pantallas del juego.'],
            ['↓↓ P', 'Catálogos y visores 3D', 'Catálogo 2027, catálogo EKANN y las grúas en 3D en el navegador.']],
    samples: [{ live: 'https://industriasduenas.com/game/', src: 'media/juego-inicio.jpg', label: 'Jugar Kreyn Road', cap: 'Kreyn Road · sprites y assets propios (en vivo)', c: '#F1E32C', link: ['Descargar para Android (APK)', 'https://industriasduenas.com/game/kreyn-road.apk'] }] },
  { id: 'ia', name: 'IA', ab: '✦', bg: '#1B1240', fg: '#B9A6FF', c: '#8B6CFF', clase: 'Copiloto',
    tag: 'Visores 3D de las grúas KREYN en el navegador: tú eliges el color de cada pieza. Yo armé los modelos y el diseño; la IA escribió el código.',
    moves: [['', 'Colores al gusto', 'Cada pieza (pluma, carrocería, cabina…) se pinta por separado con una paleta.'],
            ['', 'Gira, acerca y explora', 'El modelo completo con luz real, en computadora y celular.'],
            ['', 'Ligero', 'Cada modelo pasa de 92 MB a menos de 7 MB para que cargue rápido hasta en celular. Ya son 28 visores publicados.'],
            ['', 'Más con IA', 'La app de producción de KREYN y el catálogo EKANN: mira Proyectos.']],
    samples: [{ live: 'https://industriasduenas.com/3d/alumax.html', src: 'media/visor-alumax.jpg', label: 'Abrir el visor y cambiar colores', cap: 'ALUMAX · visor 3D para elegir colores (en vivo)', c: '#F1E32C' }] },
];

// ── Proyectos ───────────────────────────────────────────────────────────────
var PROJECTS = [
  { id: 'pwa', color: '#F1E32C', kicker: 'KREYN · App interna', title: 'Sistema de producción', tools: ['web', 'ia'],
    sum: 'La app con la que trabaja la planta: órdenes de producción, inventarios, almacén con lector QR, recursos humanos, cotizaciones y más. Se instala en celulares y computadoras.',
    stats: [['18', 'módulos'], ['13', 'usuarios'], ['10', 'roles con permisos distintos']],
    steps: [
      { k: 'Paso 1', t: 'Escuchar a la planta', d: 'Cada módulo nace de una necesidad de un área: producción, almacén, diseño, recursos humanos. Defino qué hace falta, quién lo va a usar y qué puede hacer cada quien.' },
      { k: 'Paso 2', t: 'Diseñar las pantallas', d: 'Uso la identidad de KREYN —amarillo, negro y tipografía Airstrike— para que la app se sienta parte de la marca, con botones grandes y claros para usarse en planta.', media: { img: 'media/pwa-equipos.jpg', cap: 'Selector de equipos' } },
      { k: 'Paso 3', t: 'Construir con IA', d: 'Le explico a la IA cómo debe funcionar cada pantalla y cada regla; ella escribe el código y yo lo reviso, lo pruebo y pido correcciones hasta que funciona.', media: { img: 'media/pwa-detalle.jpg', cap: 'Módulo Detalles Producción/Diseño' } },
      { k: 'Paso 4', t: 'Probar en el celular', d: 'Todo se prueba en celular y computadora: cámara, fotos, avisos y permisos por puesto.', media: { img: 'media/pwa-celular.jpg', phone: true } }
    ] },
  { id: 'cj', color: '#2BB34A', kicker: 'KREYN · Animación para redes', title: 'CJ se vuelve gruero', tools: ['bl'],
    sum: 'Una animación 3D para las redes de KREYN: terminando la historia de GTA San Andreas, CJ deja las pandillas, se vuelve gruero y graba su primer vlog para presentar su nueva grúa KREYN.',
    steps: [
      { k: 'Paso 1', t: 'Animar a CJ', d: 'Con el modelo 3D de CJ y su esqueleto en Blender, lo animo en la línea de tiempo: cómo habla, cómo señala, cómo se mueve junto a la grúa.', media: { img: 'media/gta-1.jpg', cap: 'CJ con su esqueleto en Blender' } },
      { k: 'Paso 2', t: 'El escenario y la grúa', d: 'Monto el mapa de Los Santos y una grúa KREYN pintada del verde de Grove Street, con la gráfica “C.J.’s Towing” en las puertas. CJ va sentado en la cabina. Render con Eevee.', media: { img: 'media/gta-2.jpg', cap: 'Los Santos + grúa KREYN' } },
      { k: 'Paso 3', t: 'Cámara de vlog', d: 'Una cámara vertical dentro de la cabina, como si CJ grabara con su celular para redes. En la pantalla del tablero suena Los Cadetes de Linares.', media: { img: 'media/gta-3.jpg', cap: 'Cámara vertical en la cabina' } },
      { k: 'La historia', t: 'De Grove Street a gruero', d: 'La pandilla de Grove Street se separó y CJ tuvo que buscar un trabajo diario: ahora maneja grúa. Presenta su OD7000 de 7,000 libras, presume que el verde es como el de la pandilla y que la gráfica "salió con su cara y todo", enseña la cabina y cierra prometiendo más vlogs de sus primeros servicios.' },
      { k: 'Resultado', t: 'El primer vlog de CJ', d: 'El video terminado, en formato vertical para TikTok, Instagram y Facebook.', media: { video: 'media/cj-gruero.mp4', poster: 'media/cj-gruero.jpg', phone: true, controls: true } }
    ] },
  { id: 'catalogo', color: '#FFD400', kicker: 'KREYN · Catálogo de equipos', title: 'Catálogo 2027', tools: ['web', 'wp', 'ia'],
    sum: 'Un catálogo interactivo de las grúas KREYN que se navega como una presentación: video de portada, categorías y la ficha de cada equipo.',
    steps: [
      { k: 'Paso 1', t: 'Portada en video', d: 'El catálogo abre con video de los equipos trabajando en carretera, con la tipografía de la marca encima.', media: { video: 'https://industriasduenas.com/catalogo27/portada.mp4', poster: 'media/catalogo-portada.jpg' } },
      { k: 'Paso 2', t: 'Navegar por categorías', d: 'Plataformas, rescate lateral, pick up, rescate y underlift: un índice que lleva directo a cada línea.', media: { img: 'media/catalogo-3.jpg' } },
      { k: 'Paso 3', t: 'La ficha de cada equipo', d: 'Foto, características y botones para ver el video, el modelo 3D, la ficha técnica o cotizar por WhatsApp.', media: { img: 'media/catalogo-4.jpg', cap: 'ALUMAX' } }
    ],
    links: [['Ver el catálogo ↗', 'https://industriasduenas.com/catalogo27/']] },
  { id: 'ekann', color: '#FF9100', kicker: 'EKANN · Accesorios', title: 'Catálogo y panel EKANN', tools: ['web', 'ps', 'ia'],
    sum: 'El catálogo de accesorios de EKANN con filtros por marca y categoría, y un panel donde se editan productos, promociones y precios.',
    stats: [['270', 'productos'], ['16', 'marcas']],
    steps: [
      { k: 'Paso 1', t: 'Catálogo con filtros', d: 'Barra de marcas con sus logotipos, categorías con contador, buscador y cotización directa.', media: { img: 'media/ekann-catalogo.jpg' } },
      { k: 'Paso 2', t: 'Panel de administración', d: 'Editor de productos y promociones, y una hoja de precios tipo Excel con dólar y costos, con acceso según el puesto de cada usuario.' }
    ],
    links: [['Ver el catálogo ↗', 'https://industriasduenas.com/ekann/catalogo-accesorios.html']] }
];


// ── Utilidades ──────────────────────────────────────────────────────────────
var $ = function (s) { return document.querySelector(s); };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
var byId = function (list, id) { return list.filter(function (x) { return x.id === id; })[0]; };
function logo(f) {
  if (f.path) return '<svg class="tile" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="' + f.bg + '"/>' +
    '<g transform="translate(14 14) scale(1.5)" fill="' + f.fg + '"><path d="' + f.path + '"/></g></svg>';
  var small = f.ab.length > 2 ? 21 : 30;
  return '<svg class="tile" viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="13" fill="' + f.bg + '" stroke="' + f.fg + '" stroke-width="3"/>' +
    '<text x="32" y="' + (small > 25 ? 42 : 40) + '" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="' + small + '" fill="' + f.fg + '">' + esc(f.ab) + '</text></svg>';
}
var CEL = window.matchMedia('(max-width: 900px)');
// Sonido: los navegadores solo dejan reproducir con audio después del primer clic/toque del visitante.
// Antes de eso los videos arrancan mudos; con el primer clic se les activa la música.
var sonido = !!(navigator.userActivation && navigator.userActivation.hasBeenActive);
function playVideo(v) {
  if (!v) return;
  v.muted = !sonido;
  v.play().catch(function () { v.muted = true; v.play().catch(function () {}); });
}
['pointerdown', 'keydown', 'touchend'].forEach(function (ev) {
  document.addEventListener(ev, function () {
    if (sonido) return;
    sonido = true;
    var v = document.querySelector('#sMedia video'); if (v) v.muted = false; // en Programas: el video de la muestra
  }, true);
});


// ── Programas (programas.html): pantalla de selección ───────────────────────
// La muestra es el fondo y se reproduce sola (video, YouTube o la página en vivo); el sitio toma su color (--c).
// "Pantalla completa" quita los paneles para verla entera.
var roster = $('#roster'), cur = -1, baTimer = 0, sel = $('#programas');
function pick(i) {
  if (i === cur) return;
  cur = i;
  var f = FIGHTERS[i];
  roster.querySelectorAll('.slot').forEach(function (s, k) { s.setAttribute('aria-selected', k === i); });
  $('#logoBig').innerHTML = logo(f);
  $('#fClass').textContent = 'Clase · ' + f.clase;
  $('#fName').textContent = f.name;
  $('#fTag').textContent = f.tag;
  $('#fMoves').innerHTML = f.moves.map(function (m) { return '<li><b>' + esc(m[1]) + '</b><span>' + esc(m[2]) + '</span></li>'; }).join('');
  showSample();
}
function showSample() {
  var f = FIGHTERS[cur], sm = f.samples[0];
  clearInterval(baTimer);
  sel.classList.remove('viewing');
  document.body.style.setProperty('--c', sm.c || f.c);
  var frame = function (src) { return '<iframe src="' + esc(src) + '" title="' + esc(sm.cap) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>'; };
  $('#sMedia').innerHTML = sm.before
    ? (function (lb) {
        return '<div class="ba"><img src="' + esc(sm.before) + '" alt="' + esc(lb[0] + ': ' + sm.cap) + '">' +
          '<img class="after" src="' + esc(sm.src) + '" alt="' + esc(lb[1] + ': ' + sm.cap) + '">' +
          '<div class="ba-tabs"><button data-v="0">' + esc(lb[0]) + '</button><button data-v="1">' + esc(lb[1]) + '</button></div></div>';
      })(sm.labels || ['Antes', 'Después'])
    : sm.live ? frame(sm.live)
    : sm.youtube ? frame('https://www.youtube-nocookie.com/embed/' + sm.youtube + '?autoplay=1&mute=1&loop=1&playlist=' + sm.youtube + '&rel=0&playsinline=1')
    : sm.video ? '<video src="' + esc(sm.video) + '" poster="' + esc(sm.src) + '" muted loop playsinline autoplay></video>'
    : '<img src="' + esc(sm.src) + '" alt="' + esc(sm.cap) + '">';
  var cr = $('#sCredit'); cr.hidden = !sm.credit; cr.textContent = sm.credit || '';
  var sl = $('#sLink'); sl.hidden = !sm.link; if (sm.link) { sl.textContent = sm.link[0] + ' ↗'; sl.href = sm.link[1]; }
  playVideo($('#sMedia video'));
  var ba = $('#sMedia .ba');
  if (ba) {
    // alterna cada 2.5 s; al tocar un botón se queda en el que se eligió
    var setBA = function (v) { ba.classList.toggle('show-after', !!v); ba.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', +b.dataset.v === +v); }); };
    var v = 0; setBA(0);
    baTimer = setInterval(function () { v = 1 - v; setBA(v); }, 2500);
    ba.querySelectorAll('button').forEach(function (b) { b.onclick = function () { clearInterval(baTimer); setBA(+b.dataset.v); }; });
  }
  $('#sCap').textContent = sm.cap;
}
if (roster) {
  FIGHTERS.forEach(function (f, i) {
    var b = document.createElement('button');
    b.className = 'slot'; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', 'false'); b.setAttribute('aria-label', f.name);
    b.innerHTML = '<span class="mini">' + logo(f) + '</span><span class="nm">' + esc(f.id === 'web' ? 'Código' : f.name.split(' ')[0]) + '</span>';
    b.addEventListener('click', function () { pick(i); });
    b.addEventListener('focus', function () { pick(i); });
    roster.appendChild(b);
  });
  $('#sVer').onclick = function () {
    var sm = FIGHTERS[cur].samples[0];
    sel.classList.add('viewing');
    var vd = $('#sMedia video'); if (vd) vd.controls = true;
    var im = $('#sMedia > img');
    if (im && sm.full) { im.style.cursor = 'zoom-in'; im.onclick = function () { openLb([sm.full], sm.cap + (sm.credit ? ' — ' + sm.credit : '')); }; }
    $('#sClose').focus();
  };
  // al volver no se recarga la muestra (el video o el juego siguen donde iban)
  var closeView = function () {
    sel.classList.remove('viewing');
    var vd = $('#sMedia video'); if (vd) vd.controls = false;
  };
  $('#sClose').onclick = closeView;
  document.addEventListener('keydown', function (e) {
    if (document.querySelector('dialog[open]') || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === 'Escape') closeView();
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      roster.children[(cur + (e.key === 'ArrowRight' ? 1 : -1) + FIGHTERS.length) % FIGHTERS.length].focus();
    }
  });
  pick(0);
}

// ── Proyectos (proyectos.html): pestañas arriba; el proyecto elegido se ve completo, paso por paso ──
var pjOne = $('#pjOne');
function stepMedia(m, s) {
  if (m.video) return '<div class="frame' + (m.phone ? ' phone' : '') + '"><video src="' + esc(m.video) + '" poster="' + esc(m.poster || '') + '" muted loop playsinline autoplay controls></video></div>';
  return '<button class="frame zoom' + (m.phone ? ' phone' : '') + '" data-img="' + esc(m.img) + '" data-txt="' + esc(s.t + ' — ' + s.d) + '">' +
    '<img src="' + esc(m.img) + '" alt="' + esc(m.cap || s.t) + '" loading="lazy">' + (m.cap ? '<span class="cap">' + esc(m.cap) + '</span>' : '') + '</button>';
}
function showProject(id) {
  var p = byId(PROJECTS, id) || PROJECTS[0];
  document.body.style.setProperty('--c', p.color);
  $('#pjTabs').querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.id === p.id); });
  pjOne.innerHTML =
    '<header class="pj-head"><p class="kicker cond">' + esc(p.kicker) + '</p><h1>' + esc(p.title) + '</h1><p class="pj-sum">' + esc(p.sum) + '</p>' +
      '<div class="pj-meta"><div class="pj-tools">' + p.tools.map(function (t) { var f = byId(FIGHTERS, t); return '<span title="' + esc(f.name) + '">' + logo(f) + '</span>'; }).join('') + '</div>' +
      '<div class="pj-stats">' + (p.stats || []).map(function (x) { return '<div><b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></div>'; }).join('') + '</div></div>' +
      '<div class="pj-links">' + (p.links || []).map(function (l) { return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + '</a>'; }).join('') + '</div></header>' +
    '<ol class="pj-steps">' + p.steps.map(function (s) {
      return '<li class="pj-st' + (s.media ? '' : ' solo') + '">' + (s.media ? stepMedia(s.media, s) : '') +
        '<div class="txt"><span class="k">' + esc(s.k) + '</span><h3>' + esc(s.t) + '</h3><p>' + esc(s.d) + '</p></div></li>';
    }).join('') + '</ol>';
  pjOne.querySelectorAll('.zoom').forEach(function (z) { z.onclick = function () { openLb([z.dataset.img], z.dataset.txt); }; });
}
if (pjOne) {
  $('#pjTabs').innerHTML = PROJECTS.map(function (p) {
    return '<button role="tab" style="--pc:' + p.color + '" data-id="' + p.id + '">' + esc(p.title) + '</button>';
  }).join('');
  $('#pjTabs').onclick = function (e) {
    var b = e.target.closest('button'); if (!b) return;
    history.replaceState(null, '', '#' + b.dataset.id); showProject(b.dataset.id); scrollTo(0, 0);
  };
  showProject(location.hash.slice(1));
}

// ── Visor de imágenes ───────────────────────────────────────────────────────
var lb = $('#lb'), lbImgs = [], lbIdx = 0, lbTxt = '';
function openLb(imgs, txt) { lbImgs = imgs; lbIdx = 0; lbTxt = txt; showLb(); lb.showModal(); }
function showLb() {
  lb.querySelector('img').src = lbImgs[lbIdx];
  lb.querySelector('p').textContent = lbTxt;
  $('#ct').textContent = lbImgs.length > 1 ? (lbIdx + 1) + ' / ' + lbImgs.length : '';
  $('#pv').hidden = $('#nx').hidden = lbImgs.length < 2;
}
function stepLb(d) { lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length; showLb(); }
if (lb) {
  $('#pv').onclick = function () { stepLb(-1); };
  $('#nx').onclick = function () { stepLb(1); };
  $('#cl').onclick = function () { lb.close(); };
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') stepLb(1); if (e.key === 'ArrowLeft') stepLb(-1); });
}
