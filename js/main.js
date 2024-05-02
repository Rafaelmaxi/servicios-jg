document.addEventListener("DOMContentLoaded", function() {
    var navCheck = document.getElementById('nav_check');
    var body = document.body;

    // Agrega evento click al botón de menú
    navCheck.addEventListener('click', function() {
        if (navCheck.checked) {
            // Si el menú está abierto, bloquea el desplazamiento de la página
            body.style.overflow = 'hidden';
        } else {
            // Si el menú está cerrado, permite el desplazamiento de la página
            body.style.overflow = 'auto';
        }
    });
});
