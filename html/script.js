window.onscroll = function() {myFunction()};

var menu = document.querySelector('.menu');
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
imagenes = [
  {
  "url":"img/R(1).jpg",
  "nombre":"Proyecto 1",
  "descripcion":"Esta es la imagen numero 1 la cual nos muestra vinos"
},
{
  "url":"img/R(1).jpg",
  "nombre":"Proyecto 1",
  "descripcion":"Esta es la imagen numero 2 la cual nos muestra vinos"
},
{
  "url":"img/R(1).jpg",
  "nombre":"Proyecto 1",
  "descripcion":"Esta es la imagen numero 2 la cual nos muestra vinos"
},
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = '<img class="img" src="${imagenes[actual].url" alt="imagen vinos"loading="lazy"></img>'
    texto.innerHTML =' <h3>Proyecto1</h3> <p>este es un vinos tatatsgsjdiks</p> '
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ' <img class="img" src="${imagenes[actual].url" alt="imagen vinos"loading="lazy""></img>'
    texto.innerHTML = '<h3>Proyecto1</h3> <p>este es un vinos tatatsgsjdiks</p>'
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}