
//Santiago Aguilar. 20-03-2018 Aplicar DataTable a todas las tablas, inlcuyendo el responsive.

$("table.DataTable").DataTable({

    select: true,
    "paging": true,
    "searching": true,
    responsive: true,
    language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
    // indigo, cyan, blue, green, blue-grey
    fnHeaderCallback: function (nHead, aData, iStart, iEnd, aiDisplay) {
        $(nHead).addClass("bg-blue-800").find("th").addClass("white");
    },
    fnFooterCallback: function (nFoot, aData, iStart, iEnd, aiDisplay) {
        $(nFoot).addClass("bg-grey-300 ");
    }
});


