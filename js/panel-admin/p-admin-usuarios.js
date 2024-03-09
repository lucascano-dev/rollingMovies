const titulo = document.querySelector("#encabezado-tablas");
const dropItem = document.querySelector(".enlace-test");
const iconoDestacar = document.getElementsByClassName("icono-destacar");
const btnDestacar = document.getElementsByClassName("btn-destacar");
// const tabla = document.querySelector("#tabla")
// const fila = tabla.querySelectorAll("tr")
const btnVolver = document.getElementById("btn-volver");
const btnAdminUsuarios = document.getElementById("btnAdminUsuarios");
const tablaUsuarios = document.querySelector("#tablaUsuarios");
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

console.log(titulo.textContent);
console.log(usuariosRegistrados);

dropItem.addEventListener("click", (event) => {
  event.preventDefault();
});

/** Boton Volver */
btnVolver.addEventListener("click", () => {
  window.location.href = "index.html";
});


const cargaUsuarios = function() {
  usuariosRegistrados.map(function(usuario) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.password}</td>
        <td>
          <div class="d-flex justify-content-end">
            <div>
             ${usuario.stateActivation === 0 ? 'Pendiente&nbsp' : usuario.stateActivation === 1 ? 'Aprobado&nbsp' : usuario.stateActivation === 2 ? 'Suspendido&nbsp' : null}
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-opcion-tabla d-flex justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Aprobado</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Suspendido</a></li>
              </ul>
            </div>
          </div>
        </td>
        <td>
          <div class="d-flex justify-content-end">
          <div>
          ${usuario.userRol === 0 ? 'Administrador' : usuario.userRol === 1 ? 'Suscriptor' : null }
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-opcion-tabla d-flex justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Cambiar a Administrador</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Cambiar a Suscriptor</a></li>
            </ul>
          </div>
          </div>
        </td>
        <td class="d-flex justifyc-content-center align-items-center gap-2">
          <button type="button" class="btn btn-success">
            <i class="fa-solid fa-pen-to-square fs-6"></i>
          </button>
          <button type="button" class="btn btn-danger">
            <i class="fa-solid fa-trash-can fs-6"></i>
          </button>
        </td>
        `;
    tablaUsuarios.appendChild(tr);
  });
};
cargaUsuarios();


function controlEstado(checkbox) {
  const idCheck = document.getElementById(checkbox.id);
  console.log("ID DEL ELEMENTO", idCheck.id);
  if (checkbox.checked) {
    console.log(checkbox.id, "CHECKEADO");
  } else {
    console.log(checkbox.id, "NO CHECKEADO");
  }
}

/** Boton Destacar */
console.log(iconoDestacar.length);
for (let i = 0; i < btnDestacar.length; i++) {
  btnDestacar[i].addEventListener("click", () => {
    if (iconoDestacar[i].classList.contains("contenido-destacado")) {
      iconoDestacar[i].classList.remove("contenido-destacado");
      iconoDestacar[i].classList.add("contenido-no-destacado");
    } else {
      iconoDestacar[i].classList.remove("contenido-no-destacado");
      iconoDestacar[i].classList.add("contenido-destacado");
    }
  });
}

/** Switch Estados Usuarios Activos */
