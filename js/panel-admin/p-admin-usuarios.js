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
const estadoUsuario = document.getElementById('estadoUsuario');
const searchFilterUser = document.querySelector('.searchFilterUser');
const inputSearch = document.querySelector('.inputFilterUser');
const errorFilterUser = document.getElementById('errorFilterUser');

let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// dropItem.addEventListener('click', (event) => {
//   event.preventDefault();
// });

/** Boton Volver */
btnVolver.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// searchFilterUser.addEventListener('click', () => {
inputSearch.addEventListener('input', () => {
  const datoABuscar = document.querySelector('.inputFilterUser').value.toLowerCase();
  if (datoABuscar.length > 0) {
    const usuarioEncontrado = usuariosRegistrados.filter(function (usuario) {
      return (
        String(usuario.id).includes(datoABuscar) ||
        usuario.nombre.toLowerCase().includes(datoABuscar) ||
        usuario.email.toLowerCase().includes(datoABuscar)
      );
    });
    cargaUsuarios(usuarioEncontrado);
    // console.log('DATO ENCONTRADOs: ', usuarioEncontrado);
    if (usuarioEncontrado.length > 0) {
      console.log('Dato encotrado');
      errorFilterUser.innerHTML = '';
      errorFilterUser.classList.remove('bg-danger');
    } else {
      console.log('Dato no encotrado');
      errorFilterUser.innerHTML = 'Sin resultados';
      errorFilterUser.classList.add('bg-danger', 'fs-5');
    }
  } else {
    cargaUsuarios(0);
  }
});

const cargaUsuarios = function (usuariosFiltrados) {
  let arrayUsuarios = [];
  usuariosFiltrados.length > 0 ? (arrayUsuarios = usuariosFiltrados) : (arrayUsuarios = usuariosRegistrados);
  tablaUsuarios.innerHTML = '';
  arrayUsuarios.map(function (usuario) {
    tablaHTML(usuario);
  });
};

const tablaHTML = function (usuario) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
        <td data-table="Código" class="border" >${usuario.id}</td>
        <td data-table="Nombre" class="border" >${usuario.nombre}</td>
        <td data-table="Email" class="border" >${usuario.email}</td>
        <td data-table="Password" class="border" >${usuario.password}</td>
        <td data-table="Estado" class="border" >
          <div class="d-flex justify-content-end">
            <div>
              <span id="estadoUsuario">
                ${
                  usuario.stateActivation === 0
                    ? 'Pendiente&nbsp'
                    : usuario.stateActivation === 1
                    ? 'Aprobado&nbsp'
                    : usuario.stateActivation === 2
                    ? 'Suspendido&nbsp'
                    : null
                }
              </span>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-opcion-tabla d-flex justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item"
                  onclick="cambiarEstadoUsuario(${usuario.id}, '${`APROBADO`}')"
                  href="#">Aprobado</a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" 
                  onclick="cambiarEstadoUsuario(${usuario.id}, '${`SUSPENDIDO`}')"
                  href="#">Suspendido</a>
                </li>
              </ul>
            </div>
          </div>
        </td>
        <td data-table="Rol" class="border" >
          <div class="d-flex justify-content-end">
          <div>
          ${usuario.userRol === 0 ? 'Administrador&nbsp' : usuario.userRol === 1 ? 'Suscriptor&nbsp' : null}
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-opcion-tabla d-flex justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item"
                onclick="cambiarRol(${usuario.id}, '${`ADMINISTRADOR`}')"
                href="#">Cambiar a Administrador</a>
              </li>
                <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item"
                onclick="cambiarRol(${usuario.id}, '${`SUSCRIPTOR`}')"
                href="#">Cambiar a Suscriptor</a>
              </li>
            </ul>
          </div>
          </div>
        </td>
        <td data-table="Acciones" class="border separador">
          <button
            id="btnEditar${usuario.id}"
            type="button"
            class="btn btn-success btn-sm"
            data-bs-toggle="modal" data-bs-target="#modalEditarUsuario"
            onclick="handleModalEditarUsuario(${usuario.id})"
          >
            <i class="fa-solid fa-pen-to-square fs-6"></i>
          </button>
          <button
            id="btnEliminar${usuario.id}"
            type="button"
            class="btn btn-danger btn-sm"
            onclick="eliminarUsuario(${usuario.id})"
          >
            <i class="fa-solid fa-trash-can fs-6"></i>
          </button>
        </td>
        `;
  tablaUsuarios.appendChild(tr);
};
cargaUsuarios(0);

const handleModalEditarUsuario = function (idUsuario) {
  const tituloModal = document.querySelector('#idUsuarioEditar');
  const nombreModal = document.querySelector('#inputNombreUsuario');
  const emailModal = document.querySelector('#inputEmailUsuario');
  const passowrdModal = document.querySelector('#inputPasswordUsuario');

  const usuarioSeleccionado = usuariosRegistrados.find((usuario) => {
    return usuario.id == idUsuario;
  });

  // console.log('MI USUARIO:', usuarioSeleccionado);

  tituloModal.textContent = usuarioSeleccionado.id;
  nombreModal.value = usuarioSeleccionado.nombre;
  emailModal.value = usuarioSeleccionado.correo;
  passowrdModal.value = usuarioSeleccionado.password;

  formularioEditarUsuario.setAttribute(
    'data-id',
    usuarioSeleccionado.id
  ); /** Le agrego el atributo 'data-id' a la etiqueta form para que despues, pueda insertarle HTML cuando haga submit en el modal*/
};

formularioEditarUsuario.addEventListener('submit', editarUsuario);

function editarUsuario(e) {
  e.preventDefault();
  const tituloModal = document.querySelector('#idUsuarioEditar').value;
  const nombreModal = document.querySelector('#inputNombreUsuario').value;
  const emailModal = document.querySelector('#inputEmailUsuario').value;
  const passwordModal = document.querySelector('#inputPasswordUsuario').value;

  // Relizar validaciones

  const idUsuarioEnForm = formularioEditarUsuario.getAttribute('data-id');
  console.log('Obtengo id de usuario:', idUsuarioEnForm);

  const usuarioIndex = usuariosRegistrados.findIndex((usuario) => {
    return usuario.id == idUsuarioEnForm;
  });

  // console.log('PROD INDEX:', usuarioIndex);
  // console.log('NOMBRE INDEX:', usuariosRegistrados[usuarioIndex].nombre);
  usuariosRegistrados[usuarioIndex].nombre = nombreModal;
  usuariosRegistrados[usuarioIndex].email = emailModal;
  usuariosRegistrados[usuarioIndex].password = passwordModal;

  //Se carga el nuevo array usuariosRegistrados en localStorage
  console.log(usuariosRegistrados);
  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  cargaUsuarios(0);
}

function eliminarUsuario(idUsuario) {
  // Verificar si el ID es cero
  if (idUsuario === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se puede eliminar el usuario administrador.',
    });
    return; // No hace nada si el ID es cero
  }

  let usuarioAEliminar = usuariosRegistrados.find(function (usuario) {
    return usuario.id === idUsuario;
  });

  if (!usuarioAEliminar) {
    alert('El usuario no existe.');
    return; // No hace nada si el usuario no existe
  }

  let confirmacion = confirm(`¿Esta seguro que desea eliminar al usuario ${usuarioAEliminar.nombre}?`);

  if (!confirmacion) {
    return; // No hace nada si el usuario cancela la eliminación
  }

  // Filtrar el arreglo de usuarios para eliminar el usuario con el ID correspondiente
  usuariosRegistrados = usuariosRegistrados.filter(function (usuario) {
    Swal.fire({
      icon: 'success',
      title: `${usuarioAEliminar.nombre} eliminado/a`,
    });
    return usuario.id !== idUsuario;
  });

  // Actualizar el almacenamiento local con el nuevo arreglo de usuarios
  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

  // Cargar los usuarios nuevamente (asumiendo que cargaUsuarios está definido en otro lugar)
  cargaUsuarios(0);
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

function cambiarEstadoUsuario(idUsuario, estado) {
  const usuarioIndex = usuariosRegistrados.findIndex((usuario) => {
    return usuario.id === parseInt(idUsuario);
  });

  usuarioIndex === -1
    ? console.log('ERROR')
    : estado === 'APROBADO'
    ? (usuariosRegistrados[usuarioIndex].stateActivation = 1)
    : (usuariosRegistrados[usuarioIndex].stateActivation = 2);

  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  cargaUsuarios(0);
}

function cambiarRol(idUsuario, rolUsuario) {
  console.log('Aprobado', idUsuario, rolUsuario);

  const usuarioIndex = usuariosRegistrados.findIndex((usuario) => {
    return usuario.id === parseInt(idUsuario);
  });

  usuarioIndex === -1
    ? console.log('ERROR')
    : rolUsuario === 'ADMINISTRADOR'
    ? (usuariosRegistrados[usuarioIndex].userRol = 0)
    : (usuariosRegistrados[usuarioIndex].userRol = 1);

  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  cargaUsuarios(0);
}
