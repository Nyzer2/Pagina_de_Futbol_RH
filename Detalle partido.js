document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar la sección correspondiente
    function showSection(sectionName) {
        const sectionContent = document.getElementById("section-content");

        // Limpiar contenido previo
        sectionContent.innerHTML = "";

        // Determinar qué sección mostrar y actualizar estilos de botones
        switch (sectionName) {
            case "cronologia":
                sectionContent.innerHTML = `
                    <h2>Cronología del Partido</h2>
                    <p>Descripción cronológica detallada del desarrollo del partido.</p>
                    <p>Ejemplo: Minuto 10 - Gol del Equipo A</p>
                `;
                break;
            case "estadisticas":
                sectionContent.innerHTML = `
                    <h2>Estadísticas del Partido</h2>
                    <p>Estadísticas detalladas del partido como posesión, tiros al arco, tarjetas, etc.</p>
                    <p>Ejemplo: Posesión - Equipo A 60% - Equipo B 40%</p>
                `;
                break;
            case "calificaciones":
                sectionContent.innerHTML = `
                    <h2>Calificaciones de los Jugadores</h2>
                    <p>Calificaciones individuales de los jugadores basadas en su desempeño en el partido.</p>
                    <p>Ejemplo: Juan Pérez - 8.5, José Gómez - 7.9</p>
                `;
                break;
            case "probabilidades":
                sectionContent.innerHTML = `
                    <h2>Probabilidades del Partido</h2>
                    <p>Análisis de probabilidades de resultado del partido basado en estadísticas previas.</p>
                    <p>Ejemplo: Probabilidad de victoria - Equipo A 60%, Empate 20%, Equipo B 20%</p>
                `;
                break;
            default:
                sectionContent.innerHTML = "<p>Sección no encontrada.</p>";
        }

        // Actualizar estilos de los botones
        const buttons = document.querySelectorAll(".section-button");
        buttons.forEach(button => {
            if (button.getAttribute("data-section") === sectionName) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    }

    // Mostrar la primera sección por defecto al cargar la página
    showSection("cronologia");
});
