//Register button with some validations
const regUser = document.getElementById("regUser");

regUser.addEventListener("click", () => {
    let arrayUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    let userObject = {
        id: Date.now(),
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
            errorHandling("error", "Los campos no pueden estar vacíos!");
            return false;
        } else if (userObject.pass != userObject.confirmPass) {
            errorHandling("error", "Las contraseñas deben coincidir!");
            return false;
        } else if (mailExpression.test(userObject.correo) == false) {
            errorHandling("error", "Ingresa un correo valido!");
            return false;
        } else if (JSON.stringify(arrayUsers).includes(userObject.nombre)) {
            errorHandling("error", "El usuario ya se encuentra registrado!");
            return false;
        } else {
            errorHandling("success", "Usuario registrado correctamente")
            return true;
        }
    }

    //si el usuario se registra exitosamente:

    //si el usuario no esta validado completamente:
});
function errorHandling(messageType, text) {
    Swal.fire({
        icon: messageType,
        text: text,
    });
}