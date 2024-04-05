async function fetchDataAndLoadPage() {
  if (localStorage.getItem('usuarios') && localStorage.getItem('movies')) {
    console.log('Datos ya almacenados. Cargando la página completa...');
    // window.location.reload(); // Recargar la página
    return;
  }
  try {
    // Realizar la solicitud Fetch de usuarios y almacenar los datos en localStorage
    const usuariosResponse = await fetch('../assets/data/usuarios.JSON');
    const usuariosData = await usuariosResponse.json();
    localStorage.setItem('usuarios', JSON.stringify(usuariosData));

    // Realizar la solicitud Fetch de películas y almacenar los datos en localStorage
    const moviesResponse = await fetch('../assets/data/movies.JSON');
    const moviesData = await moviesResponse.json();
    localStorage.setItem('movies', JSON.stringify(moviesData));

    // Una vez que los datos se almacenan, cargar la página completa
    // Aquí puedes llamar a una función que cargue la página o hacer cualquier otra tarea que necesites.
    console.log('Datos almacenados en LocalStorage correctamente. Cargando la página completa...');
    window.location.reload(); // Recargar la página
  } catch (error) {
    console.error('Error al cargar los datos de archivos JSON o url y/o cargar la página:', error);
  }
}

// Llamar a la función fetchDataAndLoadPage para iniciar el proceso de obtención y almacenamiento de datos
fetchDataAndLoadPage();
