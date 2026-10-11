// galeria.js — Galería en carrusel (coverflow): el proyecto elegido al centro y los demás a los lados, inclinados.
// Si el proyecto del centro tiene varias imágenes, cambian solas ahí mismo (las de los lados no) y abajo salen
// puntos, uno por imagen. Debajo va la descripción del proyecto.
// Cada pieza: t = título, d = descripción, k = etiqueta corta (opcional), c = color, y una de:
// i = [imágenes] (clic en la del centro = visor grande) o video + poster.
var PIEZAS = [
  { k: 'Trabajo · Industrias Dueñas', c: '#F1E32C', t: '21 aniversario de Industrias Dueñas', d: 'Video para redes editado en CapCut.', video: 'media/muestras/capcut-aniversario.mp4', poster: 'media/muestras/capcut-aniversario.jpg' },
  { c: '#B5D452', t: 'Whatsername · Green Day', d: 'Animación vertical para la canción de Green Day, con la portada de American Idiot rasgándose al ritmo de la música.', video: 'media/muestras/gal-whatsername.mp4', poster: 'media/muestras/gal-whatsername.jpg' },
  { c: '#E4002B', t: 'Mitsubishi Motors · logo 3D', d: 'Animación 3D del logotipo de Mitsubishi Motors.', video: 'media/muestras/gal-mitsubishi.mp4', poster: 'media/muestras/gal-mitsubishi.jpg' },
  { c: '#D9A441', t: 'Competencia de caballos', d: 'Edición de video de una competencia de caballos bailadores, con gráficos de los lugares y premios.', video: 'media/muestras/gal-caballos.mp4', poster: 'media/muestras/gal-caballos.jpg' },
  { k: 'Escuela · UDN', c: '#E4002B', t: 'Atlético Tapatío', d: 'Identidad de un equipo de fútbol: uniforme, logo y nombre.', i: ['atletico-jugador.webp', 'atletico-escudo.webp', 'atletico-equipo.webp'] },
  { k: 'Escuela · UDN', c: '#C4FF2E', t: 'Portada CD · Mute', d: 'Prototipo de CD para la banda canadiense de punk rock Mute.', i: ['cd-mockup.webp', 'cd-portada.webp', 'cd-camino.webp'] },
  { k: 'Escuela · UDN', c: '#D9A441', t: 'Tequila “El Bandido”', d: 'Presentación del producto y naming.', i: ['tequila-botella.webp', 'tequila-etiqueta.webp'] },
  { k: 'Escuela · UDN', c: '#FF3366', t: 'Bird Attack Magazine', d: 'Primer número de la revista del sello Bird Attack Records.', i: ['revista-mockup.webp', 'revista-portada.webp'] },
  { k: 'Escuela · UDN', c: '#9999FF', t: 'Personaje y bocetos', d: 'Personaje con entorno e historia: boceto y modelo a escala.', i: ['personaje-modelo.webp', 'personaje-boceto.webp'] },
  { k: 'Escuela · UDN', c: '#E8E8E8', t: 'Fotografía B/N', d: 'Retrato y fotografía nocturna urbana.', i: ['bn-1.webp', 'bn-2.webp', 'bn-3.webp', 'bn-4.webp', 'bn-5.webp', 'bn-6.webp', 'bn-7.webp'] },
  { k: 'Escuela · UDN', c: '#31A8FF', t: 'Fotografía a color', d: 'Producto, bebidas y paisaje nocturno.', i: ['color-1.webp', 'color-2.webp', 'color-3.webp', 'color-4.webp', 'color-5.webp', 'color-6.webp', 'color-7.webp'] }
];

var $ = function (s) { return document.querySelector(s); };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
var cover = function (p) { return p.video ? p.poster : p.i[0]; };

var stage = $('#cf'), dots = $('#cfDots'), info = $('#cfInfo'), cur = 0, img = 0, timer = 0;
var VISIBLES = 3; // cuántas tarjetas se ven a cada lado
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// tarjetas: cada una con su portada (con la misma imagen difuminada detrás, para no recortar el trabajo)
stage.innerHTML = PIEZAS.map(function (p, k) {
  var c = cover(p);
  return '<button class="cf-card" type="button" data-k="' + k + '" style="--c:' + p.c + '" aria-label="' + esc(p.t) + '">' +
    '<span class="cf-blur" style="background-image:url(' + esc(c) + ')"></span>' +
    '<span class="cf-media"><img src="' + esc(c) + '" alt="" loading="' + (k < 4 ? 'eager' : 'lazy') + '"></span>' +
    (p.video ? '<span class="cf-play" aria-hidden="true">▶</span>' : '') + '</button>';
}).join('');
var cards = [].slice.call(stage.children);

function layout() {
  var n = PIEZAS.length;
  cards.forEach(function (el, k) {
    var o = k - cur;
    if (o > n / 2) o -= n; else if (o < -n / 2) o += n; // carrusel circular
    var a = Math.abs(o), s = o < 0 ? -1 : 1;
    el.style.setProperty('--o', o);
    el.style.setProperty('--a', a);
    el.style.setProperty('--s', s);
    el.style.zIndex = 100 - a;
    el.classList.toggle('on', o === 0);
    el.hidden = a > VISIBLES;
    el.tabIndex = o === 0 ? 0 : -1;
    el.setAttribute('aria-current', o === 0);
  });
}

// el centro: video que se reproduce, o las imágenes del proyecto cambiando solas
function center() {
  clearInterval(timer);
  cards.forEach(function (el, k) { // las tarjetas de los lados vuelven a su portada
    if (k === cur) return;
    var m = el.querySelector('.cf-media'), c = cover(PIEZAS[k]);
    if (!m.querySelector('img:only-child') || m.querySelector('img').getAttribute('src') !== c) {
      m.innerHTML = '<img src="' + esc(c) + '" alt="" loading="lazy">';
      el.querySelector('.cf-blur').style.backgroundImage = 'url(' + c + ')';
    }
  });
  var p = PIEZAS[cur], el = cards[cur], m = el.querySelector('.cf-media');
  img = 0;
  if (p.video) {
    m.innerHTML = '<video src="' + esc(p.video) + '" poster="' + esc(p.poster) + '" muted loop playsinline autoplay controls preload="metadata"></video>';
    var v = m.querySelector('video'); v.play && v.play().catch(function () {});
  } else {
    m.innerHTML = p.i.map(function (src, j) { return '<img src="' + esc(src) + '" alt="' + esc(p.t + (p.i.length > 1 ? ' (' + (j + 1) + ' de ' + p.i.length + ')' : '')) + '"' + (j ? ' class="off"' : '') + '>'; }).join('');
    if (p.i.length > 1 && !reduce) timer = setInterval(function () { showImg(img + 1); }, 3200);
  }
  dots.innerHTML = !p.video && p.i.length > 1 ? p.i.map(function (_, j) {
    return '<button type="button" aria-label="Imagen ' + (j + 1) + ' de ' + p.i.length + '"' + (j ? '' : ' aria-current="true"') + ' data-j="' + j + '"></button>';
  }).join('') : '';
  dots.hidden = !dots.innerHTML;
  document.body.style.setProperty('--c', p.c);
  info.innerHTML = (p.k ? '<p class="cf-k">' + esc(p.k) + '</p>' : '') + '<h2>' + esc(p.t) + '</h2><p>' + esc(p.d) + '</p>';
}
function showImg(j) {
  var p = PIEZAS[cur]; if (p.video) return;
  img = (j + p.i.length) % p.i.length;
  var imgs = cards[cur].querySelectorAll('.cf-media img');
  imgs.forEach(function (x, k) { x.classList.toggle('off', k !== img); });
  cards[cur].querySelector('.cf-blur').style.backgroundImage = 'url(' + p.i[img] + ')';
  dots.querySelectorAll('button').forEach(function (b, k) { b.setAttribute('aria-current', k === img); });
}
function go(k) {
  var n = PIEZAS.length;
  cur = (k + n) % n;
  layout(); center();
}

stage.addEventListener('click', function (e) {
  var c = e.target.closest('.cf-card'); if (!c) return;
  var k = +c.dataset.k;
  if (k !== cur) { go(k); return; }
  var p = PIEZAS[cur];
  if (!p.video) openLb(p.i, img, p.t + ' — ' + p.d); // la del centro: se abre en grande
});
dots.addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  clearInterval(timer); showImg(+b.dataset.j); // al elegir una, deja de cambiar sola
});
$('#cfPrev').onclick = function () { go(cur - 1); };
$('#cfNext').onclick = function () { go(cur + 1); };
document.addEventListener('keydown', function (e) {
  if (lb.open || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  if (e.key === 'ArrowRight') go(cur + 1);
  if (e.key === 'ArrowLeft') go(cur - 1);
});
// deslizar con el dedo
var x0 = null;
stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
stage.addEventListener('touchend', function (e) {
  if (x0 === null) return;
  var dx = e.changedTouches[0].clientX - x0; x0 = null;
  if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
});

go(0);

// ── Visor de imágenes ──
var lb = $('#lb'), lbImgs = [], lbIdx = 0, lbTxt = '';
function openLb(imgs, i, txt) { clearInterval(timer); lbImgs = imgs; lbIdx = i; lbTxt = txt; showLb(); lb.showModal(); }
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
lb.addEventListener('close', function () { showImg(lbIdx); }); // al cerrar, el centro se queda en la imagen que viste
