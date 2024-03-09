
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

const AdminLogged = true;

window.onload = function () {
  const AdminUser = document.getElementById("AdminUser");
  if (AdminLogged) {
    AdminUser.style.display = "block";
  } else {
    AdminUser.style.display = "none";
  }
};

//Register button with some validations
const regUser = document.getElementById("regUser");

regUser.addEventListener("click", () => {
  let arrayUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  let userObject = {
    nombre: document.getElementById("name").value,
    correo: document.getElementById("mail").value,
    pass: document.getElementById("pass").value,
    confirmPass: document.getElementById("confirmPass").value,
    isAdmin: false,
  };
  let isValid = isValidUser(userObject);
  if (isValid == true) {
    arrayUsers.push(userObject);
    localStorage.setItem("usuarios", JSON.stringify(arrayUsers));
  }
  function isValidUser(userObject) {
    let mailExpression =
      /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$)/;
    if (
      userObject.nombre == "" ||
      userObject.correo == "" ||
      userObject.pass == "" ||
      userObject.confirmPass == ""
    ) {
      errorHandling("error", "The fields can not be empty!");
      return false;
    } else if (userObject.pass != userObject.confirmPass) {
      errorHandling("error", "The passwords must match!");
      return false;
    } else if (mailExpression.test(userObject.correo) == false) {
      errorHandling("error", "Please enter a valid email!");
      return false;
    } else if (JSON.stringify(arrayUsers).includes(userObject.nombre)) {
      errorHandling("error", "User already registered!");
    } else {
      Swal.fire({
        title: "User registration successfull!",
        html: "This window will close in <b></b> seconds.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${parseInt(Swal.getTimerLeft() / 1000)}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      return true;
    }
  }

  //si el usuario se registra exitosamente:

  //si el usuario no esta validado completamente:
  function errorHandling(messageType, text) {
    Swal.fire({
      icon: messageType,
      title: "Oops...",
      text: text,
    });
  }
});

