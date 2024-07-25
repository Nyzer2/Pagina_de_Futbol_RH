document.addEventListener("DOMContentLoaded", function() {
    // Ordenar por defecto por la segunda columna (Posición)
    sortTable(1);
});

function sortTable(columnIndex) {
    const table = document.getElementById("team-table");
    const rows = Array.from(table.rows).slice(1); // Obtener todas las filas, excluyendo la primera (encabezados)
    const isAscending = table.rows[0].cells[columnIndex].getAttribute("data-order") === "asc";

    rows.sort(function(rowA, rowB) {
        let cellA = rowA.cells[columnIndex].textContent.trim();
        let cellB = rowB.cells[columnIndex].textContent.trim();

        // Convertir a número si es posible para la comparación numérica
        let numA = parseFloat(cellA);
        let numB = parseFloat(cellB);

        if (!isNaN(numA) && !isNaN(numB)) {
            cellA = numA;
            cellB = numB;
        }

        // Ordenar ascendente o descendente
        if (cellA < cellB) return isAscending ? -1 : 1;
        if (cellA > cellB) return isAscending ? 1 : -1;
        return 0;
    });

    // Reorganizar las filas en la tabla
    rows.forEach(function(row) {
        table.appendChild(row);
    });

    // Actualizar el atributo data-order para mostrar la dirección del orden
    table.rows[0].cells[columnIndex].setAttribute("data-order", isAscending ? "desc" : "asc");
}
