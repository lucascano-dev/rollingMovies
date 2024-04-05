const sectionCarrusel = document.getElementById('contenedor-carruseles');
// let allMovies = JSON.parse(localStorage.getItem('movies')) || [];
let allMovies = JSON.parse(localStorage.getItem('movies')) || [];
const carouselDestacado = document.getElementById('carrusel-destacado');
const moviesDestacado = allMovies.filter((movie) => movie.isDestacado && movie.isPublicado);
const btnContacto = document.getElementById('btn-contacto');
const btnAcercaDe = document.getElementById('btn-acerca-de');

//Carga de contenido destacado
let carouselItemsHTML = '';
moviesDestacado.forEach((movie, index) => {
  carouselItemsHTML += `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <button type="button" class="SlideButton">
        <img class="card-img-top imgButton" src="${movie.urlImagen}" alt="${
    movie.desceripcionImagen
  }" style="width: 100%; height: 100%;" />
      </button>
    </div>
  `;
});
// Insertar el HTML en el carousel-inner
carouselDestacado.innerHTML = carouselItemsHTML;

const categoriasUnicas = Array.from(new Set(allMovies.map((movie) => movie.categoria)));

categoriasUnicas.forEach((categoria) => {
  // Filtrar las películas que pertenecen a esta categoría
  const moviesInCategory = allMovies.filter((movie) => movie.categoria === categoria && movie.isPublicado);

  // Verificar si hay películas en esta categoría
  if (moviesInCategory.length > 0) {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1 class="text-center">${categoria}</h1>
      <div class="carousel">
      <div id="slider${categoria}" class="carousel-items d-flex align-items-center">
      ${moviesInCategory
        .map(
          (movie) => `
            <div class="card" onclick=alert(${movie.id})>
              <img src="${movie.urlImagen}"  alt="${movie.nombre}">
            </div>
          `
        )
        .join('')}
        </div>
      </div>`;
    sectionCarrusel.appendChild(div);
  }
});

function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

const AdminUser = document.getElementById('AdminUser');

if (localStorage.getItem('userLogged') !== undefined) {
  const AdminLogged = JSON.parse(localStorage.getItem('userLogged'));

  if (AdminLogged !== null) {
    const isAdminLogged = AdminLogged.userRol == 0 ? true : false;
    if (isAdminLogged) {
      AdminUser.style.display = 'block';
    } else {
      AdminUser.style.display = 'none';
    }
  }
}

btnAcercaDe.addEventListener('click', () => {
  window.location.href = './pages/acercade.html';
});

btnContacto.addEventListener('click', () => {
  window.location.href = './pages/contacto.html';
});

const adminHandler = () => {
  if (window.location.href.includes('index')) {
    window.location.href = './pages/panel-admin/index.html';
  }
  if (
    window.location.href.includes('contacto') ||
    window.location.href.includes('404') ||
    window.location.href.includes('acercade')
  ) {
    window.location.href = './panel-admin/index.html';
  }
};

const to404 = () => {
  if (window.location.href.includes('index')) {
    window.location.href = './pages/404.html';
  }
  if (window.location.href.includes('contacto') || window.location.href.includes('acercade')) {
    window.location.href = './404.html';
  }
  if (window.location.href.includes('admin') || window.location.href.includes('panel-admin')) {
    window.location.href = '../404.html';
  }
};

// Carrusel: Controles
$(document).ready(function () {
  $('.carousel-items').slick({
    slidesToShow: 5, //Se veraán 5 cards
    slidesToScroll: 5, //se moverán 5 cards
    infinite: true, //Carrusel infinito
    arrows: true,
    prevArrow: '<button type="button" class="slick-atras"><i class="fa-solid fa-chevron-left"></i></button>', //Aqui le puedo poner HTML al boton
    nextArrow: '<button type="button" class="slick-siguiente"><i class="fa-solid fa-chevron-right"></i></i></button>', //Aqui le puedo poner HTML al boton
    responsive: [
      //cuando sea menos que los pixeles indicados el tamaño de la ventana se hace responsive
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3, //Se veraán 3 cards
          slidesToScroll: 3, //se moverán 3 cards
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
