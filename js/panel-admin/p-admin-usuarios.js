const titulo = document.querySelector('#encabezado-tablas');
const dropItem = document.querySelector('.enlace-test');
const iconoDestacar = document.getElementsByClassName('icono-destacar');
const btnDestacar = document.getElementsByClassName('btn-destacar');
const btnVolver = document.getElementById('btn-volver');
const btnAdminUsuarios = document.getElementById('btnAdminUsuarios');
const tablaUsuarios = document.querySelector('#tablaUsuarios');
const modalEditar = document.getElementById('');
const formularioEditarUsuario = document.getElementById('formularioEditarUsuario');
const modalEditarUsuario = document.getElementById('modalEditarUsuario');
let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

console.log(titulo.textContent);
console.log(usuariosRegistrados);

formularioEditarUsuario.addEventListener('submit', editarUsuario);

dropItem.addEventListener('click', (event) => {
  event.preventDefault();
});

/** Boton Volver */
btnVolver.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const cargaUsuarios = function () {
  tablaUsuarios.innerHTML = '';
  usuariosRegistrados.map(function (usuario) {
    const tr = document.createElement('tr');
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
                 ? 'Pendiente&nbsp'
                 : usuario.stateActivation === 1
                 ? 'Aprobado&nbsp'
                 : usuario.stateActivation === 2
                 ? 'Suspendido&nbsp'
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
          ${usuario.userRol === 0 ? 'Administrador&nbsp' : usuario.userRol === 1 ? 'Suscriptor&nbsp' : null}
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
            onclick="handleModalEditarUsuario(${usuario.id})"
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

const handleModalEditarUsuario = function (idUsuario) {
  const tituloModal = document.querySelector('#idUsuarioEditar');
  const nombreModal = document.querySelector('#inputNombreUsuario');
  const emailModal = document.querySelector('#inputEmailUsuario');
  const passowrdModal = document.querySelector('#inputPasswordUsuario');

  const usuario = usuariosRegistrados.find((usuario) => {
    return usuario.id == idUsuario;
  });

  tituloModal.textContent = usuario.id;
  nombreModal.value = usuario.nombre;
  emailModal.value = usuario.email;
  passowrdModal.value = usuario.password;

  formularioEditarUsuario.setAttribute(
    'data-id',
    usuario.id
  ); /** Le agrego el atributo 'data-id' a la etiqueta form para que despues, pueda insertarle HTML cuando haga submit en el modal*/
};

function eliminarUsuario(idUsuario) {
  usuariosRegistrados = usuariosRegistrados.filter(function (usuario) {
    return usuario.id !== idUsuario;
  });
  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  cargaUsuarios();
}

function controlEstado(checkbox) {
  const idCheck = document.getElementById(checkbox.id);
  console.log('ID DEL ELEMENTO', idCheck.id);
  if (checkbox.checked) {
    console.log(checkbox.id, 'CHECKEADO');
  } else {
    console.log(checkbox.id, 'NO CHECKEADO');
  }
}

function editarUsuario(e) {
  e.preventDefault();
  const tituloModal = document.querySelector('#idUsuarioEditar').value;
  const nombreModal = document.querySelector('#inputNombreUsuario').value;
  const emailModal = document.querySelector('#inputEmailUsuario').value;
  const passowrdModal = document.querySelector('#inputPasswordUsuario').value;

  // Relizar validaciones

  const idUsuarioEnForm = formularioEditarUsuario.getAttribute('data-id');
  console.log('Obtengo id de usuario:', idUsuarioEnForm);

  const usuarioIndex = usuariosRegistrados.findIndex((usuario) => {
    return usuario.id == parseInt(idUsuarioEnForm);
  });

  // console.log('PROD INDEX:', usuarioIndex);
  // console.log('NOMBRE INDEX:', usuariosRegistrados[usuarioIndex].nombre);
  usuariosRegistrados[usuarioIndex].nombre = nombreModal;
  usuariosRegistrados[usuarioIndex].email = emailModal;
  usuariosRegistrados[usuarioIndex].passowrd = passowrdModal;

  //Se carga el nuevo array usuariosRegistrados en localStorage
  console.log(usuariosRegistrados);
  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  cargaUsuarios();
}
