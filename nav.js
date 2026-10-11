/* nav.js — menú de hamburguesa en celular (≤720px): el botón ☰ abre y cierra la lista de páginas.
   Se cierra con Esc o tocando fuera del menú. En escritorio el botón no se ve y los enlaces van en línea. */
document.querySelectorAll('.menu-btn').forEach(function (btn) {
  var nav = btn.closest('nav');
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target)) set(false);
  });
});
