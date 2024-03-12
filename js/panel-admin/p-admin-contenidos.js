const tablaContenido = document.querySelector('#tablaContenido');
const titulo = document.querySelector('#encabezado-tablas');
const dropItem = document.querySelector('.enlace-test');
const btnPublicado = document.getElementsByClassName('form-check-input');
const iconoDestacar = document.getElementsByClassName('icono-destacar');
const btnDestacar = document.getElementsByClassName('btn-destacar');
const tabla = document.querySelector('#tabla');
const btnVolver = document.getElementById('btn-volver');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');
let contenidosMovies = JSON.parse(localStorage.getItem('movies')) || [];

console.log(titulo.textContent);

dropItem.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Click');
});

const cargarContenido = function () {
  tablaContenido.innerHTML = '';
  contenidosMovies.map(function (movie) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
                <td class="border">${movie.id}</td>
                <td class="border">${movie.nombre}</td>
                <td class="border">${movie.categoria}</td>
                <td class="border">
                  <span class="d-inline-block text-truncate" style="width: 200px"
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
                <td class="border"><span>${movie.urlVideo}</span></td>
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
                    <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button type="button" class="btn btn-secondary btn-destacar">
                      <i class="fa-solid fa-star icono-destacar contenido-no-destacado"></i>
                    </button>
                    <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </td>`;
    tablaContenido.appendChild(tr);
  });
};
cargarContenido();

/** Boton Volver */
btnVolver.addEventListener('click', () => {
  window.location.href = 'index.html';
});

/** Boton Destacar */
console.log(iconoDestacar.length);
for (let i = 0; i < btnDestacar.length; i++) {
  btnDestacar[i].addEventListener('click', () => {
    if (iconoDestacar[i].classList.contains('contenido-destacado')) {
      iconoDestacar[i].classList.remove('contenido-destacado');
      iconoDestacar[i].classList.add('contenido-no-destacado');
    } else {
      iconoDestacar[i].classList.remove('contenido-no-destacado');
      iconoDestacar[i].classList.add('contenido-destacado');
    }
  });
}

/** Switch Publicado */
for (let i = 0; i < btnPublicado.length; i++) {
  btnPublicado[i].addEventListener('click', () => {
    console.log('Clic en switch de linea:', [i]);
  });
}

console.log(tablaContenido);
