

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

const AdminLogged = true

window.onload = function() {
    const AdminUser = document.getElementById("AdminUser");
    if (AdminLogged) {
        AdminUser.style.display = "block" ;
    } else {
        AdminUser.style.display = "none" ;
    }
}