$(document).ready(function(){
    tablaCiudades = $("#tablaCiudades").DataTable({
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
    $("#formCiudades").trigger("reset");
    $(".modal-header").css("background-color", "#1cc88a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Nueva Cuidad");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});

$(document).on("click","#logout", function(){
    $("#formCiudades").trigger("reset");
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
    departamento = fila.find('td:eq(2)').text();
    codigo = parseInt(fila.find('td:eq(3)').text());
    
    $("#nombre").val(nombre);
    $("#departamento").val(departamento);
    $("#codigo").val(codigo);
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#4e73df");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Cuidad");            
    $("#crud").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    var respuesta = confirm("¿Está seguro de eliminar el registro: "+id+"?");
   
});
    
$("#formCiudades").submit(function(e){
    e.preventDefault();    
    nombre = $.trim($("#nombre").val());
    departamento = $.trim($("#departamento").val());
    codigo = $.trim($("#codigo").val());    

    $("#crud").modal("hide");    
    
});    
    
});