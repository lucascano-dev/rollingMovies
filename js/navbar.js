const btnContacto = document.getElementById('btn-contacto');
const btnAcercaDe = document.getElementById('btn-acerca-de');
const handlerToggler = document.querySelector('.handlerToggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// handlerToggler.addEventListener('click', () => {
//   navbarCollapse.classList.remove('show');
//   // navbarCollapse.classList.add('hide');
// });

// // Obtener la URL actual
// let urlActual = window.location.href;
// // Obtener el nombre del archivo actual
// let nombreArchivo = urlActual.substring(urlActual.lastIndexOf('/') + 1);
// // Imprimir el nombre del archivo en la consola
// console.log('Estás en la página: ' + nombreArchivo);

// Obtener la URL actual
let urlActual = window.location.href;
// Contar el número de barras '/' en la URL
let nivel = (urlActual.match(/\//g) || []).length - 2; // Restamos 2 para considerar solo los niveles de archivos y carpetas, excluyendo el dominio y el nombre del host
// Imprimir el nivel en la consola
console.log('Estás en el nivel: ' + nivel);

function irAcercade() {
  nivel === 0 ? (window.location.href = './pages/acercade.html') : (window.location.href = '../../pages/acercade.html');
}
function irContacto() {
  nivel === 0 ? (window.location.href = './pages/contacto.html') : (window.location.href = '../../pages/contacto.html');
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
