const tablaContenido = document.querySelector('#tablaContenido');
const titulo = document.querySelector('#encabezado-tablas');
const dropItem = document.querySelector('.enlace-test');
const btnPublicado = document.getElementsByClassName('form-check-label');
const iconoDestacar = document.getElementsByClassName('icono-destacar');
const btnDestacar = document.getElementsByClassName('btn-destacar');
const tabla = document.querySelector('#tabla');
const btnVolver = document.getElementById('btn-volver');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');

console.log(titulo.textContent);

dropItem.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Click');
});

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
    // if (btnPublicado[i].checked)
  });
}

console.log(tablaContenido);
