
    var MODIFICAR0 = document.getElementById("MODIFICAR0");
    var imagen = document.getElementById("imagen");

MODIFICAR0.addEventListener("click", function() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    
    input.addEventListener("change", function(event) {
        var archivo = event.target.files[0];
        var lector = new FileReader();

        lector.onload = function(e) {
        imagen.src = e.target.result;
        };

        lector.readAsDataURL(archivo);
    });

    input.click();
});
    