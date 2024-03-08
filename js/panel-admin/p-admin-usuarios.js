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

const cargaUsuarios = () => {
  usuariosRegistrados.map((usuario) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.password}</td>
        <td>${usuario.stateActivation}
            <div class="form-check form-switch">
                <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked${usuario.id}"
                onclick="controlEstado(this)"
                
                />
                <label class="form-check-label" for="flexSwitchCheckChecked${usuario.id}">✅</label>
            </div>
        </td>
        <td>${usuario.userRol}</td>
        <td>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked${usuario.id}"
            onclick="controlEstado(this)"
            
          />
          <label class="form-check-label" for="flexSwitchCheckChecked${usuario.id}">✅</label>
        </div>
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
    console.log(checkbox.id, "NO CHECEADO");
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
