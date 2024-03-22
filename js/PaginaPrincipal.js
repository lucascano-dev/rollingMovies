/*Menu Desplegable*/
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
/*Menu Desplegable*/

/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
const AdminUser = document.getElementById('AdminUser')

if (localStorage.getItem('userLogged') !== undefined) {
  const AdminLogged = JSON.parse(localStorage.getItem('userLogged'));

  if (AdminLogged !== null) {
    const isAdminLogged = AdminLogged.userRol == 0 ? true : false;
    if (isAdminLogged) {
      AdminUser.style.display = "block";
    } else {
      AdminUser.style.display = "none";
    }
  }
};


/* Mostrar opcion de administrador si el admin es el usuario Logeado*/

//Manejador de imagenes modal detalle de pelicula.
const miImagen = document.querySelectorAll("img.imgButton")
// console.log(miImagen)
miImagen.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    let src = imagen.src
    // console.log(src)
  })
})
