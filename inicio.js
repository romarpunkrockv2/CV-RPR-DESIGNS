// inicio.js — Inicio: selector de habilidades (estilo juego de peleas) + proyectos paso a paso.
// Para agregar un programa: un objeto en FIGHTERS. Para un proyecto: un objeto en PROJECTS
// (cada paso puede llevar media: { img } | { video } | { live } y who: 'yo' | 'ia' | 'ambos').

// ── Programas ("peleadores") ────────────────────────────────────────────────
// ab = letras del logo; path = logo en SVG (24×24); c = color del programa en el escenario.
var FIGHTERS = [
  { id: 'ps', name: 'Photoshop', ab: 'Ps', bg: '#001E36', fg: '#31A8FF', c: '#31A8FF', clase: 'Imagen',
    tag: 'Mi herramienta de todos los días: fotos, promociones y piezas para redes.',
    moves: [['↓↘→ P', 'Fotomontaje', 'Composiciones con varias fotos para campañas y redes.'],
            ['→↓↘ K', 'Retoque de producto', 'Limpieza y ajuste de fotos de grúas y accesorios.'],
            ['↓↓ P', 'Promos automáticas', 'Un script que arma las promociones de accesorios con el banco de imágenes.'],
            ['← → P', 'Piezas para redes', 'Publicaciones, historias y anuncios.']],
    used: ['ekann'] },
  { id: 'ai', name: 'Illustrator', ab: 'Ai', bg: '#330000', fg: '#FF9A00', c: '#FF9A00', clase: 'Vector',
    tag: 'Logotipos, etiquetas y todo lo que tiene que verse nítido en cualquier tamaño.',
    moves: [['↓↘→ P', 'Logotipos', 'Diseño de marcas y escudos.'],
            ['→↓↘ P', 'Vectorizado', 'Números, nombres y logos listos para corte e impresión.'],
            ['↓↓ K', 'Etiquetas y formatos', 'Material impreso de la marca.']],
    used: ['archivo'] },
  { id: 'ae', name: 'After Effects', ab: 'Ae', bg: '#00005B', fg: '#9999FF', c: '#9999FF', clase: 'Movimiento',
    tag: 'Animación y efectos para video.',
    moves: [['↓↘→ P', 'Animación', 'Textos, logotipos y elementos en movimiento.'],
            ['← → K', 'Efectos', 'Composición y técnicas de desplazamiento, como en el trailer de Resident Evil.']],
    used: ['archivo'] },
  { id: 'pr', name: 'Premiere Pro', ab: 'Pr', bg: '#00005B', fg: '#EA77FF', c: '#EA77FF', clase: 'Video',
    tag: 'Edición de video de principio a fin.',
    moves: [['↓↘→ P', 'Edición', 'Cortes, ritmo, música y color.'],
            ['→↓↘ K', 'Video para redes', 'Versiones para cada formato y plataforma.']],
    used: [] },
  { id: 'cc', name: 'CapCut', ab: 'Cc', bg: '#000000', fg: '#FFFFFF', c: '#E8E8E8', clase: 'Video rápido',
    tag: 'Para cuando el video tiene que salir hoy.',
    moves: [['↓↓ P', 'Reels y TikToks', 'Edición rápida en formato vertical.'],
            ['← → P', 'Subtítulos y textos', 'Videos que se entienden sin sonido.']],
    used: [] },
  { id: 'bl', name: 'Blender', path: 'M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626', bg: '#E87D0D', fg: '#FFFFFF', c: '#E87D0D', clase: '3D',
    tag: 'Modelos y animación 3D de los equipos KREYN.',
    moves: [['↓↘→ P', 'Modelado', 'Las grúas armadas pieza por pieza, cada una con su material.'],
            ['→↓↘ K', 'Animación 3D', 'Movimiento de cámara y piezas.'],
            ['↓↓ P', 'Exportar a la web', 'Modelos listos y ligeros para verse en el navegador.']],
    used: ['visores', 'cj'] },
  { id: 'wp', name: 'WordPress', path: 'M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0', bg: '#21759B', fg: '#FFFFFF', c: '#3BA5D8', clase: 'Web',
    tag: 'El sitio de la empresa y las páginas de cada equipo.',
    moves: [['↓↘→ P', 'Sitio de la empresa', 'Páginas, contenido y actualizaciones.'],
            ['→↓↘ K', 'Bloques a la medida', 'Catálogo y visores 3D integrados en las páginas.']],
    used: ['catalogo'] },
  { id: 'web', name: 'HTML · CSS · JS', ab: '</>', bg: '#121212', fg: '#C4FF2E', c: '#C4FF2E', clase: 'Código',
    tag: 'Diseño la interfaz y la estructura; la IA me ayuda a escribir el código.',
    moves: [['↓↘→ P', 'Apps web', 'La app de producción que se instala en celular y computadora.'],
            ['→↓↘ K', 'Catálogos interactivos', 'Catálogo 2027 y catálogo EKANN.'],
            ['↓↓ P', 'Visores 3D y juegos', 'Three.js para las grúas y un juego arcade.']],
    used: ['pwa', 'catalogo', 'ekann', 'visores', 'juego'] },
  { id: 'ia', name: 'IA', ab: '✦', bg: '#1B1240', fg: '#B9A6FF', c: '#8B6CFF', clase: 'Copiloto',
    tag: 'Yo pongo la idea, el diseño y el criterio; la IA acelera.',
    moves: [['↓↘→ P', 'Programar con IA', 'Le explico qué debe hacer cada pantalla y reviso lo que escribe.'],
            ['→↓↘ K', 'Revisar y corregir', 'Busca errores y problemas de seguridad conmigo.'],
            ['↓↓ P', 'Ideas y textos', 'Me ayuda a explorar opciones más rápido.']],
    used: ['pwa', 'juego'] }
];

// ── Proyectos ───────────────────────────────────────────────────────────────
var LIVE3D = 'https://industriasduenas.com/3d/alumax.html';
var PROJECTS = [
  { id: 'pwa', color: '#F1E32C', kicker: 'KREYN · App interna', title: 'Sistema de producción', tools: ['web', 'ia'],
    sum: 'La app con la que trabaja la planta: órdenes de producción, inventarios, almacén con lector QR, recursos humanos, cotizaciones y más. Se instala en celulares y computadoras.',
    stats: [['18', 'módulos'], ['13', 'usuarios'], ['10', 'roles con permisos distintos']],
    steps: [
      { k: 'Paso 1', t: 'Escuchar a la planta', who: 'yo', d: 'Cada módulo nace de una necesidad de un área: producción, almacén, diseño, recursos humanos. Defino qué hace falta, quién lo va a usar y qué puede hacer cada quien.' },
      { k: 'Paso 2', t: 'Diseñar las pantallas', who: 'yo', d: 'Uso la identidad de KREYN —amarillo, negro y tipografía Airstrike— para que la app se sienta parte de la marca, con botones grandes y claros para usarse en planta.', media: { img: 'media/pwa-equipos.jpg', cap: 'Selector de equipos' } },
      { k: 'Paso 3', t: 'Construir con IA', who: 'ambos', d: 'Le explico a la IA cómo debe funcionar cada pantalla y cada regla; ella escribe el código y yo lo reviso, lo pruebo y pido correcciones hasta que funciona.', media: { img: 'media/pwa-detalle.jpg', cap: 'Módulo Detalles Producción/Diseño' } },
      { k: 'Paso 4', t: 'Probar en el celular', who: 'yo', d: 'Todo se prueba en celular y computadora: cámara, fotos, avisos y permisos por puesto.', media: { img: 'media/pwa-celular.jpg', phone: true } }
    ] },
  { id: 'visores', color: '#E87D0D', kicker: 'KREYN · Sitio web', title: 'Visores 3D', tools: ['bl', 'web', 'ia'],
    sum: 'Las grúas KREYN en 3D dentro del navegador: el cliente gira el equipo, cambia colores pieza por pieza y guarda una imagen.',
    stats: [['28', 'visores publicados'], ['92 → 7', 'MB por modelo, ya optimizado']],
    steps: [
      { k: 'Paso 1', t: 'Modelar en Blender', who: 'yo', d: 'Cada grúa se arma en Blender con sus piezas separadas por material, para que en la web se pueda pintar cada una por separado.' },
      { k: 'Paso 2', t: 'Optimizar para la web', who: 'ambos', d: 'Un modelo de 92 MB queda en menos de 7 MB comprimiendo texturas y geometría, sin perder detalle, para que cargue rápido hasta en celular.' },
      { k: 'Paso 3', t: 'Visor interactivo', who: 'ambos', d: 'Selector de piezas, paleta de colores, zoom, guardar imagen y versiones del equipo (por ejemplo con y sin S.R.L.).', media: { img: 'media/visor-od7000.jpg', cap: 'OD7000' } },
      { k: 'Pruébalo', t: 'Pinta una grúa', who: 'yo', d: 'Elige una pieza, cámbiale el color y gira el equipo.', media: { live: LIVE3D, poster: 'media/visor-alumax.jpg', label: 'Cargar visor 3D', note: 'unos 5 MB', mobileNewTab: true } }
    ],
    links: [['Abrir el visor en pantalla completa ↗', LIVE3D]] },
  { id: 'cj', color: '#2BB34A', kicker: 'KREYN · Animación para redes', title: 'CJ se vuelve gruero', tools: ['bl'],
    sum: 'Una animación 3D para las redes de KREYN: terminando la historia de GTA San Andreas, CJ deja las pandillas, se vuelve gruero y graba su primer vlog para presentar su nueva grúa KREYN.',
    steps: [
      { k: 'Paso 1', t: 'Animar a CJ', who: 'yo', d: 'Con el modelo 3D de CJ y su esqueleto en Blender, lo animo en la línea de tiempo: cómo habla, cómo señala, cómo se mueve junto a la grúa.', media: { img: 'media/gta-1.jpg', cap: 'CJ con su esqueleto en Blender' } },
      { k: 'Paso 2', t: 'El escenario y la grúa', who: 'yo', d: 'Monto el mapa de Los Santos y una grúa KREYN pintada del verde de Grove Street, con la gráfica “C.J.’s Towing” en las puertas. CJ va sentado en la cabina. Render con Eevee.', media: { img: 'media/gta-2.jpg', cap: 'Los Santos + grúa KREYN' } },
      { k: 'Paso 3', t: 'Cámara de vlog', who: 'yo', d: 'Una cámara vertical dentro de la cabina, como si CJ grabara con su celular para redes. En la pantalla del tablero suena Los Cadetes de Linares.', media: { img: 'media/gta-3.jpg', cap: 'Cámara vertical en la cabina' } },
      { k: 'La historia', t: 'De Grove Street a gruero', who: 'yo', d: 'La pandilla de Grove Street se separó y CJ tuvo que buscar un trabajo diario: ahora maneja grúa. Presenta su OD7000 de 7,000 libras, presume que el verde es como el de la pandilla y que la gráfica "salió con su cara y todo", enseña la cabina y cierra prometiendo más vlogs de sus primeros servicios.' },
      { k: 'Resultado', t: 'El primer vlog de CJ', who: 'yo', d: 'El video terminado, en formato vertical para TikTok, Instagram y Facebook.', media: { video: 'media/cj-gruero.mp4', poster: 'media/cj-gruero.jpg', phone: true, controls: true } }
    ] },
  { id: 'catalogo', color: '#FFD400', kicker: 'KREYN · Catálogo de equipos', title: 'Catálogo 2027', tools: ['web', 'wp', 'ia'],
    sum: 'Un catálogo interactivo de las grúas KREYN que se navega como una presentación: video de portada, categorías y la ficha de cada equipo.',
    steps: [
      { k: 'Paso 1', t: 'Portada en video', who: 'yo', d: 'El catálogo abre con video de los equipos trabajando en carretera, con la tipografía de la marca encima.', media: { video: 'https://industriasduenas.com/catalogo27/portada.mp4', poster: 'media/catalogo-portada.jpg' } },
      { k: 'Paso 2', t: 'Navegar por categorías', who: 'yo', d: 'Plataformas, rescate lateral, pick up, rescate y underlift: un índice que lleva directo a cada línea.', media: { img: 'media/catalogo-3.jpg' } },
      { k: 'Paso 3', t: 'La ficha de cada equipo', who: 'ambos', d: 'Foto, características y botones para ver el video, el modelo 3D, la ficha técnica o cotizar por WhatsApp.', media: { img: 'media/catalogo-4.jpg', cap: 'ALUMAX' } }
    ],
    links: [['Ver el catálogo ↗', 'https://industriasduenas.com/catalogo27/']] },
  { id: 'ekann', color: '#FF9100', kicker: 'EKANN · Accesorios', title: 'Catálogo y panel EKANN', tools: ['web', 'ps', 'ia'],
    sum: 'El catálogo de accesorios de EKANN con filtros por marca y categoría, y un panel donde se editan productos, promociones y precios.',
    stats: [['270', 'productos'], ['16', 'marcas']],
    steps: [
      { k: 'Paso 1', t: 'Catálogo con filtros', who: 'ambos', d: 'Barra de marcas con sus logotipos, categorías con contador, buscador y cotización directa.', media: { img: 'media/ekann-catalogo.jpg' } },
      { k: 'Paso 2', t: 'Panel de administración', who: 'ambos', d: 'Editor de productos y promociones, y una hoja de precios tipo Excel con dólar y costos, con acceso según el puesto de cada usuario.' }
    ],
    links: [['Ver el catálogo ↗', 'https://industriasduenas.com/ekann/catalogo-accesorios.html']] },
  { id: 'juego', color: '#F1E32C', kicker: 'KREYN · Videojuego', title: 'Kreyn Road', tools: ['web', 'ia'],
    sum: 'Un arcade protagonizado por la grúa OD7000: esquiva patrullas, junta puntos y entra a la tabla de récords. Se juega en el navegador y en Android.',
    steps: [
      { k: 'Juégalo', t: 'Arranca la grúa', who: 'yo', d: 'Flechas o W/S para moverte. En celular, con los botones de la pantalla.', media: { live: 'https://industriasduenas.com/game/', poster: 'media/juego-inicio.jpg', label: 'Jugar', note: 'con sonido' } }
    ],
    links: [['Jugar en pantalla completa ↗', 'https://industriasduenas.com/game/'], ['Descargar para Android (APK)', 'https://industriasduenas.com/game/kreyn-road.apk']] }
];

// Proyectos escolares (UDN 2014–2017)
var ARCHIVO = [
  { t: 'Atlético Tapatío', d: 'Identidad de un equipo de fútbol: uniforme, logo y nombre.', l: 'Marca', i: ['atletico-jugador.webp', 'atletico-escudo.webp', 'atletico-equipo.webp'] },
  { t: 'Portada CD · Mute', d: 'Prototipo de CD para la banda canadiense de punk rock Mute.', l: 'Marca', i: ['cd-mockup.webp', 'cd-portada.webp', 'cd-camino.webp'] },
  { t: 'Tequila “El Bandido”', d: 'Presentación del producto y naming.', l: 'Marca', i: ['tequila-botella.webp', 'tequila-etiqueta.webp'] },
  { t: 'Bird Attack Magazine', d: 'Primer número de la revista del sello Bird Attack Records.', l: 'Editorial', i: ['revista-mockup.webp', 'revista-portada.webp'] },
  { t: 'Personaje y bocetos', d: 'Personaje con entorno e historia: boceto y modelo a escala.', l: 'Personaje', i: ['personaje-modelo.webp', 'personaje-boceto.webp'] },
  { t: 'Fotografía B/N', d: 'Retrato y fotografía nocturna urbana.', l: 'Fotografía', i: ['bn-1.webp', 'bn-2.webp', 'bn-3.webp', 'bn-4.webp', 'bn-5.webp', 'bn-6.webp', 'bn-7.webp'] },
  { t: 'Fotografía a color', d: 'Producto, bebidas y paisaje nocturno.', l: 'Fotografía', i: ['color-1.webp', 'color-2.webp', 'color-3.webp', 'color-4.webp', 'color-5.webp', 'color-6.webp', 'color-7.webp'] },
  { t: 'UDN Noticias', d: 'Sketch de un programa de televisión.', l: 'Video', i: ['udn-noticias.webp'] },
  { t: 'Resident Evil · trailer', d: 'Trailer de videojuego con técnicas de desplazamiento en After Effects.', l: 'Video', i: ['resident-evil.webp'] }
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

// ── Selector ────────────────────────────────────────────────────────────────
var roster = $('#roster'), cur = -1;
FIGHTERS.forEach(function (f, i) {
  var b = document.createElement('button');
  b.className = 'slot'; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', 'false'); b.setAttribute('aria-label', f.name);
  b.innerHTML = '<span class="in"><span class="mini">' + logo(f) + '</span><span class="nm">' + esc(f.id === 'web' ? 'Código' : f.name.split(' ')[0]) + '</span></span>';
  b.addEventListener('mouseenter', function () { if (!CEL.matches) pick(i); });
  b.addEventListener('focus', function () { pick(i); });
  b.addEventListener('click', function () { pick(i); lock(b); });
  roster.appendChild(b);
});
function pick(i) {
  if (i === cur) return;
  cur = i;
  var f = FIGHTERS[i];
  document.body.style.setProperty('--c', f.c);
  roster.querySelectorAll('.slot').forEach(function (s, k) { s.setAttribute('aria-selected', k === i); });
  $('#bigName').textContent = f.id === 'web' ? 'CÓDIGO' : f.name;
  var lb = $('#logoBig'); lb.innerHTML = logo(f); lb.classList.remove('enter'); void lb.offsetWidth; lb.classList.add('enter');
  $('#fClass').textContent = 'Clase · ' + f.clase;
  $('#fName').textContent = f.name;
  $('#fTag').textContent = f.tag;
  $('#fMoves').innerHTML = f.moves.map(function (m) { return '<li><span class="combo">' + esc(m[0]) + '</span><b>' + esc(m[1]) + '</b><span>' + esc(m[2]) + '</span></li>'; }).join('');
  var used = f.used.map(function (id) {
    var p = byId(PROJECTS, id), name = p ? p.title : 'Archivo escolar';
    return '<a href="#' + (p ? 'p-' + id : 'archivo') + '">' + esc(name) + '</a>';
  }).join('');
  $('#fUsed').innerHTML = used ? '<span class="cond">Lo usé en</span>' + used : '';
}
function lock(b) { b.classList.remove('locked'); void b.offsetWidth; b.classList.add('locked'); }
document.addEventListener('keydown', function (e) {
  if (document.querySelector('dialog[open]')) return;
  var r = roster.getBoundingClientRect();
  if (r.bottom < 0 || r.top > innerHeight) return; // solo con el selector a la vista
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    var n = (cur + (e.key === 'ArrowRight' ? 1 : -1) + FIGHTERS.length) % FIGHTERS.length;
    roster.children[n].focus();
  }
});
pick(0);

// Reloj decorativo de "elige personaje": 99 → 0 y vuelve a empezar
var t = 99, tEl = $('#timer');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(function () { t = t > 0 ? t - 1 : 99; tEl.textContent = t; }, 1000);

// ── Proyectos ───────────────────────────────────────────────────────────────
var WHO = { yo: 'Lo hice yo', ia: 'Lo hizo la IA', ambos: 'Yo + IA' };
function mediaHtml(m) {
  if (m.live) return '<div class="live" data-src="' + esc(m.live) + '"' + (m.mobileNewTab ? ' data-newtab="1"' : '') + '>' +
    '<img class="poster" src="' + esc(m.poster) + '" alt="" loading="lazy"><button class="play"><i>▶</i>' + esc(m.label) + '<small>' + esc(m.note || '') + '</small></button></div>';
  if (m.video) return '<div class="media' + (m.phone ? ' phone' : '') + '"><video muted loop playsinline preload="none"' + (m.controls ? ' controls' : '') +
    ' data-src="' + esc(m.video) + '" poster="' + esc(m.poster || '') + '"></video></div>';
  return '<button class="media' + (m.phone ? ' phone' : '') + '" data-full="' + esc(m.img) + '"><img src="' + esc(m.img) + '" alt="' + esc(m.cap || '') + '" loading="lazy">' +
    (m.cap ? '<span class="cap">' + esc(m.cap) + '</span>' : '') + '</button>';
}
$('#projList').innerHTML = PROJECTS.map(function (p, i) {
  return '<article class="proj" id="p-' + p.id + '" style="--pc:' + p.color + '">' +
    '<header class="proj-top rv"><span class="proj-n">' + String(i + 1).padStart(2, '0') + '</span><p class="cond">' + esc(p.kicker) + '</p><h3>' + esc(p.title) + '</h3>' +
      '<div><p class="sum">' + esc(p.sum) + '</p><div class="proj-tools">' + p.tools.map(function (id) { var f = byId(FIGHTERS, id); return '<span title="' + esc(f.name) + '">' + logo(f) + '</span>'; }).join('') + '</div></div></header>' +
    (p.stats ? '<div class="stats rv">' + p.stats.map(function (s) { return '<div><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>'; }).join('') + '</div>' : '') +
    '<div class="steps">' + p.steps.map(function (s) {
      return '<div class="step rv' + (!s.media ? ' solo' : s.media.live ? ' wide' : '') + '"><div class="txt"><span class="k">' + esc(s.k) + '</span><h4>' + esc(s.t) + '</h4><p>' + esc(s.d) + '</p>' +
        (s.who ? '<span class="who ' + s.who + '">' + WHO[s.who] + '</span>' : '') + '</div>' + (s.media ? mediaHtml(s.media) : '') + '</div>';
    }).join('') + '</div>' +
    (p.links ? '<div class="links">' + p.links.map(function (l) { return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener"' + (/\.apk$/.test(l[1]) ? ' download' : '') + '>' + esc(l[0]) + '</a>'; }).join('') + '</div>' : '') +
    '</article>';
}).join('');

// Demos en vivo: solo se cargan al presionar (pesan varios MB / traen sonido).
// El visor 3D en celular se abre aparte: está hecho para pantalla completa.
document.querySelectorAll('.live .play').forEach(function (b) {
  b.onclick = function () {
    var box = b.parentNode;
    if (box.dataset.newtab && CEL.matches) { window.open(box.dataset.src, '_blank', 'noopener'); return; }
    var f = document.createElement('iframe');
    f.src = box.dataset.src; f.allow = 'fullscreen; autoplay'; f.allowFullscreen = true; f.title = b.textContent;
    box.innerHTML = ''; box.appendChild(f);
  };
});

// Videos: se cargan y reproducen solo cuando están a la vista
var vio = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    var v = e.target;
    if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(function () {}); } else v.pause();
  });
}, { threshold: 0.25 }) : null;
document.querySelectorAll('video[data-src]').forEach(function (v) { if (vio) vio.observe(v); else v.src = v.dataset.src; });

// ── Archivo escolar ─────────────────────────────────────────────────────────
var strip = $('#strip');
ARCHIVO.forEach(function (p, k) {
  var b = document.createElement('button');
  b.className = 'shot';
  b.innerHTML = '<div class="img"><img loading="lazy" alt="' + esc(p.t) + '" src="' + p.i[0] + '"></div><b>' + esc(p.t) + '</b><span>' + esc(p.l + (p.i.length > 1 ? ' · ' + p.i.length + ' imágenes' : '')) + '</span>';
  b.onclick = function () { openLb(p.i, p.t + ' — ' + p.d); };
  strip.appendChild(b);
});

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
$('#pv').onclick = function () { stepLb(-1); };
$('#nx').onclick = function () { stepLb(1); };
$('#cl').onclick = function () { lb.close(); };
lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') stepLb(1); if (e.key === 'ArrowLeft') stepLb(-1); });
document.querySelectorAll('button.media[data-full]').forEach(function (b) {
  b.onclick = function () { openLb([b.dataset.full], b.querySelector('img').alt || ''); };
});

// Aparición al hacer scroll
var rv = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  rv.forEach(function (el) { io.observe(el); });
} else rv.forEach(function (el) { el.classList.add('in'); });
