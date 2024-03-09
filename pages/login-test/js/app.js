class Usuario {
    constructor(id, nombre, email, password, stateActivation, userRol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.stateActivation = stateActivation;
        this.userRol = userRol;
    }
}

const validarRegistro = document.querySelector("#validarRegistro");

validarRegistro.addEventListener("submit", validarUsuario);

const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(usuariosRegistrados);

function validarUsuario(e) {
  e.preventDefault();
  const id = Date.now()
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const stateActivation = 0
  const userRol = 'Admin'

    const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const resultadoValidarEmail = validarEmail.test(email);
  
  !resultadoValidarEmail ? console.log("Formato de email inválido") : console.log("Formato de email OK");

  const comprobandoUsuarioEmail = usuariosRegistrados.find(function (usuario) {
    return usuario.email === email;
  });

  comprobandoUsuarioEmail !== undefined
    ? console.log("Usuario ya registrado")
    : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no registrado",
      });

      const nuevoUsuario = new Usuario(id, nombre, email, password, stateActivation, userRol )
      usuariosRegistrados.push(nuevoUsuario)

      localStorage.setItem('usuarios',JSON.stringify(usuariosRegistrados))

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      
      validarRegistro.reset()

}
