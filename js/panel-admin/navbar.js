const btnContacto = document.getElementById('btn-contacto');
const btnAcercaDe = document.getElementById('btn-acerca-de');

btnAcercaDe.addEventListener('click', () => {
  window.location.href = './pages/acercade.html';
});

btnContacto.addEventListener('click', () => {
  window.location.href = './pages/contacto.html';
});
