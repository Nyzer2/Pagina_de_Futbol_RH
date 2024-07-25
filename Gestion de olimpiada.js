// Datos de ejemplo para los partidos
const matchesData = {
    quarterfinals: [
        { id: 1, team1: "Equipo A", team2: "Equipo B", date: "2024-08-10", time: "15:00" },
        { id: 2, team1: "Equipo C", team2: "Equipo D", date: "2024-08-11", time: "16:30" }
    ],
    semifinals: [
        { id: 3, team1: "Ganador QF1", team2: "Ganador QF2", date: "2024-08-15", time: "18:00" },
        { id: 4, team1: "Ganador QF3", team2: "Ganador QF4", date: "2024-08-16", time: "19:30" }
    ],
    final: [
        { id: 5, team1: "Ganador SF1", team2: "Ganador SF2", date: "2024-08-20", time: "20:00" }
    ]
};

// Función para mostrar los partidos de la ronda seleccionada
function showMatches(round) {
    const matchesContainer = document.getElementById("matches-container");
    let html = "";

    if (matchesData.hasOwnProperty(round)) {
        matchesData[round].forEach(match => {
            html += `
                <div class="match">
                    <p>${match.team1} vs ${match.team2}</p>
                    <p>Fecha: ${match.date}</p>
                    <p>Hora: ${match.time}</p>
                </div>
            `;
        });
    } else {
        html = "<p>No hay partidos disponibles para esta ronda.</p>";
    }

    matchesContainer.innerHTML = html;
}
