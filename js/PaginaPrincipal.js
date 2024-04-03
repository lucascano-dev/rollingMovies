const sectionCarrusel = document.getElementById('contenedor-carruseles');
let allMovies = JSON.parse(localStorage.getItem('movies')) || [];

const categoriasUnicas = Array.from(new Set(allMovies.map((movie) => movie.categoria)));

categoriasUnicas.forEach((categoria) => {
  // Filtrar las películas que pertenecen a esta categoría
  const moviesInCategory = allMovies.filter((movie) => movie.categoria === categoria);

  // Verificar si hay películas en esta categoría
  if (moviesInCategory.length > 0) {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1 class="text-center">${categoria}</h1>
      <div class="carousel">
        <div id="slider${categoria}" class="carousel-items d-flex">
          ${moviesInCategory
            .map(
              (movie) => `
            <div class="card">
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

// function carrusel(categoria) {
//   const sliderCategoria = document.getElementById(`slider${categoria}`);
//   allMovies.map((movie) => {
//     if (movie.categoria === categoria) {
//       const div = document.createElement('div');
//       div.innerHTML = `
//         <div class="card">
//           <img src="${movie.urlImagen}" class="card-img-top" alt="${movie.nombre}">
//         </div>
//       `;
//       sliderCategoria.appendChild(div);
//     }
//   });
// }

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
    prevArrow: '<button type="button" class="slick-atras"><i class="fa-solid fa-circle-arrow-left"></i></button>', //Aqui le puedo poner HTML al boton
    nextArrow: '<button type="button" class="slick-siguiente"><i class="fa-solid fa-circle-arrow-right"></i></button>', //Aqui le puedo poner HTML al boton
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
