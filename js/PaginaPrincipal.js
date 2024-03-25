
function toggleMenu() {
	var menu = document.getElementById('menu');
	menu.classList.toggle('active');
}



const AdminUser = document.getElementById('AdminUser')

if (localStorage.getItem('userLogged') !== undefined) {
	const AdminLogged = JSON.parse(localStorage.getItem('userLogged'));

	if (AdminLogged !== null) {
		const isAdminLogged = AdminLogged.userRol == 0 ? true : false;
		if (isAdminLogged) {
			AdminUser.style.display = 'block';
		} else {
			AdminUser.style.display = 'none';
		}
	}
}




const miImagen = document.querySelectorAll("img.imgButton")
miImagen.forEach((imagen) => {
	imagen.addEventListener('click', () => {

		let title = imagen.alt
		let movies = JSON.parse(localStorage.getItem('movies'))
		let movieFound = movies.find((movie) => movie.nombre == title)
		let modalInfo = document.getElementById('modal-body')
		let modalContent = document.getElementById('bg-image')
		let buttonClose = document.createElement('button');
		let divBodyMovieDetail = document.createElement('div');
		let divInnerModalMovieDetail = document.createElement('div')
		let h1 = document.createElement('h1')
		let spanDescription = document.createElement('p')
		let videoLink = movieFound.urlVideo.substr(32)

		buttonClose.type = "button"
		buttonClose.className = "btn-close mt-3 me-3"
		buttonClose.setAttribute('data-bs-dismiss', 'modal')
		buttonClose.setAttribute('aria-label', 'Close')
		buttonClose.style.position = "absolute"
		buttonClose.style.top = 0;
		buttonClose.style.right = 0;
		buttonClose.style.backgroundColor = "white"
		buttonClose.style.zIndex = "3"
		buttonClose.id = "buttonClose"



		if (movieFound !== undefined) {
			modalInfo.className = "container-fluid d-flex align-items-center m-auto h-100 w-100 p-0"

			let video = `<iframe id="miVideo" src="https://www.youtube.com/embed/${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
			divBodyMovieDetail.className = "modal-title"
			video.id = "video"
			h1.textContent = `${title.toUpperCase()}`
			h1.style.textAlign = "center"
			// h1.style.margin = "1rem";
			h1.style.marginBottom = "1rem"
			h1.style.textDecoration = "underline"
			spanDescription.textContent = `${movieFound.descripcion}`
			spanDescription.id = "descripcion"
			spanDescription.className = "d-none d-md-block"
			divInnerModalMovieDetail.className = "container-fluid p-5"
			divInnerModalMovieDetail.style.backgroundColor = "rgba(0,0,0,0.7)"
			divInnerModalMovieDetail.style.height = "100%"
			divBodyMovieDetail.style.color = "White"
			divBodyMovieDetail.className = "border rounded"
			divBodyMovieDetail.id = "modal-detail"
			divBodyMovieDetail.style.height = "100%"
			divBodyMovieDetail.style.width = "100%"
			divBodyMovieDetail.style.backgroundSize = "cover"
			divBodyMovieDetail.style.backgroundImage = `url('./assets/img/${title}.png')`;
			divBodyMovieDetail.style.backgroundRepeat = "no-repeat"
			divInnerModalMovieDetail.innerHTML = buttonClose.outerHTML
			divInnerModalMovieDetail.append(h1)
			divInnerModalMovieDetail.append(spanDescription)
			divInnerModalMovieDetail.innerHTML += video
			divBodyMovieDetail.appendChild(divInnerModalMovieDetail)
			modalInfo.innerHTML = divBodyMovieDetail.outerHTML
			// modalContent.style.height = "80vh"
			// modalContent.style.width = "80vw"
			// modalContent.style.backgroundImage = `url('./assets/img/${title}.png')`;
			// modalContent.style.backgroundPosition = "50% center"
			// modalContent.style.backgroundRepeat = "no-repeat"
			// modalContent.style.backgroundSize = "cover"
			// modalContent.id = "modal-content"
			modalContent.appendChild(modalInfo)


			// let isDetallePeliculaActivo = detallePelicula ? true : false;

			// Escuchar el evento hidden.bs.modal del modal
			document.getElementById('detallePelicula').addEventListener('hidden.bs.modal', function () {
				// Obtener el elemento de video
				let videoElement = document.getElementById('miVideo');
				// Verificar si el elemento de video existe
				if (videoElement) {
					// Eliminar el elemento de video del DOM
					videoElement.parentNode.removeChild(videoElement);
				}
			});
		}
	})
	imagen.setAttribute('data-bs-toggle', 'modal')
	imagen.setAttribute('data-bs-target', '#detallePelicula')
})

const adminHandler = () => {
	if (window.location.href.includes('index')) {
		window.location.href = './pages/panel-admin/index.html';
	}
	if (
		window.location.href.includes('contacto') ||
		window.location.href.includes('404') ||
		window.location.href.includes('acercade')
	) {
		window.location.href = './panel-admin/index.html';
	}
};

const to404 = () => {
	if (window.location.href.includes('index')) {
		window.location.href = './pages/404.html';
	}
	if (
		window.location.href.includes('contacto') ||
		window.location.href.includes('acercade')
	) {
		window.location.href = './404.html';
	}
	if (
		window.location.href.includes('admin') ||
		window.location.href.includes('panel-admin')
	) {
		window.location.href = '../404.html';
	}
};
