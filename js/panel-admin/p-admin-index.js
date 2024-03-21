const btnAdminContenidos = document.getElementById('btnAdminContenidos');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');
// console.log(JSON.parse(localStorage.getItem('stateMenuLateral')));

/** Panel de administracion principal */
btnAdminContenidos.addEventListener('click', () => {
  window.location.href = 'panel-admin-contenidos.html';
});
btnAdminUsuarios.addEventListener('click', () => {
  window.location.href = 'panel-admin-usuarios.html';
});
