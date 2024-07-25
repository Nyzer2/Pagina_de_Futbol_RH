document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar la plantilla completa al hacer clic en el botón
    var plantillaButton = document.getElementById('plantilla-button');
    plantillaButton.addEventListener('click', function() {
        // Mostrar o esconder a todos los jugadores suplentes
        var suplentes = document.querySelectorAll('.jugador.suplente');
        suplentes.forEach(function(suplente) {
            suplente.style.display = 'block'; // Cambiar a 'none' para esconder
        });
    });

    // Función para redirigir a la página web del equipo al hacer clic en el botón
    var paginaWebButton = document.getElementById('pagina-web-button');
    paginaWebButton.addEventListener('click', function() {
        // Reemplazar con la URL correcta de la página web del equipo
        window.location.href = 'https://www.ejemplo.com'; 
    });
});
