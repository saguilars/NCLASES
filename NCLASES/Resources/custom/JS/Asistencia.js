﻿//Para Agregar filas, actualmente no se usa. Para desarrollo futuro
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

    if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
});


//Presionar boton de guardar para que se cree la columna nueva
$('#icol').click(function(){
    if($('#col').val()){
      //Recorrer todos los tr de la tabla y en la tercera columna agregar el encabezado y los checkbox seleccionados.
       $('.addcolumntable').find('tr').each(function(){ 
        //Encabezado de la tabla que se agrega como columna que rota 45 grados, debe contener un nombre unico para identificarse entre las otras columnas.
        $(this).find('th').eq(1).after("<th class='rotate-45'><div><span><i class='icon fa-calendar' aria-hidden='true'></i>" + $('#col').val() + "</span></div></th>");
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
        $('#FiltroAlumno').css('width','400px');
      });

        //Habilitar y mostrar boton de guardar
        $("#GuardarAsistencia").attr("disabled", false);
        $("#GuardarAsistencia").css("display", "block");

        //Deshabilitar y ocultar boton de añadir
        $("#AnadirAsistencia").attr("disabled", "disabled");
        $("#AnadirAsistencia").css("display", "none");
    }else{alert('Ingresa la fecha para continuar');}

    //Modificar el primer valor por el boton de  editar y agregar el identificador unico de cada columna
    $('.addcolumntable tr td:eq(2)').replaceWith("<td class='row-body'>\
                                                  <button type='button' class='btn btn-icon btn-pure btn-primary EditarAsistencia' id='EditarAsistencia" + $('#col').val() + "'>\
                                                    <i class='icon fa-pencil-square-o green-600' aria-hidden='true' style='font-size: 20px;'>\
                                                    </i>\
                                                  </button>\
                                                </td>");
    
});


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
          $(this).parents('li').siblings('div#NewCheckbox').replaceWith("<i class='icon fa-times-circle noAsistencia EditarAsistencia" + $('#col').val() + "' aria-hidden='true' style='color:#E62020;'></i>");
        }
    });

});





