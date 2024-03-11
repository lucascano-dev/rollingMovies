const btnAdminContenidos = document.getElementById('btnAdminContenidos');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');

/** Panel de administracion principal */
btnAdminContenidos.addEventListener('click', () => {
  window.location.href = 'panel-admin-contenidos.html';
});
btnAdminUsuarios.addEventListener('click', () => {
  window.location.href = 'panel-admin-usuarios.html';
});
