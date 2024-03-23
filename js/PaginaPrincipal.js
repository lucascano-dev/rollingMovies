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
    let title = imagen.alt
    let movies = JSON.parse(localStorage.getItem('movies'))
    let movieFound = movies.find((movie) => movie.nombre == title)
    let modalInfo = document.getElementById('modal-body')
    let modalContent = document.getElementById('bg-image')
    let modalDialog = document.getElementById('modal-dialog')
    //botton cerrar


    let buttonClose = document.createElement('button');
    buttonClose.type = "button"
    buttonClose.className = "btn-close mt-3 me-3"
    buttonClose.setAttribute('data-bs-dismiss', 'modal')
    buttonClose.setAttribute('aria-label', 'Close')
    buttonClose.style.position = "absolute"
    buttonClose.style.top = 0;
    buttonClose.style.right = 0;
    buttonClose.style.backgroundColor = "white"
    buttonClose.style.zIndex = "3"
    let fullbuildbutton = buttonClose.outerHTML;
    modalContent.innerHTML = fullbuildbutton
    console.log(fullbuildbutton)
    //fin boton cerrar
    if (modalContent.style.backgroundImage) {
      modalContent.style.removeProperty('background-image')
    }
    // console.log(movieFound)
    if (movieFound !== undefined) {
      imagen.setAttribute('data-bs-toggle', 'modal')
      imagen.setAttribute('data-bs-target', '#detallePelicula')
      console.log(modalContent.style.backgroundImage)
      // style="height: 80vh; width: 50vw; background-position: 50% center; background-repeat: no-repeat; background-size: cover;"
      modalContent.style.height = "80vh"
      modalContent.style.width = "50vw"
      modalContent.style.backgroundImage = `url('./assets/img/${title}.png')`;
      modalContent.style.backgroundPosition = "50% center"
      modalContent.style.backgroundRepeat = "no-repeat"
      modalContent.style.backgroundSize = "cover"

      modalInfo.style.opacity = "1"
      modalInfo.className = "container h-100"
      // modalInfo.textContent = "Something"

      modalContent.appendChild(modalInfo)

      //div para el body de modalInfo
      let divBodyMovieDetail = document.createElement('div');
      divBodyMovieDetail.className = "modal-title"
      divBodyMovieDetail.textContent = `${title}`
      // divBodyMovieDetail.style.backgroundColor = "FFF"
      divBodyMovieDetail.style.color = "White"
      // divBodyMovieDetail.style.opacity = 10

      modalInfo.innerHTML = divBodyMovieDetail.outerHTML
    }
  })
})

const adminHandler = () => {
  if (window.location.href.includes('index')) {
    window.location.href = "./pages/panel-admin/index.html"
  }
  if (window.location.href.includes('contacto') || window.location.href.includes('404') || window.location.href.includes('acercade')) {
    window.location.href = "./panel-admin/index.html"
  }
}

const to404 = () => {
  if (window.location.href.includes('index')) {
    window.location.href = "./pages/404.html"
  }
  if (window.location.href.includes('contacto') || window.location.href.includes('acercade')) {
    window.location.href = "./404.html"
  }
  if (window.location.href.includes('admin') || window.location.href.includes('panel-admin')) {
    window.location.href = "../404.html"
  }
}