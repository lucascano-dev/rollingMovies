const titulo = document.querySelector("#encabezado-tablas");
const dropItem = document.querySelector(".enlace-test");
const iconoDestacar = document.getElementsByClassName("icono-destacar");
const btnDestacar = document.getElementsByClassName("btn-destacar");
const btnVolver = document.getElementById("btn-volver");
const btnAdminUsuarios = document.getElementById("btnAdminUsuarios");
const tablaUsuarios = document.querySelector("#tablaUsuarios");
const modalEditar = document.getElementById("");
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

console.log(titulo.textContent);
console.log(usuariosRegistrados);

dropItem.addEventListener("click", (event) => {
  event.preventDefault();
});

/** Boton Volver */
btnVolver.addEventListener("click", () => {
  window.location.href = "index.html";
});

const cargaUsuarios = function () {
  tablaUsuarios.innerHTML = "";
  usuariosRegistrados.map(function (usuario) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="border" >${usuario.id}</td>
        <td class="border" >${usuario.nombre}</td>
        <td class="border" >${usuario.email}</td>
        <td class="border" >${usuario.password}</td>
        <td class="border" >
          <div class="d-flex justify-content-end">
            <div>
             ${
               usuario.stateActivation === 0
                 ? "Pendiente&nbsp"
                 : usuario.stateActivation === 1
                 ? "Aprobado&nbsp"
                 : usuario.stateActivation === 2
                 ? "Suspendido&nbsp"
                 : null
             }
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
        <td class="border" >
          <div class="d-flex justify-content-end">
          <div>
          ${usuario.userRol === 0 ? "Administrador&nbsp" : usuario.userRol === 1 ? "Suscriptor&nbsp" : null}
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
        <td class="d-flex justifyc-content-center align-items-center gap-2 boder border-secondary">
          <button
            id="btnEditar${usuario.id}"
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal" data-bs-target="#modalEditarUsuario"
            onclick="editarUsuario(${usuario.id})"
          >
            <i class="fa-solid fa-pen-to-square fs-6"></i>
          </button>
          <button
            id="btnEliminar${usuario.id}"
            type="button"
            class="btn btn-danger"
            onclick="eliminarUsuario(${usuario.id})"
          >
            <i class="fa-solid fa-trash-can fs-6"></i>
          </button>
        </td>
        `;
    tablaUsuarios.appendChild(tr);
  });
};
cargaUsuarios();

const editarUsuario = function (idUsuario) {
  const tituloModal = document.querySelector("#idUsuarioEditar");
  const nombreModal = document.querySelector("#inputNombreUsuario");
  const emailModal = document.querySelector("#inputEmailUsuario");
  const passowrdModal = document.querySelector("#inputPassowordUsuario");
  tituloModal.textContent = idUsuario;
  // usuariosRegistrados = usuariosRegistrados.findIndex(function (usuario) {});
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

  // const modalEditarUsuario = document.querySelector("#modalEditarUsuario");
  // modalEditarUsuario.style.display = "block";
  // modalEditarUsuario.style.opacity = "100";
};

// console.log(usuariosEditados);

function eliminarUsuario(idUsuario) {
  usuariosRegistrados = usuariosRegistrados.filter(function (usuario) {
    return usuario.id !== idUsuario;
  });
  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
  cargaUsuarios();
}

function controlEstado(checkbox) {
  const idCheck = document.getElementById(checkbox.id);
  console.log("ID DEL ELEMENTO", idCheck.id);
  if (checkbox.checked) {
    console.log(checkbox.id, "CHECKEADO");
  } else {
    console.log(checkbox.id, "NO CHECKEADO");
  }
}
