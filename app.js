// app.js — página Trabajo: tira del archivo escolar + visor de imágenes + aparición al hacer scroll.
var P = [
  { t: 'Atlético Tapatío', d: 'Identidad de un equipo de fútbol: uniforme, logo y nombre. El cliente solo eligió la colorimetría y no dio brief.', l: 'Marca', i: ['atletico-jugador.webp', 'atletico-escudo.webp', 'atletico-equipo.webp'] },
  { t: 'Portada CD · Mute', d: 'Prototipo de CD basado en la identidad de la banda canadiense de punk rock Mute.', l: 'Marca', i: ['cd-mockup.webp', 'cd-portada.webp', 'cd-camino.webp'] },
  { t: 'Tequila “El Bandido”', d: 'Prototipo de tequila: presentación del producto y naming según las características acordadas.', l: 'Marca', i: ['tequila-botella.webp', 'tequila-etiqueta.webp'] },
  { t: 'Bird Attack Magazine', d: 'Primer número de la revista del sello discográfico Bird Attack Records.', l: 'Editorial', i: ['revista-mockup.webp', 'revista-portada.webp'] },
  { t: 'Personaje y bocetos', d: 'Un personaje con entorno e historia: boceto y modelo a escala.', l: 'Personaje', i: ['personaje-modelo.webp', 'personaje-boceto.webp'] },
  { t: 'Fotografía B/N', d: 'Retrato y fotografía nocturna urbana.', l: 'Fotografía', i: ['bn-1.webp', 'bn-2.webp', 'bn-3.webp', 'bn-4.webp', 'bn-5.webp', 'bn-6.webp', 'bn-7.webp'] },
  { t: 'Fotografía a color', d: 'Producto, bebidas y paisaje nocturno.', l: 'Fotografía', i: ['color-1.webp', 'color-2.webp', 'color-3.webp', 'color-4.webp', 'color-5.webp', 'color-6.webp', 'color-7.webp'] },
  { t: 'UDN Noticias', d: 'Sketch de un programa de televisión para practicar edición multimedia.', l: 'Video', i: ['udn-noticias.webp'] },
  { t: 'Resident Evil · trailer', d: 'Edición de un trailer de videojuego con varias técnicas de desplazamiento en After Effects.', l: 'Video', i: ['resident-evil.webp'] }
];

var strip = document.getElementById('strip'), lb = document.getElementById('lb');
if (strip && lb) {
  var cur = 0, idx = 0;
  P.forEach(function (p, k) {
    var b = document.createElement('button');
    b.className = 'shot';
    b.innerHTML = '<div class="img"><img loading="lazy" alt=""></div><h3></h3><span></span>';
    b.querySelector('img').src = p.i[0];
    b.querySelector('img').alt = p.t;
    b.querySelector('h3').textContent = p.t;
    b.querySelector('span').textContent = p.l + (p.i.length > 1 ? ' · ' + p.i.length + ' imágenes' : '');
    b.onclick = function () { cur = k; idx = 0; show(); lb.showModal(); };
    strip.appendChild(b);
  });
  function show() {
    var p = P[cur], im = lb.querySelector('img');
    im.src = p.i[idx]; im.alt = p.t;
    lb.querySelector('p').textContent = p.t + ' — ' + p.d;
    document.getElementById('ct').textContent = (idx + 1) + ' / ' + p.i.length;
  }
  function step(d) { var n = P[cur].i.length; idx = (idx + d + n) % n; show(); }
  document.getElementById('pv').onclick = function () { step(-1); };
  document.getElementById('nx').onclick = function () { step(1); };
  document.getElementById('cl').onclick = function () { lb.close(); };
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); });
}

// Pruébalo: el visor 3D y el juego solo se cargan al presionar (pesan varios MB y el juego trae música)
// En celular el visor 3D está hecho para pantalla completa (dentro de un recuadro dibuja su propio marco):
// ahí se abre en otra pestaña en vez de incrustarlo.
var CEL = window.matchMedia('(max-width: 768px)');
function cargar(frame) {
  if (frame.querySelector('iframe')) return;
  if (frame.id === 'frame3d' && CEL.matches) { window.open(frame.dataset.src, '_blank', 'noopener'); return; }
  var f = document.createElement('iframe');
  f.src = frame.dataset.src;
  f.title = frame.id === 'frameGame' ? 'Kreyn Road' : 'Visor 3D';
  f.allow = 'fullscreen; autoplay';
  f.allowFullscreen = true;
  frame.innerHTML = '';
  frame.appendChild(f);
}
document.querySelectorAll('.lv-load').forEach(function (b) { b.onclick = function () { cargar(b.parentNode); }; });
document.querySelectorAll('.lv-tabs button').forEach(function (b, _, all) {
  b.onclick = function () {
    all.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    var frame = document.getElementById('frame3d'), f = frame.querySelector('iframe');
    frame.dataset.src = b.dataset.src;
    document.getElementById('open3d').href = b.dataset.src;
    if (f) f.src = b.dataset.src; else if (!CEL.matches) cargar(frame); // en computadora, elegir modelo también carga el visor
  };
});

// Aparición suave de bloques (.rv) al entrar en pantalla
var rv = document.querySelectorAll('.rv');
if (rv.length && 'IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  rv.forEach(function (el) { io.observe(el); });
} else rv.forEach(function (el) { el.classList.add('in'); });
