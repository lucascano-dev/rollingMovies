const btnContacto = document.getElementById('btn-contacto');
const btnAcercaDe = document.getElementById('btn-acerca-de');

// btnAcercaDe.addEventListener('click', () => {
//   window.location.href = './pages/acercade.html';
// });

// btnContacto.addEventListener('click', () => {
//   window.location.href = './pages/contacto.html';
// });

function irAcercade(index) {
  if (index === 0) {
    window.location.href = './pages/acercade.html';
  } else {
    window.location.href = '../../pages/acercade.html';
  }
}
function irContacto(index) {
  if (index === 0) {
    window.location.href = './pages/contacto.html';
  } else {
    window.location.href = '../../pages/contacto.html';
  }
}
