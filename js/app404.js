//Menu Desplegable
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
//Menu Desplegable



const modal = document.getElementById(`miModal`);

const btn = document.getElementById(`miBoton`);

const span = document.getElementsByClassName(`cerrar`)[0];

btn.onclick = function () {

    modal.style.display = `block`;
}

span.onclick = function () {
    modal.style.display = `none`;
}

window.onclick = function (event) {

    if (event.target == modal) {

        modal.style.display = `none`;
    }
}


let informeEnviado = document.getElementById("botonEnviar");
informeEnviado.addEventListener(`click`, function () {
    Swal.fire({
        title: "Buen trabajo",
        text: "Informe enviado",
        icon: "success"
    });
    modal.style.display = `none`;
    document.getElementById(`areaUno`).value = ``;
    document.getElementById(`tituloContenido`).value = ``;


}
);


let volver = document.getElementById("volverInicio");
volver.addEventListener(`click`, function () {

    window.location.href = `../index.html`;

})



