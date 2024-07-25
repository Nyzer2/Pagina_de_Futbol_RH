document.addEventListener('DOMContentLoaded', function() {
    // Datos simulados de equipos (podrían ser obtenidos de una API o base de datos)
    var equipos = [
        { id: 'equipo1', nombre: 'Equipo 1', logo: 'url_al_logo1' },
        { id: 'equipo2', nombre: 'Equipo 2', logo: 'url_al_logo2' },
        { id: 'equipo3', nombre: 'Equipo 3', logo: 'url_al_logo3' },
        { id: 'equipo4', nombre: 'Equipo 4', logo: 'url_al_logo4' },
        { id: 'equipo5', nombre: 'Equipo 5', logo: 'url_al_logo5' },
        { id: 'equipo6', nombre: 'Equipo 6', logo: 'url_al_logo6' },
        { id: 'equipo7', nombre: 'Equipo 7', logo: 'url_al_logo7' },
        { id: 'equipo8', nombre: 'Equipo 8', logo: 'url_al_logo8' }
    ];

    // Obtener el contenedor de equipos
    var equiposList = document.getElementById('equipos-list');

    // Función para crear el HTML de cada equipo y manejar el clic en el botón
    function mostrarEquipos() {
        equipos.forEach(function(equipo) {
            var divEquipo = document.createElement('div');
            divEquipo.className = 'equipo';
            divEquipo.id = equipo.id;

            var h2 = document.createElement('h2');
            h2.textContent = equipo.nombre;
            divEquipo.appendChild(h2);

            var divLogo = document.createElement('div');
            divLogo.className = 'logo';
            // Aquí podrías establecer el fondo del logo si tienes una URL o utilizar otro método
            divEquipo.appendChild(divLogo);

            var infoButton = document.createElement('button');
            infoButton.className = 'info-button';
            infoButton.textContent = 'Información del Equipo';
            infoButton.addEventListener('click', function() {
                window.location.href = equipo.id + '.html'; // Redirigir a la página del equipo
            });
            divEquipo.appendChild(infoButton);

            equiposList.appendChild(divEquipo);
        });
    }

    // Llamar a la función para mostrar los equipos al cargar la página
    mostrarEquipos();
});
