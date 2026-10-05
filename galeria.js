// galeria.js — Galería: los trabajos que no caben en el selector de Habilidades.
// Cada pieza: t = título, d = descripción, g = grupo (filtro), c = color, y una de:
// i = [imágenes] (clic = visor), video + poster, o link + poster (abre la página en vivo en otra pestaña).
var PIEZAS = [
  { g: 'KREYN', c: '#F1E32C', t: '21 aniversario de Industrias Dueñas', d: 'Video para redes editado en CapCut.', video: 'media/muestras/capcut-aniversario.mp4', poster: 'media/muestras/capcut-aniversario.jpg' },
  { g: 'Escuela', c: '#E4002B', t: 'Atlético Tapatío', d: 'Identidad de un equipo de fútbol: uniforme, logo y nombre.', i: ['atletico-jugador.webp', 'atletico-escudo.webp', 'atletico-equipo.webp'] },
  { g: 'Escuela', c: '#C4FF2E', t: 'Portada CD · Mute', d: 'Prototipo de CD para la banda canadiense de punk rock Mute.', i: ['cd-mockup.webp', 'cd-portada.webp', 'cd-camino.webp'] },
  { g: 'Escuela', c: '#D9A441', t: 'Tequila “El Bandido”', d: 'Presentación del producto y naming.', i: ['tequila-botella.webp', 'tequila-etiqueta.webp'] },
  { g: 'Escuela', c: '#FF3366', t: 'Bird Attack Magazine', d: 'Primer número de la revista del sello Bird Attack Records.', i: ['revista-mockup.webp', 'revista-portada.webp'] },
  { g: 'Escuela', c: '#9999FF', t: 'Personaje y bocetos', d: 'Personaje con entorno e historia: boceto y modelo a escala.', i: ['personaje-modelo.webp', 'personaje-boceto.webp'] },
  { g: 'Escuela', c: '#E8E8E8', t: 'Fotografía B/N', d: 'Retrato y fotografía nocturna urbana.', i: ['bn-1.webp', 'bn-2.webp', 'bn-3.webp', 'bn-4.webp', 'bn-5.webp', 'bn-6.webp', 'bn-7.webp'] },
  { g: 'Escuela', c: '#31A8FF', t: 'Fotografía a color', d: 'Producto, bebidas y paisaje nocturno.', i: ['color-1.webp', 'color-2.webp', 'color-3.webp', 'color-4.webp', 'color-5.webp', 'color-6.webp', 'color-7.webp'] },
  { g: 'Escuela', c: '#EA77FF', t: 'UDN Noticias', d: 'Sketch de un programa de televisión.', i: ['udn-noticias.webp'] },
  { g: 'Escuela', c: '#C4161C', t: 'Resident Evil · trailer', d: 'Trailer de videojuego con técnicas de desplazamiento en After Effects.', i: ['resident-evil.webp'] }
];

var $ = function (s) { return document.querySelector(s); };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

var GRUPOS = ['Todo', 'KREYN', 'Escuela'], NOMBRE = { KREYN: 'Trabajo', Escuela: 'Escuela · UDN 2014–2017' };
$('#filtros').innerHTML = GRUPOS.map(function (g, k) { return '<button role="tab" aria-selected="' + !k + '" data-g="' + g + '">' + esc(NOMBRE[g] || g) + '</button>'; }).join('');
$('#filtros').onclick = function (e) {
  var b = e.target.closest('button'); if (!b) return;
  this.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-selected', x === b); });
  document.querySelectorAll('.pieza').forEach(function (p) { p.hidden = b.dataset.g !== 'Todo' && p.dataset.g !== b.dataset.g; });
};

$('#grid').innerHTML = PIEZAS.map(function (p, k) {
  var media = p.video
    ? '<video src="' + esc(p.video) + '" poster="' + esc(p.poster) + '" controls playsinline preload="none"></video>'
    : p.link
    ? '<a class="m live-link" href="' + esc(p.link) + '" target="_blank" rel="noopener"><img src="' + esc(p.poster) + '" alt="' + esc(p.t) + '" loading="lazy"><i>▶</i><b>Abrir en vivo ↗</b></a>'
    : '<button class="m" data-k="' + k + '"><img src="' + esc(p.i[0]) + '" alt="' + esc(p.t) + '" loading="lazy">' + (p.i.length > 1 ? '<span>' + p.i.length + ' imágenes</span>' : '') + '</button>';
  return '<article class="pieza" data-g="' + p.g + '" style="--c:' + p.c + '">' + media + '<h2>' + esc(p.t) + '</h2><p>' + esc(p.d) + '</p></article>';
}).join('');
$('#grid').addEventListener('click', function (e) {
  var b = e.target.closest('button.m'); if (!b) return;
  var p = PIEZAS[+b.dataset.k]; openLb(p.i, p.t + ' — ' + p.d);
});

// ── Visor de imágenes ──
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
