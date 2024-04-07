const btnAdminContenidos = document.getElementById('btnAdminContenidos');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');
const userLogged = JSON.parse(localStorage.getItem('userLogged'));

if (userLogged !== null) {
  const isAdminLogged = userLogged.userRol == 0 ? true : false;
  if (isAdminLogged) {
    /** Panel de administracion principal */
    btnAdminContenidos.addEventListener('click', () => {
      window.location.href = 'panel-admin-contenidos.html';
    });
    btnAdminUsuarios.addEventListener('click', () => {
      window.location.href = 'panel-admin-usuarios.html';
    });
  } else {
    console.log('ERROR');
    Swal.fire({
      icon: 'error',
      title: 'Acceso restringido',
      text: 'Modulo restringido para administradores',
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  }
}
