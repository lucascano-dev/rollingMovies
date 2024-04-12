const userLogged = JSON.parse(localStorage.getItem('userLogged'));

if (userLogged !== null) {
  const isAdminLogged = userLogged.userRol == 0 ? true : false;
  if (isAdminLogged === false) {
    window.location.href = '/';
  }
}
