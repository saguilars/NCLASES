//Para Agregar filas, actualmente no se usa. Para desarrollo futuro
$('#irow').click(function(){
    if($('#row').val()){
        $('.addcolumntable tbody').append($(".addcolumntable tbody tr:last").clone());
        $('.addcolumntable tbody tr:last :input').attr('checked',false);
        $('.addcolumntable tbody tr:last td:first').html($('#row').val());
    }else{alert('Enter Text');}
});


$(document).ready(function(){
  //Boton de Guardar deshabilitado y oculto hasta presionar boton  de añadir
   $("#GuardarActividad").attr("disabled", "disabled");
   $("#GuardarActividad").css("display", "none");

   //Cuando se presiona el boton de Editar Actividad
    $('body').on('click', '.EditarActividad', function(){
      //alert($(this).attr('id'))
      var idEditarActividad = $(this).attr('id');
        //Habilitar y mostrar boton de guardar
        $("#GuardarActividad").attr("disabled", false);
        $("#GuardarActividad").css("display", "block");

        //Deshabilitar y ocultar boton de añadir
        $("#AnadirActividad").attr("disabled", "disabled");
        $("#AnadirActividad").css("display", "none");

       
        //Acceder a todos los input de la tabla
        $('table [type="text"]').each(function(i, chk) {         

            //Dentro de toda la tabla validar que se muestren solamente los input de la columna seleccionada
            if ($(this).parents('li').hasClass(idEditarActividad)){
                $(this).parents('li').css("display", "block");
                $(this).parents('li').siblings('.noActividad').replaceWith("<div id='NuevaNotaAlumno'></div>");
            }
        });
    });


    //Cuando se presiona el boton de NotaIndividual
    $('body').on('click', '.EditarNotaIndividual', function () {
        //alert($(this).attr('id'))
        var idEditarNotaIndividual = $(this).attr('id');        
        $('#AddNotaIndividual').modal('show');
        $("#NotaSeleccionada").val(idEditarNotaIndividual);
    }); 
});


//Presionar boton de guardar para que se cree la columna nueva
$('#icol').click(function(){
    if ($('#InputNombreActividad').val()) {
        var i = 0;   
      //Recorrer todos los tr de la tabla y en la tercera columna agregar el encabezado y los input seleccionados.
        $('.addcolumntable').find('tr').each(function () {                 
        //Encabezado de la tabla que se agrega como columna que rota 45 grados, debe contener un nombre unico para identificarse entre las otras columnas.
           $(this).find('th').eq(1).after("<th class='rotate-45'><div><span>" + $('#InputNombreActividad').val() + "</span></div></th>");
            $(this).find('td').eq(1).after('<td class="row-body" style="padding:5px;">\
                      <li class="list-inline-item EditarActividad'+ $('#InputNombreActividad').val() +'"">\
                        <div class="text-center">\
                          <input type="text" name="inputNotaAlumno_'+ $('#InputNombreActividad').val() + i + '"" id="inputNotaAlumno_' + $('#InputNombreActividad').val() + i +'"" style="width:28px"/>\
                          <label></label>\
                        </div>\
                      </li>\
                      <div id="NuevaNotaAlumno"></div>\
                    </td>'); 
            i++;
        //Dejar fijo el ancho de la primera columna, especificamente la busqueda del filtro.
        $('#FiltroAlumno').css('width','350px');
      });

        //Habilitar y mostrar boton de guardar
        $("#GuardarActividad").attr("disabled", false);
        $("#GuardarActividad").css("display", "block");

        //Deshabilitar y ocultar boton de añadir
        $("#AnadirActividad").attr("disabled", "disabled");
        $("#AnadirActividad").css("display", "none");
    } else
    {
        alert('Ingresa el nombre de la actividad para continuar');
    }

    //Modificar el primer valor por el boton de  editar y agregar el identificador unico de cada columna
    $('.addcolumntable tr td:eq(2)').replaceWith("<td class='row-body'>\
                                                  <button type='button' class='btn btn-icon btn-pure btn-primary EliminarActividad' id='EliminarActividad" + $('#InputNombreActividad').val() + "'>\
                                                    <i class='icon fa-close red-600' aria-hidden='true' style='font-size: 15px;'>\
                                                    </i>\
                                                  </button></br>\
                                                  <button type='button' class='btn btn-icon btn-pure btn-primary EditarActividad' id='EditarActividad" + $('#InputNombreActividad').val() + "'>\
                                                    <i class='icon fa-pencil-square-o green-600' aria-hidden='true' style='font-size: 15px;'>\
                                                    </i>\
                                                  </button>\
                                                </td>");
    
});

/*Modal que guarda los input con las Actividads y agrega el icono de NotaIndividual*/
$('#GuardarActividad').click(function(){
    //Habilitar y mostrar boton de añadir 
    $("#AnadirActividad").attr("disabled", false);
    $("#AnadirActividad").css("display", "block");

    //Deshabilitar y ocultar boton de guardar
    $("#GuardarActividad").attr("disabled", "disabled");
    $("#GuardarActividad").css("display", "none");


    //Acceder a todos los input tipo text de la tabla
    var i = 0; 
    $('table [type="text"]').each(function(i, chk) {
        //Ocultar los input tipo text para agregar un label con la nota
        //$(this).parents('li').replaceWith("<li class='list-inline-item EditarActividad" + $('#InputNombreActividad').val() + "'>\
        //                <div class='text-center'>\
        //                  <input type='text' name='inputNotaAlumno_"+ $('#InputNombreActividad').val() + i + "' id='inputNotaAlumno_" + $('#InputNombreActividad').val() + i + "' style='width:28px'/>\
        //                  <label></label>\
        //                </div>\
        //              </li>");
        $(this).parents('li').css("display", "none");
        $(this).parents('li').siblings('div#NuevaNotaAlumno').replaceWith("<button type='button' class='btn btn-icon btn-pure btn-primary noActividad EditarNotaIndividual' id='EditarNotaIndividual_" + $('#InputNombreActividad').val() + i + "'>\
                                                                             <span class='font-size-18 blue-grey-700'>" + $(this).val() + "</span >\
                                                                          </button>");
        i++;
    });

});


/*Modal que guarda las NotaIndividual*/
$('#GuardarNotaIndividual').click(function () {
    var NotaSeleccionada =  $("#NotaSeleccionada").val();

    $('table [type="button"]').each(function () {
        var id = $(this).attr("id");
        //Dentro de toda la tabla validar que se muestren solamente los textbox de la columna seleccionada
        if (id == NotaSeleccionada) {
            var e = document.getElementById("InputNotaIndividual");
            var InputNotaIndividual = e.value;

            if (InputNotaIndividual) {
               
                $(this).find('span').replaceWith("<span class='font-size-18 blue-grey-700'>" + InputNotaIndividual + "</span >");
                //Agregar color a boton editado para dejar evidencia de la modificacion individual
                $(this).removeClass("btn-pure btn-primary").addClass("bg-green-300");

                //agregar cambio al valor del input para cuando exista edicion multiple
                var idInputnotalumno = $(this).prev().find('input').attr('id');
                var element = document.getElementById(idInputnotalumno);
                element.value = InputNotaIndividual;
                    //.replaceWith("<input type='text' name='inputNotaAlumno_PRUEBA" + $('#InputNombreActividad').val() + i + "' id='inputNotaAlumno_" + $('#InputNombreActividad').val() + i + "' style='width:28px'/>");
            } else {
                alert('Ingresa la nueva nota del alumno para continuar');
            }
            
        }
    });   
});

$("#TblActividad").on("click", ".EliminarActividad", function () {
       var iIndex = $(this).closest("td").prevAll("td").length;
        if (iIndex != 0 && iIndex != 1)
        {
            $(this).parents("#TblActividad").find("tr").each(function () {
                $(this).find("td:eq(" + iIndex + ")").remove();
                $(this).find("th:eq(" + iIndex + ")").remove();
            });
        }       
});






