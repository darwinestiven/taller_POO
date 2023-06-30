
var fechaInput = document.getElementById('fechana');
var fechaActual = new Date().toISOString().split('T')[0];
fechaInput.setAttribute('max', fechaActual);

var fechaInput1 = document.getElementById('fechaing');
var fechaActual1 = new Date().toISOString().split('T')[0];
fechaInput1.setAttribute('max', fechaActual1);

class Empleado{
    constructor(Nombre, Apellido, Sexo, FechaNac, FechaIngr, Salario, Email, Telefono, Direccion, Ciudad) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Sexo = Sexo;
        this.FechaNac = FechaNac;
        this.FechaIngr = FechaIngr;
        this.Salario = Salario;
        this.Email = Email;
        this.Telefono = Telefono;
        this.Direccion = Direccion;
        this.Ciudad = Ciudad;
    }
    toStringNombre() {
        return (this.Nombre = document.getElementById("nombre").value);
    }
    toStringApellido() {
        return (this.Apellido = document.getElementById("apellido").value);
    }
    toStringSexo() {
        const selectElement = document.getElementById("sexo");
        const selectedOption = selectElement.options[selectElement.selectedIndex];

        if (selectedOption) {
            this.Sexo = selectedOption.value;
            return this.Sexo;
        } else {
            return null;
        }
    }
    toStringFechaNac() {
        return (this.FechaNac = document.getElementById("fechana").value);
    }
      toStringFechaIng() {
        return (this.FechaIngr = document.getElementById("fechaing").value);
    }
      toStringSalario() {
        return (this.Salario = parseFloat(
          document.getElementById("salario").value
        ));
    }
    toStringEmail() {
        return (this.Nombre = document.getElementById("email").value);
    }
    toStringTelefono() {
        return (this.Nombre = document.getElementById("telefono").value);
    }
    toStringDireccion() {
        return (this.Nombre = document.getElementById("direccion").value);
    }
    toStringCiudad() {
        return (this.Nombre = document.getElementById("ciudad").value);
    }

    calcularEdad() {
        let fechaNacimiento = document.getElementById("fechana").value;
        let partesFecha = fechaNacimiento.split("-");
        let dia = parseInt(partesFecha[2], 10);
        let mes = parseInt(partesFecha[1], 10);
        let anio = parseInt(partesFecha[0], 10);
        
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth() + 1;
        let diaActual = fechaActual.getDate();
        
        let edad = anioActual - anio;
        
        if (mesActual < mes || (mesActual == mes && diaActual < dia)) {
            edad--;
        }
        
        return edad;
    }
    calcularTiempo() {
        let fechaIngreso= document.getElementById("fechaing").value;
        let partesFecha = fechaIngreso.split("-");
        let dia = parseInt(partesFecha[2], 10);
        let mes = parseInt(partesFecha[1], 10);
        let anio = parseInt(partesFecha[0], 10);
        
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth() + 1;
        let diaActual = fechaActual.getDate();
        
        let edad = anioActual - anio;
        
        if (mesActual < mes || (mesActual == mes && diaActual < dia)) {
            edad--;
        }
        return edad;
      }
}
let p = new Empleado();

function modificar(){

    let salario= document.getElementById("salarioNuevo").value;
    p.toStringSalario(salario);
    if (salario <= 0 || salario.length == 0) {
       alert("Datos Invalidos");
    } else {
        document.getElementById('salario').value = salario;
    }
}

function calcular_edad() {
    let Edad = p.calcularEdad();
   
    if(!Edad){
    alert("CAMPOS VACIOS O DATOS NO VALIDOS")
    }
    else{
        var input = document.getElementById("caja2");
        input.value = Edad;
    }
}

function calcular_tiempo() {
    let Tiempo = p.calcularTiempo();
    if(!Tiempo){
        alert("CAMPOS VACIOS O DATOS NO VALIDOS")
        }
        else{
            var input = document.getElementById("caja3");
            input.value = Tiempo;
        }

}
function calcular_prestaciones() {
     let tiempo= p.calcularTiempo()
     let salario= p.toStringSalario()
     
      
    if(!tiempo || !salario || salario<0){
        alert("CAMPOS VACIOS O DATOS NO VALIDOS")
    }
    else{
        let prestacion =((tiempo*salario)/12).toFixed(2);
        var input = document.getElementById("caja4");
        input.value = prestacion;
    }

    
  }


var seleccionarImagen = document.getElementById("seleccionarImagen");
var imagenPreview = document.getElementById("imagenPreview");

seleccionarImagen.addEventListener("click", function() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  
  input.addEventListener("change", function(event) {
    var archivo = event.target.files[0];
    var lector = new FileReader();

    lector.onload = function(e) {
      imagenPreview.src = e.target.result;
    };

    lector.readAsDataURL(archivo);
  });

  input.click();
});

var arreglo = [];

function agregarDatos() {
  // Obtiene los valores de los inputs
  var dato1 = document.getElementById("input1").value;
  var dato2 = document.getElementById("input2").value;
  var dato3 = document.getElementById("input3").value;


  // Agrega el objeto al arreglo
  arreglo.push(dato1, dato2, dato3);

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

  
  // Limpia los valores de los inputs
  if(dato1=="" || dato2=="" || dato3==""){
    alert("DATOS VACIOS")
  }
  else{
    alert("Los datos son: [" + arreglo.join(", ") + "]");
  }
  arreglo = [];
  
}

function calcularEdadIngreso() {
  
  var fechaIngreso = new Date(document.getElementById("fechaing").value);
  var fechaNacimiento = new Date(document.getElementById("fechana").value);

  if (!fechaIngreso || isNaN(fechaIngreso) || !fechaNacimiento || isNaN(fechaNacimiento)) {
    alert("FECHAS VACÍAS O INVÁLIDAS");
  } else {
  
    var edad = {};
    
    edad.years = fechaIngreso.getFullYear() - fechaNacimiento.getFullYear();
    // Cálculo de la diferencia en años
    
    var meses = fechaIngreso.getMonth() - fechaNacimiento.getMonth();
    // Cálculo de la diferencia en meses

    if (meses < 0) {
        edad.years--;
        meses += 12;
    }
    edad.months = meses;

    // Cálculo de la diferencia en días
    var dias = fechaIngreso.getDate() - fechaNacimiento.getDate();
    if (dias < 0) {
        var ultimoDiaMesAnterior = new Date(fechaIngreso.getFullYear(), fechaIngreso.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        edad.months--;
        if (edad.months < 0) {
            edad.months += 12;
            edad.years--;
        }
    }
    edad.days = dias;

    var resultado = "La persona tenía " + edad.years + " años, " + edad.months + " meses y " + edad.days + " días al ingresar a la empresa.";

    alert(resultado);
  }
} 
  
  
  

  

