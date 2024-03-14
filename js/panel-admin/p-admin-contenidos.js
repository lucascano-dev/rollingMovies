const tablaContenido = document.querySelector('#tablaContenido');
const titulo = document.querySelector('#encabezado-tablas');
const dropItem = document.querySelector('.enlace-test');
const btnPublicado = document.getElementsByClassName('form-check-input');
const iconoDestacar = document.querySelector('.icono-destacar');
const btnDestacar = document.querySelector('.btn-destacar');
const tabla = document.querySelector('#tabla');
const btnVolver = document.getElementById('btn-volver');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');
const submitAgregarContenido = document.getElementById('formularioAdminContenido');
let allMovies = JSON.parse(localStorage.getItem('movies')) || [];

class ContenidoStreaming {
  constructor(id, nombre, categoria, descripcion, urlImagen, urlVideo, isPublicado, isDestacado) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.urlImagen = urlImagen;
    this.urlVideo = urlVideo;
    this.isPublicado = isPublicado;
    this.isDestacado = isDestacado;
  }
}

console.log(titulo.textContent);

dropItem.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Click');
});

formularioAdminContenido.addEventListener('submit', agregarContenidoNuevo);

function agregarContenidoNuevo(e) {
  e.preventDefault();
  const id = Date.now();
  const nombre = document.getElementById('inputNombreContenido').value;
  const categoria = document.getElementById('inputCategoria').value;
  const descripcion = document.getElementById('inputDescripcion').value;
  const urlImagen = document.getElementById('inputURLImagen').value;
  const urlVideo = document.getElementById('inputURLVideo').value;

  const nuevoContenido = new ContenidoStreaming(id, nombre, categoria, descripcion, urlImagen, urlVideo, false, false);
  allMovies.push(nuevoContenido);
  localStorage.setItem('movies', JSON.stringify(allMovies));
  cargarContenido();
}

function cargarContenido() {
  tablaContenido.innerHTML = '';
  allMovies.map(function (movie) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
                <td class="border">${movie.id}</td>
                <td class="border" style="width: 100px">${movie.nombre}</td>
                <td class="border">${movie.categoria}</td>
                <td class="border">
                  <span class="d-inline-block text-truncate" style="width: 100px; text-overflow: ellipsis"
                    >${movie.descripcion}</span
                  >
                </td>
                <td class="border">
                  <img
                    src="${movie.urlImagen}"
                    alt="${movie.descripcionImagen}"
                    width="60px"
                  />
                </td>
                <td class="border"><span class="d-inline-block text-truncate" style="width: 150px">${
                  movie.urlVideo
                }</span></td>
                <td class="border">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked1"
                      
                    />
                    <label class="form-check-label" for="flexSwitchCheckChecked1">✅</label>
                  </div>
                </td>
                <td class="border">
                  <div class="d-flex gap-1 flex-wrap">
                    <button type="button" class="btn btn-warning btn-sm fs-6"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button type="button" class="btn btn-secondary btn-sm fs-6 btn-destacar" onclick="destacarMovie(${
                      movie.id
                    })">
                    ${
                      movie.isDestacado
                        ? `<i id="icono-destacado-${movie.id}" class="fa-solid fa-star contenido-destacado"></i>`
                        : `<i id="icono-destacado-${movie.id}" class="fa-solid fa-star contenido-no-destacado"></i>`
                    }
                      
                    </button>
                    <button type="button" class="btn btn-danger btn-sm fs-6"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>`;
    tablaContenido.appendChild(tr);
  });
}
cargarContenido();

/** Boton Volver */
btnVolver.addEventListener('click', () => {
  window.location.href = 'index.html';
});

/** Boton Destacar */
const destacarMovie = function (id) {
  const contenidoDestacado = document.getElementById(`icono-destacado-${id}`);
  let allMoviesIndex;

  if (contenidoDestacado.classList.contains('contenido-no-destacado')) {
    //Cambio color de estrellita
    contenidoDestacado.classList.remove('contenido-no-destacado');
    contenidoDestacado.classList.add('contenido-destacado');

    //Actualizo el valor de la propiedad destacado del objeto

    allMoviesIndex = allMovies.findIndex((movie) => {
      return movie.id === id;
    });

    allMovies[allMoviesIndex].isDestacado = true;

    localStorage.setItem('movies', JSON.stringify(allMovies));

    return;
  }

  if (contenidoDestacado.classList.contains('contenido-destacado')) {
    //Cambio colo de estrellita
    contenidoDestacado.classList.remove('contenido-destacado');
    contenidoDestacado.classList.add('contenido-no-destacado');

    //Actualizo el valor de la propiedad destacado del objeto

    allMoviesIndex = allMovies.findIndex((movie) => {
      return movie.id === id;
    });

    allMovies[allMoviesIndex].isDestacado = false;

    localStorage.setItem('movies', JSON.stringify(allMovies));

    return;
  }
};
cargarContenido();

/** Switch Publicado */
for (let i = 0; i < btnPublicado.length; i++) {
  btnPublicado[i].addEventListener('click', () => {
    console.log('Clic en switch de linea:', [i]);
  });
}

console.log(tablaContenido);
