
/*Menu Desplegable*/
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
/*Menu Desplegable*/

/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
const AdminLogged = true

window.onload = function() {
    const AdminUser = document.getElementById("AdminUser");
    if (AdminLogged) {
        AdminUser.style.display = "block" ;
    } else {
        AdminUser.style.display = "none" ;
    }
}
/* Mostrar opcion de administrador si el admin es el usuario Logeado*/

/* Carrusel de peliculas*/
const CarrouselSlide = document.querySelector('.CarrouselSlide');
const CarrouselImages = document.querySelectorAll('.CarrouselSlide img');

let counter = 0;
const size = CarrouselImages[0].clientWidth;

CarrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function Slide() {
  if (counter >= CarrouselImages.length - 1) {
  CarrouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter = 0;
  } else {
    counter++;
    }
  CarrouselSlide.style.transform= 'translateX(' + (-size * counter) + 'px)';
}

setInterval(Slide, 3000);
/* Carrusel de peliculas*/


