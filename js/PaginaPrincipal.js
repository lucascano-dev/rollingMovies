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

/* Carrusel de peliculas*/
const CarrouselSlide = document.querySelector('.CarrouselSlide');
const CarrouselImages = document.querySelectorAll('.CarrouselSlide img');

let counter = 0;
const size = CarrouselImages[0].clientWidth;

CarrouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

function Slide() {
	if (counter >= CarrouselImages.length - 1) {
		CarrouselSlide.style.transition = 'transform 0.4s ease-in-out';
		counter = 0;
	} else {
		counter++;
	}
	CarrouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
}

setInterval(Slide, 3000);
/* Carrusel de peliculas*/

/* slider de peliculas por categorias*/

document.addEventListener('DOMContentLoaded', function () {
	/*Carrusel numero 1 comedia*/
	const comedyRow = document.querySelector('.carousel-row.comedy');
	const rightArrow = document.querySelector('.right-arrow');
	const movies = Array.from(comedyRow.querySelectorAll('.movies'));
	const movieWidth = movies[0].offsetWidth;
	let currentIndex = 0;

	rightArrow.addEventListener('click', function () {
		const moviesLength = movies.length;
		const remainingMovies = moviesLength - currentIndex;
		const moviesToScroll = Math.min(5, remainingMovies);

		currentIndex += moviesToScroll;
		if (currentIndex >= moviesLength) {
			currentIndex = 0;
		}

		comedyRow.style.transform = `translateX(-${currentIndex * movieWidth}px)`;
	});

	/*Carrusel numero 1 comedia*/
	/*Carrusel numero 2 terror*/
	const terrorRow = document.querySelector('.carousel-row.terror');
	const terrorRightArrow = terrorRow.nextElementSibling;
	const terrorMovies = Array.from(terrorRow.querySelectorAll('.movies'));
	const terrorMovieWidth = terrorMovies[0].offsetWidth;
	let terrorCurrentIndex = 0;

	terrorRightArrow.addEventListener('click', function () {
		const terrorMoviesLength = terrorMovies.length;
		const terrorRemainingMovies = terrorMoviesLength - terrorCurrentIndex;
		const terrorMoviesToScroll = Math.min(5, terrorRemainingMovies);

		terrorCurrentIndex += terrorMoviesToScroll;
		if (terrorCurrentIndex >= terrorMoviesLength) {
			terrorCurrentIndex = 0;
		}

		terrorRow.style.transform = `translateX(-${
			terrorCurrentIndex * terrorMovieWidth
		}px)`;
	});
	/*Carrusel numero 2 terror*/

	/*Carrusel numero 3 ciencia ficcion*/
	const scifiRow = document.querySelector('.carousel-row.scifi');
	const scifiRightArrow = scifiRow.nextElementSibling;
	const scifiMovies = Array.from(scifiRow.querySelectorAll('.movies'));
	const scifiMovieWidth = scifiMovies[0].offsetWidth;
	let scifiCurrentIndex = 0;

	scifiRightArrow.addEventListener('click', function () {
		const scifiMoviesLength = scifiMovies.length;
		const scifiRemainingMovies = scifiMoviesLength - scifiCurrentIndex;
		const scifiMoviesToScroll = Math.min(5, scifiRemainingMovies);

		scifiCurrentIndex += scifiMoviesToScroll;
		if (scifiCurrentIndex >= scifiMoviesLength) {
			scifiCurrentIndex = 0;
		}

		scifiRow.style.transform = `translateX(-${
			scifiCurrentIndex * scifiMovieWidth
		}px)`;
	});
});
/*Carrusel numero 3 ciencia ficcion*/

/* slider de peliculas por categorias*/
