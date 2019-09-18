//Para Agregar filas, actualmente no se usa. Para desarrollo futuro
$('#irow').click(function(){
    if($('#row').val()){
        $('.addcolumntable tbody').append($(".addcolumntable tbody tr:last").clone());
        $('.addcolumntable tbody tr:last :checkbox').attr('checked',false);
        $('.addcolumntable tbody tr:last td:first').html($('#row').val());
    }else{alert('Enter Text');}
});


$(document).ready(function(){
  //Boton de Guardar deshabilitado y oculto hasta presionar boton  de añadir
   $("#GuardarAsistencia").attr("disabled", "disabled");
   $("#GuardarAsistencia").css("display", "none");

   //Cuando se presiona el boton de Editar Asistencia
    $('body').on('click', '.EditarAsistencia', function(){
      //alert($(this).attr('id'))
      var idEditarAsistencia = $(this).attr('id');
        //Habilitar y mostrar boton de guardar
        $("#GuardarAsistencia").attr("disabled", false);
        $("#GuardarAsistencia").css("display", "block");

        //Deshabilitar y ocultar boton de añadir
        $("#AnadirAsistencia").attr("disabled", "disabled");
        $("#AnadirAsistencia").css("display", "none");

       
        //Acceder a todos los checkbox de la tabla
        $('table [type="checkbox"]').each(function(i, chk) {         

            //Dentro de toda la tabla validar que se muestren solamente los chekbox de la columna seleccionada
            if ($(this).parents('li').hasClass(idEditarAsistencia)){
                $(this).parents('li').css("display", "block");
                $(this).parents('li').siblings('.noAsistencia').replaceWith("<div id='NewCheckbox'></div>");
            }
        });
    });


    //Cuando se presiona el boton de inasistencia
    $('body').on('click', '.EditarInasistencia', function () {
        //alert($(this).attr('id'))
        var idEditarInasistencia = $(this).attr('id');        
        $('#AddInasistencia').modal('show');
        $("#AsistenciaSeleccionada").val(idEditarInasistencia);
    }); 
});


//Presionar boton de guardar para que se cree la columna nueva
$('#icol').click(function(){
    if($('#col').val()){
      //Recorrer todos los tr de la tabla y en la tercera columna agregar el encabezado y los checkbox seleccionados.
       $('.addcolumntable').find('tr').each(function(){ 
        //Encabezado de la tabla que se agrega como columna que rota 45 grados, debe contener un nombre unico para identificarse entre las otras columnas.
           $(this).find('th').eq(1).after("<th class='rotate-45'><div><span>" + getDayOfWeek($('#col').val()) + "</span></div></th>");
            $(this).find('td').eq(1).after('<td class="row-body" style="padding:5px;">\
                      <li class="list-inline-item EditarAsistencia'+ $('#col').val() +'"">\
                        <div class="checkbox-custom checkbox-success">\
                          <input class="inputCheckboxes" type="checkbox" name="inputCheckboxes" checked />\
                          <label></label>\
                        </div>\
                      </li>\
                      <div id="NewCheckbox"></div>\
                    </td>'); 
       
        //Dejar fijo el ancho de la primera columna, especificamente la busqueda del filtro.
        $('#FiltroAlumno').css('width','350px');
      });

        //Habilitar y mostrar boton de guardar
        $("#GuardarAsistencia").attr("disabled", false);
        $("#GuardarAsistencia").css("display", "block");

        //Deshabilitar y ocultar boton de añadir
        $("#AnadirAsistencia").attr("disabled", "disabled");
        $("#AnadirAsistencia").css("display", "none");
    } else
    {
        alert('Ingresa la fecha para continuar');
    }

    //Modificar el primer valor por el boton de  editar y agregar el identificador unico de cada columna
    $('.addcolumntable tr td:eq(2)').replaceWith("<td class='row-body'>\
                                                  <button type='button' class='btn btn-icon btn-pure btn-primary EliminarAsistencia' id='EliminarAsistencia" + $('#col').val() + "'>\
                                                    <i class='icon fa-close red-600' aria-hidden='true' style='font-size: 15px;'>\
                                                    </i>\
                                                  </button></br>\
                                                  <button type='button' class='btn btn-icon btn-pure btn-primary EditarAsistencia' id='EditarAsistencia" + $('#col').val() + "'>\
                                                    <i class='icon fa-pencil-square-o green-600' aria-hidden='true' style='font-size: 15px;'>\
                                                    </i>\
                                                  </button>\
                                                </td>");
    
});

/*Modal que guarda los checkbox con las asistencias y agrega el icono de inasistencia*/
$('#GuardarAsistencia').click(function(){
    //Habilitar y mostrar boton de añadir 
    $("#AnadirAsistencia").attr("disabled", false);
    $("#AnadirAsistencia").css("display", "block");

    //Deshabilitar y ocultar boton de guardar
    $("#GuardarAsistencia").attr("disabled", "disabled");
    $("#GuardarAsistencia").css("display", "none");


    //Acceder a todos los checkbox de la tabla
    $('table [type="checkbox"]').each(function(i, chk) {
      if (chk.checked) {
        //Ocultar todos los checkbox que esten habilitados
        $(this).parents('li').css("display", "none");
      }
      else 
        {
          //Ocultar los checkbox no chequeados para agregar un icono de no asistencia
          $(this).parents('li').css("display", "none");
          $(this).parents('li').siblings('div#NewCheckbox').replaceWith("<button type='button' class='btn btn-icon btn-pure btn-primary noAsistencia EditarInasistencia' id='EditarInasistencia" + $('#col').val() + "'>\
                                                                                <i class='icon fa-times-circle EditarInasistencia" + $('#col').val() + " aria-hidden='true' style='color: #E62020;'></i>\
                                                                                </i>\
                                                                          </button>");
             
        }
    });

});


/*Modal que guarda las inasistencias*/
$('#GuardarInasistencia').click(function () {
    var AsistenciaSeleccionada =  $("#AsistenciaSeleccionada").val();

    $('table [type="button"]').each(function () {
        var id = $(this).attr("id");
        //Dentro de toda la tabla validar que se muestren solamente los chekbox de la columna seleccionada
        if (id == AsistenciaSeleccionada) {
            //var TipoAsistencia = $('#TipoAsistencia').val();
            var e = document.getElementById("TipoAsistencia");
            var TipoAsistencia = e.options[e.selectedIndex].value;

            if (TipoAsistencia) {
                var color = "#FAA700";
                if (TipoAsistencia == 'JUST') {
                    color = "#FAA700";
                }
                else
                    color = "#E62020";

                $(this).find('i').replaceWith("<i class='icon fa-times-circle EditarInasistencia" + $('#col').val() + " aria-hidden='true' style='color: " + color +";'></i>");
            } else {
                alert('Ingresa el tipo de asistencia para continuar');
            }
            
        }
    });   
});

$("#TblAsistencia").on("click", ".EliminarAsistencia", function () {
       var iIndex = $(this).closest("td").prevAll("td").length;
        if (iIndex != 0 && iIndex != 1)
        {
            $(this).parents("#TblAsistencia").find("tr").each(function () {
                $(this).find("td:eq(" + iIndex + ")").remove();
                $(this).find("th:eq(" + iIndex + ")").remove();
            });
        }       
});


function getDayOfWeek(date) {
    //var fecha = new Date(date);
    var dateParts = date.split("/");
    var fecha = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 

    var dayOfWeek = new Date(fecha).getDay();
    var day = isNaN(dayOfWeek) ? null : ['Domingo', 'Lunes', 'Martes', 'Mierc.', 'Jueves', 'Viernes', 'Sabado'][dayOfWeek];
    var dateday = day + " " + fecha.getDate() + "/" + (fecha.getMonth() + 1);
    return dateday 
}





