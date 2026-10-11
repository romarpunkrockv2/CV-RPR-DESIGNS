/* intro.js — bienvenida de Inicio. Solo actúa si <html> trae la clase "intro" (la pone el script del <head>).
   Al tocar Entrar (html.go): el velo se va y el video pasa de B/N a color al mismo tiempo, el logo vuela a su lugar en
   el menú mientras el menú baja, y aparece Sobre mí. Al final se quita todo y la página queda normal.
   El video es el mismo de la portada: sigue corriendo sin reiniciarse. Tiempos en inicio.css (sección BIENVENIDA). */
(function () {
  var html = document.documentElement, intro = document.getElementById('intro');
  if (!intro) return;
  if (!html.classList.contains('intro')) { intro.remove(); return; }

  var nav = document.querySelector('nav'), main = document.querySelectorAll('nav, .yo-hero, main');
  var logo = intro.querySelector('.intro-logo'), navLogo = nav.querySelector('.me img'), btn = intro.querySelector('.intro-btn');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  main.forEach(function (el) { el.inert = true; });
  btn.focus();

  btn.addEventListener('click', function () {
    if (html.classList.contains('go')) return;
    // destino del logo: el logo del menú en su posición final (el menú está arriba, fuera de la pantalla)
    var a = logo.getBoundingClientRect(), b = navLogo.getBoundingClientRect(), s = b.height / a.height;
    logo.style.transform = 'translate(' + (b.left - a.left) + 'px,' + (b.top + nav.offsetHeight - a.top) + 'px) scale(' + s + ')';
    html.classList.add('go');
    // el logo llega junto con el menú: se cambia por el del menú
    setTimeout(function () { html.classList.add('listo'); }, 1050);
    // fin: todo queda como la página normal
    setTimeout(function () {
      main.forEach(function (el) { el.inert = false; });
      html.classList.remove('intro', 'go', 'listo');
      intro.remove();
    }, 1900);
  });
})();
