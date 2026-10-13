// galeria.js — Galería en carrusel (coverflow) a todo el ancho: el proyecto elegido al centro y los demás a los lados,
// más chicos e inclinados. Cada trabajo se ve tal cual, en su propia proporción (sin marco ni fondo).
// Solo corre lo del centro: su video se reproduce con sonido y, si tiene varias imágenes, cambian solas.
// Debajo: puntos (uno por imagen), reproducir/pausa y sonido. Flechas de afuera = otro proyecto;
// flechas en los extremos de la imagen del centro = otra imagen del mismo proyecto.
// Cada pieza: t = título, d = descripción, k = etiqueta corta (opcional), y una de:
// i = [imágenes] (clic en la del centro = visor grande) o video + poster (mudo: true si el video no trae audio).
var PIEZAS = [
  { k: 'Trabajo · Industrias Dueñas', t: '21 aniversario de Industrias Dueñas', d: 'Video para redes editado en CapCut.', video: 'media/muestras/capcut-aniversario.mp4', poster: 'media/muestras/capcut-aniversario.jpg' },
  { t: 'Whatsername · Green Day', d: 'Video para la canción de Green Day que mezcla animación 3D con edición en CapCut: la portada de American Idiot se rasga al ritmo de la música.', video: 'media/muestras/gal-whatsername.mp4', poster: 'media/muestras/gal-whatsername.jpg' },
  { t: 'Wake the Dead · Comeback Kid', d: 'Video para la canción de Comeback Kid sobre despertar a los muertos en vida: animación 3D en Blender y edición en CapCut.', video: 'media/muestras/gal-wakethedead.mp4', poster: 'media/muestras/gal-wakethedead.jpg' },
  { t: 'Mitsubishi Motors · logo 3D', d: 'Animación del logotipo de Mitsubishi Motors, modelada, animada y renderizada en Blender.', video: 'media/muestras/gal-mitsubishi.mp4', poster: 'media/muestras/gal-mitsubishi.jpg', mudo: true },
  { t: 'Competencia de caballos', d: 'Edición de video de una competencia de caballos bailadores, con gráficos de los lugares y premios.', video: 'media/muestras/gal-caballos.mp4', poster: 'media/muestras/gal-caballos.jpg' },
  { k: 'Escuela · UDN', t: 'Atlético Tapatío', d: 'Identidad de un equipo de fútbol: uniforme, logo y nombre.', i: ['atletico-jugador.webp', 'atletico-escudo.webp', 'atletico-equipo.webp'] },
  { k: 'Escuela · UDN', t: 'Portada CD · Mute', d: 'Prototipo de CD para la banda canadiense de punk rock Mute.', i: ['cd-mockup.webp', 'cd-portada.webp', 'cd-camino.webp'] },
  { k: 'Escuela · UDN', t: 'Tequila “El Bandido”', d: 'Presentación del producto y naming.', i: ['tequila-botella.webp', 'tequila-etiqueta.webp'] },
  { k: 'Escuela · UDN', t: 'Bird Attack Magazine', d: 'Primer número de la revista del sello Bird Attack Records.', i: ['revista-mockup.webp', 'revista-portada.webp'] },
  { k: 'Escuela · UDN', t: 'Personaje y bocetos', d: 'Personaje con entorno e historia: boceto y modelo a escala.', i: ['personaje-modelo.webp', 'personaje-boceto.webp'] },
  { k: 'Escuela · UDN', t: 'Fotografía B/N', d: 'Retrato y fotografía nocturna urbana.', i: ['bn-1.webp', 'bn-2.webp', 'bn-3.webp', 'bn-4.webp', 'bn-5.webp', 'bn-6.webp', 'bn-7.webp'] },
  { k: 'Escuela · UDN', t: 'Fotografía a color', d: 'Producto, bebidas y paisaje nocturno.', i: ['color-1.webp', 'color-2.webp', 'color-3.webp', 'color-4.webp', 'color-5.webp', 'color-6.webp', 'color-7.webp'] }
];

var $ = function (s) { return document.querySelector(s); };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
var noop = function () {};

var cf = $('.cf'), stage = $('#cf'), dots = $('#cfDots'), info = $('#cfInfo'), bPlay = $('#cfPlay'), bSnd = $('#cfSnd');
var n = PIEZAS.length, cur = 0, img = 0, timer = 0;
var pausado = false;   // el visitante pausó (video o pase de imágenes)
var sonido = true;     // el visitante quiere sonido (botón Sonido)
var bloqueado = false; // el navegador no dejó arrancar con sonido: se activa al primer toque o tecla
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// proporción (ancho / alto) de cada imagen o video; se mide al cargar (antes de eso, cuadrada)
var AR = PIEZAS.map(function (p) { return p.video ? [16 / 9] : p.i.map(function () { return 1; }); });

// tarjetas: el archivo tal cual (img o video), sin marco
stage.innerHTML = PIEZAS.map(function (p, k) {
  return '<div class="cf-card" data-k="' + k + '">' + (p.video
    ? '<video src="' + esc(p.video) + '" poster="' + esc(p.poster) + '" muted loop playsinline preload="metadata"></video>'
    : '<img src="' + esc(p.i[0]) + '" alt="' + esc(p.t) + '" data-j="0" loading="' + (k < 6 || k > n - 4 ? 'eager' : 'lazy') + '">') + '</div>';
}).join('');
var cards = [].slice.call(stage.children);
cards.forEach(function (el, k) {
  var v = el.querySelector('video'), im = el.querySelector('img');
  if (v) v.addEventListener('loadedmetadata', function () { AR[k][0] = v.videoWidth / v.videoHeight; relayout(); });
  if (im) im.addEventListener('load', function () { AR[k][+im.dataset.j] = im.naturalWidth / im.naturalHeight; relayout(); });
});

// ── tamaños y posiciones ──
var H = 500, MAXW = 900, VIS = 4;
function medidas() {
  var W = innerWidth, mob = W <= 700;
  H = mob ? Math.min(innerHeight * .5, 440) : Math.max(320, Math.min(innerHeight * .6, 640));
  MAXW = mob ? W * .72 : Math.min(W * .6, 1100); // deja lugar a los lados para las flechas de la imagen
  VIS = mob ? 2 : 4;
  cf.style.setProperty('--H', H + 'px');
}
function tam(k) { // ancho y alto de la tarjeta: alto fijo, ancho según su proporción (sin pasarse de MAXW)
  var ar = AR[k][k === cur ? img : 0], h = H, w = h * ar, mw = k === cur ? MAXW : MAXW * .7;
  if (w > mw) { w = mw; h = w / ar; }
  return [w, h];
}
function desfase(k) { var o = k - cur; if (o > n / 2) o -= n; else if (o < -n / 2) o += n; return o; } // carrusel circular
function layout() {
  var por = {};
  cards.forEach(function (el, k) {
    var o = desfase(k), a = Math.abs(o), d = tam(k);
    por[o] = { el: el, k: k, w: d[0], h: d[1], a: a, sc: Math.max(.45, 1 - a * .14) };
  });
  // posición x: el centro en 0 y cada tarjeta lateral asomando ~la mitad detrás de la anterior
  var x = { 0: 0 };
  [1, -1].forEach(function (s) {
    for (var a = 1; a <= VIS; a++) {
      var p = por[s * (a - 1)], c = por[s * a]; if (!c) break;
      var ant = a === 1 ? p.w / 2 + 26 : p.w * p.sc * .28;
      x[s * a] = x[s * (a - 1)] + s * (ant + c.w * c.sc * .3);
    }
  });
  Object.keys(por).forEach(function (o) {
    var c = por[o], el = c.el, s = o < 0 ? -1 : 1;
    el.hidden = c.a > VIS;
    el.classList.toggle('on', c.a === 0);
    el.style.zIndex = 100 - c.a;
    el.style.width = c.w + 'px'; el.style.height = c.h + 'px';
    el.style.marginLeft = -c.w / 2 + 'px'; el.style.marginTop = -c.h / 2 + 'px';
    el.style.setProperty('--br', 1 - c.a * .18);
    el.style.transform = 'perspective(' + (innerWidth <= 700 ? 600 : 900) + 'px) translateX(' + (x[o] || 0) + 'px) translateZ(' + (-c.a * 120) + 'px) rotateY(' + (-s * 42 * Math.min(c.a, 1)) + 'deg) scale(' + c.sc + ')';
  });
}
var raf = 0;
function relayout() { cancelAnimationFrame(raf); raf = requestAnimationFrame(layout); }
addEventListener('resize', function () { medidas(); relayout(); });

// ── videos: solo se reproduce el del centro (con sonido); los de los lados quedan quietos ──
function videos() {
  cards.forEach(function (el, k) {
    var v = el.querySelector('video'); if (!v) return;
    var a = Math.abs(desfase(k));
    if (a === 0) return;
    v.muted = true; v.pause(); // solo se reproduce el del centro
  });
  var v = vCentro(); if (!v) return;
  v.muted = !sonido || PIEZAS[cur].mudo;
  if (pausado) { v.pause(); return; }
  v.play().catch(function () { // el navegador no deja sonido sin un toque: arranca mudo y se activa al primer toque
    bloqueado = true; v.muted = true; v.play().catch(noop); botones();
  });
}
function vCentro() { return cards[cur].querySelector('video'); }
function desbloquear() {
  if (!bloqueado) return;
  bloqueado = false;
  var v = vCentro(); if (v && sonido && !PIEZAS[cur].mudo) { v.muted = false; v.play().catch(noop); }
  botones();
}
['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) { document.addEventListener(ev, desbloquear, { passive: true }); });

// ── imágenes del centro: cambian solas; flechas en sus extremos ──
function pase() {
  clearInterval(timer);
  var p = PIEZAS[cur];
  if (!p.video && p.i.length > 1 && !pausado && !reduce) timer = setInterval(function () { verImg(img + 1); }, 3200);
}
function verImg(j) {
  var p = PIEZAS[cur]; if (p.video) return;
  var k = cur; j = (j + p.i.length) % p.i.length;
  var pre = new Image();
  pre.onload = function () {
    if (k !== cur) return;
    AR[k][j] = pre.naturalWidth / pre.naturalHeight;
    var im = cards[k].querySelector('img');
    im.classList.add('off');
    setTimeout(function () { im.dataset.j = j; im.src = p.i[j]; img = j; im.classList.remove('off'); layout(); }, 220);
  };
  pre.src = p.i[j];
  dots.querySelectorAll('button').forEach(function (b, x) { b.setAttribute('aria-current', x === j); });
}

// ── botones de abajo ──
function botones() {
  var p = PIEZAS[cur], multi = !p.video && p.i.length > 1;
  bPlay.hidden = !(p.video || multi);
  bPlay.textContent = pausado ? '▶  Reproducir' : '❚❚  Pausa';
  bPlay.setAttribute('aria-pressed', pausado);
  bSnd.hidden = !p.video || p.mudo;
  bSnd.textContent = sonido && !bloqueado ? 'Sonido: sí' : (sonido ? 'Toca para activar el sonido' : 'Sonido: no');
  bSnd.setAttribute('aria-pressed', sonido && !bloqueado);
}
bPlay.onclick = function () {
  pausado = !pausado;
  var v = vCentro();
  if (v) { if (pausado) v.pause(); else v.play().catch(noop); }
  pase(); botones();
};
bSnd.onclick = function () {
  if (bloqueado) { desbloquear(); return; }
  sonido = !sonido;
  var v = vCentro(); if (v) v.muted = !sonido;
  botones();
};

// ── cambiar de proyecto ──
function go(k) {
  var ant = cur;
  cur = (k + n) % n;
  if (ant !== cur) { // la imagen que se va del centro vuelve a su portada
    var im = cards[ant].querySelector('img');
    if (im && im.dataset.j !== '0') { im.dataset.j = 0; im.src = PIEZAS[ant].i[0]; }
    var fl = cards[ant].querySelectorAll('.cf-in'); fl.forEach(function (b) { b.remove(); });
  }
  img = 0; pausado = false;
  var p = PIEZAS[cur], multi = !p.video && p.i.length > 1;
  if (multi) cards[cur].insertAdjacentHTML('beforeend',
    '<button class="cf-in prev" type="button" aria-label="Imagen anterior">‹</button><button class="cf-in next" type="button" aria-label="Imagen siguiente">›</button>');
  dots.innerHTML = multi ? p.i.map(function (_, j) {
    return '<button type="button" aria-label="Imagen ' + (j + 1) + ' de ' + p.i.length + '"' + (j ? '' : ' aria-current="true"') + ' data-j="' + j + '"></button>';
  }).join('') : '';
  dots.hidden = !multi;
  info.innerHTML = (p.k ? '<p class="cf-k">' + esc(p.k) + '</p>' : '') + '<h2>' + esc(p.t) + '</h2><p>' + esc(p.d) + '</p>';
  layout(); videos(); pase(); botones();
}

stage.addEventListener('click', function (e) {
  var flecha = e.target.closest('.cf-in');
  if (flecha) { verImg(img + (flecha.classList.contains('next') ? 1 : -1)); pase(); return; }
  var c = e.target.closest('.cf-card'); if (!c) return;
  var k = +c.dataset.k;
  if (k !== cur) { go(k); return; }
  var p = PIEZAS[cur];
  if (p.video) bPlay.click(); // tocar el video del centro = pausa / reproducir
  else openLb(p.i, img, p.t + ' — ' + p.d); // la imagen del centro se abre en grande
});
dots.addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  verImg(+b.dataset.j); pase();
});
$('#cfPrev').onclick = function () { go(cur - 1); };
$('#cfNext').onclick = function () { go(cur + 1); };
document.addEventListener('keydown', function (e) {
  if (lb.open || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  if (e.key === 'ArrowRight') go(cur + 1);
  if (e.key === 'ArrowLeft') go(cur - 1);
});
var x0 = null; // deslizar con el dedo
stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
stage.addEventListener('touchend', function (e) {
  if (x0 === null) return;
  var dx = e.changedTouches[0].clientX - x0; x0 = null;
  if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
});

medidas();
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
lb.addEventListener('close', function () { verImg(lbIdx); pase(); }); // al cerrar, el centro se queda en la imagen que viste
