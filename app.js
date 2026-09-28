var P=[{"t": "Atlético Tapatío", "d": "Identidad de un equipo de fútbol: uniforme, logo y nombre. El cliente solo eligió la colorimetría y no dio brief.", "cat": "marca", "l": "Marca", "i": ["atletico-jugador.webp", "atletico-escudo.webp", "atletico-equipo.webp"]}, {"t": "Portada CD · Mute", "d": "Prototipo de CD basado en la identidad de la banda canadiense de punk rock Mute.", "cat": "marca", "l": "Marca", "i": ["cd-mockup.webp", "cd-portada.webp", "cd-camino.webp"]}, {"t": "Tequila “El Bandido”", "d": "Prototipo de tequila: presentación del producto y naming según las características acordadas.", "cat": "marca", "l": "Marca", "i": ["tequila-botella.webp", "tequila-etiqueta.webp"]}, {"t": "Bird Attack Punk Rock Magazine", "d": "Primer número de la revista del sello discográfico Bird Attack Records.", "cat": "editorial", "l": "Editorial", "i": ["revista-mockup.webp", "revista-portada.webp"]}, {"t": "Personaje y bocetos", "d": "Un personaje con entorno e historia: boceto y modelo a escala.", "cat": "personaje", "l": "Personaje", "i": ["personaje-modelo.webp", "personaje-boceto.webp"]}, {"t": "Fotografía blanco y negro", "d": "Retrato y fotografía nocturna urbana.", "cat": "foto", "l": "Fotografía", "i": ["bn-1.webp", "bn-2.webp", "bn-3.webp", "bn-4.webp", "bn-5.webp", "bn-6.webp", "bn-7.webp"]}, {"t": "Fotografía a color", "d": "Producto, bebidas y paisaje nocturno.", "cat": "foto", "l": "Fotografía", "i": ["color-1.webp", "color-2.webp", "color-3.webp", "color-4.webp", "color-5.webp", "color-6.webp", "color-7.webp"]}, {"t": "UDN Noticias", "d": "Sketch de un programa de televisión para crear una imagen y practicar funciones de edición multimedia.", "cat": "video", "l": "Video", "i": ["udn-noticias.webp"]}, {"t": "Resident Evil · trailer", "d": "Edición de un trailer de videojuego con varias técnicas de desplazamiento en After Effects.", "cat": "video", "l": "Video", "i": ["resident-evil.webp"]}];
var S=[["Diseño para redes", "Diseño de piezas para redes sociales."], ["Edición de video", "Edición de video para redes y proyectos audiovisuales."], ["Creación de contenido", "Creación de contenido para redes sociales."], ["Marketing e identidad corporativa", "Responsable del marketing de Industrias Dueñas (KREYN): sitio web, redes sociales, identidad corporativa y formatos."], ["Fotografía", "Fotografía en blanco y negro y a color: retrato, producto y nocturna."], ["IA en el flujo de trabajo", "Uso de IA para mejorar y optimizar mi flujo de trabajo."]];
var box=document.getElementById("skills");
if(box)S.forEach(function(s){
  var b=document.createElement("button");b.className="skill";b.setAttribute("aria-expanded","false");
    b.innerHTML="<h3>"+s[0]+"</h3><small>"+s[1]+"</small>";
  b.onclick=function(){b.setAttribute("aria-expanded",b.getAttribute("aria-expanded")!=="true")};
  box.appendChild(b);
});
var grid=document.getElementById("grid");
if(grid){
  var lb=document.getElementById("lb"),cur=0,idx=0;
  P.forEach(function(p,k){
    var c=document.createElement("button");c.className="card";c.dataset.cat=p.cat;
    c.innerHTML="<div class='thumb'><img alt='"+p.t.replace(/'/g,"")+"' src='"+(window.IMGDATA&&IMGDATA[p.i[0]]||p.i[0])+"' loading='lazy'></div><h3>"+p.t+"</h3><p>"+p.d+"</p><b>"+p.l+(p.i.length>1?" · "+p.i.length+" imágenes":"")+"</b>";
    c.onclick=function(){cur=k;idx=0;show();lb.showModal()};grid.appendChild(c);
  });
  function show(){var p=P[cur],im=lb.querySelector("img");im.src=(window.IMGDATA&&IMGDATA[p.i[idx]])||p.i[idx];im.alt=p.t;lb.querySelector("a").href=p.i[idx];lb.querySelector("p").textContent=p.t+" — "+p.d;document.getElementById("ct").textContent=(idx+1)+" / "+p.i.length}
  function step(d){var n=P[cur].i.length;idx=(idx+d+n)%n;show()}
  document.getElementById("pv").onclick=function(){step(-1)};
  document.getElementById("nx").onclick=function(){step(1)};
  document.getElementById("cl").onclick=function(){lb.close()};
  lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
  lb.addEventListener("keydown",function(e){if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});
  var fb=document.querySelectorAll("#filters button");
  fb.forEach(function(b){b.onclick=function(){
    fb.forEach(function(x){x.setAttribute("aria-pressed",x===b)});
    document.querySelectorAll("#grid .card").forEach(function(c){c.hidden=!(b.dataset.f==="todos"||c.dataset.cat===b.dataset.f)});
  }});
}
