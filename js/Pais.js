$(document).ready(function(){
    tablaPaises = $("#tablaPaises").DataTable({
        "columnDefs":[{
         "targets": -1,
         "data":null,
         "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"  
        }],
         
         //Para cambiar el lenguaje a español
     "language": {
             "lengthMenu": "Mostrar _MENU_ Registros",
             "zeroRecords": "No se encontraron resultados",
             "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
             "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
             "infoFiltered": "(filtrado de un total de _MAX_ registros)",
             "sSearch": "Buscar:",
             "oPaginate": {
                 "sFirst": "Primero",
                 "sLast":"Último",
                 "sNext":"Siguiente",
                 "sPrevious": "Anterior"
              },
              "sProcessing":"Procesando...",
         }
     });


    
    
$(document).on("click","#btnNuevo", function(){
    $("#formPaises").trigger("reset");
    $(".modal-header").css("background-color", "#1cc88a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nuevo Pais");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});

$(document).on("click","#logout", function(){
    $("#formPaises").trigger("reset");
    $(".modal-header").css("background-color", "#FBC02D");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Listo(a) para salir?");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});


    
var fila; //capturar la fila para editar o borrar el registro
    
//botón EDITAR    
$(document).on("click", ".btnEditar", function(){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    nombre = fila.find('td:eq(1)').text();
    capital = fila.find('td:eq(2)').text();
    moneda = fila.find('td:eq(3)').text();
    idioma = fila.find('td:eq(4)').text();
    telefono = fila.find('td:eq(5)').text();
    
    $("#nombre").val(nombre);
    $("#capital").val(capital);
    $("#moneda").val(moneda);
    $("#idioma").val(idioma);
    $("#telefono").val(telefono);
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#4e73df");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Pais");            
    $("#crud").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+id+"?");
   
});
    
$("#formPaises").submit(function(e){
    e.preventDefault();    
    nombre = $.trim($("#nombre").val());
    capital = $.trim($("#capital").val());
    moneda = $.trim($("#moneda").val());
    idioma = $.trim($("#idioma").val());
    telefono = $.trim($("#telefono").val());    

    $("#crud").modal("hide");    
    
});    
    
});