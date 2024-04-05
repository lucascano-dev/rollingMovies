function errorHandling(messageType, text) {
  Swal.fire({
    icon: messageType,
    text: text,
  });
}

//Login
const regButtonText = document.getElementById('loginButton');
const logUser = document.getElementById('logUser');
const isLogged = localStorage.getItem('userLogged') ? true : false;
if (isLogged) {
  regButtonText.innerText = 'DESCONECTARSE';
  regButtonText.removeAttribute('data-bs-toggle');
  regButtonText.removeAttribute('data-bs-target');
  regButtonText.addEventListener('click', (e) => {
    localStorage.removeItem('userLogged');
    if (window.location.href.includes('panel-admin')) {
      location.href = '../../index.html';
    } else {
      location.reload();
    }
  });
} else {
  regButtonText.setAttribute('data-toggle', 'modal');
  regButtonText.setAttribute('data-bs-target', '#modalLogin');
  logUser.addEventListener('click', (e) => {
    const user = document.getElementById('user').value;
    const passUser = document.getElementById('passUser').value;
    handleUserValidation(user, passUser);
    // console.log("Usuario: "+user+" pass: "+passUser)
  });

  const handleUserValidation = (user, pass) => {
    const arrayUsers = JSON.parse(localStorage.getItem('usuarios'));
    let isValidUserLog =
      arrayUsers.find((users) => users.nombre === user) || arrayUsers.find((users) => users.email === user);
    console.log(isValidUserLog);
    if (user == '' || pass == '') {
      errorHandling('error', 'Los campos no deben estar vacíos!');
      return false;
    } else if (isValidUserLog == undefined) {
      // console.log("Usuario no registrado")
      errorHandling('error', 'Usuario no registrado');
    } else if (isValidUserLog.nombre == user && isValidUserLog.pass !== pass) {
      // console.log("Combinacion de nombre de usuario/correo y contraseña incorrectos")
      errorHandling('error', 'Combinacion de nombre de usuario y contraseña incorrectos');
    } else if (isValidUserLog.correo == user && isValidUserLog.pass !== pass) {
      // console.log("Combinacion de nombre de usuario/correo y contraseña incorrectos")
      errorHandling('error', 'Combinacion de nombre de usuario y contraseña incorrectos');
    } else {
      errorHandling('success', 'Logueado correctamente');
      localStorage.setItem('userLogged', JSON.stringify(isValidUserLog));
      location.reload();
    }
  };
}
