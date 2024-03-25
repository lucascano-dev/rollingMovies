const tablaContenido = document.querySelector('#tablaContenido');
const titulo = document.querySelector('#encabezado-tablas');
const dropItem = document.querySelector('.enlace-test');
const btnPublicado = document.getElementsByClassName('form-check-input');
const iconoDestacar = document.querySelector('.icono-destacar');
const btnDestacar = document.querySelector('.btn-destacar');
const btnEditar = document.querySelector('.btn-editar');
const tabla = document.querySelector('#tabla');
const btnVolver = document.getElementById('btn-volver');
const submitAgregarContenido = document.getElementById('formularioAdminContenido');
const formularioEditarContenido = document.getElementById('formularioEditarContenido');
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

// dropItem.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('Click');
// });

submitAgregarContenido.addEventListener('submit', agregarContenidoNuevo);

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
                <td data-table="Código" class="border">${movie.id}</td>
                <td data-table="Nombre" class="border nombre-movie">${movie.nombre}</td>
                <td data-table="Categoría" class="border">${movie.categoria}</td>
                <td data-table="Descripción" class="border">
                  <span class="d-inline-block text-truncate" style="width: 200px; text-overflow: ellipsis"
                    >${movie.descripcion}</span
                  >
                </td>
                <td data-table="URL Imagen" class="border">
                  <img
                    src="${movie.urlImagen}"
                    alt="${movie.descripcionImagen}"
                    width="60px"
                  />
                </td>
                <td data-table="URL Video" class="border"><span class="d-inline-block text-truncate" style="width: 150px">${
                  movie.urlVideo
                }</span></td>
                <td data-table="Publicado" class="border">
                  <div class="d-flex justify-content-end form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked${movie.id}"
                      onclick="publicarContenido(${movie.id})"
                      ${movie.isPublicado ? 'checked' : ''}
                      
                    />
                    <label class="form-check-label" for="flexSwitchCheckChecked1">
                      <span id="icono-publicado-${movie.id}" 
                       ${movie.isPublicado ? `class="publicado" ` : `class="no-publicado"`}">
                       ${movie.isPublicado ? '✅' : '❌'}
                      </span>
                    </label>
                  </div>
                </td>
                <td data-table="Acciones" class="border separador " style="width: 200px>
                  <div class="d-flex gap-1 flex-wrap">
                    <button id="btnEditar"
                      type="button"
                      class="btn btn-warning btn-sm btn-editar"
                      data-bs-toggle="modal" data-bs-target="#modalEditarContenido"
                      onclick="handleModalEditarMovie(${movie.id})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm fs-6 btn-destacar" onclick="destacarMovie(${
                      movie.id
                    })">
                    ${
                      movie.isDestacado
                        ? `<i id="icono-destacado-${movie.id}" class="fa-solid fa-star contenido-destacado"></i>`
                        : `<i id="icono-destacado-${movie.id}" class="fa-solid fa-star contenido-no-destacado"></i>`
                    }
                      
                    </button>
                    <button type="button" class="btn btn-danger btn-sm fs-6" onclick="eliminarContenido(${
                      movie.id
                    })"><i class="fa-solid fa-trash-can"></i></button>
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

/** Boton editar */
function handleModalEditarMovie(idContenido) {
  const tituloModalEditar = document.querySelector('#idEditarContenido');
  const nombreModal = document.querySelector('#inputEditarNombreContenido');
  const categoriaModal = document.querySelector('#inputEditarCategoriaContenido');
  const descripcionModal = document.querySelector('#inputEditarDescripcionContenido');
  const urlImagenModal = document.querySelector('#inputEditarURLImagenContenido');
  const urlVideoModal = document.querySelector('#inputEditarURLVideoContenido');

  const movieSeleccionada = allMovies.find((movie) => {
    return movie.id == idContenido;
  });

  tituloModalEditar.textContent = movieSeleccionada.id;
  nombreModal.value = movieSeleccionada.nombre;
  categoriaModal.value = movieSeleccionada.categoria;
  descripcionModal.value = movieSeleccionada.descripcion;
  urlImagenModal.value = movieSeleccionada.urlImagen;
  urlVideoModal.value = movieSeleccionada.urlVideo;

  formularioEditarContenido.setAttribute('data-id', movieSeleccionada.id);
}

formularioEditarContenido.addEventListener('submit', editarContenido);

function editarContenido(e) {
  e.preventDefault();
  const tituloModal = document.querySelector('#idEditarContenido').value;
  const nombreModal = document.querySelector('#inputEditarNombreContenido').value;
  const categoriaModal = document.querySelector('#inputEditarCategoriaContenido').value;
  const descripcionModal = document.querySelector('#inputEditarDescripcionContenido').value;
  const urlImagenModal = document.querySelector('#inputEditarURLImagenContenido').value;
  const urlVideoModal = document.querySelector('#inputEditarURLVideoContenido').value;

  //Realizar validaciones???
  const idContenidoEnForm = formularioEditarContenido.getAttribute('data-id');
  console.log('Obtengo id de usuario:', idContenidoEnForm);

  const movieIndex = allMovies.findIndex((movie) => {
    return movie.id == idContenidoEnForm;
  });

  allMovies[movieIndex].id = idContenidoEnForm;
  allMovies[movieIndex].nombre = nombreModal;
  allMovies[movieIndex].categoria = categoriaModal;
  allMovies[movieIndex].descripcion = descripcionModal;
  allMovies[movieIndex].urlImagen = urlImagenModal;
  allMovies[movieIndex].urlVideo = urlVideoModal;

  //Se carga el nuevo array allMovies en localStorage
  console.log(allMovies);
  localStorage.setItem('movies', JSON.stringify(allMovies));
  cargarContenido();
}

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

const publicarContenido = function (id) {
  const iconoPublicado = document.getElementById(`icono-publicado-${id}`);

  let allMoviesIndex;

  if (iconoPublicado.classList.contains('no-publicado')) {
    iconoPublicado.innerText = '✅';
    iconoPublicado.classList.remove('no-publicado');
    iconoPublicado.classList.add('publicado');

    //Actualizo el valor de la propiedad "Publicado" del objeto
    allMoviesIndex = allMovies.findIndex((movie) => {
      // console.log('MOVIE.ID=', movie.id, 'ID:', id);
      return movie.id === id;
    });

    allMovies[allMoviesIndex].isPublicado = true;
    localStorage.setItem('movies', JSON.stringify(allMovies));
    return;
  }

  if (iconoPublicado.classList.contains('publicado')) {
    iconoPublicado.innerText = '❌';
    iconoPublicado.classList.remove('publicado');
    iconoPublicado.classList.add('no-publicado');

    //Actualizo el valor de la propiedad "Publicado" del objeto
    allMoviesIndex = allMovies.findIndex(function (movie) {
      return movie.id === id;
    });

    allMovies[allMoviesIndex].isPublicado = false;
    localStorage.setItem('movies', JSON.stringify(allMovies));
    return;
  }
};

/** Boton Eliminar */

function eliminarContenido(id) {
  allMovies = allMovies.filter(function (movie) {
    return movie.id !== id;
  });
  localStorage.setItem('movies', JSON.stringify(allMovies));
  cargarContenido();
}
