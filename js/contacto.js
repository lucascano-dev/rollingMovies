/*Validaciones del formulario*/
function validarFormulario() {
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var email = document.getElementById('email').value;
	var celular = document.getElementById('celular').value;
	var direccion = document.getElementById('direccion').value;
	var mensaje = document.getElementById('mensaje').value;
	var regexCelular = /^[0-9]{10}$/;
	var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (nombre.trim() === '') {
		alert('Por favor ingresa tu nombre.');
		return false;
	}

	if (apellido.trim() === '') {
		alert('Por favor ingresa tu apellido.');
		return false;
	}

	if (!regexEmail.test(email)) {
		alert('Por favor ingresa un correo electrónico válido.');
		return false;
	}

	if (!regexCelular.test(celular)) {
		alert('Por favor ingresa un número de celular válido (10 dígitos).');
		return false;
	}

	if (direccion.trim() === '') {
		alert('Por favor ingresa tu dirección.');
		return false;
	}

	if (mensaje.trim() === '') {
		alert('Por favor ingresa tu mensaje.');
		return false;
	}

	return true;
}
/*Validaciones del formulario*/

/*Menu Desplegable*/
function toggleMenu() {
	var menu = document.getElementById('menu');
	menu.classList.toggle('active');
}
/*Menu Desplegable*/

/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
const AdminLogged = true;

window.onload = function () {
	const AdminUser = document.getElementById('AdminUser');
	if (AdminLogged) {
		AdminUser.style.display = 'block';
	} else {
		AdminUser.style.display = 'none';
	}
};
/* Mostrar opcion de administrador si el admin es el usuario Logeado*/
