/* $('#obtener-json').on('click', function () {
    $.getJSON('/Json/tabla_datos.json', function (data) {
        const $tabla = $('#tabla-datos');
        $tabla.empty(); // Limpiar la tabla antes de insertar nuevos datos
        $.each(data, function (index, item) {
            const fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.nombre}</td>
                    <td>${item.apellido}</td>
                    <td>${item.pais}</td>
                    <td><img src="/Json${item.imagen}" alt="Bandera de ${item.pais}" class="img-fluid"></td>
                </tr>
            `;
            $tabla.append(fila);
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al cargar el JSON:', textStatus, errorThrown); // Depura errores
    });
});
 */

$('#obtener-json').on('click', function () {
    $.getJSON('https://67eebf24c11d5ff4bf7ac7f5.mockapi.io/api/v1/users', function (data) {
        const $tabla = $('#tabla-datos');
        $tabla.empty(); // Limpiar la tabla antes de insertar nuevos datos
        $.each(data, function (index, item) {
            const fila = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.nombre || 'N/A'}</td>
                    <td>${item.apellido || 'N/A'}</td>
                    <td>${item.pais || 'N/A'}</td>
                    <td><img src="${item.imagen || '/estilos/default.png'}" alt="Imagen de ${item.nombre || 'usuario'}" class="img-fluid"></td>
                </tr>
            `;
            $tabla.append(fila);
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error al cargar los datos desde la API:', textStatus, errorThrown); // Depura errores
    });
});