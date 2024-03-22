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
