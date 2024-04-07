const AdminUser = document.getElementById('AdminUser');

if (localStorage.getItem('userLogged') !== undefined) {
  const AdminLogged = JSON.parse(localStorage.getItem('userLogged'));
  const linkRegistro = document.querySelector('#registerButton');

  if (AdminLogged !== null) {
    const isAdminLogged = AdminLogged.userRol == 0 ? true : false;
    if (isAdminLogged) {
      AdminUser.style.display = 'block';
      linkRegistro.style.display = 'none';
    } else {
      AdminUser.style.display = 'none';
      linkRegistro.style.display = 'none';
    }
  }
}
