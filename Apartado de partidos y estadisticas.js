document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos importantes
    const matchDateElement = document.querySelector(".match-date");
    const matchInfoContainer = document.querySelector(".match-info");
    
    // Simular datos del próximo partido
    const proximoPartido = {
        equipoA: "Equipo A",
        equipoB: "Equipo B",
        fecha: "22/07/2024"
    };

    // Mostrar la información del próximo partido
    showNextMatch(proximoPartido);

    // Función para mostrar la información del próximo partido
    function showNextMatch(partido) {
        const equipoA = partido.equipoA;
        const equipoB = partido.equipoB;
        const fecha = partido.fecha;

        matchInfoContainer.innerHTML = `
            <div class="teams">
                <div class="team">
                    <div class="circle"></div>
                    <p>${equipoA}</p>
                </div>
                <p class="vs">VS</p>
                <div class="team">
                    <div class="circle"></div>
                    <p>${equipoB}</p>
                </div>
            </div>
            <p class="match-date">Fecha: ${fecha}</p>
        `;
    }

    // Event listeners para los botones y enlaces
    // No es necesario añadir lógica extra en este caso, pero aquí puedes manejar eventos de ser necesario.
});
