// Obtén el modal
let modal = document.getElementById("modalPelicula");

// Obtén el botón que abre el modal
let btn = document.getElementById("btnModal");

// Obtén el elemento <span> que cierra el modal
let span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abre el modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
