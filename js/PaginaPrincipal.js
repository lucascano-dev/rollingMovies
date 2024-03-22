/*Menu Desplegable*/
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
/*Menu Desplegable*/

/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
const AdminLogged = localStorage.getItem('usuarioLogged');

window.onload = function () {
  const AdminUser = document.getElementById("AdminUser");
  if (AdminLogged) {
    AdminUser.style.display = "block";
  } else {
    AdminUser.style.display = "none";
  }
};
/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
//Register button with some validations
const regUser = document.getElementById("regUser");

regUser.addEventListener("click", () => {
  let arrayUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  let userObject = {
    id:Date.now(),
    nombre: document.getElementById("name").value,
    correo: document.getElementById("mail").value,
    pass: document.getElementById("pass").value,
    confirmPass: document.getElementById("confirmPass").value,
    stateActivation: 0,
    userRol: 1,
  };
  let isValid = isValidUser(userObject);
  if (isValid == true) {
    arrayUsers.push(userObject);
    localStorage.setItem("usuarios", JSON.stringify(arrayUsers));
  }
  function isValidUser(userObject) {
    let mailExpression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
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

//Manejador de imagenes modal detalle de pelicula.
const miImagen = document.querySelectorAll("img.imgButton")
console.log(miImagen)
miImagen.forEach((imagen)=>{
  imagen.addEventListener('click',()=>{
    let src= imagen.src
    console.log(src)
  })
})

//Login 
const logUser = document.getElementById('logUser')
logUser.addEventListener('click',(e)=>{
    const user = document.getElementById("user").value
    const passUser = document.getElementById("passUser").value

    const arrayUsers = JSON.parse(localStorage.getItem('usuarios'))
    console.log(arrayUsers)
    arrayUsers.filter((users)=>{
      if(users.nombre == user){
        console.log("Usuario Encontrado")
      }else{
        console.log("Usuario No Encontrado")

      }
    })



    console.log("Usuario: "+user+" pass: "+passUser)
})